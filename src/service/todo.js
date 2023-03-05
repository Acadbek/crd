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
  async update(id, title) {
    return await axios.put(`/data/${id}/`, { title })
  }
};

export default Service;