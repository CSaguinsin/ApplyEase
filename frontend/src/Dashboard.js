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
    const mockData = [
        {
            "pfp": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-Ba5YzO02f6VQWhsIruoGC6G0sBGDir2wA&s",
            "applicantName": "Adrianna Cayube",
            "email": "cayube@gmail.com",
            "position": "Manager",
            "skills": "5+ years",
        },
        {
            "pfp": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-Ba5YzO02f6VQWhsIruoGC6G0sBGDir2wA&s",
            "applicantName": "Allyza Toquire",
            "email": "toquire@gmail.com",
            "position": "Designer",
            "skills": "8+ years",
        },
        {
            "pfp": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi_NlCttVjuOav9lft2djxCT01MRF7GLSRGWjhycpj5f6ZXyao",
            "applicantName": "Carl Saginsin",
            "email": "saginsin@gmail.com",
            "position": "Programmer",
            "skills": "4+ years",
        },
        {
            "pfp": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi_NlCttVjuOav9lft2djxCT01MRF7GLSRGWjhycpj5f6ZXyao",
            "applicantName": "Kevin Yu",
            "email": "yu@gmail.com",
            "position": "Programmer",
            "skills": "1 year",
        },
    ]
    return (
        <>
            <div className="absolute top-0 left-0 w-full h-64 bg-blue-500">
                <div className="flex">
                    <div className="fixed">
                        <Navigation page="Dashboard" />
                    </div>
                    <div className="w-screen m-8 ml-80">
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
                                </div>
                                <div>
                                    <img src='./Image.png' className="object-cover w-96 h-full rounded-lg" />
                                </div>
                            </div>

                            <div className="bg-white rounded-xl h-40 shadow-lg border p-2 flex">
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
                            <div className="text-gray-600 font-bold text-4xl mb-12">
                                Applicant's Table
                            </div>
                            <div>
                                <table className="table-fixed w-full">
                                    <thead>
                                        <tr className="border-0 border-b-2">
                                            <th className="w-full p-4">APPLICANT'S NAME</th>
                                            <th className="w-full">POSITION</th>
                                            <th className="w-full">SKILLS</th>
                                            <th className="w-full">RESUME</th>
                                            <th className="w-full">COVER LETTER</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {mockData.map(data => (
                                            <tr className="border-0 border-b-2">
                                                <td className="p-4">
                                                    <div className="flex">
                                                        <img src={`${data.pfp}`} className="rounded-lg h-12 mr-5" />
                                                        <div className="flex-block w-full">
                                                            <div className="w-full font-bold">
                                                                {data.applicantName}
                                                            </div>
                                                            <div className="w-full">
                                                                {data.email}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex justify-center font-bold">
                                                        {data.position}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex justify-center">
                                                        {data.skills}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex justify-center underline">
                                                        MyResume.pdf
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex justify-center underline">
                                                        MyCoverLetter.pdf
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}