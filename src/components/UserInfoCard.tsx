import Image from 'next/image';
import Link from 'next/link';

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-4 text-sm shadow-md">
      {/* top */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-xs text-blue-500">
          See all
        </Link>
      </div>
      {/* bottom */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">test user</span>
          <span className="text-sm">@testuser</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum repudiandae, suscipit voluptatibus voluptate
        </p>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span>
            Living in <b>Mumbai</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" width={16} height={16} />
          <span>
            Went to <b>High School</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="" width={16} height={16} />
          <span>
            Works at <b>Apple Inc.</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Image src="/link.png" alt="" width={16} height={16} />
            <Link href="" className="font-medium text-blue-500">
              test
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/date.png" alt="" width={16} height={16} />
            <span>Joined November 2024</span>
          </div>
        </div>
        <button className="rounded-md bg-blue-500 p-2 text-sm text-white">Follow</button>
        <span className="cursor-pointer self-end text-sm text-red-400">Block User</span>
      </div>
    </div>
  );
};

export default UserInfoCard;
