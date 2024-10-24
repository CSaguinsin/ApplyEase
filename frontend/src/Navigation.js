import { MdHome } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { MdOutlineFolderCopy } from "react-icons/md";

import { Link } from 'react-router-dom';

export default function Navigation({ page }) {
    return (
        <nav className="mt-8 ml-8 w-64 h-96 shadow-md flex justify-center p-6 rounded-3xl bg-white">
            <div>
                <div className="mb-5 flex justify-center">
                    <img src="./ApplyEase@2x.png" className="h-12 border-0 border-b-2 px-5" />
                </div>
                <div>
                    <ul>
                        <li>
                            {page == "Dashboard" ? (
                                <Link to='/dashboard' className="py-2 px-2 w-52 flex items-center text-black text-sm font-black shadow">
                                    <div className="bg-blue-400 mr-4 rounded p-1">
                                        <MdHome className="text-lg text-bold text-white" />
                                    </div>
                                    Dashboard
                                </Link>
                            ) : (
                                <Link to='/dashboard' className="py-2 px-2 w-52 flex items-center text-blue-400 text-sm">
                                    <MdHome className="mr-4 text-xl text-bold" />
                                    Dashboard
                                </Link>
                            )
                            }
                        </li>
                        <li>
                            {page == "Generate" ? (
                                <Link to='/applicationadmin' className="py-2 px-2 w-52 flex items-center text-black text-sm font-black shadow">
                                    <div className="bg-blue-400 mr-4 rounded p-1">
                                        <IoIosLink className="text-lg text-bold text-white" />
                                    </div>
                                    Generate Link
                                </Link>
                            ) : (
                                <Link to='/applicationadmin' className="py-2 px-2 w-52 flex items-center text-blue-400 text-sm">
                                    <IoIosLink className="mr-4 text-xl text-bold" />
                                    Generate Link
                                </Link>
                            )
                            }
                        </li>
                        <li>
                            {page == "Tracker" ? (
                                <Link to='/applicantstracker' className="py-2 px-2 w-52 flex items-center text-black text-sm font-black shadow">
                                    <div className="bg-blue-400 mr-4 rounded p-1">
                                        <MdOutlineFolderCopy className="text-lg text-bold text-white" />
                                    </div>
                                    Applicants Trackers
                                </Link>
                            ) : (
                                <Link to='/applicantstracker' className="py-2 px-2 w-52 flex items-center text-blue-400 text-sm">
                                    <MdOutlineFolderCopy className="mr-4 text-xl text-bold" />
                                    Applicants Tracker
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}