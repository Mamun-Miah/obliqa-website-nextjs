"use client";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

const Menu = ({ onItemClick }: { onItemClick?: () => void }) => {
  const { t } = useLanguage();
  
  const handleClick = () => {
    window.scrollTo(0, 0);
    if (onItemClick) {
      onItemClick();
    }
  };

  const menuItemClass =
    "relative p-2 cursor-pointer text-white hover:text-[#EC8314] transition-all duration-200 ease-in-out after:content-[''] after:absolute after:left-0 after:bottom-1 after:w-0 after:h-[2px] after:bg-[#EC8314] after:transition-all after:duration-300 hover:after:w-full";

  return (
    <div className="text-lg text-[#ffffff] flex flex-col gap-5 lg:flex-row lg:space-x-5 items-center">
      <Link href="/">
        <button onClick={handleClick} className={menuItemClass}>
          {t("nav.home")}
        </button>
      </Link>

      <Link href="/about">
        <button onClick={handleClick} className={menuItemClass}>
          {t("nav.about")}
        </button>
      </Link>

      <Link href="/services">
        <button onClick={handleClick} className={menuItemClass}>
          {t("nav.services")}
        </button>
      </Link>

      <Link href="/portfolio">
        <button onClick={handleClick} className={menuItemClass}>
          {t("nav.portfolio")}
        </button>
      </Link>

      <Link href="/contact">
        <button onClick={handleClick} className={menuItemClass}>
          {t("nav.contact")}
        </button>
      </Link>
    </div>
  );
};

export default Menu;
