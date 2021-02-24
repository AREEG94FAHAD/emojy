const deleteItem = (state = [], action) => {
  
  switch (action.type) {
    case "DELETEITEM":
      console.log(state)
      return 
    default:
      return state;
  }
};
export default deleteItem;
