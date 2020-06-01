import React from 'react';
import './Directive.css'

export default function Directive(props) {
    return (
        <div>
            <div className="Directive-post-img">
                <img src={require("" + props.img)} alt=""/>
            </div>
            <div className="Directive-post">
                <div className="Directive-post-info">
                    <h2 className="Directive-post-title">{props.name}</h2>
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
        </div>
    );
}