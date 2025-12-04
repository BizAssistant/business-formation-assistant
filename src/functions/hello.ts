export const onRequestGet: PagesFunction = async (context) => {
  return new Response(
    JSON.stringify({ ok: true, message: 'BizForm API alive' }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'no-store',
      },
    },
  );
};
