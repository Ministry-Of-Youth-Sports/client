"use client";

import { useAuth } from "@/providers/AuthProvider";

export default function LogoutButton() {
  const { handelLogout } = useAuth();
  return (
    <button
      onClick={handelLogout}
      className={
        "relative flex items-center justify-start w-[45px] h-[45px] " +
        "rounded-md overflow-hidden bg-[#2e2e2e] shadow-md border-0 " +
        "transition-all duration-300 cursor-pointer " +
        "hover:w-[125px] " +
        "active:translate-x-[2px] active:translate-y-[2px] " +
        "hover:[&_.icon-wrap]:w-[40px] " +
        "hover:[&_.logout-text]:opacity-100 hover:[&_.logout-text]:w-auto"
      }
    >
      {/* icon container - keep a fixed width so layout is stable */}
      <div className="icon-wrap flex items-center justify-center w-[45px] h-full transition-all duration-300">
        <svg
          viewBox="0 0 512 512"
          className="w-[17px] h-auto fill-[#f3f3f3]"
          aria-hidden
          focusable="false"
        >
          <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
        </svg>
      </div>

      <div
        className={
          "logout-text absolute left-[50px] top-1/2 -translate-y-1/2 " +
          "text-left text-sm font-semibold text-[#f3f3f3] " +
          "w-0 opacity-0 whitespace-nowrap overflow-hidden transition-all duration-300"
        }
      >
        Logout
      </div>
    </button>
  );
}
