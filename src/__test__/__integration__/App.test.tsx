import App from '../../App';

import { render, waitFor, act, screen } from '@testing-library/react';

import mockData from './db.json';

const { movies } = mockData;

describe('<Home />', () => {
  let originFetch: unknown;
  beforeEach(() => {
    originFetch = (global as any).fetch;
  });
  afterEach(() => {
    (global as any).fetch = originFetch;
  });

  it('Mixed Up, Shook Up Girl', async () => {
    const fakeResponse = movies;
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes as any);
    (global as any).fetch = mockedFetch;
    await act(async () => {
      render(<App />);

      const summaryTable = screen.getByTestId('summaryTable');

      await waitFor(() => [
        expect(summaryTable).toHaveTextContent(
          'Star Wars: Episode I - The Phantom Menace'
        ),
        expect(mockedFetch).toBeCalledTimes(1),
        expect(mRes.json).toBeCalledTimes(1)
      ]);
    });
  });
});
