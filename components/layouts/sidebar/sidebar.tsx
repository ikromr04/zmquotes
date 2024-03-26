import PostCard from '@/components/ui/post-card/post-card';
import { Post } from '@prisma/client';

const getPosts = async (): Promise<Post[]> => {
  const res = await fetch(`${process.env.API_URL}/posts`, {
    next: { revalidate: 60 }
  });

  if (!res.ok)
    throw new Error('Failed to fetch posts');
  const data = await res.json();
  return data.data;
};

async function Sidebar(): Promise<JSX.Element> {
  const posts = await getPosts();

  return (
    <aside>
      {posts.map((post) => <PostCard key={post.slug} post={post} />)}
    </aside>
  );
};

export default Sidebar;
