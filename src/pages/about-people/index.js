import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
        <Layout>
            <div>
                <h1>NASZ ZESPÓŁ</h1>
            </div>
        </Layout>
    )
  }
}
