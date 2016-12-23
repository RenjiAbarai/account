import * as types from './types'

import axios from 'axios';

import resource from 'vue-resource';
import Vue from 'vue';
Vue.use(resource);
// 使用代理
// const HOST = 'http://api.douban.com/v2/';
const HOST = '/api/';

const _get = ({url, query}) => {
  let _url;
  if (query) {
    _url = HOST + url + '?' + query
  } else {
    _url = HOST + url
  }
  return new Promise((resolve, reject)=> {
    // axios.get(_url)
    Vue.http.jsonp(_url)
      .then(response => {
        resolve(response.data);
      })
  });
};


const _post = (url, params) => {
  return new Promise((resolve, reject)=> {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      })
  });
};
/**
 * top250
 */
export const fetchMovieTop = ({commit}, {start, count}) => {
  const url = 'movie/top250'
  const query = 'start=' + start + '&count=' + count;
  return _get({url, query}).then((data) => {
    //判断数据是否获取正确 if(res.success)
    return commit(types.DOUBAN_BOOK, data.subjects)
  })
}


export const fetchMovieData = ({commit}, {progress, refresh, start, count}) => {
  progress.$Progress.start();
  commit('updateLoadingState', false)
  commit('updateBusyState', true)

  const url = 'movie/top250'
  const query = 'start=' + start + '&count=' + count
  return _get({url, query}).then((data) => {
    commit('updateLoadingState', true)
    commit('updateBusyState', false)
    if (refresh === true) {
      commit('refreshData', data)
    } else {
      commit('addData', data)
    }
    progress.$Progress.finish()

  }).catch((ex) => {
    console.log(ex);
    commit('updateBystState', false)
    progress.$Progress.fail()
  })
}


