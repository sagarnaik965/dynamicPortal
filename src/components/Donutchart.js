import React, { useEffect, useState } from "react";
import Chart from 'react-apexcharts';
import Baseurl from "./Baseurl";

function Donutchart()
{
    const [contryname, setCountryname]= useState(['getuid','storeuid','activate',"deactivate"]);
    const [medal, setMedal]= useState([11888884,22555,3003,44]);

    useEffect( ()=>{
     const getdata= async()=>{
          const countryname=[];
          const getmedal=[];
        const reqData= await fetch(Baseurl+"homepagetranstable") 
        const resData= await reqData.json();
        for(let i=0; i<resData.length; i++)
        {
            countryname.push(resData[i].name);
            getmedal.push(parseInt(resData[i].y));
        }
        setCountryname(countryname);
        setMedal(getmedal);
     

     }
     getdata();
    },[]);

    return(
        <React.Fragment>
            <div className='container-fluid mt-3 mb-3'   >        
            <Chart 
            type="donut"
            // width={350}
            height={215}
            series={medal}

            options={{
             labels:contryname,
             title:{
                // text:"Medal Country Name",
               // align:"center",
             },

             plotOptions:{
             pie:{
                donut:{
                    labels:{
                        show:true,
                        total:{
                            show:true,
                            showAlways:true,
                            fontSize:20,
                            color: '#f90000',
                        }
                    }
                }
             }
             },
             dataLabels:{
                enabled:true,
             }
            }}            
            />
            </div>
        </React.Fragment>
    );
}
export default Donutchart;