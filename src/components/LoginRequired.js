import React from 'react'
import Grid from '@mui/material/Grid';
import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import BaseLocal from './BaseLocal';


  function LoginRequired(){    
    window.location.replace(BaseLocal+"userLogout");
  
  return (
    <div style={{ minHeight:'510px' }} >
     Logging Out ....
     
      
    </div>
  );
}

export default LoginRequired;
