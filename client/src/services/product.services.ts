import axios from 'axios';
import {Category} from './../types/types';

export async function getProducts(): Promise<{categories: Category[]}> {
  const response = await axios.post(
    '/graphql',
    {query: `{
      categories: productLists(ids: "156126", locale: de_DE) {
        name
        articleCount
        childrenCategories: childrenProductLists {
          list {
            name
            urlPath
          }
        }
        categoryArticles: articlesList(first: 50) {
          articles {
            name
            variantName
            prices {
              currency
              regular {
                value
              }
            }
            images(
              format: WEBP
              maxWidth: 200
              maxHeight: 200
              limit: 1
            ) {
              path
            }
          }
        }
      }
    }`},
    {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  return response.data.data;
}
