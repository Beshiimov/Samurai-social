const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_MESSAGE_VALUE = "UPDATE_MESSAGE_VALUE";

const initialState = {
  dialogs: [
    { id: 1, name: "Lilia" },
    { id: 2, name: "Jake" },
    { id: 3, name: "Aman" },
  ],
  messages: [
    { id: 1, message: "Zdarowa" },
    { id: 1, message: "Kak dela" },
    { id: 2, message: "Norm" },
    { id: 1, message: "Sam kak" },
    { id: 2, message: "Herowo" },
  ],
  newMessageValue: "",
};

const dialogsReducer = (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case SEND_MESSAGE:
      const newPost = {
        id: 6,
        message: newState.newMessageValue,
      };
      return {
        ...state,
        messages: [...state.messages, newPost],
        newMessageValue: "",
      };
    case UPDATE_MESSAGE_VALUE:
      return {
        ...state,
        newMessageValue: action.newText,
      };
    default:
      return state;
  }
};

export const sendMessage = () => ({ type: SEND_MESSAGE });
export const updateMessageValue = (newText) => ({
  type: UPDATE_MESSAGE_VALUE,
  newText,
});

export default dialogsReducer;
