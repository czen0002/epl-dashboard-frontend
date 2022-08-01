import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default function MatchBoard({ match }) {

  const calculatePercentage = (homeTeamNum, awayTeamNum, isHomeTeam) => {
    if (homeTeamNum === '0' && awayTeamNum === '0') return -1;
    return isHomeTeam ? Math.ceil(parseInt(homeTeamNum) / (parseInt(homeTeamNum) + parseInt(awayTeamNum)) * 100) 
      : Math.ceil(parseInt(awayTeamNum) / (parseInt(homeTeamNum) + parseInt(awayTeamNum)) * 100);
  }

  const statBarStyle = (awayTeamPer, isHomeTeam) => {
    if (awayTeamPer === -1) {
      return isHomeTeam ? {width: '100%', backgroundColor: '#ddd'} : {width: '0%', backgroundColor: '#2196F3'};
    }
    const awayTeamPerStr = awayTeamPer + '%';
    return isHomeTeam ? {width: awayTeamPerStr, backgroundColor: '#ddd'} : {width: awayTeamPerStr, backgroundColor: '#2196F3'};
  }

  const awayShot = calculatePercentage(match['awayTeamShots'], match['awayTeamShots'], false);
  const awayShotOnTarget = calculatePercentage(match['homeTeamShotsOnTarget'], match['awayTeamShotsOnTarget'], false);
  const awayCorners = calculatePercentage(match['homeTeamCorners'], match['awayTeamCorners'], false);
  const awayTeamFoulsCommitted = calculatePercentage(match['homeTeamFoulsCommitted'], match['awayTeamFoulsCommitted'], false);
  const awayTeamYellowCards = calculatePercentage(match['homeTeamYellowCards'], match['awayTeamYellowCards'], false);
  const awayTeamRedCards = calculatePercentage(match['homeTeamRedCards'], match['awayTeamRedCards'], false);

  return (
    <div>
      <h4 id='statTitle'>Shots</h4>
      <Row>
        <Col id='homeStat' sm={1}>{match['homeTeamShots']}</Col>
        <Col>
          <div>
            <div id='block1' className="statBarContainer">
              <div style={statBarStyle(awayShot, true)}>&nbsp;</div>
            </div>
            <div id='block2' className="statBarContainer">
              <div style={statBarStyle(awayShot, false)}>&nbsp;</div>
            </div>
          </div>
        </Col>
        <Col id='awayStat' sm={1}>{match['awayTeamShots']}</Col>
      </Row>
      <hr style={{height: '1px', color: 'white'}}></hr>
      <h4 id='statTitle'>Shots On Target</h4>
      <Row>
        <Col id='homeStat' sm={1}>{match['homeTeamShotsOnTarget']}</Col>
        <Col>
          <div>
            <div id='block1' className="statBarContainer">
              <div style={statBarStyle(awayShotOnTarget, true)}>&nbsp;</div>
            </div>
            <div id='block2' className="statBarContainer">
              <div style={statBarStyle(awayShotOnTarget, false)}>&nbsp;</div>
            </div>
          </div>
        </Col>
        <Col id='awayStat' sm={1}>{match['awayTeamShotsOnTarget']}</Col>
      </Row>
      <hr style={{height: '1px', color: 'white'}}></hr>
      <h4 id='statTitle'>Corners</h4>
      <Row>
        <Col id='homeStat' sm={1}>{match['homeTeamCorners']}</Col>
        <Col>
          <div>
            <div id='block1' className="statBarContainer">
              <div style={statBarStyle(awayCorners, true)}>&nbsp;</div>
            </div>
            <div id='block2' className="statBarContainer">
              <div style={statBarStyle(awayCorners, false)}>&nbsp;</div>
            </div>
          </div>
        </Col>
        <Col id='awayStat' sm={1}>{match['awayTeamCorners']}</Col>
      </Row>
      <hr style={{height: '1px', color: 'white'}}></hr>
      <h4 id='statTitle'>Fouls Committed</h4>
      <Row>
        <Col id='homeStat' sm={1}>{match['homeTeamFoulsCommitted']}</Col>
        <Col>
          <div>
            <div id='block1' className="statBarContainer">
              <div style={statBarStyle(awayTeamFoulsCommitted, true)}>&nbsp;</div>
            </div>
            <div id='block2' className="statBarContainer">
              <div style={statBarStyle(awayTeamFoulsCommitted, false)}>&nbsp;</div>
            </div>
          </div>
        </Col>
        <Col id='awayStat' sm={1}>{match['awayTeamFoulsCommitted']}</Col>
      </Row>
      <hr style={{height: '1px', color: 'white'}}></hr>
      <h4 id='statTitle'>Yellow Cards</h4>
      <Row>
        <Col id='homeStat' sm={1}>{match['homeTeamYellowCards']}</Col>
        <Col>
          <div>
            <div id='block1' className="statBarContainer">
              <div style={statBarStyle(awayTeamYellowCards, true)}>&nbsp;</div>
            </div>
            <div id='block2' className="statBarContainer">
              <div style={statBarStyle(awayTeamYellowCards, false)}>&nbsp;</div>
            </div>
          </div>
        </Col>
        <Col id='awayStat' sm={1}>{match['awayTeamYellowCards']}</Col>
      </Row>
      <hr style={{height: '1px', color: 'white'}}></hr>
      <h4 id='statTitle'>Red Cards</h4>
      <Row>
        <Col id='homeStat' sm={1}>{match['homeTeamRedCards']}</Col>
        <Col>
          <div>
            <div id='block1' className="statBarContainer">
              <div style={statBarStyle(awayTeamRedCards, true)}>&nbsp;</div>
            </div>
            <div id='block2' className="statBarContainer">
              <div style={statBarStyle(awayTeamRedCards, false)}>&nbsp;</div>
            </div>
          </div>
        </Col>
        <Col id='awayStat' sm={1}>{match['awayTeamRedCards']}</Col>
      </Row>
      <hr style={{height: '1px', color: 'white'}}></hr>
    </div>
  )
}
