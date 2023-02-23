import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import AdminNavbarLogout from './AdminNavbarLogout';

import { AiOutlineHome } from 'react-icons/ai';

// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AiOutlineForm } from 'react-icons/ai';
import { MdAppRegistration, MdGroups } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { VscKey } from 'react-icons/vsc';
import 'react-pro-sidebar/dist/css/styles.css';
import { useSelector } from 'react-redux';




export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState('-left-64');
    let { authStore } = useSelector((state) => state);
    const roleStatus = authStore.roletype;

    return (

        <>
            {/* <div style={{overflowY:"scroll",scrollMargin:"1px black"}}> */}
            {!authStore.loginStatus &&
            <></>

                // <AdminNavbar
                //     showSidebar={showSidebar}
                //     setShowSidebar={setShowSidebar}
                // />

              
            }

            {authStore.loginStatus &&

                <AdminNavbarLogout
                    showSidebar={showSidebar}
                    setShowSidebar={setShowSidebar}
                />

            }

            <div
                // style={{overflowY:"scroll"}}
                className={`h-screen fixed top-0 md:left-0 sm:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
                style={{ maxHeight: 'auto', marginTop: '180px', height: '400px' }}
            >
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                    {/* <a
                        href="http://localhost:8080/adv"
                        target="_blank"
                        rel="noreferrer"
                    >                       
                        <Grid container spacing={1}>
                            <Grid item xs={3} >
                                <img src={advlogo} width="60px" />
                            </Grid>
                            <Grid item xs={9}>
                                    <span> <b> <h6 style={{ marginLeft: '0px' ,marginTop:'10px'}}>Aadhaar Data Vault</h6></b></span>
                                </Grid>
                        </Grid>
                      
                    </a> */}

                    <div className="flex flex-col" >
                        {/* <hr className="my-4 min-w-full" /> */}

                        <ul className="flex-col min-w-full flex list-none"
                        // style={{maxHeight: 370, overflow: 'auto'}}
                        >

                            {/* <li className="rounded-lg mb-4 mt-2">
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<MdOutlineExpandMore />}
                            >
                                <Typography>
                                    <NavLink
                                        to="/"
                                        exact
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                        activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    >
                                        <AiOutlineHome />
                                        Dashboard
                                    </NavLink>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Settings
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        </li> */}


                            <li className="rounded-lg mb-1 mt-0">
                                <NavLink
                                    // to={`/${authStore.deptId}/${authStore.role}`}
                                    // to={`/${localStorage.getItem("DeptIdLS")}/${localStorage.getItem("RoleLS")}`}
                                    // to={`/${localStorage.getItem("DeptIdLS")}`}
                                    to={`/adv`}
                                    




                                    // to="/ECI0001"
                                    exact
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    {/* <Icon name="dashboard" size="2xl" /> */}
                                    <AiOutlineHome />
                                    Dashboard
                                </NavLink>
                            </li>





                            <li className="rounded-lg mb-1 ">
                                <NavLink
                                    to="/adv/appdetails"
                                    exact
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    {/* <Icon name="settings" size="2xl" /> */}
                                    <MdGroups />

                                    Application Details
                                </NavLink>
                            </li>




                            {/* {authStore.activity?.includes("USER_CREATION") && */}
                            {roleStatus == "1" &&

                                <li className="rounded-lg mb-1 ">
                                    <NavLink
                                        to="/adv/registration"
                                        exact
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                        activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    >
                                        {/* <Icon name="dashboard" size="2xl" /> */}
                                        <MdAppRegistration />
                                        Department Registration
                                    </NavLink>
                                </li>
                            }

                            {/* {authStore.activity?.includes("USER_CREATION") && */}
                            {roleStatus == "1" &&
                                <li className="rounded-lg mb-1">
                                    <NavLink
                                        to="/adv/appregistration"
                                        exact
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                        activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    >
                                        {/* <Icon name="dashboard" size="2xl" /> */}
                                        <AiOutlineForm />
                                        Application Registration
                                    </NavLink>
                                </li>
                            }


                            {/* {authStore.activity?.includes("USER_CREATION") && */}
                            {roleStatus == "1" &&
                                <li className="rounded-lg mb-1 ">
                                    <NavLink
                                        to="/adv/keyregistration"
                                        exact
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                        activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    >
                                        {/* <Icon name="dashboard" size="2xl" /> */}
                                        <VscKey />
                                        Key Registration
                                    </NavLink>
                                </li>
                            }


                            {/* {authStore.activity?.includes("USER_CREATION") && */}
                            {roleStatus == "1" &&
                                <li className="rounded-lg mb-1 ">
                                    <NavLink
                                        to="/adv/keymapping"
                                        exact
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                        activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    >
                                        {/* <Icon name="dashboard" size="2xl" /> */}
                                        <VscKey />
                                        Key Mapping
                                    </NavLink>
                                </li>
                            }








                            {/* {authStore.roletype=="2" &&  */}
                            {/* {authStore.activity?.includes("TRANSACTION_SPECIFIC_REPORT") && */}


                                <li className="rounded-lg mb-1 ">
                                    <NavLink
                                        to="/adv/reports"
                                        exact
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                        activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    >
                                        {/* <Icon name="dashboard" size="2xl" /> */}
                                        <TbReport />
                                        Report
                                    </NavLink>
                                </li>
                                <li className="rounded-lg mb-1 ">
                                    <NavLink
                                        to="/adv/billing"
                                        exact
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                        activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    >
                                        {/* <Icon name="dashboard" size="2xl" /> */}
                                        <TbReport />
                                        Bill
                                    </NavLink>
                                </li>
                            {/* } */}


                            
                            {/* <li className="rounded-lg mb-1 ">
                                    <NavLink
                                        to="/adv/billing"
                                        exact
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                        activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    >
                                      
                                        <TbReport />
                                        Billing
                                    </NavLink>
                                </li> */}

                            {authStore.activity?.includes("TRANSACTION_SPECIFIC_REPORT") &&


                                <li className="rounded-lg mb-1 ">
                                    <NavLink
                                        to="/adv/usermanagement"
                                        exact
                                        className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                        activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                    >
                                        {/* <Icon name="dashboard" size="2xl" /> */}
                                        <TbReport />
                                        User Management
                                    </NavLink>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </div>

            {/* </div> */}
        </>
    );
}