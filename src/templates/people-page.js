import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Img from 'gatsby-image'

export const PeoplePageTemplate = ({
  title,
  info,
}) =>{
    return(
        <div className="container">
            <div className="aboutAKRA-container">
                <div className="aboutAKRA-container-title">
                    {title}
                </div>
                <div className="aboutAKRA-container-description">
                    <div className="aboutAKRA-container text-part">
                        <div>{info.description1}</div>
                        <div>{info.description2}</div>
                        <div>{info.description3}</div>
                    </div>
                    <div className="aboutAKRA-container img-part">
                        {info.image.childImageSharp ? <Img fluid={{...info.image.childImageSharp.fluid, sizes: '(max-width: 512px) 20vw, (max-width: 768px) 35vw, 430px'}} alt='' /> : ""
}                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

PeoplePageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    info: PropTypes.object,
}

const PeoplePage = ({data}) =>{
    const { frontmatter } = data.markdownRemark

    return(
        <Layout>
            <PeoplePageTemplate
            title={frontmatter.title}
            info={frontmatter.info}
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
        info{
            image {
                childImageSharp {
                  fluid(maxWidth: 600, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            description1
            description2
            description3
        }
      }
    }
  }
`