import React from 'react'
import { Container, DropdownButton, Dropdown } from 'react-bootstrap'

export default function ResultsPage() {
  return (
    <>
      <Container>
        <br></br>
        <ul>
          <li>
            <div className="jumbotron jumbotron-fluid" style={{backgroundColor: 'gray'}}>
              <div className="container">
                <h1 className="display-4">Fluid jumbotron</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="jumbotron jumbotron-fluid" style={{backgroundColor: 'gray'}}>
              <div className="container">
                <h1 className="display-4">Fluid jumbotron</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="jumbotron jumbotron-fluid" style={{backgroundColor: 'gray'}}>
              <div className="container">
                <h1 className="display-4">Fluid jumbotron</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
              </div>
            </div>
          </li>
        </ul>
      </Container> 
    </>
    

  )
}
