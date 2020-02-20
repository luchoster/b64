import * as R from 'ramda'
import React from 'react'
import {
  Button,
  Divider,
  CardHeader,
  GridList,
  GridListTile,
  TextField,
} from '@material-ui/core'

import Layout from '../components/layout'

class Decode extends React.Component {
  state = {
    decodedString: '',
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.window = window
    }
  }

  clearInputs = () =>
    this.setState({
      decodedString: '',
      stringToDecode: '',
    })

  handleTranslation = e =>
    this.setState({
      stringToDecode: e.target.value,
    })

  decodeString = () =>
    this.setState({
      decodedString: decodeURIComponent(
        escape(this.window.atob(this.state.stringToDecode))
      )
        ? decodeURIComponent(
            escape(this.window.atob(this.state.stringToDecode))
          )
        : 'Not a Valid base64 text.',
    })

  render() {
    return (
      <Layout>
        <div className="container">
          <Divider />
          <section className="showcase">
            <section className="nes-container with-title">
              <p className="title">Decode</p>
              <textarea
                className="nes-textarea mt-30"
                placeholder="Text you want to Decode"
                multiline
                rowsMax={7}
                value={this.state.stringToDecode}
                onChange={this.handleTranslation}
                fullWidth
              />
              <textarea
                className="nes-textarea mt-30"
                disabled
                placeholder="Decoded Text"
                multiline
                rowsMax={7}
                value={this.state.decodedString}
                fullWidth
              />
              <div className="buttons-container item mt-30">
                <button
                  className={`col-md-6 nes-btn primary ${
                    R.isNil(this.state.stringToDecode) ? 'is-disabled' : ''
                  }`}
                  onClick={this.decodeString}
                >
                  Decode
                </button>
                <button
                  className="col-md-6 nes-btn is-error"
                  onClick={this.clearInputs}
                >
                  Reset
                </button>
              </div>
            </section>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Decode
