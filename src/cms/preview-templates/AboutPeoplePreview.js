import React from 'react'
import PropTypes from 'prop-types'
import { AboutPeoplePageTemplate } from '../../templates/about-people-page'

const AboutPeoplePagePreview = ({ entry, widgetFor }) => (
  <AboutPeoplePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

AboutPeoplePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPeoplePagePreview
