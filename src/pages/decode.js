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
          <div className="row">
            <CardHeader title="Decode Page" />
          </div>
          <Divider />
          <GridList>
            <GridListTile cols={2} className="col mt-30">
              <TextField
                className="mt-30"
                label="Text you want to Decode"
                multiline
                rowsMax={7}
                value={this.state.stringToDecode}
                onChange={this.handleTranslation}
                fullWidth
              />
              <TextField
                className="mt-30"
                disabled
                label="Decoded Text"
                multiline
                rowsMax={7}
                value={this.state.decodedString}
                fullWidth
              />
            </GridListTile>
            <GridListTile className="col">
              <Button
                className="col-md-6 mt-30"
                raised
                color="primary"
                variant="contained"
                onClick={this.decodeString}
                disabled={R.isNil(this.state.stringToDecode) ? true : false}
              >
                Decode
              </Button>
            </GridListTile>
            <GridListTile className="col">
              <Button
                variant="contained"
                className="col-md-6 mt-30"
                raised
                color="secondary"
                onClick={this.clearInputs}
              >
                Reset
              </Button>
            </GridListTile>
          </GridList>
        </div>
      </Layout>
    )
  }
}

export default Decode
