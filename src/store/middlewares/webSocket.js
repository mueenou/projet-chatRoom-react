
import io from 'socket.io-client';

const WEBSOCKET_CONNECT = 'WEBSOCKET_CONNECT';
const MESSAGE_SEND = 'MESSAGE_SEND';


const WebSocket = store => next => (action) => {
  const socket = io('http://localhost:3000');
  switch (action.type) {
    case WEBSOCKET_CONNECT: {
      socket.on('chat message', (message) => {
        store.dispatch({
          type: 'WEBSOCKET_RECEIVE',
          message,
        });
      });
      break;
    }
    case MESSAGE_SEND: {
      console.log('send ok');
      const { input, userName } = store.getState();
      console.log(input);
      socket.emit('chat message', { input, userName });
      break;
    }
    default:
      next(action);
  }
};

export default WebSocket;
