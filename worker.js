import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

export default {
  async fetch(request, env, ctx): Promise<Response> {
    const url = new URL(request.url);

    // Handle API routes
    if (url.pathname.startsWith('/api/upload')) {
      if (request.method === 'POST') {
        const formData = await request.formData();
        const file = formData.get('file') as File;
        const key = `uploads/${file.name}`;

        await env.MY_BUCKET.put(key, file.stream());
        return new Response(JSON.stringify({ key }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      return new Response('Method Not Allowed', { status: 405 });
    }

    if (url.pathname.startsWith('/api/download')) {
      const key = url.searchParams.get('key');
      const object = await env.MY_BUCKET.get(key);
      if (object) {
        return new Response(object.body, {
          headers: { 'Content-Type': 'application/octet-stream' },
        });
      }
      return new Response('Not found', { status: 404 });
    }

    // Serve static assets (from KV or Pages)
    try {
      return await getAssetFromKV({
        request,
        waitUntil: ctx.waitUntil.bind(ctx),
      });
    } catch (e) {
      return new Response('Not found', { status: 404 });
    }
  },
} satisfies ExportedHandler;
