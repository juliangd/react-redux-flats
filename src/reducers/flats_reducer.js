
const flatsReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }

  if (action.type === 'SET_FLATS') {
    return action.payload;
  } else {
    return state;
  }
};

// swirtch(action.type) {
//   case 'SET_FLATS':
//   return action.payload;
//   default:
//   return state:
// }

export default flatsReducer;
