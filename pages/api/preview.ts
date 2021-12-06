import { getPostDetailsBySlug } from '@/api/queries'

const preview = async (req: Record<string, any>, res: Record<string, any>) => {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  const invalidRequest = !req.query.slug
  if (invalidRequest) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  const post = await getPostDetailsBySlug(req.query.slug)

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!post) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({
    maxAge: 60 * 60 // The preview mode cookies expire in 1 hour
  })

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: `/posts/${post.slug}` })
  return res.end('Preview mode enabled')
}

export default preview
