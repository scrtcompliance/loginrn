export async function onRequestPost({ request, env }) {
  const { nama, email } = await request.json();

  await env.DB.prepare(
    "INSERT INTO pendaftar (nama, email) VALUES (?1, ?2)"
  ).bind(nama, email).run();

  return new Response("Data berhasil disimpan!");
}
