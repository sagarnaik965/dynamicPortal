import React from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Button1 from '@mui/material/Button';
import { MdPhone } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import '../assets/styles/dropdown.css';
import { logoutApiAction } from "../store/authslice";



export default function Navbar({ fixed }) {
  let { authStore } = useSelector((state) => state);
  let dispatch = useDispatch();
  let history = useHistory();

  var CryptoJS = require("crypto-js");
  try {
    var bytes = CryptoJS.AES.decrypt(authStore.deptId, 'adv');
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (error) {

  }

  const processLoginAction = () => {
    console.log("in AdminnavBarLogout")
    dispatch(logoutApiAction());
    localStorage.clear();
    history.push("/LoginRequired")
  };
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const roleStatus = authStore.roletype;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl(null);
  };

  const navtoadvasservice = () => {
    window.location.href = "https://advservice.epramaan.gov.in/dashboard/aadhaarValutAsService";
  };
  const navtoadvassolution = () => {
    window.location.href = "https://advservice.epramaan.gov.in/dashboard/aadhaardatavaultasasolution";

  }

  const [anchorE2, setAnchorE2] = React.useState(null);
  const open2 = Boolean(anchorE2);
  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorE2(null);
  };

  const navtoadvcontact = () => {
    window.location.href = "https://advservice.epramaan.gov.in/dashboard/contactus";
  }

  const navtoadvresources = () => {
    window.location.href = "https://advservice.epramaan.gov.in/dashboard/resources";

  }



  const [anchorE3, setAnchorE3] = React.useState(null);
  const open3 = Boolean(anchorE3);
  const handleClick3 = (event) => {
    setAnchorE3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorE3(null);
  };

  const navtoADV = () => {
    window.location.href = "https://advservice.epramaan.gov.in/dashboard/whatisadv";

  }
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-1 py-0   mb-1" style={{ backgroundColor: '#f0f0f0' }}>
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
              to="/adv"
            >
              Home
            </NavLink>
           
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-gray block lg:hidden outline-none focus:outline-none"
              type="button"

              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <AiOutlineMenu color='black' size={25} />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-1 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-100 hover:bg-white"

                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">
                    <Button1
                      style={{ color: 'black' }}
                      id="fade-button"
                      aria-controls={open2 ? 'fade-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open2 ? 'true' : undefined}
                      onClick={handleClick2}
                    // onMouseOver={handleClick2}
                    > <MdPhone style={{ marginTop: '0px', width: '25px', height: '20px' }} />
                      Contact Us
                    </Button1>
                    <Menu
                      id="fade-menu"
                      MenuListProps={{
                        'aria-labelledby': 'fade-button',
                      }}
                      anchorEl={anchorE2}
                      open={open2}
                      onClose={handleClose2}
                      TransitionComponent={Fade}
                    >
                      <MenuItem style={{ backgroundColor: '#eaeaea' }} onClick={(e) => { handleClose2();  }}   >
                      
                        <a
                        className=" hover:text-gray-900 font-medium block"
                        target="_blank"
                        rel="noreferrer"
                        href="https://advservice.epramaan.gov.in/dashboard/contactus"
                    >
                         Contact
                    </a>
                        
                        </MenuItem>
                      <hr />
                      <MenuItem style={{ backgroundColor: '#eaeaea' }} onClick={(e) => { handleClose2(); }}  >
                        
                       
                        <a
                        className=" hover:text-gray-900 font-medium block"
                        target="_blank"
                        rel="noreferrer"
                        href="https://advservice.epramaan.gov.in/dashboard/resources"
                    >
                        Resources
                    </a>
                        
                        </MenuItem>
                    </Menu>
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-1 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-100 hover:bg-white"

                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">
                    <Button1
                      style={{ color: 'black' }}
                      id="fade-button"
                      aria-controls={open1 ? 'fade-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open1 ? 'true' : undefined}
                      onClick={handleClick1}
                    >
                      Services
                    </Button1>
                    <Menu
                      id="fade-menu"
                      MenuListProps={{
                        'aria-labelledby': 'fade-button',
                      }}
                      anchorEl={anchorEl}
                      open={open1}
                      onClose={handleClose1}
                      TransitionComponent={Fade}

                    >
                      <MenuItem style={{ backgroundColor: '#eaeaea' }} onClick={(e) => { handleClose1();  }}  >
                      
                        <a
                        className=" hover:text-gray-900 font-medium block"
                        target="_blank"
                        rel="noreferrer"
                        href="https://advservice.epramaan.gov.in/dashboard/aadhaarValutAsService"
                    >
                        Aadhaar Data Vault as a Service
                    </a>

                        </MenuItem>
                      <hr />
                      <MenuItem style={{ backgroundColor: '#eaeaea' }} onClick={(e) => { handleClose1(); }}>           
                       <a
                        className=" hover:text-gray-900 font-medium block"
                        target="_blank"
                        rel="noreferrer"
                        href="https://advservice.epramaan.gov.in/dashboard/aadhaardatavaultasasolution"
                    >
                        Aadhaar Data Vault as a Solution
                    </a>
                       
                       </MenuItem>
                    </Menu>
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-1 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-100 hover:bg-white "

                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">
                    <Button1
                      style={{ color: 'black' }}
                      id="fade-button"
                      aria-controls={open3 ? 'fade-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open3 ? 'true' : undefined}
                      onClick={handleClick3}
                    // class="dropdown"
                    >
                      About Us
                    </Button1>
                    <Menu
                      id="fade-menu"
                      MenuListProps={{
                        'aria-labelledby': 'fade-button',
                      }}
                      anchorEl={anchorE3}
                      open={open3}
                      onClose={handleClose3}
                      TransitionComponent={Fade}
                    >
                      <MenuItem style={{ backgroundColor: '#eaeaea' }} onClick={(e) => { handleClose3();  }}  >
                     <a
                        className=" hover:text-gray-900 font-medium block"
                        target="_blank"
                        rel="noreferrer"
                        href="https://advservice.epramaan.gov.in/dashboard/whatisadv"
                    >
                       Aadhaar Data Vault(ADV)
                    </a>
                    </MenuItem>

                    </Menu>
                  </span>
                </a>
              </li>

             

            
            
            </ul>
          </div>
        </div>
      </nav>  
      <div className=" items-center justify-end md:flex md:flex-1 lg:w-0">
        <ul className="flex items-end   flex-col lg:flex-row list-none lg:ml-auto items-center justify-end ">


          {authStore.deptId &&
            <li className="nav-item">
              <a className="px-1 py-2 flex items-end text-xs uppercase font-bold leading-snug text-black hover:opacity-100 hover:bg-white "   >
                <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">
                  <div style={{ color: '#26a69a', }}>
                    <Button1
                      style={{ color: 'black' }}
                      id="fade-button"
                      aria-controls={open3 ? 'fade-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open3 ? 'true' : undefined}
                      disabled
                    >
                    WELCOME   {decryptedData}
                    </Button1>

                  </div>

                </span>
              </a>
            </li>
          }

          <li className="nav-item " >
            <a className="px-1 py-2 flex items-end text-xs uppercase font-bold leading-snug text-black hover:opacity-100 hover:bg-white "  >
              <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">
                <div style={{}}>
                  <Button1
                    style={{ color: 'black' }}
                    id="fade-button"
                    onClick={processLoginAction}

                  >
                    Logout
                  </Button1>
                </div>

              </span>
            </a>
          </li>

        </ul>
      </div>
    </>
  );
}