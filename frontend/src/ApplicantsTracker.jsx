import Navigation from './Navigation';
import { IoPerson } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin5Fill } from "react-icons/ri";

import { Link } from "react-router-dom";

export default function ApplicantsTracker() {
    const mockData = [
        {
            "pfp": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-Ba5YzO02f6VQWhsIruoGC6G0sBGDir2wA&s",
            "applicantName": "Adriana Cayube",
            "email": "cayube@gmail.com",
            "status": "Interview Scheduled",
            "interview": "11/16/2024",
            "offer": "P 20,000 - P 25,000",
            "comments": "Great cultural fit",
        },
        {
            "pfp": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-Ba5YzO02f6VQWhsIruoGC6G0sBGDir2wA&s",
            "applicantName": "Allyza Toquire",
            "email": "toquire@gmail.com",
            "status": "Email Sent",
            "interview": "11/16/2024",
            "offer": "P 200,000 - P 250,000",
            "comments": "Excellent portfolio",
        },
        {
            "pfp": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi_NlCttVjuOav9lft2djxCT01MRF7GLSRGWjhycpj5f6ZXyao",
            "applicantName": "Carl Saginsin",
            "email": "saginsin@gmail.com",
            "status": "Email Sent",
            "interview": "11/16/2024",
            "offer": "P 70,000 - P 80,000",
            "comments": "Strong testing background",
        },
        {
            "pfp": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi_NlCttVjuOav9lft2djxCT01MRF7GLSRGWjhycpj5f6ZXyao",
            "applicantName": "Kevin Yu",
            "email": "yu@gmail.com",
            "status": "Not Sent",
            "interview": "11/16/2024",
            "offer": "N/A",
            "comments": "Lacks required experience",
        },
    ]

    return (
        <>
            <div>
                <img src='./Background.png' className='absolute top-0 h-64 w-full cover' />
                <div className='flex'>
                    <div className='fixed'>
                        <Navigation page="Tracker" />
                    </div>
                    <div className="absolute m-8 ml-80">
                        <div className="flex items-center justify-between">
                            <div className="text-white">
                                Pages / Applicants Tracker
                                <div className="font-bold">
                                    Applicants Tracker
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
                        <div className="m-6 w-11/12 bg-white rounded-xl shadow-md p-6">
                            <div className="text-gray-600 font-bold text-4xl mb-12">
                                Applicants Tracker
                            </div>
                            <div>
                                <table className="table-fixed w-full text-xs">
                                    <thead>
                                        <tr className="border-0 border-b-2">
                                            <th className="w-full p-4">APPLICANT NAME</th>
                                            <th className="w-full">CONTACT EMAIL</th>
                                            <th className="w-full">STATUS</th>
                                            <th className="w-full">INTERVIEW DATE</th>
                                            <th className="w-full">OFFER DETAILS</th>
                                            <th className="w-full">COMMENTS</th>
                                            <th className="w-full">ACTIONS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {mockData.map(data => (
                                            <tr className="border-0 border-b-2">
                                                <td className="p-4">
                                                    <div className="flex">
                                                        <img src={`${data.pfp}`} className="rounded-lg h-12 mr-5" />
                                                        <div className="flex w-full items-center">
                                                            <div className="w-full font-bold">
                                                                {data.applicantName}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex justify-center">
                                                        {data.email}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex justify-center">
                                                        {
                                                            data.status === "Interview Scheduled" ? (
                                                                <div className="rounded-full bg-blue-900 p-2 text-white">
                                                                    {data.status}
                                                                </div>
                                                            ) : data.status === "Email Sent" ? (
                                                                <div className="rounded-full p-2 text-white" style={{ backgroundColor: 'green' }}>
                                                                    {data.status}
                                                                </div>
                                                            ) : (
                                                                <div className="rounded-full p-2 text-white" style={{ backgroundColor: 'red' }}>
                                                                    {data.status}
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex justify-center">
                                                        {data.interview}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex justify-center">
                                                        {data.offer}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex justify-center">
                                                        {data.comments}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex justify-center">
                                                        <Link to='#'>
                                                            <BiSolidEdit className="text-xl rounded m-1" style={{ backgroundColor: 'blue', color: 'white', padding: 2 }} />
                                                        </Link>
                                                        <Link to='#'>
                                                            <RiDeleteBin5Fill className="text-xl rounded m-1" style={{ backgroundColor: 'red', color: 'white', padding: 2 }} />
                                                        </Link>
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
            </div >
        </>
    )
}