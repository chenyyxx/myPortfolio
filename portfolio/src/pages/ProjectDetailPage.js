import React, { Component } from 'react'
import Header from '../components/Header'

export default class ProjectDetailPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            link: "/software_engineer/",
        }
    }
    render() {
        return (
            <div>
                <Header link={this.state.link} />
            </div>
        )
    }
}
