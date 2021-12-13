import { parseMovie } from '../../shared/utils';

import mockData from './db.json';

const { movies } = mockData;
let index: number;

test('Parse Movie Utility', () => {
  index = 1;
  expect(parseMovie(movies, index)).toStrictEqual({
    ...movies[index - 1],
    title: 'Put clicked'
  });
});

test('Parse Movie Utility empty object', () => {
  index = movies.length + 1;
  expect(parseMovie(movies, index)).toStrictEqual({});
});
