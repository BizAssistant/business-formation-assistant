export const onRequestGet: PagesFunction = async (context) => {
  const { request, env } = context;
  const url = new URL(request.url);
  const key = url.searchParams.get('key');
  const object = await env.BIZASSIST_R2.get(key);

  if (object) {
    return new Response(object.body, {
      headers: { 'Content-Type': 'application/octet-stream' },
    });
  }
  return new Response('Not found', { status: 404 });
};
