import axios from './axios';

const Service = {
  async add(title) {
    return await axios.post('/data', { title })
  },
  async get() {
    return await axios.get('/data')
  },
  async remove(id) {
    return await axios.delete(`/data/${id}`)
  },
  async edit(todo) {
    return await axios.put(`/data`, { todo })
  }
};

export default Service;