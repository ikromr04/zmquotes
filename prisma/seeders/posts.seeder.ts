import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const posts = [
  {
    title: 'Greenfield',
    slug: 'greenfield',
    src: 'uploads/images/posts/greenfield.jpg',
    description: 'A river with a green field and trees',
  }, {
    title: 'Paintbrushes',
    slug: 'paintbrushes',
    src: 'uploads/images/posts/paintbrushes.jpg',
    description: 'A paintbrushes with blue paint coming out of a green field',
  }, {
    title: 'Lake',
    slug: 'lake',
    src: 'uploads/images/posts/lake.jpg',
    description: 'A lake surrounded by trees and mountains',
  }, {
    title: 'Friendship',
    slug: 'friendship',
    src: 'uploads/images/posts/friendship.jpg',
    description: 'Two children holding hands in a grassy field',
  }, {
    title: 'Balance',
    slug: 'balance',
    src: 'uploads/images/posts/balance.jpg',
    description: 'A stack of rocks in water',
  }, {
    title: 'Dandelions',
    slug: 'dandelions',
    src: 'uploads/images/posts/dandelions.jpg',
    description: 'Dandelions with seeds flying in the air',
  }, {
    title: 'Drop',
    slug: 'drop',
    src: 'uploads/images/posts/drop.jpg',
    description: 'A water drop on a leaf',
  }, {
    title: 'Space',
    slug: 'space',
    src: 'uploads/images/posts/space.jpg',
    description: 'A planet in space with stars and a moon',
  }, {
    title: 'Peace',
    slug: 'peace',
    src: 'uploads/images/posts/peace.jpg',
    description: 'A white dove flying in the sky',
  },
];

export const seedPosts = async (): Promise<void> => {
  try {
    for (const post of posts) {
      await prisma.post.create({
        data: {
          title: post.title,
          slug: post.slug,
          src: post.src,
          description: post.description,
        }
      });
    }
    console.log('Posts seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding posts:', error);
  } finally {
    await prisma.$disconnect();
  }
};
