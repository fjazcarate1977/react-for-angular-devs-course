import React, { useEffect, useState } from 'react';

import * as Molecules from '../../molecules';

import * as Http from '../../shared/http';
import * as Types from '../../shared/types';
import * as Constants from '../../shared/constants';
import * as Utils from '../../shared/utils';

const Summary: React.FC = () => {
  const [movies, setMovies] = useState<Types.MovieProps[]>([]);

  const getAllGuide = async (): Promise<void> => {
    const res = await Http.get<Types.MovieProps[]>(Constants.URI);
    const { parsedBody } = res;
    if (parsedBody) {
      setMovies(parsedBody);
    }
  };

  useEffect(() => {
    getAllGuide() as unknown;
  }, []);

  const execMethod = async (Method: Types.MethodProps): Promise<void> => {
    if (Method.method === Types.Methods.Put) {
      const newData = Utils.parseMovie(movies, Method.id);
      await Http.put(`${Constants.URI}/${Method.id}`, newData);
    } else if (Method.method === Types.Methods.Delete) {
      await Http.del(`${Constants.URI}/${Method.id}`);
    }
    await getAllGuide();
  };

  return (
    <Molecules.Table
      callbackMethod={(Method) => execMethod(Method)}
      movies={movies}
    />
  );
};

export default Summary;
