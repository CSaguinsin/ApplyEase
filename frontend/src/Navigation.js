import { MdHome } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { VscFiles } from "react-icons/vsc";
import { TbFileMinus } from "react-icons/tb";
import { FaRegCalendar } from "react-icons/fa";
import { MdOutlineFolderCopy } from "react-icons/md";

import { Link } from 'react-router-dom';

export default function Navigation({ page }) {
    return (
        <nav className="mt-8 ml-8 w-64 h-96 shadow-md flex justify-center items-center p-6 rounded-3xl bg-white">
            <div>
                <div className="border-0 border-b-2 px-5 mb-5">
                    <img src="./ApplyEase@2x.png" className="h-12" />
                </div>
                <div>
                    <ul>
                        <li>
                            {page == "Dashboard" ? (
                                <Link to='#' className="py-2 flex items-center text-black text-sm text-bold">
                                    <div className="bg-blue-400 mr-4">
                                        <MdHome className="text-lg text-bold text-white" />
                                    </div>
                                    Home
                                </Link>
                            ) : (
                                <Link to='#' className="py-2 flex items-center text-blue-400 text-sm">
                                    <MdHome className="mr-4 text-xl text-bold" />
                                    Home
                                </Link>
                            )
                            }
                        </li>
                        <li>
                            <Link to='#' className="py-2 flex items-center text-blue-400 text-sm">
                                <IoSearchSharp className="mr-4 text-xl text-bold" />
                                Job Search
                            </Link>
                        </li>
                        <li>
                            <Link to='#' className="py-2 flex items-center text-blue-400 text-sm">
                                <TbFileMinus className="mr-4 text-xl text-bold" />
                                My Applications
                            </Link>
                        </li>
                        <li>
                            <Link to='#' className="py-2 flex items-center text-blue-400 text-sm">
                                <VscFiles className="mr-4 text-xl text-bold" />
                                Resume Manager
                            </Link>
                        </li>
                        <li>
                            <Link to='#' className="py-2 flex items-center text-blue-400 text-sm">
                                <FaRegCalendar className="mr-4 text-xl text-bold" />
                                Interview Schedule
                            </Link>
                        </li>
                        <li>
                            <Link to='#' className="py-2 flex items-center text-blue-400 text-sm">
                                <MdOutlineFolderCopy className="mr-4 text-xl text-bold" />
                                Job Offers
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}