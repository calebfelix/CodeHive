import Image from 'next/image';
import Comments from './Comments';

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* user */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
          />
          <span className="font-medium">Test user</span>
        </div>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* desc */}
      <div className="flex flex-col gap-4">
        <div className="relative min-h-96 w-full">
          <Image
            src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="rounded-md object-cover"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facilis fugit assumenda obcaecati dolorem aut
          vel odio incidunt ab, autem voluptatum officiis nihil quisquam harum voluptatibus. Non, quae. Eveniet, fugiat.
        </p>
      </div>
      {/* inter */}
      <div className="my-4 flex items-center justify-between text-sm">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-2">
            <Image src="/like.png" alt="" width={16} height={16} className="cursor-pointer" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-2">
            <Image src="/comment.png" alt="" width={16} height={16} className="cursor-pointer" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-2">
            <Image src="/share.png" alt="" width={16} height={16} className="cursor-pointer" />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
      <hr className="mt-2" />
    </div>
  );
};

export default Post;
