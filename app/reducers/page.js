import R from 'ramda'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_PAGE':
        return R.merge(state, action.value)

    default:
      return state

  }
}

export default reducer
