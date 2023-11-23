/* eslint-disable react/prop-types */
import { useState } from "react";

function Header({ handleClickAbout }) {
  const [isHover, seIsHover] = useState(false);
  console.log(isHover);
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="#" className="flex items-center">
            <img
              src="https://scontent.fvii2-1.fna.fbcdn.net/v/t39.30808-6/404327248_2015766508782737_626008760444681656_n.jpg?stp=dst-jpg_s851x315&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=aso606HSpH0AX9Aa-Lt&_nc_ht=scontent.fvii2-1.fna&oh=00_AfCyac4zfSrvXSqmu-Y2U9nKKhtF3RLCrDVKiDBbss5cpw&oe=6562ED78"
              className="mr-3 h-6 sm:h-20"
              alt=""
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Sun Education
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href="/register"
              className="text-gray-800 border-2 border-green-600 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Đăng ký
            </a>
            <a
              href="/login"
              className="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Đăng Nhập
            </a>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="/home"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b-2 border-green-600 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </a>
              </li>
              <li>
                <div
                  className=" cursor-pointer block py-2 pr-4 pl-3 text-gray-700 border-b  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 relative"
                  onMouseOver={() => seIsHover(true)}
                  onMouseOut={() => seIsHover(false)}
                >
                  <p
                    className="relative"

                    // onClick={() => seIsHover(!isHover)}
                  >
                    Education
                  </p>
                  <ul
                    className={`${
                      isHover ? "visible" : "invisible"
                    } w-[250px] bg-white absolute p-2 mt-1 rounded-md border border-gray-300 text-gray-700`}
                  >
                    <a href="/chinhquy">
                      <li className="p-2 hover:bg-green-50 hover:text-blue-700">
                        Chương trình học chính quy
                      </li>
                    </a>
                    <a href="/ielts">
                      <li className="p-2 hover:bg-green-50 hover:text-blue-700">
                        Chương trình IELTS
                      </li>
                    </a>
                    <a href="/laptrinh">
                      <li className="p-2 hover:bg-green-50 hover:text-blue-700">
                        Chương trình lập trình
                      </li>
                    </a>
                    <a href="/ngoaingu">
                      <li className="p-2 hover:bg-green-50 hover:text-blue-700">
                        Chương trình ngoại ngữ
                      </li>
                    </a>
                  </ul>
                </div>
              </li>
              <li>
                <div
                  onClick={handleClickAbout}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </div>
              </li>
              <li>
                <a
                  href="/teachers"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Teachers
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
