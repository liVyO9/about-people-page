import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Img from 'gatsby-image'

export const AboutPersonTemplate = ({
    title,
    image,
    desc1,
    desc2
}) =>{
    return (
        <div className="container">
            <div className="aboutAKRA-container">
                <div className="aboutPerson-title">
                    <div className="aboutPerson-img">
                        {image.childImageSharp ? <Img fluid={{...image.childImageSharp.fluid, sizes: '(max-width: 512px) 20vw, (max-width: 768px) 35vw, 430px'}} alt='' /> : ""}
                    </div>
                    <div>
                        <div className="aboutPerson-name">
                            {title}
                        </div>
                        <div className="aboutPerson-desc1">
                            {desc1}
                        </div>
                    </div>
                </div>
                <div className="aboutPerson-desc2">
                    {desc2}            
                </div>
            </div>
        </div>
    )
}

AboutPersonTemplate.propTypes = {
    title: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    desc1: PropTypes.string,
    desc2: PropTypes.string,
}

const AboutPersonPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return(
        <Layout>
            <AboutPersonTemplate
            title={frontmatter.title}
            image={frontmatter.image}
            desc1={frontmatter.desc1}
            desc2={frontmatter.desc2}
            />
        </Layout>
    )
}

AboutPersonPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default AboutPersonPage

export const aboutPersonPageQuery = graphql`
query AboutPersonPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
            childImageSharp {
              fluid(maxWidth: 600, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        desc1
        desc2
      }
    }
  }
`