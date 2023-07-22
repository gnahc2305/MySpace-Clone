import Link from "next/link";
import Image from "next/image";

const style = {
    linksList: 'h-[70px] flex items-center p-1'
}

function NavMenu() {
  return (
    <nav className="flex h-[70px] justify-between items-center">
      {/* <Image src="" alt="Logo" /> */}

      <ul className="flex mr-4">
        <li>
          <Link href={"/about"} className={style.linksList}>About</Link>
        </li>
        <li>
          <Link href={"/blog"} className={style.linksList}>Blog</Link>
        </li>
        <li>
          <Link href={"/users"} className={style.linksList}>Users</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
