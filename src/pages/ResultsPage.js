import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import MatchOnDate from '../components/MatchOnDate';

export default function ResultsPage() {

  const defaultSeasons = ['2021-22', '2020-21', '2019-20', '2018-19', '2017-18', '2016-17', '2015-16'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const location = useLocation();
  const teamNameFromOtherPage = location.state ? location.state.team : '';
  var monthFromMatchPage;
  if (location.state) {
    if (location.state.month) {
      monthFromMatchPage = location.state.month;
    } else {
      monthFromMatchPage = '';
    }
  }
  var seasonFromMatchPage;
  if (location.state) {
    if (location.state.season) {
      seasonFromMatchPage = location.state.season;
    } else {
      seasonFromMatchPage = '';
    }
  }

  const [team, setTeam] = useState(() => teamNameFromOtherPage ? teamNameFromOtherPage : '');
  const [seasons, setSeasons] = useState(defaultSeasons);
  const [season, setSeason] = useState(() => seasonFromMatchPage ? seasonFromMatchPage : seasons[0]);
  const [month, setMonth] = useState(() => monthFromMatchPage ? monthFromMatchPage : '');
  const [teams, setTeams] = useState([]);
  const [matches, setMatches] = useState([]);
  const [flag, setFlag] = useState(true);

  const createMatchDic = (matchArray) => {
    const matchDic = {};
    for (const match of matchArray) {
      if (!(match['date'] in matchDic)) {
        matchDic[match['date']] = [match];
      } else {
        matchDic[match['date']].push(match);
      }
    }
    return matchDic;
  }

  const createArrayFromDic = (matchDic) => {
    const array = [];
    for (const [key, value] of Object.entries(matchDic)) {
      array.push({
        date: key,
        matchArray: value
      })
    }
    return array;
  }
  
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
        const response = await fetch(`http://localhost:8080/v1/team/season/${season}`);
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

    const fetchSeasonsByTeam = async () => {
      try {
        const response = await fetch(`http://localhost:8080/v1/team/seasons/${team}`);
        if (response.status !== 200) {
          // do nothing
        } else {
          const data = await response.json();
          const seasonsArray = data['seasons'];
          setSeasons(seasonsArray);
          setFlag(false);
          if (flag) {
            setSeason(seasonsArray[0]);
          }
        }
      } catch (err) {
        console.log(err);
      }
    }

    if (team) {
      fetchSeasonsByTeam();
    }
    
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
      <Container style={{ textAlign: 'left' }}>
        <br></br>
        <br></br>
        <DropdownButton title={team !== '' ? `${team}` : 'Team'} className="d-inline mx-2" onSelect={(e) => setTeam(e)}>
          {teams.map((team, index) => <Dropdown.Item key={index} eventKey={`${team}`}>{team}</Dropdown.Item>)}
        </DropdownButton>
        <DropdownButton title={season !== '' ? `${season}` : 'Season'} className="d-inline mx-2" onSelect={(e) => setSeason(e)}>
          {seasons.map((season, index) => <Dropdown.Item key={index} eventKey={`${season}`}>{season}</Dropdown.Item>)}
        </DropdownButton>
        <DropdownButton title={month !== '' ? `${month}` : 'Month'} className="d-inline mx-2" onSelect={(e) => setMonth(e)}>
          {months.map((month, index) => <Dropdown.Item key={index} eventKey={`${month}`}>{month}</Dropdown.Item>)}
        </DropdownButton>
        <Button variant="info" className="d-inline mx-2" onClick={() => {
          setTeam('');
          setMonth('');
          setSeason(defaultSeasons[0]);
          setSeasons(defaultSeasons);
        }}>Reset</Button>
        <br></br>
        <br></br>
        {createArrayFromDic(createMatchDic(matches)).map((matchesObj, index) => 
          <MatchOnDate key={index} listIndex={index} matchesObject={matchesObj} month={month} season={season}/>)}
      </Container> 
  )
}
