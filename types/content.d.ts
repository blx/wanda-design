type AuthorType = {
  id: string
  fullName: string;
  role: string;
  favouriteColor: {
    rgba: {
      r: number;
      g: number;
      b: number
    }
  };
  avatar: {
    'url': string
  }
}

type PostType = {
  id: string;
  updatedAt: string;
  publishedAt: string;
  createdAt: string;
  title: string;
  slug: string;
  externalUrl?: string;
  excerpt: string;
  content: string;
  authors?: AuthorType[];
}

type PostsType = PostType[]
