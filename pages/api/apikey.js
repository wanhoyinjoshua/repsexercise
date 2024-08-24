// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const apiKey = process.env.API_KEY;
export default function handler(req, res) {
    res.status(200).json({ key: apiKey })
  }
  