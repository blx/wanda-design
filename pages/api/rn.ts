import { NextApiRequest, NextApiResponse } from 'next'
import { verifyWebhookSignature } from '@graphcms/utils'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const body = req.body
  const signature = req.headers['gcms-signature']
  const secret = process.env.CMS_SIGNATURE

  const isValid = verifyWebhookSignature({ body, signature, secret })
  // const result = await fetch('webhook url di slack', { method: 'POST', body: JSON.stringify(oggettoPerSlack) })
  // const json = await result.json()

  if (isValid) {
    res.status(200).json({
      body: req.body,
      query: req.query,
      cookies: req.cookies
    })
  }
}
