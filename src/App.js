import React from "react";
import "./App.css";
import { Navb } from "./Components/Navbar/Navbar";
import { Dashbord } from "./Components/Dashboard/Dashbord";
import { Footer } from "./Components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

const etudiants = [
  {
    id: 1,
    photo: "https://i1.sndcdn.com/avatars-000495007683-zg65ko-t500x500.jpg",
    name: "Hammouda",
    secondName: "Mdimegh",
  },

  {
    id: 2,
    photo:
      "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
    name: "Ahmed",
    secondName: "Elloumi",
  },

  {
    id: 3,
    photo: "https://i1.sndcdn.com/avatars-000495007683-zg65ko-t500x500.jpg",
    name: "Feten",
    secondName: "Chmengui",
  },

  {
    id: 2,
    photo: "https://i1.sndcdn.com/avatars-000495007683-zg65ko-t500x500.jpg",
    name: "Ahmed",
    secondName: "Elloumi",
  },

  {
    id: 2,
    photo: "https://i1.sndcdn.com/avatars-000495007683-zg65ko-t500x500.jpg",
    name: "Karim",
    secondName: "Gharbi",
  },

  {
    id: 2,
    photo: "https://i1.sndcdn.com/avatars-000495007683-zg65ko-t500x500.jpg",
    name: "Mehdi",
    secondName: "Hannachi",
  },

  {
    id: 2,
    photo: "https://i1.sndcdn.com/avatars-000495007683-zg65ko-t500x500.jpg",
    name: "Slim",
    secondName: "Amdouni",
  },

  {
    id: 2,
    photo: "https://i1.sndcdn.com/avatars-000495007683-zg65ko-t500x500.jpg",
    name: "Mohamed",
    secondName: "Hassanet",
  },
];

const handelChange = (name) => {
  alert(name);
};

function App() {
  return (
    <div>
      <Navb />

      <Dashbord etudiants={etudiants} handelChange={handelChange}>
        {/* children props */}

        {"Title Image"}
        <img
          src="https://i1.sndcdn.com/avatars-000495007683-zg65ko-t500x500.jpg"
          alt=""
          width="20px"
          height="20px"
        />
      </Dashbord>

      <Footer />
    </div>
  );
}

export default App;
