import React from 'react';
import MatchTile from './MatchTile';

export default function MatchOnDate({ listIndex, matchesObject, team, month, season }) {
  const matchesDate = matchesObject['date'];
  const matchesOnDate = matchesObject['matchArray'];
  return (
    <div>
      <p className='display-4' style={{color: 'white'}}>{matchesDate}</p>
      <ul key={listIndex} style={{listStyleType: 'none'}}>
        {matchesOnDate.map((match, index) => <MatchTile key={index} match={match} team={team} month={month} season={season}/>)} 
      </ul>
    </div>
  )
}
