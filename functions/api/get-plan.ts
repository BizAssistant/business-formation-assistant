export const onRequestGet: PagesFunction<{
  BIZFORM_KV: KVNamespace;
}> = async (context) => {
  const { request, env } = context;
  const url = new URL(request.url);
  const id = url.searchParams.get('id');

  if (!id) {
    return new Response(
      JSON.stringify({ error: 'Missing id parameter' }),
      {
        status: 400,
        headers: { 'content-type': 'application/json' },
      },
    );
  }

  if (!env.BIZFORM_KV) {
    return new Response(
      JSON.stringify({ error: 'KV not configured' }),
      {
        status: 500,
        headers: { 'content-type': 'application/json' },
      },
    );
  }

  const stored = await env.BIZFORM_KV.get(`plan:${id}`);

  if (!stored) {
    return new Response(
      JSON.stringify({ error: 'Plan not found' }),
      {
        status: 404,
        headers: { 'content-type': 'application/json' },
      },
    );
  }

  return new Response(stored, {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'no-store',
    },
  });
};
