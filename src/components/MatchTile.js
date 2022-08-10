import React from 'react';
import { Col, Row, Image} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./MatchTile.scss";

export default function MatchTile({ index, match, team, month, season }) {

  const navigate = useNavigate();
  const navigateMatchPage = () => {
    navigate("/match", {
      state: {
        match: match,
        team: team,
        month: month,
        season: season
      }
    });
  };

  return (
      <li key={index} >
        <div 
        className="jumbotron jumbotron-fluid"
        onClick={navigateMatchPage}
        >
          <div className="container">
            <Row>
              <Col xs={12} sm={3} className='my-auto text-light homeTeam'>
                {match['homeTeam']}
              </Col>
              <Col xs={12} sm={2} className>
                <Image src={`/images/${match['homeTeam']}.png`} fluid />
              </Col>
              <Col xs={12} sm={2} className='my-auto text-center text-light score'>
                {match['fullTimeHomeTeamGoals']} - {match['fullTimeAwayTeamGoals']}
              </Col>
              <Col xs={12} sm={2}>
                <Image src={`/images/${match['awayTeam']}.png`} fluid />
              </Col>
              <Col xs={12} sm={3} className='my-auto text-light awayTeam'>
                {match['awayTeam']}
              </Col>
            </Row>
          </div>
        </div>
        <br></br>
      </li>
  )
}
