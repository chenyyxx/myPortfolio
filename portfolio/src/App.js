import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/data_scientist" component={DataScientistPage} />
          <Route exact path='/software_engineer' component={SoftwareEngineerPage} />
          <Route exact path="/mobile" component={Mobile}/>
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
