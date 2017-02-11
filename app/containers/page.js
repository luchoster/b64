import React, { Component } from 'react'
import R from 'ramda'
import { connect } from 'react-redux'
import { fetchPage } from '../actions/page'
import PageComponent from '../components/page'

class Page extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const query = {slug: this.props.params.pageSlug}
    this.props.onMount({query})
  }

  componentWillReceiveProps(props) {
    if (props.params.pageSlug !== this.props.params.pageSlug) {
      const query = {slug: props.params.pageSlug}
      this.props.onMount({query})
    }
  }

  render() {
    return (
      <div>
        {PageComponent(this.props.page)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  page: R.path(['page'])(state)
})


const mapDispatchToProps = dispatch => ({
  onMount: ({query}) => {
    dispatch(fetchPage({query}))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Page)
