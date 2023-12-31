import Form from '../components/Form';
import { prisma } from '../db';
import type { Metadata } from 'next';

async function getEntries() {
  const data = await prisma.guestbook.findMany({
    take: 50,
    orderBy: {
      created_at: 'desc',
    },
  });
  return data;
}

export const metadata: Metadata = {
  title: 'Guestbook',
  description: 'Leave a comment if you like to!',
};
export const revalidate = 300;

async function Guestbook() {
  const data = await getEntries();

  return (
    <div className='divide-y divide-gray-200 dark:divide-gray-700 mb-8'>
      <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
        <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
          Guestbook
        </h1>
      </div>

      <div className='w-full'>
        <div className='max-w-[500px] mx-auto mt-8'>
          <Form />

          <div className='flex flex-col space-y-4 mt-5'>
            {data.map((entry) => (
              <div key={entry.id} className='w-full text-sm break-words'>
                <p className='border-b-2 border-gray-800/20 dark:border-white dark:border-opacity-20'>
                  {entry.message}
                  <span className='text-gray-500 text-xs ml-2'>
                    -{entry.username}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guestbook;
