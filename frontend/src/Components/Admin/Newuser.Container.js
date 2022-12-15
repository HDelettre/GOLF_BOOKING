import React, { useState } from "react";
import AdminSubscribe from "./Admin.Subscribe";

const NewuserContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("12345678");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [golf, setGolf] = useState("");
  const [licence, setLicence] = useState("");
  const [role, setRole] = useState("USER");

  const validHandle = () => {};

  console.log("ROLE: ", role);

  return (
    <>
      <div className="home_box">
        <div className="form">
          <h3>Nouvel Utilisateur:</h3>
          <form
            action=""
            name="newUser"
            className="form_container"
            id="newUser"
            onSubmit={validHandle}
          >
            <div className="input_box">
              <label htmlFor="email" className="form_container--label">
                Email :
              </label>
              <input
                type="email"
                name="email"
                value={email}
                required
                className="form_container--input"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input_box">
              <label htmlFor="password" className="form_container--label">
                Password :
              </label>
              <input
                type="text"
                name="password"
                value={password}
                required
                className="form_container--input"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="input_box">
              <label htmlFor="firstname" className="form_container--label">
                Prénom :
              </label>
              <input
                type="text"
                name="firstname"
                value={firstname}
                required
                className="form_container--input"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>

            <div className="input_box">
              <label htmlFor="lastname" className="form_container--label">
                Nom :
              </label>
              <input
                type="text"
                name="lastname"
                value={lastname}
                required
                className="form_container--input"
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>

            <div className="input_box">
              <label htmlFor="golf" className="form_container--label">
                Golf :
              </label>
              <input
                type="text"
                name="golf"
                value={golf}
                required
                className="form_container--input"
                onChange={(e) => setGolf(e.target.value)}
              />
            </div>

            <div className="input_box">
              <label htmlFor="licence" className="form_container--label">
                Licence :
              </label>
              <input
                type="text"
                name="licence"
                value={licence}
                required
                className="form_container--input"
                onChange={(e) => setLicence(e.target.value)}
              />
            </div>

            <div className="input_box">
              <label htmlFor="role" className="form_container--label">
                Rôle :
              </label>
              <select
                name="role"
                className="form_container--input"
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
          </form>
        </div>
        <AdminSubscribe />
      </div>
      <div className="bouton">VALIDER</div>
    </>
  );
};

export default NewuserContainer;
