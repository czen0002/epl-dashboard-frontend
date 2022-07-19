import React, { useEffect, useState } from 'react'
import { Container, DropdownButton, Dropdown } from 'react-bootstrap'

export default function ResultsPage() {

  const [team, setTeam] = useState('');
  const [season, setSeason] = useState('2021-22');
  const [month, setMonth] = useState('');
  const [teams, setTeams] = useState([]);
  const [matches, setMatches] = useState([]);

  const seasons = ['2021-22', '2020-21', '2019-20', '2018-19', '2017-18', '2016-17', '2015-16'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  useEffect(() => {
    const fetchMatchesBySeason = async () => {
      try {
        const response = await fetch(`http://localhost:8080/v1/match/${season}`);
        if (response.status !== 200) {
          // do nothing
        } else {
          const data = await response.json();
          setMatches(data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    const fetchMatchesByMonthBySeason = async () => {
      try {
        const response = await fetch(`http://localhost:8080/v1/match/${months.indexOf(month)+1}/${season}`);
        if (response.status !== 200) {
          // do nothing
        } else {
          const data = await response.json();
          setMatches(data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    const fetchMatchesByTeamBySeason = async () => {
      try {
        const response = await fetch(`http://localhost:8080/v1/match/team/${team}/${season}`);
        if (response.status !== 200) {
          // do nothing
        } else {
          const data = await response.json();
          setMatches(data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    const fetchMatchesByTeamByMonthBySeason = async () => {
      try {
        const response = await fetch(`http://localhost:8080/v1/match/team/${team}/${months.indexOf(month)+1}/${season}`);
        if (response.status !== 200) {
          // do nothing
        } else {
          const data = await response.json();
          setMatches(data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    const fetchTeamsBySeason = async () => {
      try {
        const response = await fetch(` http://localhost:8080/v1/team/season/${season}`);
        if (response.status !== 200) {
          // do nothing
        } else {
          const data = await response.json();
          const teamsArray = data.map(t => t['teamName']);
          setTeams(teamsArray);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchTeamsBySeason();
    if (month === '' && team === '') {
      fetchMatchesBySeason();
    } else if (month !== '' && team === '') {
      fetchMatchesByMonthBySeason();
    } else if (month === '' && team !== '') {
      fetchMatchesByTeamBySeason();
    } else if (month !== '' && team !== '') {
      fetchMatchesByTeamByMonthBySeason();
    }
  }, [team, season, month]);

  return (
    <>
      <Container style={{ textAlign: 'left' }}>
        <br></br>
        <DropdownButton title={team !== '' ? `${team}` : 'Team'} className="d-inline mx-2" onSelect={(e) => setTeam(e)}>
          {teams.map((team, index) => {
            return (<Dropdown.Item key={index} eventKey={`${team}`}>{team}</Dropdown.Item>)
          })}
        </DropdownButton>
        <DropdownButton title={season !== '' ? `${season}` : 'Season'} className="d-inline mx-2" onSelect={(e) => setSeason(e)}>
          {seasons.map((season, index) => {
            return (<Dropdown.Item key={index} eventKey={`${season}`}>{season}</Dropdown.Item>)
          })}
        </DropdownButton>
        <DropdownButton title={month !== '' ? `${month}` : 'Month'} className="d-inline mx-2" onSelect={(e) => setMonth(e)}>
          {months.map((month, index) => {
            return (<Dropdown.Item key={index} eventKey={`${month}`}>{month}</Dropdown.Item>)
          })}
        </DropdownButton>
        <br></br>
        <br></br>
        {matches.map((match, index) => {
          return (
            <ul style={{listStyleType: 'none'}}>
              <li>
                <div className="jumbotron jumbotron-fluid" style={{backgroundColor: 'gray'}}>
                  <div className="container">
                    <h1 className="display-4">Match {match['date']}</h1>
                    <p className="lead">{match['homeTeam']} vs {match['awayTeam']}</p>
                  </div>
                </div>
              </li>
            </ul>
          )
        })}
      </Container> 
    </>
  
  )
}
