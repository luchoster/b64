import Axios from 'axios'
import R from 'ramda'
import UrlMap from './request-map'

// Axios.defaults.baseURL = 'http://YOUR.URL/wp-json'

const parseQuery = R.curry( (url, query) => {
    const query_url = url.concat('?')
    const query_list = R.toPairs(query)
    const appendQuery = (acc, val) => {
      let lastChar = acc.charAt(acc.length - 1)
      if (lastChar === '?')
        return acc.concat(val[0], '=', val[1])
      else
        return acc.concat('&', val[0], '=', val[1])
    }

    return R.reduce(appendQuery, query_url, query_list)
})

const apiRequest = {
  get: (urlName, {query}) => {
    let url = UrlMap[urlName]
    if(query) url = parseQuery(url)(query)
    return Axios.get(url)
  }
}

export default apiRequest
