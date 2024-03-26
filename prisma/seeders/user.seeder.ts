import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const users = [
  {
    id: 1,
    name: 'Admin',
    email: 'admin@zm.com',
    email_verified_at: '2023-12-15 06:10:59',
    password: '$2y$10$s0rzlg5G73PceBZ3q5gipuxQsHbxkZORgmR2y2HkLdwt1qQUJfcWG',
    avatar: null,
    role: 'admin',
    remember_token: null,
    created_at: '2023-12-15 06:10:59',
    updated_at: '2023-12-18 06:40:54'
  },
  {
    id: 5,
    name: 'Nzan Kikon',
    email: 'nzanokhars@gmail.com',
    email_verified_at: '2024-01-13 10:11:59',
    password: '$2y$10$Fyael3bzwDooNzgT4mhJL.Cj1e56S4C0dPDKtMiI6WpcaLD63HC\\/S',
    avatar: null,
    role: 'user',
    remember_token: null,
    created_at: '2024-01-10 06:54:09',
    updated_at: '2024-01-13 10:11:59'
  },
  {
    id: 6,
    name: 'Daler',
    email: 'mayunusovdaler@gmail.com',
    email_verified_at: '2024-01-10 19:58:41',
    password: '$2y$10$zBhEYofPVjiUQBRcz6gwkuAoA3iUbFJrRdUXyhuG1X3xKRblUJ.b6',
    avatar: null,
    role: 'user',
    remember_token: null,
    created_at: '2024-01-10 19:58:10',
    updated_at: '2024-01-10 19:58:41'
  },
  {
    id: 7,
    name: 'Abdul Wahid Khan',
    email: 'abdul@evolet.in',
    email_verified_at: '2024-01-12 06:21:13',
    password: '$2y$10$CD5\\/WZlvhzAIByxjCml71e.Pb3I2KS8WHq2aO5HPbKKf3osLkPtd.',
    avatar: null,
    role: 'user',
    remember_token: null,
    created_at: '2024-01-12 06:18:02',
    updated_at: '2024-01-12 06:21:13'
  },
  {
    id: 14,
    name: 'Khayriddin',
    email: 'khayriddin.boev@gmail.com',
    email_verified_at: '2024-01-13 08:50:01',
    password: '$2y$10$xCUsAM25Fl0N3HlUiK92\\/.MlDh8YZfdBx2iW1TINc0z\\/EK6jkokXa',
    avatar: '\\/images\\/users\\/65a251f3c8f5a.jpg',
    role: 'user',
    remember_token: null,
    created_at: '2024-01-13 08:48:37',
    updated_at: '2024-01-13 09:03:47'
  },
  {
    id: 15,
    name: 'Shyam lal sharma',
    email: 'shyamlalsharma327@gmail.com',
    email_verified_at: '2024-01-18 00:15:25',
    password: '$2y$10$DUo\\/gOqugVeMbpYXsZApAORSOGsNT3v7husnbbtYHIJjb9VHZIwQC',
    avatar: null,
    role: 'user',
    remember_token: null,
    created_at: '2024-01-18 00:14:00',
    updated_at: '2024-01-18 00:15:25'
  },
  {
    id: 16,
    name: 'Yasit',
    email: 'awany2109@gmail.com',
    email_verified_at: null,
    password: '$2y$10$cTZtbltQRYCkllPqJHoz4ujnyMXCY5gXqOV9MZZkWdc2xUYKrguN6',
    avatar: null,
    role: 'user',
    remember_token: null,
    created_at: '2024-01-18 16:27:05',
    updated_at: '2024-01-18 16:27:05'
  },
  {
    id: 20,
    name: 'Bhuvanesh MS',
    email: 'msbhuvanesh6@gmail.com',
    email_verified_at: null,
    password: '$2y$10$SNJbh0XRLZ1NAwWtkKG3uebPPLBN1\\/K7IAbUT4HiThtaAN.ptVh1i',
    avatar: null,
    role: 'user',
    remember_token: null,
    created_at: '2024-01-22 19:35:43',
    updated_at: '2024-01-22 19:35:43'
  },
  {
    id: 21,
    name: 'ZM',
    email: 'zafar.mirzoev@yahoo.com',
    email_verified_at: '2024-01-22 20:47:21',
    password: '$2y$10$fwOFJA3ADh4qz7WAOQkvGuk3o9i8lm0.DPBqQxdKPQKZI5tVSjIfK',
    avatar: null,
    role: 'user',
    remember_token: null,
    created_at: '2024-01-22 20:25:53',
    updated_at: '2024-01-22 20:47:21'
  },
  {
    id: 22,
    name: 'viresh amin',
    email: 'viramin89@gmail.com',
    email_verified_at: null,
    password: '$2y$10$ODbcy5R6yjp5p.\\/2mut4f.I2LjaDKUjqdp9XMLCWoe7n5JMttjQYi',
    avatar: null,
    role: 'user',
    remember_token: null,
    created_at: '2024-01-23 00:15:12',
    updated_at: '2024-01-23 00:15:12'
  },
  {
    id: 23,
    name: 'Muhammad Tayyab',
    email: 'chaudhryhanzalah3@gmail.com',
    email_verified_at: null,
    password: '$2y$10$aHHjhCGhWWUpLTVaMLeNMOZWBGOdLb.LQsfRLkALhKE8Iij8sUgSK',
    avatar: null,
    role: 'user',
    remember_token: null,
    created_at: '2024-01-23 10:59:25',
    updated_at: '2024-01-23 10:59:25'
  },
  {
    id: 24,
    name: 'JOSEPH OUMA',
    email: 'ajoseadongo254@gmail.com',
    email_verified_at: null,
    password: '$2y$10$ID\\/QYwg17JIZuqE89m4xY.UQ9Al9r84AxSIbopUha.eg\\/96iYIsr2',
    avatar: null,
    role: 'user',
    remember_token: null,
    created_at: '2024-01-23 14:18:16',
    updated_at: '2024-01-23 14:18:16'
  },
  {
    id: 26,
    name: 'Anvar',
    email: 'math_5@mail.ru',
    email_verified_at: '2024-02-07 10:42:02',
    password: '$2y$10$wh\\/Rgh.zkP7UJ7cra9wA3.0jZKgFS5Heg2BAgndyECUatvs1ZGUVS',
    avatar: '\\/images\\/users\\/65c35e976f041.png',
    role: 'user',
    remember_token: null,
    created_at: '2024-01-24 08:30:41',
    updated_at: '2024-02-07 10:42:31'
  },
  {
    id: 27,
    name: 'Samuel',
    email: 'samuelssonko15@gmail.com',
    email_verified_at: null,
    password: '$2y$10$clZ4JeXdVsd77sc4rFeNA.bnWqJzi1cjcf85IyPowvPsL45CM2uJS',
    avatar: null,
    role: 'user',
    remember_token: null,
    created_at: '2024-01-24 09:44:26',
    updated_at: '2024-01-24 09:44:26'
  },
  {
    id: 28,
    name: 'Aziz J',
    email: 'madtj@mail.ru',
    email_verified_at: null,
    password: '$2y$10$ME4xpOT7ehq8uBg8uAKIkepWrahn4\\/\\/HRWarYD.OnHjEIlbcn4a5q',
    avatar: null,
    role: 'user',
    remember_token: null,
    created_at: '2024-01-25 05:19:08',
    updated_at: '2024-01-25 05:19:08'
  },
  {
    id: 29,
    name: 'Bakhora',
    email: 'mirzoeva_bakhora@mail.ru',
    email_verified_at: null,
    password: '$2y$10$kshax8dXYKjO6WCM2KErVeqiplxJE7g0WlDm7Pr54ZigbimQhRvni',
    avatar: null,
    role: 'user',
    remember_token: null,
    created_at: '2024-01-25 14:24:34',
    updated_at: '2024-01-25 14:24:34'
  },
  {
    id: 30,
    name: 'Kanona',
    email: 'mkanona@mail.ru',
    email_verified_at: null,
    password: '$2y$10$H8FjouJ6hzYy7FP3n8hVmeJjl9VwJ2jIUK7aR6aRPlKpMLv9TswFG',
    avatar: null,
    role: 'user',
    remember_token: null,
    created_at: '2024-01-25 14:24:36',
    updated_at: '2024-01-25 14:24:36'
  },
  {
    id: 31,
    name: 'Salami',
    email: 'abdulramansalami5@gmail.com',
    email_verified_at: null,
    password: '$2y$10$WJLcs176rrd5w4ZcK6U.xu6aiymLuLJK5e1DOGkCBZlIlFyeecYUe',
    avatar: null,
    role: 'user',
    remember_token: null,
    created_at: '2024-01-27 12:55:12',
    updated_at: '2024-01-27 12:55:12'
  },
  {
    id: 32,
    name: 'Икром',
    email: 'ikromr04@gmail.com',
    email_verified_at: null,
    password: '$2y$10$FSvdmlUYzPjz.OPTAYhGfOBFNSOdSWQKtWgAE4ErLDQkULHMg0u4S',
    avatar: null,
    role: 'user',
    remember_token: null,
    created_at: '2024-02-05 11:39:51',
    updated_at: '2024-02-05 11:39:51'
  },
  {
    id: 33,
    name: 'Hikmet',
    email: 'hikmetbagci8@gmail.com',
    email_verified_at: null,
    password: '$2y$10$3iD9FjIaP4GER.k97EIVN.KPFeZQepoOvKjoPlzTTYfolPgjAVBLm',
    avatar: null,
    role: 'user',
    remember_token: null,
    created_at: '2024-02-24 10:15:07',
    updated_at: '2024-02-24 10:15:07'
  },
  {
    id: 34,
    name: '王',
    email: '1394608514@qq.com',
    email_verified_at: null,
    password: '$2y$10$YXUranFyxzZyXevc1\\/hKguJa7mxMr0HMCC5rf6D2Tivd3M0sfM5yK',
    avatar: null,
    role: 'user',
    remember_token: null,
    created_at: '2024-03-10 19:34:55',
    updated_at: '2024-03-10 19:34:55'
  }
];

export const seedUsers = async (): Promise<void> => {
  try {
    for (const user of users) {
      await prisma.user.create({
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
          emailVerified: user.email_verified_at
            ? new Date(user.email_verified_at).toISOString()
            : null,
          password: user.password,
          image: user.avatar,
          createdAt: new Date(user.created_at).toISOString(),
          updatedAt: new Date(user.updated_at).toISOString(),
        }
      });
    }

    console.log('Users seeding completed successfully...');
  } catch (error) {
    console.error('Error seeding users:', error);
  } finally {
    await prisma.$disconnect();
  }
};
