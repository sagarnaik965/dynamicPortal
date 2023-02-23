import React, { useEffect, useState } from 'react';
import { MdGroups } from "react-icons/md";
import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import Baseurl from './Baseurl';
import ReactLoading from "react-loading";
import BaseLocal from '../components/BaseLocal';
const ApplicationDetails = () => {
    const [Applications, setApplications] = useState([]);
    let { authStore } = useSelector((state => state))
    const [spinner, setSpinner] = useState(false);
    let history = useHistory();

    useEffect(() => {
        fetch(BaseLocal + "isSessNull")
            .then((response) => {
                if (response.status == 400) {
                    // console.log("bad request ")
                }
            }).then((actualData) =>[]
                // console.log(actualData + "___response from JAVA ")
            )
            .catch((err) => {
                console.log(err.message);
                localStorage.clear();
                history.push("/LoginRequired")
            });


        const fetchData = () => {
            setSpinner(true)
            fetch(Baseurl + "appcodedetails")
                .then((data) => {
                    const res = data.json();
                    return res
                }).then((res) => {
                    setApplications(res)
                    setSpinner(false)

                }).catch(e => {
                    console.log("error", e)
                    setSpinner(true)
                })
        }
        fetchData();
    }, [])


    return (
        <div style={{ minHeight: '500px' }} >
            {spinner ?
                <>
                    <div style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                        <center >
                            <ReactLoading type="spokes" color="#0000FF" height={100} width={120} />
                        </center>
                    </div>
                </>
                :
                <>
                    <div style={{ minHeight: '480px' }}>
                        <div className="flex flex-col mt-8" >
                            <table className="min-w-full">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-6 py-3 text-lg font-medium leading-4 tracking-wider text-left text-gray-900 uppercase border-b border-gray-200 bg-gray-50">
                                            Application Names
                                        </th>

                                    </tr>
                                </thead>

                                <tbody className="bg-white">
                                    {
                                        Applications.map(e =>

                                            <tr key={e.auaCode}>
                                                <td className="px-6 py-3 whitespace-no-wrap border-b border-gray-200">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 w-10 h-3">
                                                            <MdGroups size={20} />
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-small leading-5 text-gray-900">
                                                                <NavLink to={`/adv/applicationinfo/${e.auaCode}`}>{e.appName}</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default ApplicationDetails
