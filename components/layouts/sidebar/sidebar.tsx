import './sidebar.scss';
import PostCard from '@/components/ui/post-card/post-card';
import { Post } from '@prisma/client';
import classNames from 'classnames';

async function Sidebar({
  className
}: {
  className?: string
}): Promise<JSX.Element> {
  const posts: Post[] = await fetch(`${process.env.APP_URL}/api/posts`, {
    next: { revalidate: 60 }
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to fetch posts');
      }
      return res.json();
    })
    .then(({ data }) => data);

  return (
    <aside className={classNames(className, 'sidebar')}>
      {posts.map((post) => <PostCard key={post.slug} post={post} />)}
    </aside>
  );
};

export default Sidebar;
