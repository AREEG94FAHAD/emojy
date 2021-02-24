import axios from "axios";

export const deleteItem = (codePoint) => {
    // console.log(codePoint)
  return {
    type: "DELETEITEM",
    payload: {
      codePoint:codePoint,
    },
  };
};

export const fetchData = () => {
  return (dispatch) => {
    axios
      .get(
        "https://emoji-api.com/emojis?access_key=18d65cb6603c367c77ecf32e2af603ef9d453942"
      )
      .then((emojy) => {
        // console.log(posts.data);

        dispatch({
          type: "FETCHDATA",
          payload:emojy.data,
        });
        
      });
  };
};
