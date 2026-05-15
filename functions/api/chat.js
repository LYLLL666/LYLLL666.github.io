export async function onRequestPost(context) {

  const res = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "sk-1f50671c6d4347acba71ae2b2e0e9081"
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [
        {
          role: "user",
          content: (await context.request.json()).message
        }
      ]
    })
  });

  const data = await res.json();

  return new Response(JSON.stringify(data));
}
