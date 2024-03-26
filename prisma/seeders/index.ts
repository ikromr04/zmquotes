import { seedPosts } from './posts.seeder';
import { seedQuotes } from './quote.seeder';
import { seedUsers } from './user.seeder';

(async (): Promise<void> => {
  await seedUsers();
  await seedQuotes();
  await seedPosts();
})();
