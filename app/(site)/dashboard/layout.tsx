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
        <div>
          {/* widgets */}
          <div className="flex gap-5 m-3">
            
          <div className="w-[250px] h-[150px] text-center bg-blue-950 text-white">Widgets</div>
          <div className="w-[250px] h-[150px] text-center bg-blue-950 text-white">Widgets</div>
          <div className="w-[250px] h-[150px] text-center bg-blue-950 text-white">Widgets</div>
          <div className="w-[250px] h-[150px] text-center bg-blue-950 text-white">Widgets</div>
          </div>

          <div className="m-3">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default layout;
