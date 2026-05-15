export async function onRequestPost() {

  return new Response(JSON.stringify({
    ok: true,
    msg: "Functions is working"
  }), {
    headers: {
      "Content-Type": "application/json"
    }
  });

}
