import { RESTDataSource } from 'apollo-datasource-rest';
import config from '../config/configurations';

export class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${config.serviceUrl}/api/user`;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.user);
  }

  getMe() {
    return this.get('/me');
  }

  async loginUser(payload) {
    return this.post('/createToken', payload);
  }

  async updateTrainee(payload) {
    return this.put('/', payload);
  }

  async deleteTrainee(id) {
    return this.delete(`/${id}`);
  }
}
