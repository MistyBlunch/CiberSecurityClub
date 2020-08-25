import React from 'react'
import Team from './Team'
import '../../styles/Teams/AllTeam.css'

import teams from './team.json'

export default class AllTeam extends React.Component {
  render() {
  
    return (
      <section className="teams">
        <div className="container">
          <div className="teams-wrapper">
            {teams.map(e => 
              <div key={e.id} className="team-item">
              <Team name={e.name} image={e.image} content={e.content} schedule={e.schedule}/>
              </div>)
            }
          </div>
        </div>
      </section>
    );
  }

}