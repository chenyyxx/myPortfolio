import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn, faFacebook } from '@fortawesome/free-brands-svg-icons'

export default function IconBar(props) {
    return (
        <div className={props.style}>
            <a className="custom_link" href="https://github.com/chenyyxx" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={faGithub} size={props.size} />
            </a>
            <a className="custom_link" href="https://www.linkedin.com/in/yuxiang-chen-1204/" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn} size={props.size}/>
            </a>
            <a className="custom_link" href="https://www.facebook.com/profile.php?id=100006959746248" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={faFacebook} size={props.size} />
            </a>
            <a className="custom_link" href="" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} size={props.size} />
            </a>
        </div>
    )
}
