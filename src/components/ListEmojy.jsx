import React, { useEffect } from "react";
import { fetchData, deleteItem } from "../actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import "./ListEmojy.css";

function ListEmojy() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  console.log(state.fetchData);

  return (
    <div>
      {!state.fetchData
        ? ""
        : state.fetchData.map((i, index) => (
            <div className="emojy" key={index}>
              <Link to={`/emojy/${i.character}`}>{i.character}</Link>
            </div>
          ))}
    </div>
  );
}

export default ListEmojy;
