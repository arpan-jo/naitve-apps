import * as Type from './type';
const initialSate = {
  user: {},
};

const reducer = (state = initialSate, action) => {
  switch (action.type) {
    case Type.UPDATE_USER:
      return {...state, user: action.payload};
    case Type.REMOVE_USER:
      return {user: action.payload};
    default:
      return state;
  }
};

export {reducer};
