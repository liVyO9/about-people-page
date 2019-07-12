import React from 'react'
import PropTypes from 'prop-types'
import graphql from 'gatsby'
import Layout from '../components/Layout'
import Img from 'gatsby-image'

export const AboutPersonTemplate = ({
    name,
    image,
    desc1,
    desc2
}) =>{
    return (
        <div>
            <div>
                <div>
                    {name}
                </div>
                <div>
                    {image.childImageSharp ? <Img fluid={{...image.childImageSharp.fluid, sizes: '(max-width: 512px) 20vw, (max-width: 768px) 35vw, 430px'}} alt='' /> : ""}
                </div>
            </div>
            <div>
                <div>
                    {desc1}
                </div>
                <div>
                    {desc2}
                </div>
            </div>
        </div>
    )
}

AboutPersonTemplate.propTypes = {
    name: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    desc1: PropTypes.string,
    desc2: PropTypes.string,
}

const AboutPerson = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return(
        <Layout>
            <AboutPersonTemplate
            name={frontmatter.name}
            image={frontmatter.image}
            desc1={frontmatter.desc1}
            desc2={frontmatter.desc2}
            />
        </Layout>
    )
}

AboutPerson.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default AboutPeople 

export const aboutPersonQuery = graphql`
query PersonPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        name
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