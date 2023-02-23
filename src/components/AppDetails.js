import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';

import * as React from 'react';
// import Form from 'react-bootstrap/Form';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { AiOutlineFolderView } from 'react-icons/ai';
import { MdOutlineManageAccounts, MdOutlineSettings } from 'react-icons/md';
import { useHistory } from "react-router-dom";
// import Popup from './Popup';
// import DropdownRender from './Example';
// import Example from './Example';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import View from './View';

import { useEffect } from 'react';
import AllowedOperations from './AllowedOperations';
import LicenceKey from './LicenceKey';
//import * as React from 'react';
//import Table from '@mui/material/Table';
//import TableBody from '@mui/material/TableBody';
//import TableCell from '@mui/material/TableCell';
import { useSelector } from 'react-redux';
//import TableRow from '@mui/material/TableRow';
//import Paper from '@mui/material/Paper';
// import {Menu,MenuHandler,MenuList,MenuItem} from "@material-tailwind/react/Menu";

//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';

// import { Radio } from "@material-tailwind/react";
//import { useNavigate } from "react-router-dom";
import Baseurl from './Baseurl';



export default function AppDetails() {

    const [page, setPage] = useState('0');

    const [alertflag, setAlertflag] = useState('1');
    const [alertflagapp, setAlertflagapp] = useState('1');

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const history = useHistory();

    // const nav=useNavigate();
    // const [flag, setflag] = useState('0');

    // const navigate=useNavigate();

    const [applk, setapplk] = useState({});
    let { authStore } = useSelector((state) => state);


    const handleManageLK = (e) => {

        if (alertflag == '1') {
            alert('Please select Department List first!')
            window.location.reload(false);
        } 
        if(alertflagapp=='1')
        {
            alert('Please select Application List first!')
        }else {
            // history.push('/lk')
            setPage(2)

            // fetch(Baseurl + `applk/${appname}`)
            //     .then((data) => {
            //         const res = data.json();
            //         console.log("resss", res)
            //         return res
            //     }).then((res) => {
            //         setapplk(res)
            //         console.log("resss", res)
            //     }).catch(e => {
            //         console.log("error", e)
            //     })


            //  setPage(0);


            fetch(Baseurl + "applk",
                // fetch(`http://localhost:8082/dept/appupdate/${appcode}`,

                {
                    method: "POST",
                    body: appname,
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "http://localhost:3000",

                    },

                }
            )
                .then(res => {
                    return res.json()
                })
                .then(
                    res => {
                        console.log(res);
                        setapplk(res)
                    }

                )
                .catch(e => {
                    console.log("error", e)
                })


        }
    }

    // localStorage.setItem("appcode",appname)
    const [opr, setopr] = useState({})

    const handleOpr = (e) => {

        if (alertflag == '1') {
            alert('Please select Department List first!')
            window.location.reload(false);
        }
        if(alertflagapp=='1')
        {
            alert('Please select Application List first!')
        }
        else {
            setPage(3);

            // fetch(Baseurl + `opr/${appname}`)
            //     .then((data) => {
            //         const res = data.json();
            //         console.log("resss", res)
            //         return res
            //     }).then((res) => {
            //         setopr(res)
            //         console.log("resss", res)
            //     }).catch(e => {
            //         console.log("error", e)
            //     })



            fetch(Baseurl + "opr",
                // fetch(`http://localhost:8082/dept/appupdate/${appcode}`,

                {
                    method: "POST",
                    body: appname,
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "http://localhost:3000",

                    },

                }
            )
                .then(res => {
                    return res.json()
                })
                .then(
                    res => {
                        console.log(res);
                        setopr(res)
                    }

                )
                .catch(e => {
                    console.log("error", e)
                })
        }

        // setPage(0);
    }



    const handleView = (e) => {

        // alert("hello")

        // <Redirect to='/appdetails'  />

        // history.push('/appdetails')
        if (alertflag == '1') {
            alert('Please select Department List first!')
            window.location.reload(false);
        }
        if(alertflagapp=='1')
        {
            alert('Please select Application List first!')
        }
        else {
            setPage(1);
        }
        // history.push('/view')
    }

    const [email, setemail] = useState("");
    const [desc, setdesc] = useState("");
    const [appn, setappn] = useState("");

    let demo = "pqr"

    // const handleUpdate = (e) => {

    //     console.log("update");
    //     console.log(email)
    //     console.log(desc)
    //     console.log(appn)

    //     // fetch('http://localhost:8082/appupdate/${appname}', {
    //     //     method: "POST",  
    //     //     // headers: {
    //     //     //   "Content-Type": "application/json",
    //     //     //   "Access-Control-Allow-Origin": "http://localhost:3000",
    //     //     // },
    //     //     body: JSON.stringify(data),


    //     //   }).then((res)=> res.json()).then((res)=>{
    //     //     setRoles(res);
    //     //   }).then(()=>{console.log("success")})
    //     //flag=1;


    //     fetch(`http://localhost:8082/appupdate/${appname}`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //           email: {email},
    //            desc: {desc},
    //            appname: {demo}
    //         }),
    //     })
    //     .then(response => console.log('Submitted successfully'))
    //     .catch(error => console.log('Form submit error', error))
    //         // .then((res) => {
    //         //     if (res.data) {
    //         //         alert("updated")
    //         //         console.log(res.data)
    //         //     } else {
    //         //         console.log(res)
    //         //     }
    //         // })
    //     // .then((response) => response.json())
    //     // //Then with the data from the response in JSON...
    //     // .then((data) => {
    //     //     console.log('Success:', data);
    //     //     alert("update successfully")
    //     // })
    //     // //Then with the error genereted...
    //     // .catch((error) => {

    //     //     console.error('Error:', error);
    //     // });


    // }

    // let handleUpdate = async (e) => {
    //     e.preventDefault();
    //     try {
    //       let res = await fetch(`http://localhost:8082/appupdate/${appname}`, {
    //         method: "POST",
    //         body: JSON.stringify({

    //           email: email,
    //           desc: desc,
    //           appname: appn,

    //         }),
    //       });
    //       let resJson = await res.json();
    //       if (res.status === 200) {
    //         setemail("");
    //         setdesc("");
    //         setappn("");
    //         alert("updated")
    //         //setMessage("User created successfully");
    //       } else {

    //         //setMessage("Some error occured");
    //       }
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };

    // const handleUpdate = event => {
    //     event.preventDefault();

    //     const url = `http://localhost:8082/dept/appupdate/${appname}`
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ email, desc, appn })
    //     };
    //     fetch(url, requestOptions)
    //         .then(response => console.log('Submitted successfully' + response))
    //         .catch(error => console.log('Form submit error', error))
    // };




    // React.useEffect(() => {
    //     localStorage.setItem('app_name', appname)
    // })

    const [appdetail, setappdetail] = useState({});
    const [appname, setappname] = React.useState();

    const handleChange = e => {
        // alert(e.target.value)
        //alert(e.target.value)
        setAlertflagapp('0')
        setappname(e.target.value)
        //  localStorage.setItem("appcode",appname);
        // localStorage.setItem("appdetail",appdetail);


        // localStorage.setItem('appdetail', JSON.stringify(appdetail));

        //  history.push('/view')

        // fetch(Baseurl + `appdetail/${e.target.value}`)
        //     .then((data) => {
        //         const res = data.json();
        //         console.log("resss", res)
        //         return res
        //     }).then((res) => {
        //         setappdetail(res)
        //         console.log("resss", res)
        //     }).catch(e => {
        //         console.log("error", e)
        //     })



        fetch(Baseurl + "appdetail",
            // fetch(`http://localhost:8082/dept/appupdate/${appcode}`,

            {
                method: "POST",
                body: e.target.value,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:3000",

                },

            }
        )
            .then(res => {
                return res.json()
            })
            .then(
                res => {
                    console.log(res);
                    setappdetail(res)
                }

            )
            .catch(e => {
                console.log("error", e)
            })






        e.preventDefault();

        setPage(0);

        // <View appdetails={appdetail}/>

        //  window.location.reload(false);

        // localStorage.setItem("email",)

        //  history.push('/view')
    };

    var CryptoJS = require("crypto-js");
    try {
        var bytes = CryptoJS.AES.decrypt(authStore.deptId, 'adv');
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        // console.log(decryptedData)
        var username = decryptedData;

    } catch (error) {
        // console.log(error)

    }


    // for dept dropdown



    const [deptlist, setDeptList] = useState([]);
    const [department, setDepartment] = useState({});

    // useEffect(() => {
    //     const fetchData = () => {
    //         fetch(Baseurl+"getDeptcodeandName/" + username)
    //             .then((data) => {
    //                 const res = data.json();

    //                 return res
    //             }).then((res) => {
    //                 //  setDeptList(res)
    //                 setDepartment(res)
    //                 // alert(deptlist.dept_name)
    //                 // console.log("resss-----------------------------------------------------", res)
    //             }).catch(e => {
    //                 console.log("error", e)
    //             })
    //     }
    //     fetchData();
    // }, [])

    // e.preventDefault()

    //     let demo = JSON.stringify({ email, desc, appname })
    //     console.log(demo)
    //     console.log(JSON.parse(demo))

    //     if (email != "" && desc != "" && appname != "") {
    //     fetch(Baseurl+ `appupdate/${appcode}`,
    //         // fetch(`http://localhost:8082/dept/appupdate/${appcode}`,

    //             {
    //                 method: "POST",
    //                 body: JSON.stringify({ email, desc, appname }),
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     "Access-Control-Allow-Origin": "http://localhost:3000",

    //                 },

    //             }
    //         ).then(r => {
    //             alert("Application detail updated successfully")
    //             getappdetails()
    //             // window.location.reload(false);

    //         })

    //             .catch(r => { alert("Updation unsuccessfull") })


    //     }


    useEffect(() => {
        // alert(username)

        let demo = JSON.stringify({ username })
        console.log(demo)
        console.log(JSON.parse(demo))

        fetch(Baseurl + "getDeptcodeandName",
            // fetch(`http://localhost:8082/dept/appupdate/${appcode}`,

            {
                method: "POST",
                body: username,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:3000",

                },

            }
        ).then(r => {
            // alert("Application detail updated successfully")
            // getappdetails()
            // window.location.reload(false);
            return r.json();

        }).then(resp => {
            console.log(resp);
            setDepartment(resp);

        })

        // .catch(r => { alert("Updation unsuccessfull") })



    }, [])



    const [dept, setDept] = useState("");

    const handleDept = (e) => {
        //e.preventDefault();
        setAlertflag('0')
        // setAlertflagapp('0')
        setDept(e.target.value);
        console.log(dept)
        // alert(e.target.value)

        // fetch("http://localhost:8082/deptlist")
        //     .then((data) => {
        //         const res = data.json();

        //         return res
        //     }).then((res) => {
        //         setDeptList(res)
        //         // alert(deptlist.dept_name)
        //         console.log("resss", res)
        //     }).catch(e => {
        //         console.log("error", e)
        //     })


        // fetch(Baseurl + `applist/${e.target.value}`)
        //     .then((data) => {
        //         const res = data.json();
        //         console.log("resss", res)

        //         return res
        //     }).then((res) => {
        //         setapplist(res)
        //         console.log("resss", res)
        //     }).catch(e => {
        //         console.log("error", e)
        //     })


        let demo = JSON.stringify(e.target.value)
        console.log(demo)
        console.log(JSON.parse(demo))
        fetch(Baseurl + "applist",
            // fetch(`http://localhost:8082/dept/appupdate/${appcode}`,

            {
                method: "POST",
                body: e.target.value,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:3000",

                },

            }
        )
            .then(res => {
                return res.json()
            })
            .then(
                res => {
                    console.log(res);
                    setapplist(res)
                }

            )
            .catch(e => {
                console.log("error", e)
            })
    }



    // const [deptcode, setdeptcode] = useState();
    //for application

    const [applist, setapplist] = useState([]);



    const handleappdetailchange = () => {

    }

    // const ApplistCall = () => {


    //   //  setDept(e.target.value);
    //     //  fetch("http://localhost:8082/getDeptDetails?deptName="+{}+"deptCode=+{dept}")
    //     fetch(`http://localhost:8082/applist/${dept}`)
    //         .then((data) => {
    //             const res = data.json();
    //             console.log("resss", res)

    //             return res
    //         }).then((res) => {
    //             setapplist(res)
    //             console.log("resss", res)
    //         }).catch(e => {
    //             console.log("error", e)
    //         })
    // }


    // useEffect(() => {

    //     ApplistCall();
    // }, [])





    //   const handleSubmit = e => {
    //     e.preventDefault();
    //     console.log(appname);
    //   };
    if (page == '0') {
        return (
            <Card>
                {/* <CardHeader color="purple" contentPosition="left">
                    <h2 className="text-white text-2xl">Application List</h2>
                </CardHeader> */}
                <CardBody>
                    {/* <div className="container px-4 mx-auto flex flex-wrap items-center justify-between"> */}
                    <Grid container spacing={3}>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            {/* <h1>dept{deptcode}</h1> */}
                            <div align="right">
                                <Box sx={{ minWidth: 180 }}>
                                    <FormControl style={{ minWidth: 170 }} >
                                        <InputLabel id="demo-simple-select-label">Department List</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            // value={age}
                                            label="Department List"
                                            onChange={handleDept}
                                            style={{ height: '43px' }}
                                        >

                                            <MenuItem value={department.dept_code}  > {department.dept_name} </MenuItem>
                                            {/* {deptlist.map((item, index) => (
                                                <MenuItem key={index} value={item?.dept_code} >
                                                    {item?.dept_name}
                                                </MenuItem>
                                            ))
                                            } */}


                                            {/* <MenuItem value={10} >Department 1</MenuItem>
                                            <MenuItem value={20}>Department 2</MenuItem>
                                            <MenuItem value={30}>Department 3</MenuItem> */}
                                        </Select>

                                    </FormControl>

                                </Box>
                            </div>

                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>

                            <div align="left">
                                <Box sx={{ minWidth: 180 }}>
                                    <FormControl style={{ minWidth: 170 }} >
                                        <InputLabel id="demo-simple-select-label">Application List</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            // value={age}
                                            label="Application List"
                                            onChange={handleChange}
                                            style={{ height: '43px' }}
                                        >

                                            {/* {Object.values(applist).map((value, index) => {
                                                return (
                                                    <div>
                                                        <MenuItem key={index}>{value.app_name}</MenuItem>
                                                    </div>
                                                )
                                            })
                                            } */}

                                            {applist.map((item, index) => (
                                                <MenuItem key={index} value={item?.appcode} >
                                                    {item?.appname}
                                                </MenuItem>
                                            ))
                                            }






                                        </Select>

                                    </FormControl>
                                </Box>
                            </div>
                            <br></br><br></br>
                        </Grid>

                        {/* <Grid item xs={2}>
                            
                        </Grid> */}
                        {/* <Grid container spacing={3}>

                        <Grid item xs={12}>

                        <Button variant="contained" size="small" startIcon={<AiOutlineFolderView color="primary" />} onClick={handleView}>View </Button>
                        <Button variant="contained" size="small" startIcon={<MdOutlineManageAccounts color="primary" />} onClick={handleManageLK}>Manage Licence Key </Button>
                        <Button variant="contained" size="small" startIcon={<MdOutlineSettings color="primary" />} onClick={handleOpr} >Allowed Operations</Button>
                        </Grid>
                        </Grid> */}

                        <Grid item xs={3} sm={12} md={8} lg={3}></Grid>
                        <Grid item xs={2} sm={12} md={8} lg={2}>
                            <div align="right">
                                <Button variant="contained" size="small" startIcon={<AiOutlineFolderView color="primary" />} onClick={handleView}>Application View </Button>
                            </div>
                        </Grid>
                        <Grid item xs={2} sm={12} md={8} lg={2}>
                            <div align="center">
                                <Button variant="contained" size="small" startIcon={<MdOutlineManageAccounts color="primary" />} onClick={handleManageLK}>Manage Licence Key </Button>
                            </div>
                        </Grid>
                        <Grid item xs={2} sm={12} md={8} lg={2}>
                            <div align="left">
                                <Button variant="contained" size="small" startIcon={<MdOutlineSettings color="primary" />} onClick={handleOpr} >Allowed Operations</Button>
                            </div>
                        </Grid>

                        <Grid item xs={3} sm={12} md={8} lg={3}></Grid>
                    </Grid>
                    {/* </div> */}
                    {/* <Grid item xs={2}>
                            
                            </Grid> */}

                </CardBody>
            </Card>
        );
    }
    else if (page == '1') {
        return (
            <Card>
                {/* <CardHeader color="purple" contentPosition="left">
                    <h2 className="text-white text-2xl">Application List</h2>
                </CardHeader> */}

                <CardBody>

                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            {/* <div align="right">
                                <Dropdown
                                    align="center"
                                    color="purple"
                                    buttonText={
                                        <div className="w-19">
                                            <label color='black'>Department List</label>
                                        </div>
                                    }
                                >
                                    <DropdownItem color="lightBlue">
                                        Department 1
                                    </DropdownItem>
                                    <DropdownItem color="lightBlue">
                                        Department 2
                                    </DropdownItem>
                                    <DropdownItem color="lightBlue">
                                        Department 3
                                    </DropdownItem>
                                </Dropdown>
                            </div> */}
                            <div align="right">
                                <Box sx={{ minWidth: 180 }}>
                                    <FormControl style={{ minWidth: 170 }} >
                                        <InputLabel id="demo-simple-select-label">Department List</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            // value={age}
                                            label="Department List"
                                            onChange={handleChange}
                                            style={{ height: '43px' }}
                                        >
                                            <MenuItem value={department.dept_code}  > {department.dept_name} </MenuItem>

                                            {/* {
                                                deptlist.map((item, index) => (
                                                    <MenuItem key={index} value={item.dept_code} >
                                                        {item.dept_name}
                                                    </MenuItem>
                                                ))
                                            } */}
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>

                        </Grid>
                        <Grid item xs={6}>
                            {/* <div align="left">
                                <Dropdown
                                    color="purple"
                                    buttonText={
                                        <div className="w-19">
                                            <label color='black'>Application List</label>
                                        </div>
                                    }
                                >
                                    <DropdownItem color="lightBlue">
                                        Application 1
                                    </DropdownItem>
                                    <DropdownItem color="lightBlue">
                                        Application 2
                                    </DropdownItem>
                                    <DropdownItem color="lightBlue">
                                        Application 3
                                    </DropdownItem>
                                </Dropdown>

                            </div> */}
                            <div align="left">
                                <Box sx={{ minWidth: 180 }}>
                                    <FormControl style={{ minWidth: 170 }} >
                                        <InputLabel id="demo-simple-select-label">Application List</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            // value={age}
                                            label="Application List"
                                            onChange={handleChange}
                                            style={{ height: '43px' }}
                                        >
                                            {/* {Object.values(applist).map((value, index) => {
                                                return (
                                                    <div>
                                                        <MenuItem key={index}>{value.app_name}</MenuItem>
                                                    </div>
                                                )
                                            })
                                            } */}


                                            {applist.map((item, index) => (
                                                <MenuItem key={index} value={item.appcode} >
                                                    {item.appname}
                                                </MenuItem>
                                            ))
                                            }

                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                            <br></br><br></br>
                        </Grid>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={2}>
                            <div align="right">
                                <Button variant="contained" size="small" startIcon={<AiOutlineFolderView color="primary" />} onClick={handleView}>Application View </Button>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div align="center">
                                <Button variant="contained" size="small" startIcon={<MdOutlineManageAccounts color="primary" />} onClick={handleManageLK}>Manage Licence Key </Button>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div align="left">
                                <Button variant="contained" size="small" startIcon={<MdOutlineSettings color="primary" />} onClick={handleOpr} >Allowed Operations</Button>
                            </div>
                        </Grid>
                        <Grid item xs={3}></Grid>
                    </Grid>
                    <br></br>



                    {/* <Box style={{ position: 'relative', marginLeft: '200px', marginRight: '200px', border: '5px groove plum',borderTopLeftRadius:'3rem' ,borderTopRightRadius:'3rem',borderBottomLeftRadius:'3rem',borderBottomRightRadius:'3rem',backgroundColor:'whitesmoke'}}>
                        <br></br>
                        <View />
                    </Box> */}
                    <Grid >
                        {/* <div className="container px-8 mx-auto flex flex-wrap items-center justify-between"> */}
                            <div align="center" style={{marginLeft:'auto',marginRight:'auto'}}>
                                <View appdetails={appdetail} />
                            </div>
                        {/* </div> */}

                        {/* <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                > */}
                        {/* <h3 className="text-blue-500 text-sm mt-3 mb-6 font-light uppercase" align="center">
                                    <b>Application Details</b>
                                </h3> */}
                        {/* <TextField id="filled-basic" label="Email" variant="filled" fullWidth /><br></br>
        <TextField id="filled-basic" label="Description" variant="filled" fullWidth /><br></br>
        <TextField id="filled-basic" label="App Name" variant="filled" fullWidth /><br></br> */}

                        {/* <TextField
                                        id="standard-helperText"
                                        label={appdetail.email}
                                        defaultValue={appdetail.email}
                                       

                                        //   helperText="Some important text"
                                    // variant="standard" 
                                 />  */}

                        {/* <Button variant='contained' size='small' width='10px'>Update</Button> */}



                        {/* <div align="right">
                                        <Box sx={{ minWidth: 180 }}>
                                            <FormControl style={{ minWidth: 170 }} >
                                                <InputLabel id="demo-simple-select-label">Department List</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    // value={age}
                                                    label="Department List"
                                                // onChange={handleDept}

                                                >

                                                    {appdetail.map((item, index) => (
                                                        <MenuItem key={index} value={item.email} >
                                                            {item.email}
                                                        </MenuItem>
                                                    ))

                                                    }
                                                  
                                                </Select>

                                            </FormControl>

                                        </Box>
                                    </div> */}




                        {/* </Box> */}

                        <br></br>

                        {/* <TableContainer style={{ border: '2px groove black ', borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem', borderBottomLeftRadius: '2rem', borderBottomRightRadius: '2rem', position: 'relative', marginLeft: 'auto', marginRight: 'auto' }}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align='center'> Email</TableCell>
                                            <TableCell align='center'> Description</TableCell>
                                            <TableCell align='center'> Appname</TableCell>
                                           
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        {
                                            appdetail.map((appd) => (

                                                <TableRow key={appd.appname}>
                                                    <TableCell align='center'> {appd.email}</TableCell>
                                                    <TableCell align='center'> {appd.desc}</TableCell>
                                                    <TableCell align='center'> {appd.appname}</TableCell>
                                                 
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer> */}
                        {/* <Button variant="contained" size="small" align="center">Update</Button><br></br> */}

                        {/* </div> */}



                        {/* <div align="center">

                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <div>
                                    <Grid item xs={3}>
                                        {appdetail.map((appd) => (
                                            <TextField
                                                id="standard-helperText"
                                                label="Email"
                                                defaultValue={appd.email}
                                                placeholder="Enter email"
                                                onChange={(e) => setemail(e.target.value)}
                                                // helperText="Some important text"
                                                variant="standard"
                                            />

                                        ))
                                        }
                                    </Grid>
                                    <Grid item xs={3}>

                                        {appdetail.map((appd) => (
                                            <TextField
                                                id="standard-helperText"
                                                label="Description"
                                                defaultValue={appd.desc}
                                                placeholder="Enter Description"
                                                onChange={(e) => setdesc(e.target.value)}
                                                // helperText="Some important text"
                                                variant="standard"
                                            />

                                        ))
                                        }
                                    </Grid>

                                    <Grid item xs={3}>

                                        {appdetail.map((appd) => (
                                            <TextField
                                                id="standard-helperText"
                                                label="Appname"
                                                placeholder='Enter Appname'
                                                defaultValue={appd.appname}
                                                onChange={(e) => setappn(e.target.value)}
                                                // helperText="Some important text"
                                                variant="standard"
                                            />

                                        ))
                                        }
                                    </Grid><br></br>

                                    <Grid item xs={3}>

                                        <Button variant='contained' size='small' width='10px' onClick={handleUpdate}>Update</Button>
                                    </Grid>
                                    <br></br>
                                </div>
                            </Box>
                        </div> */}




                    </Grid>
                </CardBody>

            </Card>
        );
    }
    else if (page == '2') {
        return (
            <Card>
                {/* <CardHeader color="purple" contentPosition="left">
                    <h2 className="text-white text-2xl">Application List</h2>
                </CardHeader> */}
                <CardBody>


                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            {/* <div align="right">
                                <Dropdown
                                    align="center"
                                    color="purple"
                                    buttonText={
                                        <div className="w-19">
                                            <label color='black'>Department List</label>
                                        </div>
                                    }
                                >
                                    <DropdownItem color="lightBlue">
                                        Department 1
                                    </DropdownItem>
                                    <DropdownItem color="lightBlue">
                                        Department 2
                                    </DropdownItem>
                                    <DropdownItem color="lightBlue">
                                        Department 3
                                    </DropdownItem>
                                </Dropdown>
                            </div> */}

                            <div align="right">
                                <Box sx={{ minWidth: 180 }}>
                                    <FormControl style={{ minWidth: 170 }} >
                                        <InputLabel id="demo-simple-select-label">Department List</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            // value={age}
                                            label="Department List"
                                            onChange={handleChange}
                                            style={{ height: '43px' }}
                                        >
                                            <MenuItem value={department.dept_code}  > {department.dept_name} </MenuItem>
                                            {/* {
                                                deptlist.map((item, index) => (
                                                    <MenuItem key={index} value={item.dept_code} >
                                                        {item.dept_name}
                                                    </MenuItem>
                                                ))
                                            } */}

                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>

                        </Grid>
                        <Grid item xs={6}>
                            {/* <div align="left">
                                <Dropdown
                                    color="purple"
                                    buttonText={
                                        <div className="w-19">
                                            <label color='black'>Application List</label>
                                        </div>
                                    }
                                >
                                    <DropdownItem color="lightBlue">
                                        Application 1
                                    </DropdownItem>
                                    <DropdownItem color="lightBlue">
                                        Application 2
                                    </DropdownItem>
                                    <DropdownItem color="lightBlue">
                                        Application 3
                                    </DropdownItem>
                                </Dropdown>

                            </div> */}

                            <div align="left">
                                <Box sx={{ minWidth: 180 }}>
                                    <FormControl style={{ minWidth: 170 }} >
                                        <InputLabel id="demo-simple-select-label">Application List</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            // value={age}
                                            label="Application List"
                                            onChange={handleChange}
                                            style={{ height: '43px' }}
                                        >
                                            {/* {Object.values(applist).map((value, index) => {
                                                return (
                                                    <div>
                                                        <MenuItem key={index}>{value.app_name}</MenuItem>
                                                    </div>
                                                )
                                            })
                                            } */}


                                            {applist.map((item, index) => (
                                                <MenuItem key={index} value={item.appcode} >
                                                    {item.appname}
                                                </MenuItem>
                                            ))
                                            }

                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                            <br></br><br></br>
                        </Grid>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={2}>
                            <div align="right">
                                <Button variant="contained" size="small" startIcon={<AiOutlineFolderView color="primary" />} onClick={handleView}>Application View</Button>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div align="center">
                                <Button variant="contained" size="small" startIcon={<MdOutlineManageAccounts color="primary" />} onClick={handleManageLK}>Manage Licence Key</Button>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div align="left">
                                <Button variant="contained" size="small" startIcon={<MdOutlineSettings color="primary" />} onClick={handleOpr} >Allowed Operations</Button>
                            </div>
                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>
                    <br></br>



                    {/* <Box style={{ position: 'relative', marginLeft: '200px', marginRight: '200px', border: '5px groove plum',borderTopLeftRadius:'3rem' ,borderTopRightRadius:'3rem',borderBottomLeftRadius:'3rem',borderBottomRightRadius:'3rem',backgroundColor:'whitesmoke'}}>
                        <br></br>
                        <View />
                    </Box> */}
                    {/* <Grid style={{ border: '5px groove whitesmoke', borderTopLeftRadius: '3rem', borderTopRightRadius: '3rem', borderBottomLeftRadius: '3rem', borderBottomRightRadius: '3rem' }}> */}
                    <Grid>
                        <Grid item xs={12}>
                            <div align="center">
                                <LicenceKey applklist={applk} />

                                {/* <Box>
                                    <CardBody>
                                        <div>
                                            <form>

                                                <TableContainer component={Paper} style={{ border: '2px groove black ', borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem', borderBottomLeftRadius: '2rem', borderBottomRightRadius: '2rem' }}>
                                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell align='center'> Licence Key</TableCell>
                                                                <TableCell align='left'> Validity</TableCell>

                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>

                                                            {
                                                                applk.map((appl) => (

                                                                    <TableRow key={appl.lk}>
                                                                        <TableCell align='center'> {appl.lk}</TableCell>
                                                                        <TableCell align='left'> {appl.lkexpiry}</TableCell>

                                                                    </TableRow>
                                                                ))
                                                            }
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>

                                            </form>

                                        </div>
                                    </CardBody>
                                </Box> */}



                            </div>

                        </Grid>
                    </Grid>
                </CardBody>
            </Card>
        );
    }

    else if (page == '3') {
        return (
            <Card>
                {/* <CardHeader color="purple" contentPosition="left">
                    <h2 className="text-white text-2xl">Application List</h2>
                </CardHeader> */}
                <CardBody>


                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            {/* <div align="right">
                                <Dropdown
                                    align="center"
                                    color="purple"
                                    buttonText={
                                        <div className="w-19">
                                            <label color='black'>Department List</label>
                                        </div>
                                    }
                                >
                                    <DropdownItem color="lightBlue">
                                        Department 1
                                    </DropdownItem>
                                    <DropdownItem color="lightBlue">
                                        Department 2
                                    </DropdownItem>
                                    <DropdownItem color="lightBlue">
                                        Department 3
                                    </DropdownItem>
                                </Dropdown>
                            </div> */}
                            <div align="right">
                                <Box sx={{ minWidth: 180 }}>
                                    <FormControl style={{ minWidth: 170 }} >
                                        <InputLabel id="demo-simple-select-label">Department List</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            // value={age}
                                            label="Department List"
                                            onChange={handleChange}
                                            style={{ height: '43px' }}
                                        >
                                            <MenuItem value={department.dept_code}  > {department.dept_name} </MenuItem>
                                            {/* {
                                                deptlist.map((item, index) => (
                                                    <MenuItem key={index} value={item.dept_code} >
                                                        {item.dept_name}
                                                    </MenuItem>
                                                ))
                                            } */}
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>

                        </Grid>
                        <Grid item xs={6}>
                            {/* <div align="left">
                                <Dropdown
                                    color="purple"
                                    buttonText={
                                        <div className="w-19">
                                            <label color='black'>Application List</label>
                                        </div>
                                    }
                                >
                                    <DropdownItem color="lightBlue">
                                        Application 1
                                    </DropdownItem>
                                    <DropdownItem color="lightBlue">
                                        Application 2
                                    </DropdownItem>
                                    <DropdownItem color="lightBlue">
                                        Application 3
                                    </DropdownItem>
                                </Dropdown>

                            </div> */}

                            <div align="left">
                                <Box sx={{ minWidth: 180 }}>
                                    <FormControl style={{ minWidth: 170 }} >
                                        <InputLabel id="demo-simple-select-label">Application List</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            // value={age}
                                            label="Application List"
                                            onChange={handleChange}
                                            style={{ height: '43px' }}
                                        >
                                            {/* {Object.values(applist).map((value, index) => {
                                                return (
                                                    <div>
                                                        <MenuItem key={index}>{value.app_name}</MenuItem>
                                                    </div>
                                                )
                                            })
                                            } */}

                                            {applist.map((item, index) => (
                                                <MenuItem key={index} value={item.appcode} >
                                                    {item.appname}
                                                </MenuItem>
                                            ))
                                            }

                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                            <br></br><br></br>
                        </Grid>
                        <Grid item xs={3}></Grid>
                        <Grid item xs={2}>
                            <div align="right">
                                <Button variant="contained" size="small" startIcon={<AiOutlineFolderView color="primary" />} onClick={handleView}>Application View </Button>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div align="center">
                                <Button variant="contained" size="small" startIcon={<MdOutlineManageAccounts color="primary" />} onClick={handleManageLK}>Manage Licence Key </Button>
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <div align="left">
                                <Button variant="contained" size="small" startIcon={<MdOutlineSettings color="primary" />} onClick={handleOpr} >Allowed Operations</Button>
                            </div>
                        </Grid>
                        <Grid item xs={3}></Grid>
                    </Grid>
                    <br></br>
                    {/* <br></br>
                    <br></br> */}


                    {/* <Box style={{ position: 'relative', marginLeft: '200px', marginRight: '200px', border: '5px groove plum',borderTopLeftRadius:'3rem' ,borderTopRightRadius:'3rem',borderBottomLeftRadius:'3rem',borderBottomRightRadius:'3rem',backgroundColor:'whitesmoke'}}>
                        <br></br>
                        <View />
                    </Box> */}
                    <Grid >
                        <Grid item xs={12}>
                            <div align="center">
                                <AllowedOperations Operations={opr} />



                                {/* <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell> get str</TableCell>


                                            </TableRow>
                                        </TableHead>
                                        <TableBody>

                                            {
                                                opr.map((appl) => (
                                                    appl.is_struid !== true ? <FcCheckmark /> : <FcCancel />
                                                ))
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer> */}


                                {/* <Grid container spacing={1} style={{ border: '2px groove black ', borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem', borderBottomLeftRadius: '2rem', borderBottomRightRadius: '2rem' }}>
                                    <Grid item xs={4}>
                                        <div align="center"><b>Get Store UID
                                            {
                                                opr.map((appl) => (
                                                    appl.is_struid == true ? <FcCheckmark /> : <FcCancel />
                                                ))
                                            }</b></div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div align="center"><b>Get Reference Number
                                            {
                                                opr.map((appl) => (
                                                    appl.is_getrefnum == true ? <FcCheckmark /> : <FcCancel />
                                                ))
                                            }</b></div>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <div align="center"><b>Get UID
                                            {
                                                opr.map((appl) => (
                                                    appl.is_getuid == true ? <FcCheckmark /> : <FcCancel />
                                                ))
                                            }</b></div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div align="center"><b>Activate
                                            {
                                                opr.map((appl) => (
                                                    appl.is_activate == true ? <FcCheckmark /> : <FcCancel />
                                                ))
                                            }</b></div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div align="center"><b>Deactivate
                                            {
                                                opr.map((appl) => (
                                                    appl.is_deactivate == true ? <FcCheckmark /> : <FcCancel />
                                                ))
                                            }</b></div>
                                    </Grid>
                                    <br></br>
                                </Grid> */}

                            </div>

                        </Grid>
                    </Grid>
                </CardBody>
            </Card>
        );
    }
}

