import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

export default {
  async fetch(request, env, context) {
    try {
      const response = await getAssetFromKV(event);
      return response;
    } catch (e) {
      return new Response('Not found', { status: 404 });
    }
  }
};
