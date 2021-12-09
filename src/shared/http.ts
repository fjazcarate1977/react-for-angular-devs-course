interface HttpResponse<T> extends Response {
  parsedBody?: T;
}

const http = async <T>(request: RequestInfo): Promise<HttpResponse<T>> => {
  const response: HttpResponse<T> = await fetch(request);

  try {
    (response.parsedBody as unknown) = await response.json();
  } catch (ex: any) {
    throw new Error(ex);
  }

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

export const get = async <T>(
  path: string,
  args: RequestInit = {
    method: 'get'
  }
): Promise<HttpResponse<T>> => await http<T>(new Request(path, args));

export const del = async <T>(
  path: string,
  args: RequestInit = {
    method: 'delete'
  }
): Promise<HttpResponse<T>> => await http<T>(new Request(path, args));

export async function put<T>(
  path: string,
  body: any,
  args: RequestInit = {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }
): Promise<HttpResponse<T>> {
  return await http<T>(new Request(path, args));
}
