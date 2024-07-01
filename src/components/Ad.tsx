import Image from 'next/image';

const Ad = ({ size }: { size: 'sm' | 'md' | 'lg' }) => {
  return (
    <div className="rounded-lg bg-white p-4 text-sm shadow-md">
      {/* top */}
      <div className="flex items-center justify-between font-medium text-gray-500">
        <span>Sponsored Ads</span>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* bottom */}
      <div className={`mt-4 flex flex-col ${size === 'sm' ? 'gap-2' : 'gap-4'}`}>
        <div className={`relative w-full ${size === 'sm' ? 'h-24' : size === 'md' ? 'h-36' : 'h-48'}`}>
          <Image
            src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="rounded-lg object-cover"
            fill
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={24}
            height={24}
            className="h-6 rounded-full object-cover"
          />
          <span className="font-medium text-blue-500">BigChef Lounge</span>
        </div>
        <p className={size === 'sm' ? 'text-xs' : 'text-sm'}>
          {size === 'sm'
            ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            : size === 'md'
              ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.'
              : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.  Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
        </p>
        <button className="rounded-lg bg-gray-200 p-2 text-xs text-gray-500">Learn more</button>
      </div>
    </div>
  );
};

export default Ad;
