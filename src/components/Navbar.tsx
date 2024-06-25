import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      {/* left */}
      <div>
        <Link href="/">CodeHive</Link>
      </div>
      {/* center */}
      <div className="hidden"></div>
      {/* right */}
      <div>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
