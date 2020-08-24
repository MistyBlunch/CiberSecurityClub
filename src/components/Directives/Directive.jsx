import React from 'react';
import './Directive.css'

export default function Directive(props) {
  return (
  <div className="Directive-post-div">
    <div className="Directive-post-img">
      <img src={require("" + props.image)} alt=""/>
    </div>
    <div className="Directive-post">
      <div className="Directive-post-info">
        <h2 className="Directive-post-title">{props.name}</h2>
        <p className="Directive-post-text">
          {props.content}
        </p>
        <p className="Directive-post-date">
          {props.schedule}
        </p>
      </div>
    </div>
  </div>
  );
}