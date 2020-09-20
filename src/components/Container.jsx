import React from 'react'

import Scarecrow from '../assets/static/Scarecrow.png'
import './styles/Container.scss'

const Container = () => (
    <section className="Container">
        <section className="Container__image">
            <img className="Container__image--img" src={Scarecrow} alt="Image Not Found"/>
        </section>

        <section className="Container__content">
            <h1 className="Container__content--title">I have bad news for you</h1>
            <p className="Container__content--paragraph">The page you are looking 
            <br/> for might be removed or is <br/>
            temporarily unavailable</p>
            <button className="Container__content--button">Back to Homepage</button>
        </section>
    </section>
)

export default Container