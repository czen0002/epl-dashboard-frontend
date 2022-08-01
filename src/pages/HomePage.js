import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import TeamTile from '../components/TeamTile';

export default function HomePage() {
  
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchAllTeams = async () => {
      try {
        const response = await fetch('http://localhost:8080/v1/team');
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
    }
    fetchAllTeams();
  }, [])

  return (
    <Container>
      <br/>
      <Row>
        {teams.map((team, index) => <TeamTile key={index} teamName={team} />)}
      </Row>
    </Container>
  )
}
