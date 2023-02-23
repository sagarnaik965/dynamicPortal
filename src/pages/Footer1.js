import cdac from '../assets/img/cdac-long.png';
// import cdaclogo from '../assets/img/cdac-long.png'
import cdaclogo from '../assets/img/cdacfooterlogo.png'
import fb from '../assets/img/facebook.png'
import linkedin from '../assets/img/linkedIn5.png'
import twitter from '../assets/img/twitter.png'



export default function Footer1() {
    return (
        <>
        <footer 
        className="mt-5"

        // className=" bg-inherit py-6 px-16 border-t border-gray-200 font-light flex flex-col lg:flex-row justify-between items-center"
        // style={{backgroundColor:'whitesmoke',bottom:'0px',left:'250px',right:'0px',position:'fixed'}}
        style={{backgroundColor:'whitesmoke',bottom:'0px',right:'0px', position:'fixed' ,width:'100%' ,backgroundColor:'#3e76b9' ,color:'white'}}
     


        >
            <div  className=" bg-inherit  py-1 px-16 border-t border-gray-200 font-light flex flex-col lg:flex-row justify-between items-center"  >           
            <p className=" mb-6 lg:mb-0">
                <a
                    href="https://www.cdac.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-light-white-700"
                >
                </a>

                <a
                     target="_blank"
                    href="https://www.cdac.in/">
                <img src={cdaclogo} width="200px"/>
                </a>
            </p>          

            <ul
            className=" bg-inherit   font-light flex flex-col lg:flex-row justify-between items-center"             
             >
                <li className="mr-3">
                    <a
                        className=" hover:text-gray-900 font-medium block "
                        target="_blank"
                        rel="noreferrer"
                        href="https://advservice.epramaan.gov.in/dashboard/hyperlinking"
                    >
                        Hyperlink Policy &nbsp;&nbsp; 
                    </a>
                </li>
                <li className="mr-3">
                    <a
                        className=" hover:text-gray-900 font-medium block "
                        target="_blank"
                        rel="noreferrer"
                        href="https://advservice.epramaan.gov.in/dashboard/help"
                    >
                       Help &nbsp;&nbsp; 
                    </a>
                </li>
                <li className="mr-3">
                    <a
                        className=" hover:text-gray-900 font-medium block "
                        target="_blank"
                        rel="noreferrer"
                        href="https://advservice.epramaan.gov.in/dashboard/disclaimer"
                    >
                        Disclaimer &nbsp;&nbsp; 
                    </a>
                </li>
                <li className="mr-3">
                    <a
                        className=" hover:text-gray-900 font-medium block"
                        target="_blank"
                        rel="noreferrer"
                        href="https://advservice.epramaan.gov.in/dashboard/copyright"
                    >
                        Copyright Policy &nbsp;&nbsp; 
                    </a>
                </li>
                <li className="mr-3">
                    <a
                        className=" hover:text-gray-900 font-medium block "
                        target="_blank"
                        rel="noreferrer"
                        href="https://advservice.epramaan.gov.in/dashboard/privacy"
                    >
                       Privacy Policy &nbsp;&nbsp; 
                    </a>
                </li>
                <li className="mr-3">
                    <a
                        className=" hover:text-gray-900 font-medium block "
                        target="_blank"
                        rel="noreferrer"
                        href="https://advservice.epramaan.gov.in/dashboard/terms"
                    >
                       Terms and Conditions 
                    </a>
                </li>              
                
            </ul>



            <p className=" mb-6 lg:mb-0  flex  lg:flex-row justify-between items-center">
                <a
                    href="https://www.facebook.com/ePramaan"
                    target="_blank"
                    rel="noreferrer"
                    className="text-light-blue-500 mr-1 hover:text-light-blue-700"
                >
                    <img src={fb} />
                </a>
                <a
                    href="https://www.linkedin.com/in/epramaan-c-dac-102713252/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-light-blue-500 mr-1 hover:text-light-blue-700"
                >
                <img src={linkedin} />
                </a>
                <a
                    href="https://twitter.com/epramaan"
                    target="_blank"
                    rel="noreferrer"
                    className="text-light-blue-500 mr-1 hover:text-light-blue-700"
                >
                <img src={twitter} />
                </a>
            </p>
            </div>    

            <hr/>

            <p className=" mb-6 lg:mb-0 flex justify-center text-sm">
                <a
                    href="https://www.cdac.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-light-blue-500 "
                >
                </a>
                Copyright &copy; {new Date().getFullYear()}{' '}C-DAC Mumbai. All Rights Reserved.
            </p>          
  
            

        </footer>
       
        </>
    );
}
