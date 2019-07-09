import React from 'react'
import Layout from '../components/Layout'
import './all.sass'

const AboutPeopleTemplate = props => {
    <Layout>
        <div className="aboutAKRA-container">
            <div className="text-part">{props.aboutAKRA}</div>
            <div className="img-part">
                <img src={props.mapImage} alt={props.mapImageAlt}></img>
            </div>
        </div>
    </Layout>
}

export default AboutPeopleTemplate