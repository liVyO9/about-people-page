import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Img from 'gatsby-image'

export const PeoplePageTemplate = ({
  title,
  description,
  image,
}) =>{
    return(
        <div className="content">
            <div className="">
                <div>
                    {title}
                </div>
                <div>
                    <div className="">
                        {description}
                    </div>
                    <div className="">
                        <Img fluid={image.childImageSharp.fluid} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

PeoplePageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string.isRequired,
}

const PeoplePage = ({data}) =>{
    const { frontmatter } = data.markdownRemark

    return(
        <Layout>
            <PeoplePageTemplate
            image={frontmatter.image}
            title={frontmatter.title}
            description={frontmatter.description}
            />
        </Layout>
    )
}

PeoplePage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
          frontmatter: PropTypes.object,
        }),
    }),
}

export default PeoplePage

export const peoplePageQuery = graphql`
query PeoplePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
            childImageSharp {
              fluid(maxWidth: 600,maxHeight: 600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        description
      }
    }
  }
`