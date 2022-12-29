const INIT_STATE = {
  carts: [],
};

export const cartReducers = (state = INIT_STATE, action) => {

  switch (action.type) {
    case "ADD_CART":
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    // eslint-disable-next-line no-fallthrough
    case "DELETE_CART":
      const data = state.carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: data,
      };

    default:
      return state;
  }
};
