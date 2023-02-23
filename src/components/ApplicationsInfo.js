import { Card, CardBody } from '@material-tailwind/react';
import React from 'react';
import { AppChart } from './AppChart';
const ApplicationsInfo = () => {
  return (
    <div style={{ minHeight: '500px' }}>
      <br></br>
      <center>
        <Card>
          <h1><b>Operationwise Transactions</b> </h1>
          <CardBody>
            {/* <div className="relative" style={{ width: '60%'  }}> */}
            <div className="relative" style={{ width: '650px'  }}>
              <AppChart />
            </div>
          </CardBody>
        </Card>
      </center>
    </div>
  );
}

export default ApplicationsInfo;
