interface InitialState {
  visible: boolean;
}

type ActionType =
  | { type: "CHANGE_VISIBLE"; payload: boolean };
export default function appReducer(
  state: InitialState,
  action: ActionType
): InitialState {
  switch (action.type) {
    case "CHANGE_VISIBLE":
      return {
        ...state,
        visible: action.payload,
      };
    default:
      return state;
  }
}
