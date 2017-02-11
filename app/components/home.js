import React from 'react'

const HomeComponent = (props) => {
  if (props.id) {
    return(
      <div>
        <h1>{props.title.rendered}</h1>
      </div>
    )
  }

}

export default HomeComponent
