const initialState = {
    newValue: 'sAtualizado via Redux!'
  };
  
  export const clickReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CLICK_UPDATE_VALUE':
        return {
          ...state,
          newValue: action.newValue
        };
      case 'GENERATE_LIST_REPOSITORY':
        return {
          ...state,
          list: action.payload
        }
      default:
        return state;
    }
  };