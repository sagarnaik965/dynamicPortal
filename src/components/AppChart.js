import React, { useEffect, useState } from "react";
import Baseurl from "./Baseurl";
import ReactLoading from "react-loading";
import {
  BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title,
  Tooltip
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useParams } from "react-router-dom";
// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  // indexAxis: 'y',

  //   scales: {
  //     x: {
  //         stacked: true
  //     },
  //     y: {
  //         stacked: true,
  //         barPercentage: 0.4
  //     }
  // },


  scales: {
    // yAxes: [
    //   {
    //     ticks: {
    //       suggestedMin: 0,
    //       suggestedMax: 100,
    //       barPercentage: 0.4

    //     }
    //   }
    // ]
  },
  responsive: true,
  // plugins: {
  //   legend: {
  //     // position: 'top' as const,
  //   },
  //   title: {
  //     display: true,
  //   //   text: "Chart.js Bar Chart"
  //   },  

  // }
};

const labels = ["getrefnum", "getuid", "activate", "struid", "deactivate"];
const d1 = [];

export function AppChart() {

  const [no, setNo] = useState([]);
  const [yes, setYes] = useState([]);
  const [txnforTotal, setTotal] = useState([]);
  const [spinner, setSpinner] = useState(false);




  const data = {
    labels,
    datasets: [
      {
        label: "Successfull",
        data: yes,
        backgroundColor: '#0DC818'
      },
      {
        label: "Un Successfull ",
        data: no,
        backgroundColor: '#E74C3C',
      },
      {
        label: "Total",
        data: txnforTotal,
        backgroundColor: '#F4D03F',
      }
    ],
    borderWidth: 0.1,

  };
  const { appcode } = useParams();
  const appc=appcode;

  useEffect(() => {
    setSpinner(true)

    const txnforNo = () => {
      const appcodedata=[appc,"No"]
      fetch(Baseurl + "applicationwisedata" , {
        method: "POST",
        body: JSON.stringify(appcodedata),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      })
        .then((data) => {
          const res = data.json();
          return res
        }).then((res) => {
          // console.log("resss", res)
          var label = [];
          var data = [];
          for (var i of res) {
            label.push(i.label);
            data.push(i.y)
          }
          setNo(data);
          setSpinner(false)



        }).catch(e => {
          console.log("error", e)
        })
    }
    txnforNo();

    const txnforYes = () => {
      const appcodedata=[appc,"Yes"]
      fetch(Baseurl + "applicationwisedata", {
        method: "POST",
        body: JSON.stringify(appcodedata),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      })
        .then((data) => {
          const res = data.json();
          return res
        }).then((res) => {
          // console.log("resss", res)
          console.log(res)

          var label = [];
          var data = [];
          for (var i of res) {
            label.push(i.label);
            data.push(i.y)
          }
          setYes(data);
        }).catch(e => {
          console.log("error", e)
        })
    }
    txnforYes();

    const txnforTotal = () => {
      const appcodedata=[appc,"Total"]

      fetch(Baseurl + "applicationwisedata",
      {
          method: "POST",
          body: JSON.stringify(appcodedata),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        }
      )
        .then((data) => {
          const res = data.json();
          console.log(res)
          return res
        }).then((res) => {
          // console.log("resss", res)
          console.log(res)

          var label = [];
          var data = [];
          for (var i of res) {
            label.push(i.label);
            data.push(i.y)
          }
          setTotal(data);
        }).catch(e => {
          console.log("error", e)
        })
    }
    txnforTotal();
  }, [])

  return (
    <div>
      {spinner ?
        <>
          <div style={{
            marginTop: '200px',
            position: 'absolute', left: '30%', top: '50%',
            transform: 'translate(-50%, -50%)'
          }}>

            <center className='advloading' >
              <ReactLoading type="spinningBubbles" color="#0000FF" height={100} width={120} />
            </center>


          </div>

        </>
        :
        <Bar options={options} data={data} />
      }
    </div>
  );
}

