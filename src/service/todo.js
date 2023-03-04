import axios from './axios';

const Service = {
  add(todo) {
    return axios.post('/data', { todo })
  },
  get() {
    return axios.get('/data')
  }
};

export default Service;