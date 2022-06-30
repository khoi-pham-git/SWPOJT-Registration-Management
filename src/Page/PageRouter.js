import React from "react";
import {Route, Routes} from 'react-router-dom';
import Home from "./Home";
import Job from "./Job";
import InforPage from "./InforPage";
import JobDetail from "./JobDetail";
import SignIn from "./SignIn/SignIn";
import Company from "./Company";
import CompanyDetail from "./CompanyDetail";
import OJTRule from "./OJTRule";
import Regisform from "./Regis";
import CheckRegis from "./CheckRegis";

export default function RouterPage(){
    return(
        <div>
            <Routes>          
                <Route path="/" exact element={<Home/>}/>
                <Route path="/job" exact element={<Job/>}/>
                <Route path="/info" exact element={<InforPage/>}/>
                <Route path="/jobDetail" exact element={<JobDetail/>}/>
                <Route path="/signin" exact element={<SignIn/>}/>
                <Route path="/company" exact element={<Company/>}/>
                <Route path="/companyDetail" exact element={<CompanyDetail/>}/>
                <Route path="/ojtRule" exact element={<OJTRule/>}/>
                <Route path="/regis" exact element={<Regisform/>}/>
                <Route path="/checkRegis" exact element={<CheckRegis/>}/>
            </Routes>
        </div>
    )
}