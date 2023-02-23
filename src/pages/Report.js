import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { saveAs } from 'file-saver';
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
// import { Button } from "@material-tailwind/react";
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import ReactLoading from "react-loading";
import { useHistory } from 'react-router-dom';
import BaseLocal from "../components/BaseLocal";
import Baseurl from "../components/Baseurl";

const Report = () => {
  let history = useHistory();
 
  

  const handlecuststart = (e) => {
    // alert(e.target.value)
    setCuststart(e.target.value)
  }

  const handlecustlast = (e) => {
    // alert(e.target.value)
    setCustlast(e.target.value)
  }

  fetch(BaseLocal + "isSessNull")
    .then((response) => {

      if (response.status == 400) {
        // console.log("bad request ")
      }
    }).then((actualData) => { }
      // console.log(actualData + "___response from JAVA ")
    )
    .catch((err) => {
      // console.log(err.message);

      localStorage.clear();
      history.push("/LoginRequired")
    });


  const [startDate, setStartDate] = useState(new Date());
  const [LastDate, setLastDate] = useState(new Date());

  const [custstart, setCuststart] = useState();
  const [custlast, setCustlast] = useState();

  let [MonthlyMonth, setMonthlyMonth] = useState();
  let [MonthlyYear, setMonthlyYear] = useState();
  let [quarterlyQuarter, setQuarterlyQuarter] = useState();
  let [quarterlyYear, setQuarterlyYear] = useState();
  let [yearlyYear, setyearlyYear] = useState();
  let [customfdate, setcustomfdate] = useState();
  let [customtdate, setcustomtdate] = useState();

  let [monthlycsvdata, setMonthlycsvdata] = useState([[]]);

  let [monthlycsvdataflag, setMonthlycsvdataflag] = useState(true);
  let [quaterlycsvdataflag, setQuaterlycsvdataflag] = useState(true);
  let [yearlycsvdataflag, setYearlycsvdataflag] = useState(true);
  let [customcsvdataflag, setCustomcsvdataflag] = useState(true);


  let [yearlycsvdata, setYearlycsvdata] = useState([[]]);
  let [quaterltcsvdata, setQuaterltcsvdata] = useState([[]]);
  let [customcsvdata, setCustomcsvdata] = useState([[]]);




  const monthlyreportsummary = (event) => {
    if (MonthlyMonth == undefined) {
      alert("Please select month first!")
      return false;
    }

    
    if (MonthlyYear == undefined) {
      alert("Please select year first!")
      return false;
    }

    
    setSpinner(true);

    const fdate = startDate.toLocaleDateString().replaceAll("/", "-");
    const ldate = LastDate.toLocaleDateString().replaceAll("/", "-");

    const datedata = ["month",MonthlyMonth, MonthlyYear];

    setMonthlycsvdataflag(false)
    let type = "custom"
    const monthly = () => {
      fetch(Baseurl + "summaryreport",
        {
          method: "POST",
          body: JSON.stringify(datedata),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        }
      )
        .then(res => {
          if (res.status == "500") {
            throw new Error('Something went wrong.');
          }
          return res.blob();
        })
        .then((blob) => {
          const file = new Blob([blob], { type: 'application/pdf' })
          saveAs(file, "summary");

          setMonthlycsvdataflag(true)

        })
        .catch(e => {
          alert(e.message)
          setMonthlycsvdataflag(true)
        })



    }
    monthly();

    event.preventDefault();
  }

  const quaterlyreportsummary = (event) => {
    if (quarterlyQuarter == undefined) {
      alert("Please select quarter!")
      return false;
    }
    if (quarterlyYear == undefined) {
      alert("Please select year!")
      return false;
    }

    
    setSpinner(true);

    const fdate = startDate.toLocaleDateString().replaceAll("/", "-");
    const ldate = LastDate.toLocaleDateString().replaceAll("/", "-");
    const datedata = ["quarter",quarterlyQuarter, quarterlyYear];
    setQuaterlycsvdataflag(false);

    let type = "threemonth"
    const quarterly = () => {
      fetch(Baseurl + "summaryreport",
        {
          method: "POST",
          body: JSON.stringify(datedata),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        }

      )
        .then(res => {
          if (res.status == "500") {
            throw new Error('Something went wrong.');
          }
          return res.blob();
        })
        .then((blob) => {
          const file = new Blob([blob], { type: 'application/pdf' })
          saveAs(file, "summary");
          setQuaterlycsvdataflag(true)
        })
        .catch(e => {
          alert(e.message)
          setQuaterlycsvdataflag(true)
          // console.log("error", e)
        })


    }
    quarterly();
    event.preventDefault();
  }



  const yealryreportsummary = (event) => {
    if (yearlyYear == undefined) {
      alert("Please select year!")
      return false;
    }

    setSpinner(true);
    const fdate = startDate.toLocaleDateString().replaceAll("/", "-");
    const ldate = LastDate.toLocaleDateString().replaceAll("/", "-");
    setYearlycsvdataflag(false);

    const datedata = ["year",yearlyYear,""];

    const yearly = () => {
      fetch(Baseurl + "summaryreport",
        {
          method: "POST",
          body: JSON.stringify(datedata),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        }
      ).then(res => {
        if (res.status == "500") {
          throw new Error('Something went wrong.');
        }
        return res.blob();
      })
        .then((blob) => {
          const file = new Blob([blob], { type: 'application/pdf' })
          saveAs(file, "summary");
          setYearlycsvdataflag(true)
        })
        .catch(e => {
          alert(e.message)
          setYearlycsvdataflag(true)
        })
    }
    yearly();
    event.preventDefault();
  }


  const customreportsummarynew = (event) => {
    if (custlast == undefined) {
      return false;
    }
    if (custstart == undefined) {
      return false;
    }
    // alert(new Date(custstart)>= new Date(custlast))
    if (new Date(custstart) > new Date(custlast)) {
      alert("please select proper date!")
      return false
    }
    //  alert(custlast +" " + custstart)

    // if (new Date(custstart) > new Date(custlast)) {
    //   alert("Please select proper Date")
    //   return false;
    // }
    const datedata = ["custom",custstart, custlast];
    setSpinner(true);
    setCustomcsvdataflag(false);
    let type = "other"
    const custom = () => {
      fetch(Baseurl + "summaryreport",
        {
          method: "POST",
          body: JSON.stringify(datedata),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        }
      ).then(res => {
        if (res.status == "500") {
          throw new Error('Something went wrong.');
        }
        return res.blob();
      })
        .then((blob) => {
          const file = new Blob([blob], { type: 'application/pdf' })
          // saveAs(file, "summary of " + `${QuarterNo}`);
          saveAs(file, "summary");

          setCustomcsvdataflag(true)

        })
        .catch(e => {
          alert(e.message)
          setCustomcsvdataflag(true)
          console.log("error", e)
        })
    }
    custom();
    event.preventDefault();
  }
  const [date, setDate] = useState(new Date());



  // -----------------------------------------------------------
  function selectMonthlyMonth(event) {
    alert(event.target.value)
    setMonthlyMonth(event.target.value)

  }

  function selectMonthlyYear(event) {
    alert(event.target.value)
    setMonthlyYear(event.target.value)
  }

  // -----------------------------------------------------------
  function selectQuarterlyQuarter(event) {
    alert(event.target.value)
    setQuarterlyQuarter(event.target.value)
  }

  function selectQuarterlyYear(event) {
    alert(event.target.value)
    setQuarterlyYear(event.target.value)
  }

  function selectYearlyYear(event) {
    alert(event.target.value)
    setyearlyYear(event.target.value)
  }


  const [open, setOpen] = useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  }
  const [spinner, setSpinner] = useState(false);

  const year = (new Date()).getFullYear();
  const years = Array.from(new Array(30), (val, index) => year - index);
  const [flag, setFlag] = useState("Monthly");
  const handleflag = (e) => {
    // alert(e.target.value)
    setFlag(e.target.value)
  }

  let dateFormateFortMui = formatDate();
  function formatDate() {
    var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + (d.getDate() - 5),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  return (
    <div>
        <br></br>


        <div style={{ width: '900px', marginLeft: 'auto', marginRight: 'auto' }}>

<div style={{ fontSize: '30px', fontWeight: 'bold' }}>Reports</div>
        <hr />
        <br />
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue="Monthly"
          >
            <FormControlLabel size="small" value="Monthly" onClick={handleflag} control={<Radio />} label="Month" />
            <FormControlLabel value="Quarterly" onClick={handleflag} control={<Radio />} label="Quarter" />
            <FormControlLabel value="Yearly" onClick={handleflag} control={<Radio />} label="Year" />
            <FormControlLabel value="Custom" onClick={handleflag} control={<Radio />} label="Custom" />
          </RadioGroup>
        </FormControl>
        <br />
        <br />
        {flag === "Monthly" && <>
          <Grid container spacing={1}>
            <Grid item xs={13} sm={8} md={3} className="flex flex-col lg:flex-row justify-between"  >
              <div>
                <FormControl style={{ minWidth: 190 }} >
                  <InputLabel id="demo-simple-select-label">Month</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={role_id}
                    label="Month"
                    // onChange={handleDept}
                    onChange={e => setMonthlyMonth(e.target.value)}
                    // onChange={handlerole_id}
                    style={{ height: '43px' }}
                  >
                    <MenuItem value="01">January</MenuItem>
                    <MenuItem value="03">February</MenuItem>
                    <MenuItem value="03">March</MenuItem>
                    <MenuItem value="04">April</MenuItem>
                    <MenuItem value="05">May</MenuItem>
                    <MenuItem value="06">June</MenuItem>
                    <MenuItem value="07">July</MenuItem>
                    <MenuItem value="08">August</MenuItem>
                    <MenuItem value="09">September</MenuItem>
                    <MenuItem value="10">October</MenuItem>
                    <MenuItem value="11">November</MenuItem>
                    <MenuItem value="12">December</MenuItem>
                  </Select>
                </FormControl>
              </div>

             

            </Grid>

            <Grid item xs={13} sm={8} md={3}  >
              <div style={{ display: 'inline-block' }}>
                <FormControl style={{ minWidth: 190 }} >
                  <InputLabel id="demo-simple-select-label">Year</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Year"
                    // defaultValue={years[0]}
                    onChange={e => setMonthlyYear(e.target.value)}
                    // onChange={handlerole_id}
                    style={{ height: '43px' }}
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
            <Grid item xs={13} sm={8} md={3} >
              <div>
                {monthlycsvdataflag ?
                  <>
                    <Button size="normal" color="info" variant="outlined" onClick={monthlyreportsummary}>Download&nbsp;</Button>
                  </>
                  :
                  < >
                    {spinner ?
                      (
                        <ReactLoading type="balls" color="#0000FF"
                          height={10} width={40} />)
                      :
                      (
                        <></>
                        // <Button color="success" variant="contained" onClick={(e) => setMonthlycsvdataflag(true)}>Download</Button>
                      )
                    }
                  </>
                }</div>

            </Grid>
          </Grid>
        </>
        }

        {flag === "Quarterly" && <>
          <Grid container spacing={1}>
            <Grid item xs={13} sm={8} md={3} >
              <div>
                <FormControl style={{ minWidth: 190 }} >
                  <InputLabel id="demo-simple-select-label">Quarter</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Quarter"
                    onChange={e => setQuarterlyQuarter(e.target.value)}
                    style={{ height: '43px' }} >
                    <MenuItem value="01">January-March</MenuItem>
                    <MenuItem value="04">April-June</MenuItem>
                    <MenuItem value="07">July-September</MenuItem>
                    <MenuItem value="10">October-December</MenuItem>
                  </Select>

                </FormControl>
              </div>

            </Grid>
            <Grid item xs={13} sm={8} md={3}   >
              <div>
                <FormControl style={{ minWidth: 190 }} >
                  <InputLabel id="demo-simple-select-label">Year</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Year"
                    onChange={e => setQuarterlyYear(e.target.value)}
                    // onChange={handlerole_id}
                    style={{ height: '43px' }}
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

            <Grid item xs={13} sm={8} md={3} >
              <div>
                {quaterlycsvdataflag ? <>
                  <Button size="normal" color="info" variant="outlined" onClick={quaterlyreportsummary}>Download</Button> </> :
                  <>

                    {spinner ?
                      (
                        <ReactLoading type="balls" color="#0000FF"
                          height={10} width={40} />)

                      :
                      (
                        <></>
                        // <Button color="success" variant="contained" onClick={(e) => { setQuaterlycsvdataflag(true) }}>Download</Button>
                      )
                    }
                  </>
                }
              </div>

            </Grid>
          </Grid>
        </>}

        {flag === "Yearly" && <>
          <Grid container spacing={1}>
            <Grid item xs={13} sm={8} md={3} >
              <div>
                <FormControl style={{ minWidth: 190 }} >
                  <InputLabel id="demo-simple-select-label">Year</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Year"
                    onChange={e => setyearlyYear(e.target.value)}
                    // onChange={handlerole_id}
                    style={{ height: '43px' }}
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



            <Grid item xs={13} sm={8} md={3} >
              <div>
                {yearlycsvdataflag ? <>
                  <Button size="normal" color="info" variant="outlined" onClick={yealryreportsummary}>Download</Button>

                </> :
                  < >
                    {spinner ?
                      (
                        <ReactLoading type="balls" color="#0000FF"
                          height={10} width={40} />)

                      :
                      (
                        <></>
                        // <Button color="success" variant="contained" onClick={(e) => setYearlycsvdataflag(true)}>Download</Button>
                      )
                    }

                  </>
                }

              </div>

            </Grid>
          </Grid>
        </>}


        {/* -----------------------new code---------------------------- */}

        {flag === "Custom" && <>
          <Grid container spacing={1}>
            <Grid item xs={13} sm={8} md={3}   >
              <TextField
                id="date"
                label="From"
                type="date"
                inputFormat="dd-MM-yyyy"
                defaultValue={dateFormateFortMui}
                // onChange={check}
                onChange={handlecuststart}
                size="small"
                sx={{ width: 190 }}
                style={{ height: '33px' }}
                inputProps={{
                  max: dateFormateFortMui,
                  // min: "1993-01-01"
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />

            </Grid>
            <Grid item xs={13} sm={8} md={3}   >

              <TextField
                id="date"
                label="To"
                type="date"
                inputFormat="dd-MM-yyyy"
                defaultValue={dateFormateFortMui}
                // onChange={check}
                onChange={handlecustlast}
                size="small"
                sx={{ width: 190 }}
                inputProps={{
                  max: dateFormateFortMui,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />


            </Grid>
            <Grid item xs={13} sm={8} md={3}  >
              <div >
                {customcsvdataflag ? <>
                  <Button size="normal" color="info" variant="outlined" onClick={customreportsummarynew}>Download</Button>

                </> :
                  < >
                    {spinner ?
                      (
                        <ReactLoading type="balls" color="#0000FF"
                          height={10} width={40} />)

                      :
                      (
                        <></>
                        // <Button color="success" variant="contained" onClick={(e) => setCustomcsvdataflag(true)}>Download</Button>
                      )
                    }
                  </>
                }

              </div>

            </Grid>
          </Grid>
        </>}

        <br></br>

        <br></br>
        <br></br>
        <br></br>

       


        <br></br>
        <br></br>
      </div>
    </div>
  )
}

export default Report
