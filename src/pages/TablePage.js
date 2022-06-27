import { React, useEffect, useState }  from 'react'
import { Container, Table, Dropdown, DropdownButton } from 'react-bootstrap'

export default function TablePage() {

  const [teams, setTeams] = useState([]);
  const [season, setSeason] = useState('2021-22');

  const seasons = ['2021-22', '2020-21', '2019-20', '2018-19', '2017-18', '2016-17', '2015-16'];

  useEffect(() => {
    const fetchAllTeams = async () => {
      try {
        const response = await fetch(`http://localhost:8080/v1/table/${season}`);
        if (response.status !== 200) {
          // do nothing
        } else {
          const data = await response.json();
          setTeams(data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchAllTeams();
  }, [season])

  return (
    <Container style={{ textAlign: 'left' }}>
        <br></br>
        <DropdownButton id="dropdown-basic-button" title={`Season ${season}`} className="text-left" onSelect={(e) => setSeason(e)}>
          {seasons.map((season, index) => {
            return (<Dropdown.Item key={index} eventKey={`${season}`}>{season}</Dropdown.Item>)
          })}
        </DropdownButton>
        <br></br>
        <Table bordered striped style= {{color: 'white', border: 'gray'}}>
          <thead>
            <tr style={{ backgroundColor: '#0d6efd'}}>
              <th>Position</th>
              <th>Team Name</th>
              <th>P</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => {
              return (
                <tr key={index} style={{ backgroundColor: 'white', color: 'black'}}>
                  <td>{index+1}</td>
                  <td>
                    <img src={`/images/${team.teamName}.png`} width='30' height='30' alt={`${team.teamName}`}></img>
                    &nbsp;&nbsp;{team.teamName}
                  </td>
                  <td>{team.played}</td>
                  <td>{team.won}</td>
                  <td>{team.drawn}</td>
                  <td>{team.lost}</td>
                  <td>{team.goalsFor}</td>
                  <td>{team.goalsAgainst}</td>
                  <td>{team.goalsDifference}</td>
                  <td>{team.points}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
    </Container>
  )
}
