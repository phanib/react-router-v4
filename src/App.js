import React, { Component } from 'react';
import {
  Route,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom'

const Topic = ({ match}) => (
  <div>
    <h3> {match.params.topicId} </h3>
  </div>
)

const Home = () => (
  <div>
    <h2> This is Home Page </h2>
  </div>
)

const About = () => (
  <div>
    <h2> This is About Page </h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2> This is Topics Page </h2>
      <ul>
        <li> <Link to={`${match.url}/rendering`}>Rendering with React </Link> </li>
        <li> <Link to={`${match.url}/components`}>Components </Link> </li>
        <li> <Link to={`${match.url}/props-vs-state`}>Props vs State </Link> </li>
      </ul>
      
      <Route path='/topics/:topicId' component={Topic} />
      <Route exact path={match.url} render={() => (
        <h3> Please select a topic </h3>
      )} />
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <li> <Link to='/'>Home </Link> </li>
          <li> <Link to='/about'>About </Link> </li>
          <li> <Link to='/topics'>Topics </Link> </li>
          <hr />

          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/topics' component={Topics} />
        </div>
      </Router>
    );
  }
}

export default App;
