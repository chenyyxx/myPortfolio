import React from 'react'
import {Button, Card} from 'antd'

import {useSpring, animated} from 'react-spring'

const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function MyItem(props) {
    const [style, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (
        <animated.div className="d-inline-block card-info myItem" onClick={(e) => props.click(props.item)} onMouseMove={({ clientX: x, clientY: y }) => set({ xys: [0,0,1.1] })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: style.xys.interpolate(trans) }}>

            {/* <img className="card-image" src={props.item.imgSrc} alt={props.item.imgSrc}/> */}
            <p className="card-title">{props.item.title}</p>
            <p className="card-sub-title">{props.item.subTitle}</p>
            <Button shape="round" href={props.item.link} target="_blank" rel="noopener noreferrer">View</Button>
        </animated.div>
    );
}
