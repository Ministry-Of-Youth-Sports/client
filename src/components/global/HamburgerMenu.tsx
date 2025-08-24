interface HamburgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const HamburgerMenu = ({ isOpen, toggleMenu }: HamburgerMenuProps) => {
  return (
    <div className="flex justify-center items-center" onClick={toggleMenu}>
      <label className="cursor-pointer pb-[3px] relative">
        {/* First bar */}
        <span
          className={`block w-[30px] h-[3px] my-[6px] mx-auto rounded-[40px] bg-gray-600 transition-all duration-300 ease-[cubic-bezier(0.37,-1.11,0.79,2.02)] ${
            isOpen ? "transform translate-y-[9.5px] rotate-45" : ""
          }`}
        />

        {/* Second bar */}
        <span
          className={`block w-[30px] h-[3px] my-[6px] mx-auto rounded-[40px] bg-gray-600 transition-all duration-300 ease-[cubic-bezier(0.37,-1.11,0.79,2.02)] ${
            isOpen ? "opacity-0" : ""
          }`}
        />

        {/* Third bar */}
        <span
          className={`block w-[30px] h-[3px] my-[6px] mx-auto rounded-[40px] bg-gray-600 transition-all duration-300 ease-[cubic-bezier(0.37,-1.11,0.79,2.02)] ${
            isOpen ? "transform -translate-y-[8px] rotate-[-45deg]" : ""
          }`}
        />
      </label>
    </div>
  );
};

export default HamburgerMenu;
