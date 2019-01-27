import { ActionTypes, Union } from "./messages.action";
import { MessageState } from "./app.state";

export const initialState: MessageState = {
  messages: []
};

export function messagesReducer(state = initialState, action: Union) {
  switch (action.type) {
    case ActionTypes.Add: {
      const copied = Array.from(state.messages);
      copied.push(action.payload.message);
      return { messages: copied };
    }
    case ActionTypes.Clear: {
      return { messages: [] };
    }
    default:
      return state;
  }
}
