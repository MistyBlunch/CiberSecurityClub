import React from 'react';
import Directive from './Directive'
import './AllDirective.css'

import directives from './directive.json'

export default function AllDirective() {
  const path = './img/';

  return (
    <div className="Directives">
        {directives.map(e => 
          <div key={e.id} className="Directive-item">
            <Directive name={e.name} img={path + e.img} mision={e.mision} vision={e.vision} schedule={e.schedule}/>
          </div>)
        }
    </div>
  );
}