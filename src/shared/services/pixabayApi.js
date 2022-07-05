import axios from 'axios';

const pixabayApi = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '20753274-3f8d2754c12358a259804227b',
    orientation: 'horizontal',
    image_type: 'photo',
    per_page: 12,
  },
});

export const getPhoto = async (q, page = 1) => {
  const { data } = await pixabayApi('/', {
    params: {
      q,
      page,
    },
  });
  return data;
};
