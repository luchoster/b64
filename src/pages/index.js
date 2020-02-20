import React from 'react'
import {
  CardHeader,
  GridList,
  GridListTile,
  Divider,
  TextField,
} from '@material-ui/core'
import Layout from '../components/layout'

export default () => {
  const [encodedString, encodeString] = React.useState('')
  const handleEncode = event => {
    encodeString(window.btoa(unescape(encodeURIComponent(event.target.value))))
  }
  return (
    <Layout>
      <div className="container">
        <Divider />
        <section className="showcase">
          <section className="nes-container with-title">
            <p className="title">Encode</p>
            <textarea
              className="nes-textarea mt-30"
              multiline
              placeholder="Text you want to Encode"
              onChange={handleEncode}
              fullWidth={true}
              rowsMax={8}
            />
            <textarea
              className="nes-textarea mt-30"
              disabled={true}
              multiline
              fullWidth
              rowsMax={8}
              placeholder="Encoded Text"
              value={encodedString}
            />
          </section>
        </section>
      </div>
    </Layout>
  )
}
