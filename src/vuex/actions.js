import * as types from './mutation-types'
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

const douban_api = "https://api.douban.com"

const _get = ({url, query}) => {
  let _url;
  if (query) {
    _url = douban_api + url + '?' + query
  } else {
    _url = douban_api + url
  }
  return Vue.http.jsonp(_url)
  // .then((req) => {
  //
  // })
  // .catch((error) => {
  //   Promise.reject(new Error(error))
  // })
}

const _post = (url, params) => {
  return Vue.http.jsonp(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    params: params
  })
}
/**
 * top250
 */
export const fetchMovieTop = ({commit}, {start, count}) => {
  const url = '/v2/movie/top250'
  const query = 'start=' + start + '&count=' + count;
  return _get({url, query}).then((res) => {
    //判断数据是否获取正确 if(res.success)
    console.log(111)
    return commit(types.DOUBAN_BOOK, res.body.subjects)
  })
}


export const fetchMovieData = ({commit}, {progress, refresh, start, count}) => {
  progress.$Progress.start();
  commit('updateLoadingState', false)
  commit('updateBusyState', true)

  const url = '/v2/movie/top250'
  const query = 'start=' + start + '&count=' + count
  return _get({url, query}).then((res) => {
    let json = res.body.subjects;
    commit('updateLoadingState', true)
    commit('updateBusyState', false)
    if (refresh === true) {
      commit('refreshData', json)
    } else {
      commit('addData', json)
    }
    progress.$Progress.finish()

  }).catch((ex) => {
    console.log(ex);
    commit('updateBystState', false)
    progress.$Progress.fail()
  })
}


