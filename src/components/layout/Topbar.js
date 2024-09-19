import IconFlagUs from "@/components/icon/flags/IconFlagUs";
import { localesList } from "@/constants/global";
import classNames from "@/hooks/classNames";
import useOutsideClick from "@/hooks/useOutsideClick";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import IconFlagCn from "../icon/flags/IconFlagCn";
import { useResult } from "@/contexts/resultContext";

const Topbar = () => {
  const [langOpen, setLangOpen] = React.useState(false);
  const { handleResetFormResult } = useResult();

  const router = useRouter();
  const currentLang = localesList.find(
    (locale) => locale.code === router.locale
  );

  const handleClickOutside = () => {
    setLangOpen(false);
  };

  const ref = useOutsideClick(handleClickOutside);

  const toggleLangDropdown = () => setLangOpen(!langOpen);
  return (
    <nav className="bg-white border-gray-200 shadow-sm">
      <div className="container flex flex-wrap items-center justify-between max-w-screen-xl px-4 py-2 mx-auto">
        <Link
          href="/"
          onClick={handleResetFormResult}
          locale={currentLang.code}
          className="text-lg font-bold text-primary"
        >
          TikNotes
        </Link>
        <div className="relative flex items-center space-x-1 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            data-dropdown-toggle="language-dropdown-menu"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100"
            onClick={() => toggleLangDropdown()}
            ref={ref}
          >
            {currentLang.flag}
            {currentLang?.name}
          </button>
          {langOpen && (
            <div
              className="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
              id="language-dropdown-menu"
            >
              <ul className="grid py-2 font-medium list-lang" role="none">
                {localesList &&
                  localesList.map((locale) => (
                    <li key={locale.code} className="min-w-40">
                      <Link
                        href="/"
                        locale={locale.code}
                        className={classNames(
                          "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                          locale.code === currentLang.code
                            ? "bg-gray-200 text-black"
                            : ""
                        )}
                      >
                        <div className="inline-flex items-center">
                          {locale.name}
                        </div>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
