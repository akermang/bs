const initialState = {
  boards: [],
  selectedBoard: null,
  options: {
    brand: null,
    model: null,
    type: null,
    measures: {
      length: null,
      widht: null,
      thickness: null,
      volume: null
    },
    finSetUp: null,
    tail: null,
    construction: null
  },
  userBoards: null,
  newBoard: null
};

export default initialState;
