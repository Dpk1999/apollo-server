export default {
  getMyProfile: async (parent, args, context) => {
    const response = await context.dataSources.userAPI.getMe();
    return { email: response.data[0].email };
  },
};
