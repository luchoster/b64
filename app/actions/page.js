import ApiRequest from '../lib/request'

const REQUEST_PAGE = 'REQUEST_PAGE'
const RECEIVE_PAGE = 'RECEIVE_PAGE'
const PAGES = 'pages'

const requestPage = () => ({type: REQUEST_PAGE})
const receivePage = value => ({type: RECEIVE_PAGE, value})

const fetchPage = ({query}) => (dispatch, getState) => {
  dispatch(requestPage())

  return ApiRequest
    .get(PAGES, {query})
    .then(pages => dispatch(receivePage(pages.data[0])))
}

module.exports = {
  REQUEST_PAGE,
  RECEIVE_PAGE,
  requestPage,
  receivePage,
  fetchPage
}
