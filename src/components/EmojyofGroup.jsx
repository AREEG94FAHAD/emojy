import React from 'react'
import { useSelector } from "react-redux";
import {useRouteMatch } from "react-router-dom";
import "./EmojyofGroup.css";



export default function EmojyofGroup() {
    const { url, params } = useRouteMatch();
    const state = useSelector(
        (state) =>
          state.fetchData.filter((emojy) => emojy.group === params.groupName)
      );
      console.log(state)
    return (
        <div>
            
      {state ?state.map(e=>{return<div className="emo">

        <p>Character: {e.character}</p>
        <p>{e.group}</p> 
        



      </div>}) :"c"}
        </div>
    )
}
