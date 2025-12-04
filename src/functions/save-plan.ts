// If using KV, bind it in wrangler.toml as BIZFORM_KV
// and add `env: { BIZFORM_KV: KVNamespace }` type if you use TypeScript types.

export const onRequestPost: PagesFunction<{
  BIZFORM_KV: KVNamespace;
}> = async (context) => {
  const { request, env } = context;

  try {
    const body = await request.json<any>();

    const id = body.id || crypto.randomUUID();
    const payload = {
      id,
      businessData: body.businessData ?? {},
      savedAt: new Date().toISOString(),
    };

    if (env.BIZFORM_KV) {
      await env.BIZFORM_KV.put(`plan:${id}`, JSON.stringify(payload));
    }

    return new Response(JSON.stringify(payload), {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'no-store',
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'Invalid JSON or storage error' }),
      {
        status: 400,
        headers: { 'content-type': 'application/json' },
      },
    );
  }
};

