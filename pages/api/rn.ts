import { NextApiRequest, NextApiResponse } from 'next'
// import { verifyWebhookSignature } from '@graphcms/utils'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  // const body = {}; // Typically req.body
  // const signature = '...'; // Typically req.headers['gcms-signature']

  // const isValid = verifyWebhookSignature({ body, signature, secret });
  // const result = await fetch('webhook url di slack', { method: 'POST', body: JSON.stringify(oggettoPerSlack) })
  // const json = await result.json()

  res.status(200).json({
    body: req.body,
    query: req.query,
    cookies: req.cookies
  })
}
