import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const PreviewPageTemplate = ({entry, getAsset}) => {
    return (
        <AboutPageTemplate
            title={entry.getIn(['data', 'title'])}
            info={{
                image: getAsset(entry.getIn(['data', 'info', 'image'])),
                description1: entry.getIn('data', 'info', 'description1'),
                description2: entry.getIn('data', 'info', 'description2'),
                description3: entry.getIn('data', 'info', 'description3'),
            }}
        />
    )
}

PreviewPageTemplate.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func
    }),
    getAsset: PropTypes.func,
}

export default PreviewPageTemplate