import React from "react";
import { useSelector } from "react-redux";
import {Link, useRouteMatch } from "react-router-dom";
import "./EmojyDetails.css";


export default function EmojyDetails() {
  const { url, params } = useRouteMatch();
  const state = useSelector(
    (state) =>
      state.fetchData.filter((emojy) => emojy.character === params.character)[0]
  );
  console.log(state)
  return (
    <div className="mainDiv">
      {state ?<div className="details">

        <p>Character: {state.character}</p>
        <p>UnicodeName: {state.unicodeName}</p>
        <p>CodePoint: {state.codePoint}</p>
        Go to all emojys of group: <Link to={`/emojy/groub/${state.group}`}> {state.group}</Link>
        



      </div> :"c"}
    </div>
  );
}
