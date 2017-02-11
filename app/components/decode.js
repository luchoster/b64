import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import Subheader from 'material-ui/Subheader'
import Paper from 'material-ui/Paper'
import Card from 'material-ui/Card'
import Divider from 'material-ui/Divider'

class Decode extends Component{
  constructor () {
    super()
    this.state = {
      decodedString: ''
    }
    this.handleDecode = this.handleDecode.bind(this)
  }
  handleDecode (event) {
    this.setState({decodedString: decodeURIComponent(escape(window.atob(event.target.value)))})
  }
  render () {
    return (
      <Card className='container'>
        <Subheader>B64 Decoder</Subheader>
        <Divider />
        <TextField
          multiLine={true}
          floatingLabelText='Text you want to Decode'
          onChange={this.handleDecode}
          fullWidth={true}
          rowsMax={8}
        />
        <TextField
          disabled={true}
          multiLine={true}
          rowsMax={8}
          floatingLabelText='Decoded Text'
          floatingLabelFixed={true}
          value={this.state.decodedString}
          fullWidth={true}
        />
      </Card>
    )
  }
}

export default Decode
