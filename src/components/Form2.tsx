import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import KeySharpIcon from "@mui/icons-material/KeySharp";
import "./styles/Form2.css";

function Form2() {
  return (
    <div>
        <div className="container">
            <div className="content">
                <h2>Orbitec</h2>
            </div>

            <div className="logreg-box">
                <div className="form-box login">
                    <form action="#">
                        <h2>Iniciar Sesión</h2>

                        <div class="input-box">
                            <span class="icon">
                                <EmailIcon/>
                            </span>
                            <input type="email" required />
                            <label>Email</label>
                        </div>

                        <div className="input-box">
                            <span className="icon">
                            <KeySharpIcon />
                            </span>
                            <input type="password" required />
                            <label>Password</label>
                        </div>

                        <div className="remember-forgot">
                            <label>
                            <input type="checkbox" />
                            Recuerdame
                            </label>
                            <br />
                            <a href="#">Olvidé mi contraseña</a>
                        </div>

                        <button typw="submit" className="btn">
                            Iniciar Sesión
                        </button>

                        <div className="login-register">
                            <p>
                            No tienes una cuenta?
                            <a href="#" className="register-link">
                                Registrarse
                            </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Form2;
