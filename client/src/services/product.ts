import axios from 'axios';

export async function getProducts(): Promise<any> {
  const response = await axios.post(
    '/graphql',
    {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );

  return response.data.data;
}
