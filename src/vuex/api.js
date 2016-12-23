
import axios from 'axios';

// 使用代理
const HOST = 'http://api.douban.com/v2/';
// const HOST = '/api/';

const _get = (url) => {
  return new Promise((resolve, reject)=> {
    axios.get(HOST + url)
      .then(response => {
        resolve(response.data);
      })
  });
};

const _post = (url, params) => {
  return new Promise((resolve, reject)=> {
    axios.post(HOST + url, params)
      .then(response => {
        resolve(response.data);
      })
  });
};

/*
 *  豆瓣 Movie API https://developers.douban.com/wiki/?title=movie_v2
 */
/**
 * /v2/movie/subject/:id 单个电影条目信息。
 * @param id
 */
function fetchMovieById(id) {
  return _get(`movie/subject/${id}`);
}

/**
 * /v2/movie/search?q={text} 电影搜索api；
 * @param text
 * @param start
 */
function fetchSearchMovies(text, start=0) {
  let url = encodeURI(`movie/search?q=${text}&start=${start}`);
  return _get(url);
}

/**
 * /v2/movie/in_theaters 正在上映的电影；
 * @param start
 * @param count
 */
function fetchMoviesInTheaters(start=0, count=20) {
  return _get(`movie/in_theaters?start=${start}&count=${count}`);
}

/**
 * /v2/movie/coming_soon 即将上映的电影；
 * @param start
 * @param count
 */
function fetchMoviesComingSoon(start=0, count=20) {
  return _get(`movie/coming_soon?start=${start}&count=${count}`);
}







