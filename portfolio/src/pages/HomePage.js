import React from 'react'
import Hero from '../components/Hero'
import Menu from '../components/Menu';
import { PageHeader } from 'antd';
import { Row, Col} from 'antd';

export default function HomePage(props) {
    return (
        <div>
            <div className="header">
                <PageHeader
                    className="site-page-header"
                    onBack={() => null}
                    title="Title"
                    subTitle="This is a subtitle"
                />
            </div>
            <Row className="body">
                <Col  span={16} >
                    <div className="leftWelcome">
                        
                        <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
                    </div>
                </Col>
                <Col span={8}>
                    <div className="rightWelcome">
                        <Menu/>
                    </div>
                </Col>
            </Row>
        </div>
        
    )
}