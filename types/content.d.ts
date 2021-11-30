type PostType = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  updatedAt: string;
  content?: {
    html: string;
    markdown: string;
  }
}
