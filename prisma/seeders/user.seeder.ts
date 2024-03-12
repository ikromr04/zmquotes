import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const users = [
  {'id':1,'name':'Admin','email':'admin@zm.com','emailVerified':'2023-12-15 06:10:59','password':'$2y$10$s0rzlg5G73PceBZ3q5gipuxQsHbxkZORgmR2y2HkLdwt1qQUJfcWG','image':null,'role':'admin','createdAt':'2023-12-15 06:10:59','updatedAt':'2023-12-18 06:40:54'},
  {'id':5,'name':'Nzan Kikon','email':'nzanokhars@gmail.com','emailVerified':'2024-01-13 10:11:59','password':'$2y$10$Fyael3bzwDooNzgT4mhJL.Cj1e56S4C0dPDKtMiI6WpcaLD63HC\/S','image':null,'role':'user','createdAt':'2024-01-10 06:54:09','updatedAt':'2024-01-13 10:11:59'},
  {'id':6,'name':'Daler','email':'mayunusovdaler@gmail.com','emailVerified':'2024-01-10 19:58:41','password':'$2y$10$zBhEYofPVjiUQBRcz6gwkuAoA3iUbFJrRdUXyhuG1X3xKRblUJ.b6','image':null,'role':'user','createdAt':'2024-01-10 19:58:10','updatedAt':'2024-01-10 19:58:41'},
  {'id':7,'name':'Abdul Wahid Khan','email':'abdul@evolet.in','emailVerified':'2024-01-12 06:21:13','password':'$2y$10$CD5\/WZlvhzAIByxjCml71e.Pb3I2KS8WHq2aO5HPbKKf3osLkPtd.','image':null,'role':'user','createdAt':'2024-01-12 06:18:02','updatedAt':'2024-01-12 06:21:13'},
  {'id':14,'name':'Khayriddin','email':'khayriddin.boev@gmail.com','emailVerified':'2024-01-13 08:50:01','password':'$2y$10$xCUsAM25Fl0N3HlUiK92\/.MlDh8YZfdBx2iW1TINc0z\/EK6jkokXa','image':'\/images\/users\/65a251f3c8f5a.jpg','role':'user','createdAt':'2024-01-13 08:48:37','updatedAt':'2024-01-13 09:03:47'},
  {'id':15,'name':'Shyam lal sharma','email':'shyamlalsharma327@gmail.com','emailVerified':'2024-01-18 00:15:25','password':'$2y$10$DUo\/gOqugVeMbpYXsZApAORSOGsNT3v7husnbbtYHIJjb9VHZIwQC','image':null,'role':'user','createdAt':'2024-01-18 00:14:00','updatedAt':'2024-01-18 00:15:25'},
  {'id':16,'name':'Yasit','email':'awany2109@gmail.com','emailVerified':null,'password':'$2y$10$cTZtbltQRYCkllPqJHoz4ujnyMXCY5gXqOV9MZZkWdc2xUYKrguN6','image':null,'role':'user','createdAt':'2024-01-18 16:27:05','updatedAt':'2024-01-18 16:27:05'},
  {'id':20,'name':'Bhuvanesh MS','email':'msbhuvanesh6@gmail.com','emailVerified':null,'password':'$2y$10$SNJbh0XRLZ1NAwWtkKG3uebPPLBN1\/K7IAbUT4HiThtaAN.ptVh1i','image':null,'role':'user','createdAt':'2024-01-22 19:35:43','updatedAt':'2024-01-22 19:35:43'},
  {'id':21,'name':'ZM','email':'zafar.mirzoev@yahoo.com','emailVerified':'2024-01-22 20:47:21','password':'$2y$10$fwOFJA3ADh4qz7WAOQkvGuk3o9i8lm0.DPBqQxdKPQKZI5tVSjIfK','image':null,'role':'user','createdAt':'2024-01-22 20:25:53','updatedAt':'2024-01-22 20:47:21'},
  {'id':22,'name':'viresh amin','email':'viramin89@gmail.com','emailVerified':null,'password':'$2y$10$ODbcy5R6yjp5p.\/2mut4f.I2LjaDKUjqdp9XMLCWoe7n5JMttjQYi','image':null,'role':'user','createdAt':'2024-01-23 00:15:12','updatedAt':'2024-01-23 00:15:12'},
  {'id':23,'name':'Muhammad Tayyab','email':'chaudhryhanzalah3@gmail.com','emailVerified':null,'password':'$2y$10$aHHjhCGhWWUpLTVaMLeNMOZWBGOdLb.LQsfRLkALhKE8Iij8sUgSK','image':null,'role':'user','createdAt':'2024-01-23 10:59:25','updatedAt':'2024-01-23 10:59:25'},
  {'id':24,'name':'JOSEPH OUMA','email':'ajoseadongo254@gmail.com','emailVerified':null,'password':'$2y$10$ID\/QYwg17JIZuqE89m4xY.UQ9Al9r84AxSIbopUha.eg\/96iYIsr2','image':null,'role':'user','createdAt':'2024-01-23 14:18:16','updatedAt':'2024-01-23 14:18:16'},
  {'id':26,'name':'Anvar','email':'math_5@mail.ru','emailVerified':'2024-02-07 10:42:02','password':'$2y$10$wh\/Rgh.zkP7UJ7cra9wA3.0jZKgFS5Heg2BAgndyECUatvs1ZGUVS','image':'\/images\/users\/65c35e976f041.png','role':'user','createdAt':'2024-01-24 08:30:41','updatedAt':'2024-02-07 10:42:31'},
  {'id':27,'name':'Samuel','email':'samuelssonko15@gmail.com','emailVerified':null,'password':'$2y$10$clZ4JeXdVsd77sc4rFeNA.bnWqJzi1cjcf85IyPowvPsL45CM2uJS','image':null,'role':'user','createdAt':'2024-01-24 09:44:26','updatedAt':'2024-01-24 09:44:26'},
  {'id':28,'name':'Aziz J','email':'madtj@mail.ru','emailVerified':null,'password':'$2y$10$ME4xpOT7ehq8uBg8uAKIkepWrahn4\/\/HRWarYD.OnHjEIlbcn4a5q','image':null,'role':'user','createdAt':'2024-01-25 05:19:08','updatedAt':'2024-01-25 05:19:08'},
  {'id':29,'name':'Bakhora','email':'mirzoeva_bakhora@mail.ru','emailVerified':null,'password':'$2y$10$kshax8dXYKjO6WCM2KErVeqiplxJE7g0WlDm7Pr54ZigbimQhRvni','image':null,'role':'user','createdAt':'2024-01-25 14:24:34','updatedAt':'2024-01-25 14:24:34'},
  {'id':30,'name':'Kanona','email':'mkanona@mail.ru','emailVerified':null,'password':'$2y$10$H8FjouJ6hzYy7FP3n8hVmeJjl9VwJ2jIUK7aR6aRPlKpMLv9TswFG','image':null,'role':'user','createdAt':'2024-01-25 14:24:36','updatedAt':'2024-01-25 14:24:36'},
  {'id':31,'name':'Salami','email':'abdulramansalami5@gmail.com','emailVerified':null,'password':'$2y$10$WJLcs176rrd5w4ZcK6U.xu6aiymLuLJK5e1DOGkCBZlIlFyeecYUe','image':null,'role':'user','createdAt':'2024-01-27 12:55:12','updatedAt':'2024-01-27 12:55:12'},
  {'id':32,'name':'Икром','email':'ikromr04@gmail.com','emailVerified':null,'password':'$2y$10$FSvdmlUYzPjz.OPTAYhGfOBFNSOdSWQKtWgAE4ErLDQkULHMg0u4S','image':null,'role':'user','createdAt':'2024-02-05 11:39:51','updatedAt':'2024-02-05 11:39:51'},
  {
    'id':33,
    'name':'Hikmet',
    'email':'hikmetbagci8@gmail.com',
    'emailVerified':null,
    'password':'$2y$10$3iD9FjIaP4GER.k97EIVN.KPFeZQepoOvKjoPlzTTYfolPgjAVBLm',
    'image':null,
    'createdAt':'2024-02-24 10:15:07',
    'updatedAt':'2024-02-24 10:15:07'
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
          emailVerified: user.emailVerified ? new Date(user.emailVerified).toISOString() : null,
          password: user.password,
          image: user.image,
          createdAt: new Date(user.createdAt).toISOString(),
          updatedAt: new Date(user.updatedAt).toISOString(),
        }
      });
    }
    // eslint-disable-next-line no-console
    console.log('Users seeding completed successfully!');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error seeding users:', error);
  } finally {
    await prisma.$disconnect();
  }
};
