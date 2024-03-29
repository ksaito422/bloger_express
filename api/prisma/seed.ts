import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const uuid1 = '7047a861-5e10-492b-8cf1-be191f103387';
const uuid2 = '7047a861-5e10-492b-8cf1-be191f103388';

const main = async () => {
  /**
   * register user
   */
  const taro = await prisma.user.upsert({
    where: { id: uuid1 },
    update: {},
    create: {
      id: uuid1,
      name: 'taro',
    },
  });

  const jiro = await prisma.user.upsert({
    where: { id: uuid2 },
    update: {},
    create: {
      id: uuid2,
      name: 'jiro',
    },
  });

  console.log({ taro, jiro });

  /**
   * register article
   */
  await prisma.article.upsert({
    where: { id: uuid1 },
    update: {},
    create: {
      id: uuid1,
      userId: uuid1,
      title: 'テスト01',
      content: '内容です',
    },
  });

  await prisma.article.upsert({
    where: { id: uuid2 },
    update: {},
    create: {
      id: uuid2,
      userId: uuid2,
      title: 'テスト01',
      content: '内容です',
    },
  });
};

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
