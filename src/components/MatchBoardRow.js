import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "./MatchBoardRow.scss";

export default function MatchBoardRow({ title, homeTeamNum, awayTeamNum }) {

  const calculateAwayTeamPercentage = (homeTeamNum, awayTeamNum) => {
    if (homeTeamNum === '0' && awayTeamNum === '0') return -1;
    return Math.ceil(parseInt(awayTeamNum) / (parseInt(homeTeamNum) + parseInt(awayTeamNum)) * 100);
  }

  const statBarStyle = (awayTeamPer, isHomeTeam) => {
    if (awayTeamPer === -1) {
      return isHomeTeam ? {width: '100%', backgroundColor: '#ddd'} : {width: '0%', backgroundColor: '#2196F3'};
    }
    const awayTeamPerStr = awayTeamPer + '%';
    return isHomeTeam ? {width: awayTeamPerStr, backgroundColor: '#ddd'} : {width: awayTeamPerStr, backgroundColor: '#2196F3'};
  }

  const percentage = calculateAwayTeamPercentage(homeTeamNum, awayTeamNum);

  return (
    <div>
      <h4 className='statTitle'>{title}</h4>
      <Row>
        <Col className='homeStat' sm={1}>{homeTeamNum}</Col>
        <Col>
          <div>
            <div className='homeStatBar'>
              <div style={statBarStyle(percentage, true)}>&nbsp;</div>
            </div>
            <div className="awayStatBar">
              <div style={statBarStyle(percentage, false)}>&nbsp;</div>
            </div>
          </div>
        </Col>
        <Col className='awayStat' sm={1}>{awayTeamNum}</Col>
      </Row>
      <hr style={{height: '2px', backgroundColor: '#abbcde'}}></hr>
    </div>
  )
}
