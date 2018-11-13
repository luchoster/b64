import React, { Component } from 'react'
import {
  CardHeader,
  GridList,
  GridListTile,
  Divider,
  TextField,
} from '@material-ui/core'
import Layout from '../components/layout'

class Encode extends Component {
  state = {
    encodedString: '',
  }
  handleEncode = event => {
    this.setState({
      encodedString: window.btoa(
        unescape(encodeURIComponent(event.target.value))
      ),
    })
  }
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="row">
            <CardHeader title="Encode Page" />
          </div>
          <Divider />
          <GridList>
            <GridListTile cols={2} className="col mt-30">
              <TextField
                className="mt-30"
                multiline
                label="Text you want to Encode"
                onChange={this.handleEncode}
                fullWidth={true}
                rowsMax={8}
              />
              <TextField
                className="mt-30"
                disabled={true}
                multiline
                fullWidth
                rowsMax={8}
                label="Encoded Text"
                value={this.state.encodedString}
              />
            </GridListTile>
          </GridList>
        </div>
      </Layout>
    )
  }
}

export default Encode
