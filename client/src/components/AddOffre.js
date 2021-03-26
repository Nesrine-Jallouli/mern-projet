import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addOffre, editOffre } from "../JS/actions/indexOffre";
import { Link } from "react-router-dom";

const AddOffre = () => {
  const [newOffre, setNewOffre] = useState({
    titre: "",
    description: "",
    dateDep: "",
    dateFin:"",
    salaire:"",
    emplacement:"",
    experience:"",
    niveauEtude:"",

  });
 
  const dispatch = useDispatch();
  const offreId = useSelector((state) => state.offreId);
  const isEdit = useSelector((state) => state.isEdit);

  useEffect(() => {
    if (isEdit) {
      setNewOffre(offreId);
    } else {
      setNewOffre({    titre: "",
      description: "",
      dateDep: "",
      dateFin:"",
      salaire:"",
      emplacement:"",
      experience:"",
      niveauEtude:"",});
    }
  }, [offreId, isEdit]);

  const handleChange = (e) => {
    setNewOffre({ ...newOffre, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          width: "22rem",
          height: "25rem",
          marginRight: "30px",
          marginBottom: "20px",
          marginTop: "30px",
          backgroundColor: "white",
          borderRadius: "8px",
          border: "transparent",
          boxShadow: "0 10px 10px 0 rgba(0,0,0,0.2)",
        }}
      >
        <Card.Header
          style={{
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
            backgroundColor: "#277fa5",
            color: "white",
          }}
        >
          {isEdit ? "Modifier Offre" : "Ajouter Offre"}
        </Card.Header>

        <Card.Body>
          <Card.Text>
            <Form>
              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>Titre :</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="entrer le titre d'offre"
                  onChange={handleChange}
                  defaultValue={newOffre.titre}
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>Description :</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  placeholder="Description d'offre"
                  onChange={handleChange}
                  value={newOffre.description}
                />
              </Form.Group>
 
              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>date Depart :</Form.Label>
                <Form.Control
                  type="date"
                  name="datedep"
                  placeholder="Entrer date depart"
                  onChange={handleChange}
                  value={newOffre.dateDep}
                />
              </Form.Group>
             <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>date fin :</Form.Label>
                <Form.Control
                  type="date"
                  name="dateFin"
                  placeholder="Entrer date fin"
                  onChange={handleChange}
                  value={newOffre.dateFin}
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>Salaire :</Form.Label>
                <Form.Control
                  type="texte"
                  name="salaire"
                  placeholder="Entrer date depart"
                  onChange={handleChange}
                  value={newOffre.salaire}
                />
              </Form.Group> 

              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>Emplacement :</Form.Label>
                <Form.Control
                  type="text"
                  name="emplacement"
                  placeholder="Entrer emplacement"
                  onChange={handleChange}
                  value={newOffre.emplacement}
                />
              </Form.Group>    
              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>Experience :</Form.Label>
                <Form.Control
                  type="text"
                  name="experience"
                  placeholder="Entrer l'experience demander"
                  onChange={handleChange}
                  value={newOffre.experience}
                />
              </Form.Group>
              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>Niveau d'etude :</Form.Label>
                <Form.Control
                  type="text"
                  name="niveauEtude"
                  placeholder="Entrer niveau d'etude demander"
                  onChange={handleChange}
                  value={newOffre.niveauEtude}
                />
              </Form.Group>
            </Form>
          </Card.Text>
        </Card.Body>
        <div className="buttons">
          <Link to="/Offre_list">
            <Button
              variant="outline-primary edit-button"
              onClick={() => {
                isEdit
                  ? dispatch(editOffre(newOffre._id, newOffre))
                  : dispatch(addOffre(newOffre));
              }}
            >
              {isEdit ? "Enregistrer" : "Ajouter"}
            </Button>
          </Link>
          <Button variant="outline-danger edit-button">Cancel</Button>
        </div>
      </Card>
    </div>
  );
};

export default AddOffre;
