import { NextApiRequest, NextApiResponse } from 'next'
import slackifyMarkdown from 'slackify-markdown'
import { verifyWebhookSignature } from '@graphcms/utils'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  const body = req.body
  const releaseData: ReleaseNote = body.data
  const signature = req.headers['gcms-signature']
  const secret = process.env.CMS_SIGNATURE
  const hasChanges = releaseData.breaking || releaseData.new || releaseData.fixes

  const changesTemplate = `This release includes:\n\n
  ${releaseData.breaking ? '✓ BREAKING CHANGES' : ''}
  ${releaseData.new ? '✓ NEW FEATURES' : ''}
  ${releaseData.fixes ? '✓ FIXES' : ''}
`

  const slackMessage = {
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: `✨ New release ${releaseData.tag || ''} ✨`,
          emoji: true
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `${slackifyMarkdown(releaseData.content || '') || ' '}`
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
            }).format(new Date(releaseData.releaseDate))}`,
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
