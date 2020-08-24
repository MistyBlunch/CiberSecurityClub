import React from 'react';
import '../../styles/Teams/Team.css'

export default function Team(props) {
  return (
  <div className="team-post-div">
    <div className="team-post-img">
      <img src={require("" + props.image)} alt=""/>
    </div>
    <div className="team-post">
      <div className="team-post-info">
        <h2 className="team-post-title">{props.name}</h2>
        <p className="team-post-text">
          {props.content}
        </p>
        <p className="team-post-date">
          {props.schedule}
        </p>
      </div>
    </div>
  </div>
  );
}