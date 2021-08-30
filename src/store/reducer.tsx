interface InitialState {
  visible: boolean;
  vary: any;
}

type ActionType =
  | { type: "CHANGE_VISIBLE"; payload: boolean }
  | { type: "CHANGE_CURRENT_LIST"; payload: any };

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
    case "CHANGE_CURRENT_LIST":
      return {
        ...state,
        vary: action.payload,
      };
    default:
      return state;
  }
}
