import { createActions } from "reduxsauce";

export const INITIAL_STATE = {};

export const { Types, Creators } = createActions({
  requestProducts: ["id"],
  successRequestProucts: ["data"],
});

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SUCCESS_REQUEST_PROUCTS":
      return { ...state, ...action.data };
    default:
      return INITIAL_STATE;
  }
};

export default reducer;
