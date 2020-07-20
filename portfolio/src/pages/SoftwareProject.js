import React, { Component } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer'
import SlideShows from '../components/SlideShows';
import Summary from '../components/Summary';
import Detail from '../components/Detail';



export default class SoftwareProject extends Component {
    state ={
        currentSelected: 0,
        slides: [
            {
                id: 0,
                title: 'TweetsTrend',
                subTitle: 'A Sentiment Analysis project for tweets using Spark, React, Spring Boot',
                details: [
                    {
                        description : "Developed an web application and a backend system that analyze the sentiments of tweets in real time utilizingReacton front end,Spring Bootonback end andSparkfor data streaming and NLP processing",
        
                    },
                    {
                        description : "Front End:Created a dashboard usingReact, Ant Visualization and Ant Designbacked byTwitter APIto visualize the sentiment score of trendingkeywords, word frequency, and example tweets inreal time",
        
                    },
                    {
                        description : "Service:Streamed data fromTwitter APIwithTweepyand analyzed the sentiments of tweets withNLPtoolVADERunderSpark",
        
                    },
                    {
                        description : "Back End:UsedSpring Bootframework to handle GET requests from front end and PUT requests from Spark withSpring MVCframework",
        
                    },
                    {
                        description:"Database:UsedMySQLto store theNLPresult forwarded from Spark with Spring Data JPA",
                    }
                ],
                imgSrc: "https://static.wixstatic.com/media/11062b_6369a82539704f78b4fffed0ef058629~mv2_d_2346_1998_s_2.jpg/v1/crop/x_242,y_0,w_1590,h_1993/fill/w_644,h_808,al_c,q_85,usm_0.66_1.00_0.01/Leaflet.webp",
                link: 'https://github.com/chenyyxx/TweetsTrend',
                selected: false
            },
            {
                id: 1,
                title: 'EventS',
                subTitle: 'Events Explore and Recommendation WebSite',
                details: [
                    {
                        description : "Front End:Developed an interactive web page for users to search events and purchase tickets (HTML, CSS and JavaScript, AJAX)",
        
                    },
                    {
                        description : "Back End:Created 6 Java servlets withRESTful APIsto handle HTTP requests and responses",
        
                    },
                    {
                        description : "Database:Build relational andNoSQLdatabases (MySQL, MongoDB) to capture real business data from TicketMaster API",
        
                    },
                    {
                        description : "BusinessLogic Implementation:Implemented content-based recommendation algorithm to improve personalized business recommendation based on search history and favorite records",
        
                    },
                    {
                        description : "DevOps:Deployed server side toAmazon EC2to handle 150 QPS tested byApache JMeter",
        
                    },
                ],
                imgSrc: "https://static.wixstatic.com/media/84770f_30b5b37a554c487d85fffde598298a77~mv2.jpg/v1/crop/x_429,y_0,w_1514,h_1900/fill/w_644,h_808,al_c,q_85,usm_0.66_1.00_0.01/Website_Mockup.webp",
                link: 'https://github.com/chenyyxx/EventS',
                selected: false
            },
            {
                id: 2,
                title: 'Ways',
                subTitle: 'LBS based Android App for Smart Driving',
                details: [
                    {
                        description : "IntegratedGoogle Map APIto display the nearby hot alerts and navigate to avoid traffic",
        
                    },
                    {
                        description : "UsedGoogle Firebaseto store and manage UGC including comments, images, descriptions, title, geolocations",
        
                    },
                    {
                        description : "Implemented the viewpager to hold the login and register fragments; Improved the UI/UX flow with Animation, ToolBar/Action Bar etc.",
        
                    },
                    {
                        description : "Used the speech recognition intent to handle simplevoice control",
        
                    },
                ],
                imgSrc: "https://static.wixstatic.com/media/9dbeebdedcd94c2489ccaca2b9fd1aa4.jpg/v1/crop/x_783,y_0,w_2172,h_2725/fill/w_644,h_808,al_c,q_85,usm_0.66_1.00_0.01/App%20Screen.webp",
                link: 'https://github.com/chenyyxx/Ways',
                selected: false
            },
        ]
    }

    handleSelect = (id, slide) => {
        this.setState({currentSelected:id})
        // console.log(this.state.currentSelected)
    }

    render(){
        // console.log(this.state.slides[0].details)
        return (
            <div className="project-page">
                <Header link="/software_engineer/projects" />
                <div className="title-summary">
                    <Summary />
                </div>
                <div className="pl-0 main">
                    <SlideShows slides={this.state.slides} handleSelect={this.handleSelect}/>
                </div>
                <Detail slide={this.state.slides[this.state.currentSelected]}/>
                <Footer />
            </div>
        )
    }
}
