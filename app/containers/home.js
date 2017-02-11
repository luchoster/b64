import React, { Component } from 'react'
import R from 'ramda'
import { connect } from 'react-redux'
import { fetchPage } from '../actions/page'
import HomeComponent from '../components/home'

class Home extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        {/* {HomeComponent(this.props.page)} */}
        Hello World!
      </div>
    )
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Home)
export default Home
