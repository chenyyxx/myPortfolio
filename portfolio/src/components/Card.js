import React from 'react'
import CardInfo from '../components/CardInfo'

export default function Card(props) {
    return (
        <div className="d-inline-block card" onClick={(e) => props.click(props.item)}>
            <img className="card-image" src={props.item.imgSrc} alt={props.item.imgSrc}/>
            { props.item.selected && 
                <CardInfo 
                    title={props.item.title} 
                    subtitle={props.item.subTitle} 
                    link={props.item.link} 
                />
            } 
        </div>
    );
}

