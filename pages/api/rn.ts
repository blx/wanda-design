import { NextApiRequest, NextApiResponse } from 'next'
import slackifyMarkdown from 'slackify-markdown'

// import { verifyWebhookSignature } from '@graphcms/utils'

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  // const body = req.body
  // const signature = req.headers['gcms-signature']
  // const secret = process.env.CMS_SIGNATURE
  const fixture = {
    operation: 'publish',
    data: {
      __typename: 'ReleaseNote',
      breaking: "* **ThemeSwitch** has been removed after the deprecation period\n* **Presence** has been deprecated in favour of [`OverlayContainer`](/components/layouts/overlay-container/)\n* Fluid typography has been replaced with a responsive system. `fluid` property now becomes `responsive`\n* The **Modal** component has been completely refactored. [See documentation](/components/dialogs/modal/).\n* Removed transformation for the `inset` CSS property due to instability. You have to write ol' good long-hand properties.\n* **title:** Trim top leading. Margins and padding are now more precise when `Title` is the first child.\n* PostCSS 8+ is now required.\n* Update vibrancy mixin to provide only the `backdrop-filter` style. Foreground and background colors are not provided anymore with this mixin. [More info](/develop/global-styles/#vibrancy).\n* Renamed `--allow-motion` custom media query into `--motion` to keep consistency with other media queries.",
      content: null,
      createdAt: '2021-12-28T11:36:55.137527+00:00',
      createdBy: {
        __typename: 'User',
        id: 'ckwca6d6p4arp01w3485d5kyr'
      },
      fixes: null,
      id: 'ckxq1b1zsvqqc0b05evolce5f',
      new: '* **tooltip:** Add `interactive` property to enable interactions with the tooltip.',
      publishedAt: '2021-12-29T15:02:02.363395+00:00',
      publishedBy: {
        __typename: 'User',
        id: 'ckwca6d6p4arp01w3485d5kyr'
      },
      releaseDate: '2021-12-17',
      scheduledIn: [],
      stage: 'PUBLISHED',
      tag: 'v2.40',
      updatedAt: '2021-12-28T11:36:55.137527+00:00',
      updatedBy: {
        __typename: 'User',
        id: 'ckwca6d6p4arp01w3485d5kyr'
      }
    }
  }
  const hasChanges = fixture.data.breaking || fixture.data.new || fixture.data.fixes
  const changesTemplate = `This release includes:\n\n
  ${fixture.data.breaking ? '✓ BREAKING CHANGES' : ''}
  ${fixture.data.new ? '✓ NEW FEATURES' : ''}
  ${fixture.data.fixes ? '✓ FIXES' : ''}
`

  const slackMessage = {
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: `✨ New release ${fixture.data.tag || ''} ✨`,
          emoji: true
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `${slackifyMarkdown(fixture.data.content || '') || ' '}`
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
            }).format(new Date(fixture.data.releaseDate))}`,
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

  // const isValid = verifyWebhookSignature({ body, signature, secret })
  await fetch(process.env.SLACK_HOOK, {
    method: 'POST',
    body: JSON.stringify(slackMessage)
  }).then(() => res.status(200).json(slackMessage))
  // const json = await result.json()

  // if (isValid) {
  //   res.status(200).json({
  //     body: req.body
  //   })
  // }
}
