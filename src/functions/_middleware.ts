export const onRequest: PagesFunction = async (context) => {
  const { request } = context;

  // Basic CORS
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'access-control-allow-origin': '*',
        'access-control-allow-methods': 'GET,POST,OPTIONS',
        'access-control-allow-headers': 'Content-Type',
      },
    });
  }

  const response = await context.next();

  const headers = new Headers(response.headers);
  headers.set('access-control-allow-origin', '*');
  headers.set('access-control-allow-methods', 'GET,POST,OPTIONS');
  headers.set('access-control-allow-headers', 'Content-Type');

  return new Response(response.body, {
    status: response.status,
    headers,
  });
};
