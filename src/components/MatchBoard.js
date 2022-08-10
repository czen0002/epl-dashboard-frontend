import React from 'react';
import MatchBoardRow from './MatchBoardRow';

export default function MatchBoard({ match }) {
  return (
    <div>
      <MatchBoardRow title='Shots' homeTeamNum={match['homeTeamShots']} awayTeamNum={match['awayTeamShots']}></MatchBoardRow>
      <MatchBoardRow title='Shots On Target' homeTeamNum={match['homeTeamShotsOnTarget']} awayTeamNum={match['awayTeamShotsOnTarget']}></MatchBoardRow>
      <MatchBoardRow title='Corners' homeTeamNum={match['homeTeamCorners']} awayTeamNum={match['awayTeamCorners']}></MatchBoardRow>
      <MatchBoardRow title='Fouls' homeTeamNum={match['homeTeamFoulsCommitted']} awayTeamNum={match['awayTeamFoulsCommitted']}></MatchBoardRow>
      <MatchBoardRow title='Yellow Cards' homeTeamNum={match['homeTeamYellowCards']} awayTeamNum={match['awayTeamYellowCards']}></MatchBoardRow>
      <MatchBoardRow title='Red Cards' homeTeamNum={match['homeTeamRedCards']} awayTeamNum={match['awayTeamRedCards']}></MatchBoardRow>
    </div>
  )
}
