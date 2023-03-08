import Image from "next/image";
import appleLogo from "../images/apple-logo.png";
import Link from "next/link";
import { MdSearch, MdShoppingBag, MdAccountCircle } from "react-icons/md";

function Header() {
  const session = false;
  return (
    <header className="sticky top-0 flex items-center justify-between bg-[#E7ECEE] p-4">
      {/* Logo-div covers 20% space width */}
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
            <Image
              src={appleLogo}
              alt="Apple Logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>
      </div>

      {/* Navigation links cover 60% width */}
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a className="headerLink">Product</a>
        <a className="headerLink">Explore</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Business</a>
      </div>

      {/* Icons covers 20% width */}
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <MdSearch className="headerIcon" />
        <Link href="/checkout">
          <div className="relative">
            <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500">
              5
            </span>
            <MdShoppingBag className="headerIcon" />
          </div>
        </Link>
        {session ? (
          <Image src="" alt="Image" width={34} height={34} />
        ) : (
          <MdAccountCircle
            className="headerIcon"
            // onClick={() => signIn()}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
