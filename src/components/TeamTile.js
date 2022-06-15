import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function TeamTile({teamName}) {
  return (
    <Card style={{ width: '18rem' }} className="mx-1 my-1">
      <Card.Img variant="top" src={`/images/${teamName}.png`} />
      <Card.Body>
        <Card.Title>{teamName}</Card.Title>
        <Button>Matches</Button>
      </Card.Body>
    </Card>
  )
}
