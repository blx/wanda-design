type PostType = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: {
    html: string;
    markdown: string;
  }
}
