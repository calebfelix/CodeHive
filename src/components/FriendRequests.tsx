import Image from 'next/image';
import Link from 'next/link';

const FriendRequests = () => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-4 text-sm shadow-md">
      {/* top */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-xs text-blue-500">
          See all
        </Link>
      </div>
      {/* user */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-semibold">Test user</span>
        </div>
        <div className="flex justify-end gap-3">
          <Image src="/accept.png" alt="" width={20} height={20} className="cursor-pointer" />
          <Image src="/reject.png" alt="" width={20} height={20} className="cursor-pointer" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-semibold">Test user</span>
        </div>
        <div className="flex justify-end gap-3">
          <Image src="/accept.png" alt="" width={20} height={20} className="cursor-pointer" />
          <Image src="/reject.png" alt="" width={20} height={20} className="cursor-pointer" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-semibold">Test user</span>
        </div>
        <div className="flex justify-end gap-3">
          <Image src="/accept.png" alt="" width={20} height={20} className="cursor-pointer" />
          <Image src="/reject.png" alt="" width={20} height={20} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
