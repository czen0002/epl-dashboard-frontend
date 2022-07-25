import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';

export default function MatchTile({ index, match }) {

  return (
      <li key={index} >
        <div 
        className="jumbotron jumbotron-fluid" 
        style={{backgroundColor: '#565656', borderRadius: '6px'}}
        >
          <div className="container">
            <Row>
              <Col xs={12} sm={3} className='my-auto text-light' id='homeTeam'>
                {match['homeTeam']}
              </Col>
              <Col xs={12} sm={2} className>
                <Image src={`/images/${match['homeTeam']}.png`} fluid id='teamLogo'/>
              </Col>
              <Col xs={12} sm={2} className='my-auto text-center text-light' id='score'>
                {match['fullTimeHomeTeamGoals']} - {match['fullTimeAwayTeamGoals']}
              </Col>
              <Col xs={12} sm={2}>
                <Image src={`/images/${match['awayTeam']}.png`} fluid id='teamLogo'/>
              </Col>
              <Col xs={12} sm={3} className='my-auto text-light' id='awayTeam'>
                {match['awayTeam']}
              </Col>
            </Row>
          </div>
        </div>
        <br></br>
      </li>
  )
}
