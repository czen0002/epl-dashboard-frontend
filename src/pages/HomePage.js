import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import TeamTile from '../components/TeamTile'

export default function HomePage() {
  
  // const [teams, setTeams] = useState([]);

  // useEffect(() => {
  //   const fetchAllTeams = async () => {
  //     try {
  //       const response = await fetch('http://localhost:8080/v1/team');
  //       if (response.status !== 200) {
  //         // do nothing
  //       } else {
  //         const data = await response.json();
  //         console.log(data);
  //         setTeams(data)
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchAllTeams();
  // }, [])

  const teams = [
    {
        "teamName": "Arsenal",
        "teamId": 1
    },
    {
        "teamName": "Aston Villa",
        "teamId": 2
    },
    {
        "teamName": "Bournemouth",
        "teamId": 3
    },
    {
        "teamName": "Brentford",
        "teamId": 4
    },
    {
        "teamName": "Brighton",
        "teamId": 5
    },
    {
        "teamName": "Burnley",
        "teamId": 6
    },
    {
        "teamName": "Cardiff",
        "teamId": 7
    },
    {
        "teamName": "Chelsea",
        "teamId": 8
    },
    {
        "teamName": "Crystal Palace",
        "teamId": 9
    },
    {
        "teamName": "Everton",
        "teamId": 10
    },
    {
        "teamName": "Fulham",
        "teamId": 11
    },
    {
        "teamName": "Huddersfield",
        "teamId": 12
    },
    {
        "teamName": "Hull",
        "teamId": 13
    },
    {
        "teamName": "Leeds",
        "teamId": 14
    },
    {
        "teamName": "Leicester",
        "teamId": 15
    },
    {
        "teamName": "Liverpool",
        "teamId": 16
    },
    {
        "teamName": "Man City",
        "teamId": 17
    },
    {
        "teamName": "Man United",
        "teamId": 18
    },
    {
        "teamName": "Middlesbrough",
        "teamId": 19
    },
    {
        "teamName": "Newcastle",
        "teamId": 20
    },
    {
        "teamName": "Norwich",
        "teamId": 21
    },
    {
        "teamName": "Sheffield United",
        "teamId": 22
    },
    {
        "teamName": "Southampton",
        "teamId": 23
    },
    {
        "teamName": "Stoke",
        "teamId": 24
    },
    {
        "teamName": "Sunderland",
        "teamId": 25
    },
    {
        "teamName": "Swansea",
        "teamId": 26
    },
    {
        "teamName": "Tottenham",
        "teamId": 27
    },
    {
        "teamName": "Watford",
        "teamId": 28
    },
    {
        "teamName": "West Brom",
        "teamId": 29
    },
    {
        "teamName": "West Ham",
        "teamId": 30
    },
    {
        "teamName": "Wolves",
        "teamId": 31
    }
]
  return (
    <Container>
      <Row>
        {teams.map(team => <TeamTile key={team.teamId} teamName={team.teamName} />)}
      </Row>
    </Container>
  )
}
