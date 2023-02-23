import * as React from 'react';
import advlogo from '../assets/img/advlogo.png';
import govi from '../assets/img/gov2.png';
function HeaderAdv() {
  return (
    <>
      <nav className="relative flex flex-wrap  justify-between px-2 py-2 mb-1" >
        <div className="container px-0 mx-auto ">
          <div >
            <ul style={{ fontSize: '25px' }} > 
              <div >
                <li style={{ float: 'left', marginLeft: '10px' }}>
                  <a
                   target="_blank"
                    href="https://advservice.epramaan.gov.in/dashboard/">
                    <img src={advlogo} width="60px" />
                  </a>
                </li>
                <li style={{ float: 'left', fontWeight: 'bold', marginTop: '5px', marginLeft: '5px' }}>
                  <a
                   target="_blank"
                    href="https://advservice.epramaan.gov.in/dashboard/" style={{ color: 'black',  textDecoration: 'none', cursor: 'pointer' }}  >
                    &nbsp;Aadhaar Data Vault
                  </a>
                </li>
              </div>

              <div style={{ marginRight: '0px' }}>
                <li style={{ float: 'right' }}>
                  <a
                   target="_blank"
                    href="https://www.meity.gov.in/">
                    <img src={govi} />
                  </a>
                </li>
                <li style={{ float: 'right', marginTop: '5px' }}>
                  <a
                   target="_blank"
                    href="https://www.meity.gov.in/">
                    <h1 style={{ fontWeight: 'bold', textDecoration: 'none', cursor: 'pointer' , color: 'black', }}>Ministry of Electronics & Information Technology</h1>
                    <h4 style={{ float: 'right', fontSize: '15px' ,textDecoration: 'none', cursor: 'pointer' , color: 'black',  }} >Government of India</h4>
                  </a>
                </li>
              </div>
            </ul> 
          </div>
        </div>
      </nav>

    </>
  );
}
export default HeaderAdv;