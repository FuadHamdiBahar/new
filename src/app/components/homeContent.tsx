import { revalidatePath } from 'next/cache'



export default async function Page() {

  // const content = await prisma.post.findMany({
  //     take:6,
  //     where: {published: true},
  // })
  // revalidatePath('/');
  return (
    <div className='flex flex-row overflow-x-auto  justify-between px-5 gap-3 pb-3'>

      {/* {content.map((item: any) =>
        <div className='basis-5/12 p-2 flex-shrink-0 bg-white max-w-sm mt-5 rounded-md shadow-lg'>
          <img className='rounded-t-md object-cover w-full h-24 sm:h-40' src={item.content} alt=""></img>
          <div className='font-semibold m-2 text-center'>
            <p>{item.title}</p>
          </div>
        </div>
      )} */}
    </div>
  )
}