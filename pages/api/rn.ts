import { NextApiRequest, NextApiResponse } from 'next'
import slackifyMarkdown from 'slackify-markdown'
import { verifyWebhookSignature } from '@graphcms/utils'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const body = req.body
  const signature = req.headers['gcms-signature']
  const secret = process.env.CMS_SIGNATURE
  const hasChanges = body.data.breaking || body.data.new || body.data.fixes

  const changesTemplate = `This release includes:\n\n
  ${body.data.breaking ? '✓ BREAKING CHANGES' : ''}
  ${body.data.new ? '✓ NEW FEATURES' : ''}
  ${body.data.fixes ? '✓ FIXES' : ''}
`

  const slackMessage = {
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: `✨ New release ${body.data.tag || ''} ✨`,
          emoji: true
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `${slackifyMarkdown(body.data.content || '') || ' '}`
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: hasChanges ? slackifyMarkdown(changesTemplate) : ' '
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: '<https://design.wonderflow.ai/release-notes|Full release notes >'
        }
      },
      {
        type: 'divider'
      },
      {
        type: 'context',
        elements: [
          {
            type: 'plain_text',
            text: `Released on ${new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }).format(new Date(body.data.releaseDate))}`,
            emoji: true
          },
          {
            type: 'mrkdwn',
            text: 'design.wonderflow.ai'
          }
        ]
      }
    ]
  }

  const isValid = verifyWebhookSignature({ body, signature, secret })
  if (isValid) {
    await fetch(process.env.SLACK_HOOK, {
      method: 'POST',
      body: JSON.stringify(slackMessage)
    }).then(() => res.status(200).json(slackMessage))
  }
}
