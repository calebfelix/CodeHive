import Image from 'next/image';

const AddPost = () => {
  return (
    <div className="flex justify-between gap-4 rounded-lg bg-white p-4 text-sm shadow-md">
      {/* AVATAR */}
      <Image
        src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        width={48}
        height={48}
        className="h-12 w-12 rounded-full object-cover"
      />
      {/* POST */}
      <div className="flex-1">
        {/* text inputs */}
        <div className="flex gap-4">
          <textarea placeholder="whats on your mind?" className="flex-1 rounded-lg bg-slate-100 p-2"></textarea>
          <Image src="/emoji.png" alt="" width={20} height={20} className="h-5 w-5 cursor-pointer self-end" />
        </div>
        {/* post options */}
        <div className="mt-4 flex flex-wrap items-center gap-4 text-gray-400">
          <div className="flex cursor-pointer items-center gap-2">
            <Image src="/addimage.png" alt="" width={20} height={20} />
            Photo
          </div>
          <div className="flex cursor-pointer items-center gap-2">
            <Image src="/addVideo.png" alt="" width={20} height={20} />
            Video
          </div>
          <div className="flex cursor-pointer items-center gap-2">
            <Image src="/poll.png" alt="" width={20} height={20} />
            Poll
          </div>
          <div className="flex cursor-pointer items-center gap-2">
            <Image src="/addevent.png" alt="" width={20} height={20} />
            Event
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
