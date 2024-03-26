import { Post } from '@prisma/client';

function PostCard({
  post
}: {
  post: Post
}): JSX.Element {
  return (
    <article>
      <h2>{post.title}</h2>
    </article>
  );
};

export default PostCard;
