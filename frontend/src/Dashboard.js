import Navigation from './Navigation';
import { HiOutlineBriefcase } from "react-icons/hi";
import { CiGlobe } from "react-icons/ci";
import { BiTask } from "react-icons/bi";
import { LuPhone } from "react-icons/lu";

export default function Dashboard() {
    return (
        <>
            <div className="absolute top-0 left-0 w-full h-64 bg-blue-500">
                <div className="flex">
                    <Navigation page="Dashboard" />
                    <div className="mt-8 ml-8 text-white">
                        Pages / Dashboard
                        <div className="font-bold">
                            Dashboard
                        </div>
                        <div className="mt-6 ml-6 mr-2 grid gap-6 grid-cols-4">
                            <div className="bg-white rounded text-blue-400 h-16 w-64 rounded-xl shadow-md p-3 flex items-center justify-center">
                                <div className="flex-block">
                                    <div className="text-xs">
                                        Applications Overview
                                    </div>
                                    <div>
                                        <span className="font-bold text-black text-lg">150</span>
                                        <span className="text-green-600 text-xs">+20%</span>
                                    </div>
                                </div>
                                <div className="bg-blue-400 p-2 rounded-md ml-16 mr-0">
                                    <HiOutlineBriefcase className="text-3xl text-white" />
                                </div>
                            </div>
                            <div className="bg-white rounded text-blue-400 h-16 w-64 rounded-xl shadow-md p-3 flex items-center justify-center">
                                <div className="flex-block">
                                    <div className="text-xs">
                                        Job Search
                                    </div>
                                    <div>
                                        <span className="font-bold text-black text-lg">25</span>
                                        <span className="text-red-600 text-xs">-5%</span>
                                    </div>
                                </div>
                                <div className="bg-blue-400 p-2 rounded-md ml-32 mr-0">
                                    <CiGlobe className="text-3xl text-white" />
                                </div>
                            </div>
                            <div className="bg-white rounded text-blue-400 h-16 w-64 rounded-xl shadow-md p-3 flex items-center justify-center">
                                <div className="flex-block">
                                    <div className="text-xs">
                                        Resume Management
                                    </div>
                                    <div>
                                        <span className="font-bold text-black text-lg">120</span>
                                        <span className="text-green-600 text-xs">+30%</span>
                                    </div>
                                </div>
                                <div className="bg-blue-400 p-2 rounded-md ml-16 mr-0">
                                    <BiTask className="text-3xl text-white" />
                                </div>
                            </div>
                            <div className="bg-white rounded text-blue-400 h-16 w-64 rounded-xl shadow-md p-3 flex items-center justify-center">
                                <div className="flex-block">
                                    <div className="text-xs">
                                        Job Offers
                                    </div>
                                    <div>
                                        <span className="font-bold text-black text-lg">20</span>
                                        <span className="text-green-600 text-xs">+10%</span>
                                    </div>
                                </div>
                                <div className="bg-blue-400 p-2 rounded-md ml-32 mr-0">
                                    <LuPhone className="text-3xl text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}