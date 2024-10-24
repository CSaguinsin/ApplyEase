import { MdHome } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { VscFiles } from "react-icons/vsc";
import { TbFileMinus } from "react-icons/tb";
import { FaRegCalendar } from "react-icons/fa";
import { MdOutlineFolderCopy } from "react-icons/md";

import { Link } from 'react-router-dom';

export default function Navigation({ page }) {
    return (
        <nav className="mt-8 ml-8 w-64 h-96 shadow-md flex justify-center p-6 rounded-3xl bg-white">
            <div>
                <div className="border-0 border-b-2 px-5 mb-5">
                    <img src="./ApplyEase@2x.png" className="h-12" />
                </div>
                <div>
                    <ul>
                        <li>
                            {page == "Dashboard" ? (
                                <Link to='#' className="py-2 px-2 flex items-center text-black text-sm font-black shadow">
                                    <div className="bg-blue-400 mr-4 rounded p-1">
                                        <MdHome className="text-lg text-bold text-white" />
                                    </div>
                                    Dashboard
                                </Link>
                            ) : (
                                <Link to='#' className="py-2 px-2 flex items-center text-blue-400 text-sm">
                                    <MdHome className="mr-4 text-xl text-bold" />
                                    Home
                                </Link>
                            )
                            }
                        </li>
                        <li>
                            {page == "Application" ? (
                                <Link to='#' className="py-2 px-2 flex items-center text-black text-sm font-black shadow">
                                    <div className="bg-blue-400 mr-4 rounded p-1">
                                        <IoSearchSharp className="text-lg text-bold text-white" />
                                    </div>
                                    Application
                                </Link>
                            ) : (
                                <Link to='#' className="py-2 px-2 flex items-center text-blue-400 text-sm">
                                    <IoSearchSharp className="mr-4 text-xl text-bold" />
                                    Application
                                </Link>

                            )

                            }
                        </li>
                        <li>
                            {page == "Candidate" ? (
                                <Link to='#' className="py-2 px-2 flex items-center text-black text-sm font-black shadow">
                                    <div className="bg-blue-400 mr-4 rounded p-1">
                                        <MdOutlineFolderCopy className="text-lg text-bold text-white" />
                                    </div>
                                    Candidate
                                </Link>
                            ) : (
                                <Link to='#' className="py-2 px-2 flex items-center text-blue-400 text-sm">
                                    <MdOutlineFolderCopy className="mr-4 text-xl text-bold" />
                                    Candidate
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}