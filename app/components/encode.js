import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import Subheader from 'material-ui/Subheader'
import Card from 'material-ui/Card'
import Divider from 'material-ui/Divider'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import LockOutline from 'material-ui/svg-icons/action/lock-outline'
import LockOpen from 'material-ui/svg-icons/action/lock-open'


class Encode extends Component {
  constructor () {
    super()
    this.state = {
      encodedString: ''
    }
    this.handleEncode = this.handleEncode.bind(this)
  }
  handleEncode (event) {
    this.setState({encodedString: window.btoa(unescape(encodeURIComponent(event.target.value)))})
  }
  render () {
    return (
      <Card className='container'>
        <Subheader>B64 Encoder</Subheader>
        <Divider />
        <TextField
          multiLine={true}
          floatingLabelText='Text you want to Encode'
          onChange={this.handleEncode}
          fullWidth={true}
          rowsMax={8}
        />
        <TextField
          disabled={true}
          multiLine={true}
          rowsMax={8}
          floatingLabelText='Encoded Text'
          floatingLabelFixed={true}
          value={this.state.encodedString}
          fullWidth={true}
        />
      </Card>
    )
  }
}


export default Encode
