// import {} from 'react-redux';

const initialState = {
  operators: null,
  loading: false,
};

const operatorReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_OPERATORS":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default operatorReducer;
