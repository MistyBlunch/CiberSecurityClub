import React from 'react';
import './Directive.css'

function Directive(props) {
  return (
      /*
            <div className="Directive-post-img">
                <img src={require('./img/tmp.jpg')} alt=""/>
            </div>
            */
        <div className="Directive-post">
            <div className="Directive-post-info">
                <h1 className="Directive-post-title">{props.name}</h1>
                <p className="Directive-post-text">
                    Mision: {props.mision}
                </p>
                <p className="Directive-post-text">
                    Vision: {props.vision}
                </p>
                <p className="Directive-post-date">
                    {props.schedule}
                </p>
            </div>
        </div>
  );
}

export default Directive;