import React, { useReducer, useEffect } from "react";
import axios from "axios";

// const initialState = {
//   loading: true,
//   error: "",
//   post: {},
// };

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.playload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: "something went wrong!",
        post: {},
      };
    default:
      return state;
  }
};

function DataFetching({ count }) {
  const [state, dispatch] = useReducer(reducer, count);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", playload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetching;
