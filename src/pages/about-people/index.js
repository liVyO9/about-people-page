import React from 'react'
// import { graphql } from 'gatsby'
import Layout from '../../components/Layout'

const AboutPeoplePage = (
//   {
//   data: {
//     allMarkdownRemark: { group },
//     site: {
//       siteMetadata: { title },
//     },
//   },
// }
) => (
  <Layout>
        <div className="aboutAKRA-container">
            <div className="text-part">tekst testowy</div>
            <div className="img-part">
                <img src="../../../static/img/europe-map.png" alt="zamiast zdjęcia"></img>
            </div>
        </div>
    </Layout> 
)

export default AboutPeoplePage

// export const tagPageQuery = graphql`
  // query TagsQuery {
  //   site {
  //     siteMetadata {
  //       title
  //     }
  //   }
  //   allMarkdownRemark(limit: 1000) {
  //     group(field: frontmatter___tags) {
  //       fieldValue
  //       totalCount
  //     }
  //   }
  // }
// `

