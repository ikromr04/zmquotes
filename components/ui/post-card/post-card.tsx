import './post-card.scss';
import { Post } from '@prisma/client';
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import fs from 'node:fs/promises';
import classNames from 'classnames';

async function PostCard({
  post,
  className,
}: {
  post: Post
  className?: string
}): Promise<JSX.Element> {
  const buffer = await fs.readFile(`./public/${post.src}`);
  const { base64 } = await getPlaiceholder(buffer);

  return (
    <article className={classNames(className, 'post-card')}>
      <h2 className="visually-hidden">{post.title}</h2>

      <div className="post-card__image">
        <Image
          src={`/${post.src}`}
          fill
          alt={post.description}
          placeholder="blur"
          blurDataURL={base64} />
      </div>
    </article>
  );
};

export default PostCard;
