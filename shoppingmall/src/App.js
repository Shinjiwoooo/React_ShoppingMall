import logo from './logo.svg';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import './App.css';
import React, { useState } from 'react';
import Data from './data.js'
import Detail from './Detail.js'
import axios  from  'axios';
import {Link, Route, Switch} from 'react-router-dom'



function App() {
 
  let [ring, ring변경] = useState(Data)
  let [재고, 재고변경] = useState(10)
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="title"><p>Cartier</p></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    


    <Switch>
    
      <Route exact path ="/">
        <JumboTron></JumboTron>
        <div className="container">
        <div className="row">
          {
            ring.map((item, index)=>{
              return <Card ring={ring[index]}  i={index} key={index}></Card>
            })
          }
        </div>
      </div>
      <button className="btn btn-primary"onClick={() =>{
        axios.get('https://Shinjiwoooo.github.io/data/data2.json')
        .then((result)=>{
          console.log(result)
          ring변경([...ring, ...result.data])   
        })
        .catch(()=>{ 
          console.log('Ajax 실패')
        })
      }}>더보기</button>
      </Route>
      <Route path="/detail/:id">
          <Detail ring={ring} 재고={재고} 재고변경={재고변경}></Detail>
      </Route>

      <Route path="/:id">
          <div>아무개</div>
      </Route>
    </Switch>
      
    </div>
  );
}


function JumboTron() {
  return (
    <div className="jumbotron">
      <div className='jumbo_wrap'>
        <h1>10% Season Off</h1>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </div>
    </div>
  )
}

function Card(props){
  return(
    <div className="col-md-4">
     <a href={"/detail/"+(props.i)}><img src={"https://Shinjiwoooo.github.io/img/ring0"+(props.i + 1)+".png"} width="100%" /></a> 
      <h4>{props.ring.title}</h4>  
      <p>{props.ring.content}</p>
      <p>{props.ring.price}</p>
    </div>
  )
}

export default App;