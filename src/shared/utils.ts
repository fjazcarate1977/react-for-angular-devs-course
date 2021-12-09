import * as Types from './types';

export const parseMovie = (
  movies: Types.MovieProps[],
  id: number
): Types.MovieProps | {} => {
  const movie = movies.find((data) => data.id === id);
  return movie ? { ...movie, title: 'Put clicked' } : {};
};
