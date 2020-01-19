import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import './Nav.scss'
const Nav = () => {

const [classname, setClass] = useState('nav');

    
    useEffect(() => {
       setTimeout(() => {
           setClass('classNameAfter')
       }, 1000);
    });

    return(
        <div className={classname}>
            <nav>
                <Link to='/Intro'>
                    <a>INTRO</a>
                </Link>
                <Link>
                 <a>WORK</a>
                </Link>
                <Link>
                <a>ABOUT</a>
                </Link>
                <Link>
                <a>CONTACT</a>
                </Link>
                </nav>
        </div>
    )
}

export default Nav