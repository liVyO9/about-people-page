import React from 'react'
// import Link from 'gatsby'
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        title: "O nas",
        people_arr: ["Bartosz", "Magda", "Ania"]
    }
  }

  PersonTemplate(person){

  }

  render() {
    return (
        <Layout>
            <section className="section section--gradient">
                <div className="container">
                    <div className="section">
                        <div className="content">
                            <div className="title">
                                <h1>{this.state.title}</h1>
                            </div>
                            <div className="content">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
  }
}
