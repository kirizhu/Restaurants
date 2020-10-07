import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer A29qfXYoTftS-VtxuxymThmrx5aymBdfCbun0fnXKBlEIvAUPU_iq1Yn5IglXkQsNd1JOfXV0wq37RTkE8K3cgmbU0DiiDtFAI94kZAVf46siUVzX5nx02Mj35R9X3Yx',
  },
});
