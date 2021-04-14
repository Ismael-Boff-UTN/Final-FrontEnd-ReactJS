import { types } from "../types/type";

const initialState = {
  checking: true,
  cart : [],
  error : null,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addArticleToCart:
        return {
          ...state,
          cart : [...state.cart, action.payload],
          checking: false,
        };
    default:
      return state;
  }
};