import React from 'react'

const Page = (props) => {
  if (props.id) {
    return(
      <div>
        <h1>{props.title.rendered}</h1>
      </div>
    )
  } else {
    return(
      <img src='./public/img/loading.gif' />
    )
  }
}

export default Page
