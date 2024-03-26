import prisma from '@/lib/prisma';

export async function GET() {
  const data = await prisma.post.findMany({
    orderBy: {
      title: 'asc',
    },
  });

  return Response.json({ data });
};
