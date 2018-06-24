/**
 * État initial pour le state de l'application
 */
const initialState = {
  message: '',
  input: '',

};

const ADD_MESSAGE = 'ADD_MESSAGE';
const MONITOR_INPUT = 'MONITOR_INPUT';
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
