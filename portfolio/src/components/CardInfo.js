import React from 'react'
import { useSpring, animated } from 'react-spring';

export default function CardInfo(props) {
    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return (
        <animated.div className="card-info" style={style}>
            <p className="card-title">{props.title}</p>
            <p className="class-sub-title">{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
        </animated.div>
    )
}
