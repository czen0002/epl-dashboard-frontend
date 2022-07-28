import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import MatchBoard from '../components/MatchBoard';
import "./MatchPage.css";

export default function MatchPage() {

  const location = useLocation();
  const match = location.state.match;
  const month = location.state.month;
  const season = location.state.season;
  const navigate = useNavigate();
  const backToResultPage = () => {
    navigate("/results" , {
      state: {
        team: match['homeTeam'],
        month: month,
        season: season
      }
    });
  };

  return (
    <Container>
      <br></br>
      <div id='matchTitle'>
        <div>
          <Image src={`/images/${match['homeTeam']}.png`} fluid />
          <p className='my-auto text-light'>{match['homeTeam']}</p>
        </div>
        <div id='matchCenter' style={{backgroundColor: '#565656', borderRadius: '6px'}}>
          <div id='rowOne'>{match['date']}</div>
          <div id='rowTwo'><p>Wembley Stadium</p></div>
          <div id='rowThree'><p>Referee</p></div>
          <div id="matchScore">
            <div>{match['fullTimeHomeTeamGoals']}</div>
            <div>FT</div>
            <div>{match['fullTimeAwayTeamGoals']}</div>
          </div>
        </div>  
        <div>
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
