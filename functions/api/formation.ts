export const onRequestPost: PagesFunction = async (context) => {
  const { request, env } = context;
  const body = await request.json();

  const res = await fetch('https://api.formation-partner.com/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${env.FORMATION_API_KEY}`,
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: { 'Content-Type': 'application/json' },
  });
};
