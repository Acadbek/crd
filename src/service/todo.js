import axios from './axios';

const Service = {
  async add(title) {
    return await axios.post('/product', { title })
  },
  async get() {
    return await axios.get('/products')
  },
  async remove(id) {
    return await axios.delete(`/products/${id}`)
  },
  async update(id, title) {
    return await axios.put(`/products/${id}/`, { title })
  }
};

export default Service;