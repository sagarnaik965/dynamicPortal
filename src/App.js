import { Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Report from './pages/Report';

// Tailwind CSS Style Sheet
import './assets/styles/tailwind.css';
import ApplicationDetails from './components/ApplicationDetails';
import ApplicationsInfo from './components/ApplicationsInfo';
import AppDetails from './components/AppDetails';
import LoginRequired from './components/LoginRequired';
import HeaderAdv from './components/HeaderAdv';
import Billing from './components/Billing';
import ReportApp from './pages/ReportApp';
import BillingApp from './components/BillingApp';
import Navbar from './components/Navbar';
import Footer1 from './pages/Footer1';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <>        
            <HeaderAdv />
            <Navbar/>
            <Sidebar />
            <div className="md:ml-64">
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/adv/appdetails" component={AppDetails} />                  
                    <Route path="/LoginRequired" component={LoginRequired} />      
                   

                    <Route exact path="/adv/reports" component={Report} />
                    <Route exact path="/adv/reportsapp" component={ReportApp} />
                    <Route exact path="/adv/applicationDetails" component={ApplicationDetails} />
                    <Route exact path="/adv/applicationinfo/:appcode" component={props => <ApplicationsInfo {...props} />} />
                    {/* <Route exact path="/adv/applicationinfo/:appcode" component={ApplicationsInfo} /> */}

                    
                    <Route exact path="/adv/billing" component={Billing} />
                    <Route exact path="/adv/billingapp" component={BillingApp} />
                    <Route exact path="/adv" component={Dashboard} />
                    {/* <Route path="/*" component={NotFoundPage} /> */}
                </Switch>
            </div>
            <Footer1 />
            {/* <Footer /> */}

        </>
    );
}



export default App;
