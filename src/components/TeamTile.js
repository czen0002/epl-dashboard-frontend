import React from 'react';
import {useNavigate} from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

export default function TeamTile({teamName}) {

  const navigate = useNavigate();
  const navigateResults = () => {
    navigate("/results", {
      state: {
        team: teamName,
        season: '',
        month: ''
      }
    });
  };

  return (
    <div className='col-lg-3 col-md-4 col-sm-6 my-1'>
      <Card>
        <Card.Img variant="top" src={`/images/${teamName}.png`} />
        <Card.Body>
          <Card.Title className='text-uppercase'>{teamName}</Card.Title>
          <Button onClick={navigateResults}>Matches</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
