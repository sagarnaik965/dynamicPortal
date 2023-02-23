import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import Baseurl from "./Baseurl";
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
    responsive: true,
};


export function ChartForWeeklyTransaction() {
    const [labels, setlabels] = useState([new Date().toLocaleDateString(), new Date().toLocaleDateString(), new Date().toLocaleDateString(), new Date().toLocaleDateString(), new Date().toLocaleDateString(), new Date().toLocaleDateString(), new Date().toLocaleDateString()]);
    const [txnforTotal, setTotal] = useState(["10", "20", "30", "40", "50", "60", "70"]);
    const [spinner, setSpinner] = useState(false);
    const data = {
        labels,
        datasets: [
            {
                barThickness: 16,
                barPercentage: 0.5,
                label: "Last Week ",
                data: txnforTotal,
                backgroundColor: '#F4D03F',
            }
        ],
        borderWidth: 0.6,

    };
    const { appcode } = useParams();

    useEffect(() => {
        setSpinner(true)

        const txnforTotal = () => {
            fetch(Baseurl + "chartfordays")
                .then((data) => {
                    const res = data.json();
                    return res
                }).then((res) => {
                    var label = [];
                    var data = [];
                    label = res.labels;
                    data = res.data;
                    //   for(var i of res) {
                    //       label.push(i.label);
                    //       data.push(i.y)
                    //   }
                    setTotal(data);
                    setlabels(label);
                    setSpinner(false)
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
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                        <center >
                            <ReactLoading type="spokes" color="#0000FF" height={100} width={120} />
                        </center>
                    </div>
                </>
                :
                <Bar options={options} data={data} />
            }
        </div>
    );
}
