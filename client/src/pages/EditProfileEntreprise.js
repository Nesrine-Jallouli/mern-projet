import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {  editProfile } from "../JS/actions/index";
import './EditProfil.css'
import { Link } from "react-router-dom";
    const EditProfileEntreprise = () => 
{
  const user = useSelector((state) => state.userReducer.user);
      const [name , setName] = useState()
    const [email , setEmail] = useState()
    const [phoneNumber , setPhone] = useState()
    const [mobileNumber,setMobil] =useState()
    const [adress,setAdress]=useState() 
    const [raisonSocial,setRaisonSocial]= useState()
    const [logo,setLogo]=useState()
    const [nbreEmploye,setNbreEmploye]=useState()
    const [description,setDescription]=useState()
    const dispatch = useDispatch();
    const ent = {
        name,
        email,
        phoneNumber,
        mobileNumber,
        adress,
        raisonSocial,
        logo,
        nbreEmploye,
        description,

    }

  // const entrepriseId = useSelector((state) => state.entrepriseId);
  // useEffect(() => {
  //     setentreprisetest(entrepriseId);
  // }, [entrepriseId]);

  return (
    <div className="container rounded bg-white mt-5 mb-5">
    <div className="row">
      <div className="col-md-3 border-right">
        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
          <img className="rounded-circle mt-5" src="https://bootdey.com/img/Content/avatar/avatar7.png" onChange={(e)=>setLogo(e.target.value)}/>
          <span className="font-weight-bold">{user.name}</span>
          <button className="btn btn-primary profile-button" type="button" onClick={ (e)=>setLogo(e.target.value)}>changer le logo </button>
        </div>
      </div>
      <div className="col-md-5 border-right">
        <div className="p-3 py-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="text-right">Modifier Profile </h4>
          </div>
          <div className="row mt-3">
            <div className="col-md-12"><label className="labels">Raison Social</label><input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} defaultValue={user.name} /></div>
            <div className="col-md-12"><label className="labels">Email</label><input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} defaultValue={user.email} /></div>
            <div className="col-md-12"><label className="labels">Adresse</label><input type="text" className="form-control" onChange={(e)=> setAdress(e.target.value)} defaultValue={user.adress} /></div>
          </div>
          <div className="row mt-2">
            <div className="col-md-6"><label className="labels">Phone Number</label><input type="number" className="form-control" onChange={(e)=> setPhone(e.target.value)} defaultValue={user.phoneNumber} /></div>
            <div className="col-md-6"><label className="labels">Mobile Number</label><input type="number" className="form-control" onChange={(e)=> setMobil(e.target.value)} defaultValue={user.mobileNumber} /></div>
          </div>
                  
        </div>
      </div>
      <div className="col-md-4">
      <br/><br/><br/>
        <div className="row mt-3">
            {/* <div className="col-md-12"><label className="labels">Raison Social</label><input type="text" className="form-control" onChange={(e)=>setRaisonSocial(e.target.value)} defaultValue={user.raisonSocial} /></div> <br /> */}
            <div className="col-md-12"><label className="labels">Nombre employé</label><input type="text" className="form-control" onChange={(e)=>setNbreEmploye(e.target.value)} defaultValue={user.nbreEmploye} /></div>
            <div className="col-md-12"><label className="labels">Description</label><input type="text" className="form-control" onChange={(e)=>setDescription(e.target.value)} defaultValue={user.description} /></div>
        </div>
        <Link to="/ProfileEntreprise">
          <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={ dispatch(editProfile (user._id, ent))}>Enregistrer</button></div>
        </Link>
        
      </div>
      

    </div>
  </div>



  );
};

export default EditProfileEntreprise;
