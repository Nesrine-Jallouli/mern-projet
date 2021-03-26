import React from 'react';
import './App.css';
import {Component} from 'react';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import Navbar from './components/Navbar'
import { Container, Row, Col } from 'reactstrap';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import EditProfile from "./pages/EditProfile";
import EditProfileEntreprise from "./pages/EditProfileEntreprise";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ErroPage from './pages/Error' ;
import { getProfile} from "./JS/actions";
import { getentreprise} from "./JS/actions/indexE";
import PrivateRoute from "./pages/PrivateRoute";
import SignUpCompany from './pages/SignUpCompany';
import LoginEntreprise from "./pages/LoginEntreprise";
import PrivateEntreprise from "./pages/PrivateEntreprise";
import ProfileEntreprise from './pages/ProfileEntreprise';
import OffreCard from './components/OffreCard';
import AddOffre from './components/AddOffre';
import {getOffre} from './JS/actions/indexOffre'
const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const isAuthEnt = useSelector((state) => state.entrepriseReducer.isAuthEnt);
  const offres = useSelector((state) => state.offres);
  const getAllOffres = () => {
    dispatch(getOffre());
  };

  useEffect(() => {
    getAllOffres();
  }, []);

  useEffect(() => {
    dispatch(getProfile());
    
  }, [isAuth]);

  // useEffect(() => {
  //   dispatch(getentreprise());
  // }, [isAuthEnt])

    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route  path="/Register" render={(props) => <Register {...props} />} />
         <Route path="/login" render={(props) => <Login {...props} />} />
        {/* <PrivateRoute exact path="/Profile" component={Profile} /> */}
        {/* <PrivateEntreprise exact path="/ProfileEntreprise" component={ProfileEntreprise} /> */}
        {/* <PrivateEntreprise exact path="/ProfileEntreprise" component={ProfileEntreprise} /> */}
        <Route path="/ProfileEntreprise" component={ProfileEntreprise} />
        <Route path="/Profile" component={Profile} />
        <Route path="/EditProfile"  component={EditProfile} />
        <Route path="/EditProfileEntreprise"  component={EditProfileEntreprise} />
        <Route path="/signupcompany" component={SignUpCompany} />
        <Route path="/LoginEntreprise" component={LoginEntreprise} />
        <Route component={ErroPage}/>
        <Route
            path="/(Add_Offre|Edit_Offre)/"
            render={() => <AddOffre />}
          />
          <Route
            path="/Offre_list"
            render={() => (
              <div className="offre-list">
                {offres.map((el, i) => (
                  <OffreCard offre={el} key={i} />
                ))}
              </div>
            )}
          />
        </Switch>
        </BrowserRouter>
       </div>
    )
};

export default App;
