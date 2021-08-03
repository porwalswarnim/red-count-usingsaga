const initialState = {
  age: 20,
  history: [],
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  console.log(state)
  switch (action.type) {
    case "AGE_UP_ASYNC":
      return {
        ...state,
        age: state.age + action.value,
        history: state.history.concat({
          id: Math.random(),
          age: state.age + action.value,
        }),
      };
      break;

    case "AGE_DOWN":
      return {
        ...state,
        age: state.age - action.value,
        history: state.history.concat({
          id: Math.random(),
          age: state.age - action.value,
        }),
      };
      break;

    case "DEL_ITEM":
      return {
        ...state,
        history: state.history.filter((el) => el.id !== action.key),
      };
      break;
  }
  return newState;
};

export default reducer;
