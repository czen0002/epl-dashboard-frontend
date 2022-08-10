import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import MatchBoard from '../components/MatchBoard';
import "./MatchPage.scss";
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
      <div className='matchTitle'>
        <div className='matchLogo'>
          <Image src={`/images/${match['homeTeam']}.png`} fluid />
          <p className='my-auto text-light'>{match['homeTeam']}</p>
        </div>
        <div className='matchCenter'>
          <div className="fs-5 dateRow">{match['date']}</div>
          <div className="fs-5 stadiumRow">{stadiums[match['homeTeam']]}</div>
          <div className="fs-5 refereeRow">{match['referee']}</div>
          <div className="matchScore">
            <div className="fs-5 matchScoreCol">{match['fullTimeHomeTeamGoals']}</div>
            <div className="fs-5 matchScoreCol">FT</div>
            <div className="fs-5 matchScoreCol">{match['fullTimeAwayTeamGoals']}</div>
          </div>
        </div>  
        <div className='matchLogo'>
          <Image src={`/images/${match['awayTeam']}.png`} fluid />
          <p className='my-auto text-light'>{match['awayTeam']}</p>
        </div>
      </div>
      <hr style={{height: '4px', backgroundColor: '#abbcde'}}></hr>
      <MatchBoard match={match} />
      <br></br>
      <Button onClick={backToResultPage}>Back</Button>
    </Container>
  )
}
