import Card from '@material-tailwind/react/Card';
import Grid from '@mui/material/Grid';
import React from "react";
import { FcCancel, FcCheckmark } from 'react-icons/fc';

export default function AllowedOperations({ Operations }) {
    return (
        <>
            <div style={{ width: '675px', backgroundColor: 'aliceblue' }}>
                <Card>
                    <div style={{backgroundColor: 'aliceblue' }}>
                    {/* <Grid container spacing={1} style={{ border: '2px groove black ', borderTopLeftRadius: '2rem', borderTopRightRadius: '2rem', borderBottomLeftRadius: '2rem', borderBottomRightRadius: '2rem' }}> */}
                    <Grid container spacing={1} >
                        <Grid item xs={4}>
                            <div align="center" style={{backgroundColor:'#80aed736',color:'blue'}}>Store UID
                                {
                                    // Operations.map((appl) => (
                                    Operations.is_Struid == true ? <FcCheckmark /> : <FcCancel />
                                    // ))
                                }</div>
                        </Grid>
                        <Grid item xs={4}>
                            <div align="center" style={{backgroundColor:'#80aed736',color:'blue'}}>Get Reference Number
                                {
                                    // Operations.map((appl) => (
                                    Operations.is_Getrefnum == true ? <FcCheckmark /> : <FcCancel />
                                    // ))
                                }</div>
                        </Grid>
                        <Grid item xs={4}>
                            <div align="center" style={{backgroundColor:'#80aed736',color:'blue'}}>Get UID
                                {
                                    // Operations.map((appl) => (
                                    Operations.is_Getuid == true ? <FcCheckmark /> : <FcCancel />
                                    // ))
                                }</div>
                        </Grid>
                        <Grid item xs={4}>
                            <div align="center" style={{backgroundColor:'#80aed736',color:'blue'}}>Activate
                                {
                                    // Operations.map((appl) => (
                                    Operations.is_Activate == true ? <FcCheckmark /> : <FcCancel />
                                    // ))
                                }</div>
                        </Grid>
                        <Grid item xs={4}>
                            <div align="center" style={{backgroundColor:'#80aed736',color:'blue'}}>Deactivate
                                {
                                    // Operations.map((appl) => (
                                    Operations.is_Deactivate == true ? <FcCheckmark /> : <FcCancel />
                                    // ))
                                }</div>
                        </Grid>
                        <Grid item xs={4}>
                            <div align="center" style={{backgroundColor:'#80aed736',color:'blue'}}>Duplicate Check
                                {
                                    // Operations.map((appl) => (
                                    Operations.is_Deactivate == true ? <FcCheckmark /> : <FcCancel />
                                    // ))
                                }</div>
                        </Grid>
                        <br></br>
                       
                    </Grid>
                    </div>
                </Card>
            </div>
        </>

    );
}