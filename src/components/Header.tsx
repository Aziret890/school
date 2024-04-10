import Link from "next/link";
import React from "react";
function Header() {
  return (
    <header>
      <div className="container">
        <div className="max-w-[106px] max-h-[40px]"></div>
        <nav className="flex justify-between">
          <Link href={"/"}>HOME</Link>
          <Link href={"/about"}>ADMIN</Link>
          <Link href={"/basket"}>BASKET</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
