import { exit } from 'node:process';

import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const prisma = new PrismaClient();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const prettyPrint = (object: any) =>
  console.log(JSON.stringify(object, undefined, 2));

async function seed() {
  const user = await prisma.userProfile.create({
    data: {
      email: 'binhdev@gmail.com', //
      name: 'BinhDev', //
      acceptedTermsAndConditions: true,
    },
  });

  console.log('========= 🌱 result of seed: =========');
  prettyPrint({ user });
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async error => {
    console.error(error);
    await prisma.$disconnect();
    exit(1);
  });
