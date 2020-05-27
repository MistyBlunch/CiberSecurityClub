import React from 'react';
import Directive from './Directive'
import './AllDirective.css'

import directives from './directive.json'

function AllDirective() {
  return (
    <div className="Direct">
        <div className="Directive-item">
            <div className="Directive-post-img">
                <img src={require('./img/tmp.jpg')} alt=""/>
            </div>
            <Directive name={directives[0].name} mision={directives[0].mision} vision={directives[0].vision} schedule={directives[0].schedule}/>
        </div>
        <div className="Directive-item">
            <div className="Directive-post-img">
                <img src={require('./img/tmp.jpg')} alt=""/>
            </div>
            <Directive name={directives[1].name} mision={directives[1].mision} vision={directives[1].vision} schedule={directives[1].schedule}/>
        </div>
        <div className="Directive-item">
            <div className="Directive-post-img">
                <img src={require('./img/tmp.jpg')} alt=""/>
            </div>
            <Directive name={directives[2].name} mision={directives[2].mision} vision={directives[2].vision} schedule={directives[2].schedule}/>
        </div>
        <div className="Directive-item">
            <div className="Directive-post-img">
                <img src={require('./img/tmp.jpg')} alt=""/>
            </div>
            <Directive name={directives[3].name} mision={directives[3].mision} vision={directives[3].vision} schedule={directives[3].schedule}/>
        </div>
        <div className="Directive-item">
            <div className="Directive-post-img">
                <img src={require('./img/tmp.jpg')} alt=""/>
            </div>
            <Directive name={directives[4].name} mision={directives[4].mision} vision={directives[4].vision} schedule={directives[4].schedule}/>
        </div>
        <div className="Directive-item">
            <div className="Directive-post-img">
                <img src={require('./img/tmp.jpg')} alt=""/>
            </div>
            <Directive name={directives[5].name} mision={directives[5].mision} vision={directives[5].vision} schedule={directives[5].schedule}/>
        </div>
        <div className="Directive-item">
            <div className="Directive-post-img">
                <img src={require('./img/tmp.jpg')} alt=""/>
            </div>
            <Directive name={directives[6].name} mision={directives[6].mision} vision={directives[6].vision} schedule={directives[6].schedule}/>
        </div>
    </div>
  );
}

export default AllDirective;