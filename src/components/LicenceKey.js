// import Card from '@material-tailwind/react/Card';
// import CardHeader from '@material-tailwind/react/CardHeader';
// import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';
import Textarea from '@material-tailwind/react/Textarea';
// import { Form } from 'react-bootstrap';
import { Label } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Box, TableCell, TableRow, TableBody, Paper, Table, TableContainer, TableHead } from '@mui/material';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import { positions } from '@mui/system';
//  import { MaskedText } from "react-native-mask-text";
// import InputMask from "react-input-mask";


export default function LicenceKey({ applklist }) {

    // const history = useHistory();

    // const [appname, setappname] = useState();
    // useEffect(() => {
    //     setappname(localStorage.getItem('app_name'))
    // })


    // const handleBack=()=>{

    //     history.push('/')
    // }

   const lkmask=applklist.lk;

  

    // const maskify = (lkmasked) => {
    //     return lkmasked.split('').map((letter, idx) => idx < lkmasked.length - 4 ? '#' : letter).join('');
    // }

    return (

        <>
            <div style={{ width: '675px', backgroundColor: 'aliceblue' }}>
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
                                                <b>Licence Key</b>
                                            </th>
                                            <th className="px-2 text-blue-800 align-middle border-b border-solid border-white-0 py-3 text-sm whitespace-nowrap font-light text-center">
                                                <b>Licence Key Expiry Date</b>
                                            </th>


                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                                {applklist.lk}
                                              
                                             
                                            
                                                
                                            </th>
                                            <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                                {applklist.lkexpiry}
                                            </td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </CardBody>

                    </div>


                </Card>

            </div>
        </>

        // <Box>

        //     <div>
        //         <form>


        //             <TableContainer component={Paper} style={{ border: '2px groove black ', borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem', borderBottomLeftRadius: '2rem', borderBottomRightRadius: '2rem' }}>
        //                 <Table sx={{ minWidth: 650 }} aria-label="simple table">
        //                     <TableHead>
        //                         <TableRow>
        //                             <TableCell align='center'> Licence Key</TableCell>
        //                             <TableCell align='left'> Validity</TableCell>

        //                         </TableRow>
        //                     </TableHead>
        //                     <TableBody>

        //                         {

        //                             <TableRow key={applklist.lk}>
        //                                 <TableCell align='center'> {applklist.lk}</TableCell>
        //                                 <TableCell align='left'> {applklist.lkexpiry}</TableCell>

        //                             </TableRow>

        //                         }
        //                     </TableBody>
        //                 </Table>
        //             </TableContainer>

        //         </form>

        //     </div>

        // </Box>
    );
}
