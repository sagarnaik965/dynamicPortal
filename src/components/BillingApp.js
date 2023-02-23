import React from "react";
import { useEffect } from "react";
import background from "../assets/img/abc.jpg"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Card } from "@mui/material";
import { saveAs } from 'file-saver';
import { Grid } from '@mui/material'
import { useState } from "react";
import { Box, Select, InputLabel, MenuItem, TextField } from '@mui/material';
import { CSVLink } from "react-csv";
import ReactLoading from "react-loading";
import BaseLocal from "../components/BaseLocal";
import Baseurl from "../components/Baseurl";
import Footer from './Footer';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const moment = require('moment');

export default function BillingApp() {



    // ------------------------------------------block of code for fixed quarter--------------------------------------------------------------

    let todaysDate = "";
    if (new Date().getDate() > 9) {
        todaysDate = new Date().getFullYear() + "-" + new Date().getMonth() + 1 + "-" + new Date().getDate();
    } else {
        todaysDate = new Date().getFullYear() + "-" + new Date().getMonth() + 1 + "-" + "0" + new Date().getDate();
    }
    var now = new Date(todaysDate);
    var quarter = Math.floor((now.getMonth() / 3));
    // alert(quarter)
    quarter = quarter - 1;
    var firstDate = new Date(now.getFullYear(), quarter * 3, 1);
    var endDate = new Date(firstDate.getFullYear(), firstDate.getMonth() + 3, 0);
    // alert(firstDate + " " + endDate)
    var quarteryearforsummaryreport = endDate.getFullYear();
    var quarterforsummreport = "";
    const dropdownarray = [];
    quarter = quarter + 2;

    if(quarter==1)
    {
         quarterforsummreport = "3";

    }else if (quarter == 2)
    {
        quarterforsummreport = "1";

    }else if (quarter == 3)
    {
        quarterforsummreport = "2";
        
    }else if (quarter == 4)
    {
        quarterforsummreport = "3";
    }
    quarterforsummreport = "3";

    dropdownarray[0] = "January-March";
    dropdownarray[1] = "April-June";
    dropdownarray[2] = "July-September";
    dropdownarray[3] = "October-December";

    //--------------------------------------------------------- important for dynamic date and quarter wise quarter dropdown-------------------------------------------
    // if (quarter == 1) {
    //     quarterforsummreport = "3";

    //     dropdownarray[0] = "January-March";
    //     dropdownarray[1] = "April-June";
    //     dropdownarray[2] = "July-September";
    //     dropdownarray[3] = "October-December";
    // }
    // else if (quarter == 2) {
    //     quarterforsummreport = "1";

    //     dropdownarray[0] = "January-March";
    // }
    // else if (quarter == 3) {
    //     quarterforsummreport = "2";

    //     dropdownarray[0] = "January-March";
    //     dropdownarray[1] = "April-June";
    // }
    // else if (quarter == 4) {
    //     quarterforsummreport = "3";

    //     dropdownarray[0] = "January-March";
    //     dropdownarray[1] = "April-June";
    //     dropdownarray[2] = "July-September";
    // }







    let [MonthlyMonth, setMonthlyMonth] = useState("01");
    let [quaterlycsvdataflag, setQuaterlycsvdataflag] = useState(true);

    let [customcsvdata, setCustomcsvdata] = useState([[]]);
    const [spinner, setSpinner] = useState(false);
    const [spinnersummary, setSpinnersummary] = useState(false);

    const [startDate, setStartDate] = useState(new Date());
    const [LastDate, setLastDate] = useState(new Date());
    let [quaterltcsvdata, setQuaterltcsvdata] = useState([[]]);
    let [billasofnowcsvdata, setBillasofnowcsvdata] = useState([[]]);



    function selectMonthlyMonth(event) {
        alert(event.target.value)
        setMonthlyMonth(event.target.value)
    }
    // if (moment().quarter() == 1) {
    //     quarterforsumaryreport = "10";
    // }
    // else if (moment().quarter() == 2) {
    //     quarterforsumaryreport = "01";
    // }
    // else if (moment().quarter() == 3) {
    //     quarterforsumaryreport = "04";
    // }
    // else if (moment().quarter() == 4) {
    //     quarterforsumaryreport = "07";
    // }


    // ------------------------------------------block of code for dyanamic quarter--------------------------------------------------------------

    const year = (new Date()).getFullYear();
    const years = Array.from(new Array(10), (val, index) => year - index);
    let [quarterlyQuarter, setQuarterlyQuarter] = useState(quarterforsummreport);
    let [quarterlyYear, setQuarterlyYear] = useState(quarteryearforsummaryreport);

    let dateFormateFortMui = "";
    if (new Date().getDate() > 9) {
        dateFormateFortMui = new Date().getFullYear() + "-" + new Date().getMonth() + 1 + "-" + new Date().getDate();
    } else {
        dateFormateFortMui = new Date().getFullYear() + "-" + new Date().getMonth() + 1 + "-" + "0" + new Date().getDate();
    }
    var todaysdate = new Date(dateFormateFortMui);
    var currentmonth = todaysdate.getMonth() + 1;
    var quarterforsumaryreport = "";
    if (moment().quarter() == 1) {
        quarterforsumaryreport = "10";
    }
    else if (moment().quarter() == 2) {
        quarterforsumaryreport = "01";
    }
    else if (moment().quarter() == 3) {
        quarterforsumaryreport = "04";
    }
    else if (moment().quarter() == 4) {
        quarterforsumaryreport = "07";
    }


    const quaterlyreportsummary = (event) => {
        // alert(quarterlyYear + " " + quarterlyQuarter)
        let quarter = "";

        if (quarterlyYear == undefined) {
            return false;
        }

        if (quarterlyQuarter == undefined) {
            return false;
        }

        if (quarterlyQuarter == 0) {
            quarter = "01";

        } else
            if (quarterlyQuarter == 1) {
                quarter = "04";
            }
            else if (quarterlyQuarter == 2) {
                quarter = "07";
            }
            else if (quarterlyQuarter == 3) {
                quarter = "10";
            }


        // -----------------------------checking the selected quarter is valid or not-------------------------------------------

        var firstDate = new Date(quarterlyYear, quarterlyQuarter * 3, 1);
        var endDate = new Date(firstDate.getFullYear(), firstDate.getMonth() + 3, 0);
        // alert(firstDate +"==Current Quarters Date=="+endDate)
        var todays = new Date();
        if (endDate > todays) {
            alert("Please select proper date")
            return false
        }
        if (firstDate > todays) {
            alert("Please select proper date")
            return false
        }



        // alert(quarterlyYear + " " + quarterlyQuarter)
        setSpinner(true);
        const fdate = startDate.toLocaleDateString().replaceAll("/", "-");
        const ldate = LastDate.toLocaleDateString().replaceAll("/", "-");
        const datedata = ["bill",quarter, quarterlyYear];

        setQuaterlycsvdataflag(false);
        // alert(quarter)
        const Billing = () => {         
            // fetch(Baseurl+"billAppCategpdf" + "/"+ quarter + "/" + quarterlyYear)
            fetch(Baseurl + "billAppCategpdf",
            {
                method: "POST",
                body: JSON.stringify(datedata),
                headers: {
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Origin": "http://localhost:3000",
                },
              }
            )
                .then(res =>
                    {
                      if(res.status=="500"){
                        throw new Error('Something went wrong.');
                      }
                      return  res.blob();
                    })
                .then((blob) => {
                    const file = new Blob([blob], { type: 'application/pdf' })
                    saveAs(file, "Bill");
                    setQuaterlycsvdataflag(true);
                    setSpinner(true);


                })
                .catch(e => {
                    alert(e.message)
                    console.log("error", e)
                    setQuaterlycsvdataflag(true);
                    setSpinner(true);
                })
        }
        Billing();    
        event.preventDefault();
    }

    useEffect(() => {

        const BillingAsOfNow = () => {
            fetch(Baseurl + "BillingTillToday/" + quarter + "/" + quarterlyYear)
                // fetch("http://localhost:8082/dept/quaterly/" + quarterlyQuarter + "/" + quarterlyYear)
                .then((data) => {
                    const res = data.json();
                    //   const res = JSON.parse(data);

                    console.log(res)
                    return res
                }).then((res) => {
                    setBillasofnowcsvdata(res)

                    console.log("data", res)
                }).catch(e => {
                    console.log("error", e)
                })
        }
        BillingAsOfNow();

    }, []);




    // --------------------------block of code for dropdown data to show-------------------------------------
    const handleClick = (e) => {
        let BillName = "";
        let QuarterNo = "";
        if (quarterlyQuarter == undefined && quarterlyYear == undefined) {
            return false
        }
        if (quarterlyQuarter == "01") {
            BillName = "January-March";
            QuarterNo = "IVth Quarter";
        } else if (quarterlyQuarter == "04") {
            BillName = "April-June";
            QuarterNo = "Ist Quarter";
        } else if (quarterlyQuarter == "07") {
            BillName = "July-September";
            QuarterNo = "IInd Quarter";
        } else if (quarterlyQuarter == "10") {
            BillName = "October-December";
            QuarterNo = "IIIrd Quarter";
        }
        setSpinnersummary(true);



        fetch(`http://localhost:8080/dept/billDeptCateg`)
            // fetch(`http://localhost:8080/Billing`)        
            .then(res => res.blob())
            .then((blob) => {
                const file = new Blob([blob], { type: 'application/pdf' })
                // saveAs(file, "summary of " + `${QuarterNo}`);
                setSpinnersummary(false);
            })
            .catch(e => {
                console.log("error", e)
            })

    }

    var sectionStyle = {
        width: "100%",
        height: "400px",
        backgroundImage: "url(" + { background } + ")"
    };

    const [flag, setFlag] = useState("quarter");
    console.log(flag)
    // alert(flag)
    const handleflag = (e) => {
        // alert(e.target.value)
        setFlag(e.target.value)
    }


    return (
        <><br></br>
            <Card >
                <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '900px', height: 'auto' }}>
                    {/* <div style={sectionStyle}> */}


                    <div style={{ fontSize: '25px', fontWeight: 'bold' }}>Billing</div>
                    <hr />





                    {/* <Grid container spacing={1}>
                    <Grid item xs={12} sm={8} md={3}

                    >
                        <div >
                            <FormControl style={{ minWidth: 190, marginLeft: '20px' }} >
                                <InputLabel id="demo-simple-select-label">Quarter</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Quarter"
                                    value={quarterlyQuarter}
                                    onChange={e => setQuarterlyQuarter(e.target.value)}

                                    style={{ height: '38px' }} >
                                    {
                                        dropdownarray.map((year, index) => {
                                            return <MenuItem key={`year${index}`} value={index}>{year}</MenuItem>
                                        })
                                    }
                                 
                                </Select>

                            </FormControl>
                        </div>


                    </Grid>
                    <Grid item xs={12} sm={8} md={3} >
                        <div>
                            <FormControl style={{ minWidth: 190, marginLeft: '20px' }} >
                                <InputLabel id="demo-simple-select-label">Year</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Year"
                                    value={quarterlyYear}
                                    onChange={e => setQuarterlyYear(e.target.value)}
                                  
                                    style={{ height: '38px' }}
                                >
                                    {
                                        years.map((year, index) => {
                                            return <MenuItem key={`year${index}`} value={year}>{year}</MenuItem>
                                        })
                                    }
                                </Select>
                            </FormControl>
                        </div>
                    </Grid>



                    <Grid item xs={12} sm={8} md={6} >
                        <div style={{ marginLeft: '20px' }}>
                            {quaterlycsvdataflag ? <>
                                <Button size="medium" color="info" variant="outlined" onClick={quaterlyreportsummary}>Generate Bill</Button> </> : <CSVLink data={quaterltcsvdata} filename={quarterlyQuarter + " " + quarterlyYear}>

                                {spinner ?
                                    (
                                        <ReactLoading type="balls" color="#0000FF"
                                            height={10} width={40} />)
                                    :
                                    (
                                        <>
                                            <Button color="success" variant="contained" onClick={(e) => { setQuaterlycsvdataflag(true) }}>Download Bill</Button>
                                        </>
                                    )
                                }
                            </CSVLink>
                            }

                            {!quaterlycsvdataflag &&
                                <>
                                    {spinnersummary ?
                                        (
                                            <ReactLoading type="balls" color="#0000FF"
                                                height={10} width={40} />)
                                        :
                                        (
                                            <>
                                                <Button style={{ marginLeft: '3px' }} color="success" variant="contained" onClick={(e) => { setQuaterlycsvdataflag(true); handleClick() }}>View Summary</Button>

                                            </>
                                        )
                                    }
                                </>

                            }
                        </div>

                    </Grid>
                </Grid> */}

                    <br />
                    <br />

                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            defaultValue="quarter"
                        >
                            <FormControlLabel size="small" value="quarter" onClick={handleflag} control={<Radio />} label="Quarterly" />
                            <FormControlLabel value="asofnow" onClick={handleflag} control={<Radio />} label="Till today" />
                            <FormControlLabel value="status" onClick={handleflag} control={<Radio />} label="Status" />


                        </RadioGroup>
                    </FormControl>
                    <br />
                    <br />




                    <div>
                        {flag === "asofnow" && <>
                            {/* <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{
                                        backgroundColor: "#EAEDED",
                                        width:"280px"
                                    }}
                                >
                                    <Typography>
                                        <div style={{ fontSize: '15px', fontWeight: 'bold' }}>As Of Now</div>
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography> */}

                                        {JSON.stringify(billasofnowcsvdata)}
                                        <br></br>

                                    {/* </Typography>
                                </AccordionDetails>
                            </Accordion> */}
                        </>
                        }


                        {flag === "quarter" && <>
                            {/* <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                    sx={{
                                        backgroundColor: "#EAEDED",
                                        width:"280px"

                                    }}
                                >
                                    <Typography>
                                        <div style={{ fontSize: '15px', fontWeight: 'bold' }}>Bills</div>

                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>

                                        <br></br> */}


                                        <Grid container spacing={1}>
                                            <Grid item xs={12} sm={8} md={3}

                                            >
                                                <div >
                                                    <FormControl style={{ minWidth: 190, marginLeft: '20px' }} >
                                                        <InputLabel id="demo-simple-select-label">Quarter</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            label="Quarter"
                                                            value={quarterlyQuarter}
                                                            onChange={e => setQuarterlyQuarter(e.target.value)}
                                                            // onChange={e => setQuarterlyQuarter(quarterforsummreport)}

                                                            style={{ height: '38px' }} >
                                                            {
                                                                dropdownarray.map((year, index) => {
                                                                    return <MenuItem key={`year${index}`} value={index}>{year}</MenuItem>
                                                                })
                                                            }
                                                         
                                                        </Select>

                                                    </FormControl>
                                                </div>


                                            </Grid>
                                            <Grid item xs={12} sm={8} md={3} >
                                                <div>
                                                    <FormControl style={{ minWidth: 190, marginLeft: '20px' }} >
                                                        <InputLabel id="demo-simple-select-label">Year</InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            label="Year"
                                                            // value={quarteryearforsummaryreport}
                                                            value={quarterlyYear}
                                                            onChange={e => setQuarterlyYear(e.target.value)}
                                                            // onChange={e => setQuarterlyYear(quarteryearforsummaryreport)}
                                                            // onChange={handlerole_id}
                                                            style={{ height: '38px' }}
                                                        >
                                                            {
                                                                years.map((year, index) => {
                                                                    return <MenuItem key={`year${index}`} value={year}>{year}</MenuItem>
                                                                })
                                                            }
                                                        </Select>
                                                    </FormControl>
                                                </div>
                                            </Grid>



                                            <Grid item xs={12} sm={8} md={6} >
                                                <div style={{ marginLeft: '20px' }}>
                                                    {quaterlycsvdataflag ? <>
                                                        <Button size="medium" color="info" variant="outlined" onClick={quaterlyreportsummary}>Download</Button> </> : <ReactLoading type="balls" color="#0000FF"
                                                            height={10} width={40} />
                                                    }




                                                </div>

                                            </Grid>
                                        </Grid>


                                        <br></br>
{/* 
                                    </Typography>
                                </AccordionDetails>
                            </Accordion> */}


                        </>
                        }

                        {flag === "status" && <>

                            {/* <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                    sx={{
                                        backgroundColor: "#EAEDED",
                                        width:"280px"
                                    }}
                              
                                >
                                    <Typography>
                                        <div style={{ fontSize: '15px', fontWeight: 'bold' }}>Billling Status</div>

                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        List Of Bill status QuarterWise
                                    </Typography>
                                </AccordionDetails>
                            </Accordion> */}
                        </>
                        }
                    </div>




                </div>
                <br></br>
            </Card>

            <br />
            <br />   <br />
            <br />

        </>
    )
}