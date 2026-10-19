import Link from "next/link";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* Navbar */}
      <div className="bg-blue-900 h-[50px]"></div>

      <div className="flex">
        {/* sidebar */}
        <div className="bg-blue-200 w-[300px] h-screen">
          <ul>
            <Link href={"/dashboard/users"}>
              <li>users</li>
            </Link>
            <Link href={"/dashboard/analytics"}>
              <li>analytics</li>
            </Link>
          </ul>
        </div>
        {/* body */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default layout;
