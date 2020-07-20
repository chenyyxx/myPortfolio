import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import HomePage from './pages/HomePage';
import SoftwareEngineerPage from './pages/SoftwareEngineerPage';
// import DataScientistPage from './pages/DataScientistPage';
import SoftwareProject from './pages/SoftwareProject';
import SoftwareExperience from './pages/SoftwareExperience';

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
          {/* <Route exact path="/" render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} /> */}
          {/* <Route exact path="/data_scientist" component={DataScientistPage} /> */}
          <Route exact path='/software_engineer/about' component={SoftwareEngineerPage} />
          <Route exact path='/software_engineer/experience' component={SoftwareExperience}/>
          <Route exact path='/software_engineer/projects' component={SoftwareProject}/>
          
          {/* <Route exact path="/mobile" component={Mobile}/> */}
          {/* <Route component={NotFoundPage} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
