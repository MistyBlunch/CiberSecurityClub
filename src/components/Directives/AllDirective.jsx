import React from 'react';
import Directive from './Directive'
import './AllDirective.css'

import directives from './directive.json'

export default class AllDirective extends React.Component {
  render() {
    const path = './images/';
  
    return (
      <div className="container directives">
        <div className="Directives">
          {directives.map(e => 
            <div key={e.id} className="Directive-item">
            <Directive name={e.name} image={path + e.image} content={e.content} schedule={e.schedule}/>
            </div>)
          }
        </div>
      </div>
    );
  }

}