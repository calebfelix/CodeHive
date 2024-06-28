import Image from 'next/image';

const Comments = () => {
  return (
    <div className="">
      {/* write */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width={32}
          height={32}
          className="h-8 w-8 rounded-full"
        />
        <div className="flex w-full flex-1 items-center justify-between rounded-xl bg-slate-100 px-6 py-2 text-sm">
          <input type="text" placeholder="Write a comment..." className="flex-1 bg-transparent outline-none" />
          <Image src="/emoji.png" alt="" width={16} height={16} className="cursor-pointer" />
        </div>
      </div>
      {/* comments */}
      <div className="">
        {/* comment */}
        <div className="mt-6 flex justify-between gap-4">
          {/* avatar */}
          <div className="">
            <Image
              src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-full"
            />
          </div>
          {/* desc */}
          <div className="flex flex-1 flex-col gap-2">
            <span className="font-medium">Test user</span>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, ea? Doloremque nemo perferendis
              aspernatur esse similique eum minima tenetur id a nostrum, magnam cupiditate culpa dicta repellendus
              excepturi voluptatem aliquam.
            </p>
            <div className="mt-2 flex items-center gap-8 text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <Image src="/like.png" alt="" width={12} height={12} className="h-4 w-4 cursor-pointer" />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">123 Likes</span>
              </div>
              <div className="">Reply</div>
            </div>
          </div>
          {/* icon */}
          <Image src="/more.png" alt="" width={16} height={16} className="h-4 w-4 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Comments;
