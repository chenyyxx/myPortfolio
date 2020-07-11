import React from 'react'
import CardInfo from '../components/CardInfo'

import {useSpring, animated} from 'react-spring'

const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function Card(props) {
    const [style, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (
        <animated.div className="d-inline-block card" onClick={(e) => props.click(props.item)} onMouseMove={({ clientX: x, clientY: y }) => set({ xys: [0,0,1.1] })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: style.xys.interpolate(trans) }}>

            <img className="card-image" src={props.item.imgSrc} alt={props.item.imgSrc}/>
            { props.item.selected && 
                <CardInfo 
                    title={props.item.title} 
                    subTitle={props.item.subTitle} 
                    link={props.item.link} 
                />
            } 
        </animated.div>
    );
}

