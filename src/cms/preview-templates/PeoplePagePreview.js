import React from 'react'
import PropTypes from 'prop-types'
import { PeoplePageTemplate } from '../../templates/people-page'

const PeoplePagePreview = ({entry, getAsset}) => {
    return (
        <PeoplePageTemplate
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

PeoplePagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func
    }),
    getAsset: PropTypes.func,
}

export default PeoplePagePreview