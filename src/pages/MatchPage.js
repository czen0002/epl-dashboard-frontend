import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import MatchBoard from '../components/MatchBoard';
import "./MatchPage.css";
import { stadiums } from '../constants';

export default function MatchPage() {

  const location = useLocation();
  const match = location.state.match;
  const team = location.state.team;
  const month = location.state.month;
  const season = location.state.season;
  const navigate = useNavigate();
  const backToResultPage = () => {
    navigate("/results" , {
      state: {
        team: team,
        season: season,
        month: month
      }
    });
  };

  return (
    <Container>
      <br></br>
      <div id='matchTitle'>
        <div id='matchLogo'>
          <Image src={`/images/${match['homeTeam']}.png`} fluid />
          <p className='my-auto text-light'>{match['homeTeam']}</p>
        </div>
        <div id='matchCenter'>
          <div id='rowOne' className="fs-5">{match['date']}</div>
          <div id='rowTwo' className="fs-5">{stadiums[match['homeTeam']]}</div>
          <div id='rowThree' className="fs-5">{match['referee']}</div>
          <div id="matchScore">
            <div id='matchScoreCol' className="fs-5">{match['fullTimeHomeTeamGoals']}</div>
            <div id='matchScoreCol' className="fs-5">FT</div>
            <div id='matchScoreCol' className="fs-5">{match['fullTimeAwayTeamGoals']}</div>
          </div>
        </div>  
        <div id='matchLogo'>
          <Image src={`/images/${match['awayTeam']}.png`} fluid />
          <p className='my-auto text-light'>{match['awayTeam']}</p>
        </div>
      </div>
      <hr style={{height: '4px', color: '#abbcde'}}></hr>
      <MatchBoard match={match} />
      <br></br>
      <Button onClick={backToResultPage}>Back</Button>
    </Container>
  )
}
