import React from 'react';

import * as Types from '../../shared/types';

interface TableProps {
  movies: Types.MovieProps[];
  callbackMethod: (Method: Types.MethodProps) => void;
}

const Table: React.FC<TableProps> = ({
  movies,
  callbackMethod
}: TableProps) => (
  <table data-testid="summaryTable">
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Episode number</th>
        <th scope="col">Description</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      {movies.map((data, idx) => (
        <tr key={idx}>
          <td data-label="Title">{data.title}</td>
          <td data-label="Episode number">{data.episode_number}</td>
          <td data-label="Description">{data.description}</td>
          <td data-label="Actions">
            <button
              onClick={() =>
                callbackMethod({ id: data.id, method: Types.Methods.Put })
              }
            >
              PUT
            </button>
            <button
              className="delete"
              onClick={() =>
                callbackMethod({
                  id: data.id,
                  method: Types.Methods.Delete
                })
              }
            >
              DELETE
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
