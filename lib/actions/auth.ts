'use server';

import { User } from '@prisma/client';
import prisma from '../prisma';

export const registerUser = async (user: Omit<User, 'id' | 'image' | 'emailVerified'>): Promise<void> => {
  await prisma.user.create({
    data: user,
  });
};
