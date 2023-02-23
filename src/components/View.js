import * as React from 'react';
// import { Card } from '@mui/material';
// import Card from '@material-tailwind/react/Card';
// import CardRow from '@material-tailwind/react/CardRow';
// import CardHeader from '@material-tailwind/react/CardHeader';
// import CardStatus from '@material-tailwind/react/CardStatus';
import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';

export default function View({ appdetails }) {

    // const appdetail1= JSON.parse(localStorage.getItem('appdetail'));
    //console.log(appdetail)

    // const [appdetail, setappdetail] = useState([]);
    // const [appname, setappname] = React.useState();

    // const handleChange = e => {
    //     // alert(e.target.value)
    //     //alert(e.target.value)
    //     // setappname(e.target.value)

    //     //  history.push('/view')

    //     fetch(`http://localhost:8082/appdetail/${e.target.value}`)
    //         .then((data) => {
    //             const res = data.json();
    //             console.log("resss", res)
    //             return res
    //         }).then((res) => {
    //             setappdetail(res)
    //             console.log("resss", res)
    //         }).catch(e => {
    //             console.log("error", e)
    //         })
    //     };

    return (
        <>
            {/* <div className="px-3 md:px-8 h-auto">
                <div className="container mx-auto max-w-half">
                    <div className="grid grid-cols-1 xl:grid-cols-3">
                        <div className="xl:col-start-1 xl:col-end-3 px-4 mb-14">
                        </div>
                    </div>
                </div>
            </div> */}
            <div style={{ width: '675px', backgroundColor: 'aliceblue' }}>

                {/* <div style={{backgroundColor:'red'}}> */}

                <Card >

                    {/* <CardHeader color="blue" contentPosition="none">
                    <div className="w-full flex items-center justify-between">
                        <h2 className="text-white text-2xl">Page Visits</h2>
                        <Button
                            color="transparent"
                            buttonType="link"
                            size="lg"
                            style={{ padding: 0 }}
                        >
                            See More
                        </Button>
                    </div>
                </CardHeader> */}
                    <div style={{ backgroundColor: 'aliceblue' }}>

                        <CardBody>
                            <div className="overflow-x-auto"  >
                                <table className="items-center w-full bg-transparent border-collapse">
                                    <thead style={{ backgroundColor: '#80aed736' }}>
                                        <tr>
                                            <th className="px-2 text-blue-800 align-middle border-b border-solid border-white-0 py-3 text-sm whitespace-nowrap font-light text-center">
                                                <b>Email</b>
                                            </th>
                                            <th className="px-2 text-blue-800 align-middle border-b border-solid border-white-0 py-3 text-sm whitespace-nowrap font-light text-center">
                                                <b>Description</b>
                                            </th>
                                            <th className="px-2 text-blue-800 align-middle border-b border-solid border-white-0 py-3 text-sm whitespace-nowrap font-light text-center">
                                                <b>Application Name</b>
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                                {appdetails.email}
                                            </th>
                                            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                                {appdetails.desc}
                                            </td>
                                            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                                {appdetails.appname}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </CardBody>

                    </div>


                </Card>
            </div>
            {/* </div> */}


            {/* 
            <Grid >

                <br></br>
                <TableContainer>
                \
                    <Table sx={{ minWidth: 950 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align='center' > Email</TableCell>
                                <TableCell align='center'> Description</TableCell>
                                <TableCell align='center'> Appname</TableCell>
                            
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {
                              
                                <TableRow key={appdetails.appname}>
                                
                                    <TableCell align='center'> {appdetails.email}</TableCell>
                                    <TableCell align='center'> {appdetails.desc}</TableCell>
                                    <TableCell align='center'> {appdetails.appname}</TableCell>
                                  
                                </TableRow>
                              
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
          
            </Grid> */}


        </>
    );
}