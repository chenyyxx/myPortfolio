import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'Yuxiang Chen',
      home: {
        title: 'Yuxiang Chen',
        subTitle: 'Projects make a difference',
        text: 'checkout my projects below'
      }
    };
  }
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          {/* <Route exact path="/data_scientist" component={DataScientistPage} />
          <Route exact path='/software_engineer' component={SoftwareEngineerPage} />
          <Route exact path="/mobile" component={Mobile}/>
          <Route component={NotFoundPage} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
