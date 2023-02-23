import Card from '@material-tailwind/react/Card';
import CardRow from '@material-tailwind/react/CardRow';
import { useEffect, useState } from 'react';
import { BiGroup, BiPoll } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { loginApiAction, setDeptidAction } from '../store/authslice';
import Grid from '@mui/material/Grid';
import Baseurl from '../components/Baseurl';
import BaseLocal from '../components/BaseLocal';
import '../assets/styles/animation.css';

import { ChartForWeeklyTransaction } from '../components/ChartForWeeklyTransaction';
import Donutchart from '../components/Donutchart';

export default function Dashboard() {
    const [succesfullcount, setsuccesfullcount] = useState(700000000000);
    const [unsuccesfullcount, setunsuccesfullcount] = useState(20000);
    const [totalac, setTotalac] = useState(1);
    let history = useHistory();
    const [spinner, setSpinner] = useState(false);

    var CryptoJS = require("crypto-js");
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify("ASM00017"), 'adv').toString();
    // Decrypt
    try {
        var bytes = CryptoJS.AES.decrypt(ciphertext, 'adv');
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    } catch (error) {
        // console.log(error)

    }

    useEffect(() => {

        fetch(BaseLocal + "isSessNull")
            .then((response) => {

                if (response.status == 400) {
                    console.log("bad request ")
                }
            }).then((actualData) => { }
            )
            .catch((err) => {
                console.log(err.message);

                localStorage.clear();
                history.push("/LoginRequired")
            });


        fetch(Baseurl + "getusername")
            .then((response) => {
                if (response.status == 500) {
                    history.push("/LoginRequired")
                }
                return response.text()
            })
            .then((actualData) => {
                if (actualData == "f") {
                    localStorage.clear();
                    history.push("/LoginRequired")

                } else {
                    dispatch(loginApiAction());
                    // setUsername(actualData);
                    ciphertext = CryptoJS.AES.encrypt(JSON.stringify(actualData), 'adv').toString();
                    localStorage.setItem('LsdItped', ciphertext);
                    // localStorage.setItem('DeptIdLS', actualData);
                    // localStorage.setItem('DeptIdLS', CryptoJS.AES.encrypt(JSON.stringify(actualData), 'abc').toString());
                    dispatch(setDeptidAction(ciphertext));
                    // dispatch(setDeptidAction(actualData));              
                }
            }
            )
            .catch((err) => {
                console.log(err.message);

            });


        fetch(Baseurl + "homepagesuccesscount")
            .then((response) => response.json())
            .then((actualData) => {
                setsuccesfullcount(actualData)
            }
            )
            .catch((err) => {
                console.log(err.message);
            });


        fetch(Baseurl + "totalerrorcount")
            .then((response) => response.json())
            .then((actualData) => setunsuccesfullcount(actualData))
            .catch((err) => {
                console.log(err.message);
            });


        fetch(Baseurl + "totalaccountdeptwise")
            .then((response) => response.json())
            .then((actualData) => {
                setTotalac(actualData)
            }
            )
            .catch((err) => {
                console.log(err.message);
            });

    }, []);


    let { authStore } = useSelector((state) => state);
    let dispatch = useDispatch();

    // localStorage.setItem('RoleLS', roles);
    // dispatch(setRoleAction(roles));
    var total = succesfullcount + unsuccesfullcount;
    var tot = total.toString()

    return (
        <>
        <br></br>
            <br></br><div className="px-2" style={{ backgroundColor: '#f8f9fa ', opacity: '1', minHeight: '510px' ,marginBottom:'150px'}}>
        <br></br>

                <Grid container spacing={1}>
                    <Grid xs={12} sm={3} md={3} item>
                        <Card className='hvr-sweep-to-right'>
                            <CardRow>
                                <BiPoll size={'40px'} color="green" />
                                <br></br>
                                <div style={{ textAlign: 'center', paddingLeft: '40px' }}>
                                    Successful
                                    <br></br>
                                    {succesfullcount.toLocaleString()}
                                </div>
                            </CardRow>
                        </Card>

                    </Grid>
                    <Grid xs={12} sm={3} md={3} item>
                        <Card className='hvr-sweep-to-right'>
                            <CardRow>
                                <BiPoll size={'40px'} color="red" />
                                <div style={{ textAlign: 'center', paddingLeft: '40px' }}>
                                    Unsuccessful
                                    <br></br>
                                    {unsuccesfullcount.toLocaleString()}
                                </div>
                            </CardRow>
                        </Card>

                    </Grid>
                    <Grid xs={12} sm={3} md={3} item>
                        <Card className='hvr-sweep-to-right' >
                            <CardRow>
                                <BiPoll size={'40px'} color="orange" />
                                <div style={{ textAlign: 'center', paddingLeft: '40px' }}>
                                    Total
                                    <br></br>
                                    {total.toLocaleString()}
                                </div>
                            </CardRow>
                        </Card>

                    </Grid>
                    <Grid xs={12} sm={3} md={3} item>
                        <NavLink to="/adv/applicationDetails">

                            <Card >
                                <CardRow>
                                    <BiGroup size={'40px'} />
                                    <div style={{ textAlign: 'center', paddingLeft: '40px' }}>
                                        Applications
                                        <br></br>
                                        {totalac.toLocaleString()}
                                    </div>
                                </CardRow>
                            </Card>
                        </NavLink>
                    </Grid>
                </Grid>
                <br />

                <Grid container spacing={1}>
                    <Grid xs={12} sm={6} item>
                        <Card>
                            <h3>Operation wise Transaction</h3><hr />

                            <Donutchart />
                        </Card>
                    </Grid>
                    <Grid xs={12} sm={6} item>
                        <Card>
                            <h3>Weekly Transaction</h3><hr />

                            <ChartForWeeklyTransaction />

                        </Card>

                    </Grid>
                </Grid>


                <br />
            </div>
            <br></br>
        <br></br>
        <br></br>

        </>
    );
}

