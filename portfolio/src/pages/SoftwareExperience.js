import React, { Component } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import TitleBar from '../components/TitleBar';


import Resume from '../assets/SDE_YuxiangChen_Resume_2_0.pdf';
import WorkSection from '../components/WorkSection';
import EduSection from '../components/EduSection';
import SkillSection from '../components/SkillSection';
import { Button, Card,Container,Row } from 'react-bootstrap';


export default class SoftwareExperience extends Component {
    state = {
        summary: "Software Engineer candidate with strong background in programming, analytic and system designing. Have 3 years of project experience, including cross-platform mobile and web development and machine learning. Solid in computer science, mathematics and statistics. Expert in Java, JavaScript, Pythonand SQL. Skilled in data science, statistical modeling, and machine learning.",
        works: [
            {
                id: 0,
                company: "Anyka Technologies",
                position: "Software Engineer Internship",
                location: "Guangzhou, China",
                time: "Dec 2019 - Feb 2020",
                details:[
                    { 
                        id: 0,
                        detail: "Trained deep learning model for face recognition by implementing the FaceNetalgorithm with the TensorFlow framework",
                    },
                    { 
                        id: 1,
                        detail: "Improved the prediction accuracy of the deep learning model by using MTCNNalgorithm to extract faces from the training dataset",
                    },
                    { 
                        id: 2,
                        detail: "Developed a real time face recognition and object detection cross-platform mobile app backed by YOLO and FaceNet algorithms withFlutterandTensorFlow-Litefor product demo",
                    },
                ],
            },
            {
                id: 1,
                company: "Harvard University",
                position: "Machine Learning Research Analyst",
                location: "Boston, MA",
                time: "June 2019 - Sept 2019",
                details:[
                    { 
                        id: 0,
                        detail: "Cleaned and used genome-wide genetic variants to predict disease risk and quantitative trait usingPandas, andNumpylibraries in python",
                    },
                    { 
                        id: 1,
                        detail: "Implemented adistributed gradient boosting tree modelusingXGBoost libraryin python to fitterabyte-scale genetic data",
                    },
                    { 
                        id: 2,
                        detail: "Used Slurm to manage the training jobs scheduling among data nodes in thecluster",
                    },
                    { 
                        id: 3,
                        detail: "Handled data communication and data passing for each iteration of machine learning among nodes in cluster withAllreduceusingMPI(MessagePassing Interface) and Rabit Library in python",
                    },
                ],
            },
        ],
        edus: [
            {
                school: "Macalester College",
                location: "Saint Paul, MN",
                time: "Aug 2016 - June 2020",
                degree: "B.A.",
                majors: ["Computer Science", "Applied Mathematics"],
                GPA: "3.7/4.0",
                courses: ["Object Oriented Programming", "Software Development", "Algorithm Design", "Database Management", "Artificial Intelligence", "Computer Systems", "Statistical Modeling", "Probability", "Machine Learning", "Data Science", "Network Science"],

            },
        ],
        skills: {
            languages: ["Java", "JavaScript", "HTML", "CSS", "Python", "SQL", "C"],
            frameworks: ["React", "React-Native", "Flutter", "Spring", "Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "TensorFlow"],
            tools: ["Git", "Linux", "Node.js"," AWS", "Apache Tomcat", "Apache Maven", "MySQL", "MongoDB", "Firebase", "Android", "REST.API", "AJAX"],

        }
    }
    render(){
        return (
            <div>
                <Header link="/software_engineer/experience"/>
                <div className="resume-main">
                    <div className="resume-title">
                        <h1 className="experience-super-title">RESUME</h1>
                        <TitleBar />
                    </div>
                    <div className="resume-summary">
                        <h1 className="experience-title-summary"><span className="experience-title-bold">Professional</span> Summary</h1>
                        {/* <TitleBar /> */}
                        <Container fluid={true}>
                            <Row className="justify-content-around">
                                <Card style={{ width: '60rem' }}>
                                    <Card.Body>
                                        <Card.Text>{this.state.summary}</Card.Text>
                                        <Button href={Resume}>Open Full Resume</Button>
                                    </Card.Body>
                                </Card>
                            </Row>
                        </Container>
                    </div>
                    <div className="resume-work">
                        <h1 className="experience-title">Work <span className="experience-title-bold">Experience</span></h1>
                        <TitleBar />
                        <WorkSection works={this.state.works}/>
                    </div>
                    <div className="resume-edu">
                        <h1 className="experience-title"><span className="experience-title-bold">Education</span></h1>
                        <TitleBar />
                        <EduSection edus={this.state.edus} />
                    </div>
                    <div className="resume-skills">
                        <h1 className="experience-title"><span className="experience-title-bold">Skills</span></h1>
                        <TitleBar />
                        <SkillSection skills={this.state.skills}/>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
