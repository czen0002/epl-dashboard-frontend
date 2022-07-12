import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function TeamTile({teamName}) {
  return (
    <div className='col-lg-3 col-md-4 col-sm-6 my-1'>
      <Card>
        <Card.Img variant="top" src={`/images/${teamName}.png`} />
        <Card.Body>
        <Card.Title className='text-uppercase'>{teamName}</Card.Title>
        <Button>Matches</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
