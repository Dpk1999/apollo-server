import pubsub from '../pubsub';
import constant from '../../lib/constant';

export default {
  loginUser: async (parent, args, context) => {
    const { payload: { email, password } } = args;
    const { dataSources: { userAPI } } = context;
    const response = await userAPI.loginUser({ email, password });
    return response;
  },

  createUser: async (parent, args, context) => {
    const {
      user: {
        name, email, role, password,
      },
    } = args;
    console.log('args', args);
    const { dataSources: { userAPI } } = context;
    const response = await userAPI.createUser({
      name, email, role, password,
    });
    console.log(response.data);
    // console.log('before published');
    pubsub.publish(constant.subscriptions.USER_ADDED, { userAdded: response.data });
    // console.log('after published');
    return response.data;
  },

  updateUser: async (parent, args, context) => {
    const {
      user: {
        originalId, name, email,
      },
    } = args;
    console.log('at=', args);
    const { dataSources: { userAPI } } = context;
    const response = await userAPI.updateUser({
      originalId, name, email,
    });
    console.log(response);
    pubsub.publish(constant.subscriptions.USER_UPDATED, { userUpdated: response.data });
    return response.data;
  },

  deleteUser: async (parent, args, context) => {
    const { id } = args;
    console.log('args', args);
    const { dataSources: { userAPI } } = context;
    const response = await userAPI.deleteUser(id);
    pubsub.publish(constant.subscriptions.USER_DELETED, { userDeleted: response });
    return response;
  },
};
