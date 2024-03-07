import { seedUsers } from './user.seeder';

(async (): Promise<void> => {
  await seedUsers();
})();
