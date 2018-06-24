/**
 * État initial pour le state de l'application
 */
const initialState = {
  message: [],
  input: '',
  userName: 'Anonymous',
  modify: false,

};

const ADD_MESSAGE = 'ADD_MESSAGE';
const MONITOR_INPUT = 'MONITOR_INPUT';
const CHANGE_USER = 'CHANGE_USER';
const OPEN_BOX = 'OPEN_BOX';
const CLOSE_BOX = 'CLOSE_BOX';
/**
 * Reducer de l'application
 */
const reducer = (currentState = initialState, action = {}) => {
  switch (action.type) {
    case MONITOR_INPUT:
      return {
        ...currentState,
        input: action.text,
      };

    case ADD_MESSAGE:
      return {
        ...currentState,
        message: [
          ...currentState.message,
          currentState.input,
        ],
        input: '',
      };

    case CHANGE_USER:
      return {
        ...currentState,
        userName: action.value,
      };

    case OPEN_BOX:
      return {
        ...currentState,
        modify: true,
      };

    case CLOSE_BOX:
      return {
        ...currentState,
        modify: false,
      };

    default: return currentState;
  }
};

export const addMessage = () => ({
  type: ADD_MESSAGE,
});

export const monitorInput = text => ({
  type: MONITOR_INPUT,
  text,
});

export default reducer;
