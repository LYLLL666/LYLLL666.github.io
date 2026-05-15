export async function onRequestPost(context) {

  const res = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer sk-你的Key写这里"
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
