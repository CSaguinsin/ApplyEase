import Navigation from './Navigation';
import { HiOutlineBriefcase } from "react-icons/hi";
import { CiGlobe } from "react-icons/ci";
import { BiTask } from "react-icons/bi";
import { LuPhone } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";

import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <>
            <div className="absolute top-0 left-0 w-full h-64 bg-blue-500">
                <div className="flex">
                    <Navigation page="Candidate" />
                    <div className="w-screen m-8">
                        <div className="flex items-center justify-between">
                            <div className="text-white">
                                Pages / Dashboard
                                <div className="font-bold">
                                    Dashboard
                                </div>
                            </div>
                            <div className="flex items-center font-bold text-white">
                                <Link to="#" className="flex items-center m-3">
                                    <IoPerson className="text-white m-1" />
                                    Akari
                                </Link>
                                <Link to="#" className="m-3">
                                    <IoMdSettings className="text-white text-xl" />
                                </Link>
                                <Link to="#" className="m-3">
                                    <IoIosNotifications className="text-white text-xl" />
                                </Link>
                            </div>
                        </div>
                        <div className="m-6 w-11/12 grid gap-4 grid-cols-4">
                            <div className="bg-white rounded text-blue-400 h-16 rounded-xl shadow-lg p-3 flex items-center justify-between">
                                <div className="flex-block">
                                    <div className="text-xs">
                                        Applications Overview
                                    </div>
                                    <div>
                                        <span className="font-bold text-black text-lg">150</span>
                                        <span className="text-green-600 text-xs">+20%</span>
                                    </div>
                                </div>
                                <div className="bg-blue-400 p-2 rounded-md">
                                    <HiOutlineBriefcase className="text-3xl text-white" />
                                </div>
                            </div>
                            <div className="bg-white rounded text-blue-400 h-16 rounded-xl shadow-lg p-3 flex items-center justify-between">
                                <div className="flex-block">
                                    <div className="text-xs">
                                        Job Search
                                    </div>
                                    <div>
                                        <span className="font-bold text-black text-lg">25</span>
                                        <span className="text-red-600 text-xs">-5%</span>
                                    </div>
                                </div>
                                <div className="bg-blue-400 p-2 rounded-md">
                                    <CiGlobe className="text-3xl text-white" />
                                </div>
                            </div>
                            <div className="bg-white rounded text-blue-400 h-16 rounded-xl shadow-lg p-3 flex items-center justify-between">
                                <div className="flex-block">
                                    <div className="text-xs">
                                        Resume Management
                                    </div>
                                    <div>
                                        <span className="font-bold text-black text-lg">120</span>
                                        <span className="text-green-600 text-xs">+30%</span>
                                    </div>
                                </div>
                                <div className="bg-blue-400 p-2 rounded-md">
                                    <BiTask className="text-3xl text-white" />
                                </div>
                            </div>
                            <div className="bg-white rounded text-blue-400 h-16 rounded-xl shadow-lg p-3 flex items-center justify-between">
                                <div className="flex-block">
                                    <div className="text-xs">
                                        Job Offers
                                    </div>
                                    <div>
                                        <span className="font-bold text-black text-lg">20</span>
                                        <span className="text-green-600 text-xs">+10%</span>
                                    </div>
                                </div>
                                <div className="bg-blue-400 p-2 rounded-md">
                                    <LuPhone className="text-3xl text-white" />
                                </div>
                            </div>
                        </div>
                        <div className="m-6 w-11/12 grid grid-cols-2 gap-4">
                            <div className="bg-white rounded-xl h-40 shadow-md border p-2 flex">
                                <div className="mr-6">
                                    <div className="text-blue-400">
                                        Built by developers
                                    </div>
                                    <div className="text-black text-3xl font-bold">
                                        Craftora
                                    </div>
                                    <div className="text-blue-400 text-xs mb-6">
                                        Empowering creativity through innovative tools and collaborative solutions for makers and visionaries.
                                    </div>
                                    <Link to="#" className="text-gray-700 text-xs">
                                        Read more...
                                    </Link>
                                </div>
                                <div>
                                    <img src='./Image.png' className="object-cover w-96 h-full rounded-lg" />
                                </div>
                            </div>

                            <div className="bg-white rounded-xl h-40 shadow-md border p-2 flex">
                                <img src="./brooke-cagle-g1Kr4Ozfoac-unsplash 1.png" className="brightness-50 object-cover w-full h-full rounded-lg fill-gray-950" />
                                <div className="absolute p-2 text-white">
                                    <div className="font-bold text-lg">
                                        Work with Global Leaders
                                    </div>
                                    <div className="text-xs w-96">
                                        Mollit consequat voluptate excepteur amet pariatur qui. Qui quis nulla excepteur aliquip commodo. Ex labore incididunt Lorem duis dolore officia enim occaecat ex ea aliquip cillum sunt magna.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="m-6 w-11/12 bg-white rounded-xl shadow-md p-6">
                            <div className="text-gray-600 font-bold text-4xl">
                                Applicant's Table
                            </div>
                            <div className="flex w-full">
                                <table className="table-fixed">
                                    <thead>
                                        <tr>
                                            <td>CANDIDATE NAME</td>
                                            <td>JOB TITLE</td>
                                            <td>STATUS</td>
                                            <td>APPLICATION DATE</td>
                                            <td>ACTIONS</td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}