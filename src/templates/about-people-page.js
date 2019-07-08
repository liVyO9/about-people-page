import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

export const AboutPeopleTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
    <div>
        <div>
            {title}
        </div>
        
    </div>
)

const AboutPeople = ({}) => {
    return (
        <Layout>
            <AboutPeopleTemplate />
        </Layout>
    )
}

export default AboutPeople