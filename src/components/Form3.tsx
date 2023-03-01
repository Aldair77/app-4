import React from 'react'
import './styles/Form3.css'

function Form3() {
  return (
    
    <div>
         <div className="container">
        <div className="forms-container">
            <div className="signin-signup">
                <form action="#" className="sign-in-form">
                    <h2 className="signin title">Iniciar Sesión</h2>

                    <div className="input-field">
                        <i className="fas  fa-user"></i>
                        <input type="text" placeholder="Username"/>
                    </div>

                    <div className="input-field">
                        <i class="fas  fa-lock"></i>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <input type="submit" value="Login" class="btn solid"/>


                    <p className="social-text">Or Sign In with social platforms</p>
                    <div className="social-media">
                        <a href="#" className="social-icon">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </form>

                <form action="#" class="sign-up-form">
                    <h2 className="signup title">Registrate</h2>

                    <div className="input-field">
                        <i class="fas  fa-user"></i>
                        <input type="text" placeholder="Username"/>
                    </div>

                    <div className="input-field">
                        <i className="fas  fa-envelope"></i>
                        <input type="text" placeholder="Email"/>
                    </div>

                    <div className="input-field">
                        <i className="fas  fa-lock"></i>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <input type="submit" value="Sign Up" className="btn solid"/>


                    <p className="social-text">Or Sign Un with social platforms</p>
                    <div className="social-media">
                        <a href="#" className="social-icon">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </form>
            </div>
        </div>



        <div className="panels-container">
            <div className="panel left-panel">
                <div className="content">
                    <h3>Nuevo Aquí??</h3>
                    <p>Lorem ipsum dolor sit amet adipisicing elit. Dolorem omnis veritatis nobis.</p>
                    <button class="btn transparent" id="sign-up-btn">Registrate</button>
                </div>

                <img src='../../assets/orbitecTruck.png' className="image" alt="Rock"/>
            </div>


            <div className="panel right-panel">
                <div className="content">
                    <h3>One of us ?</h3>
                    <p>Lorem ipsum dolor sit amet adipisicing elit. Dolorem omnis veritatis nobis.</p>
                    <button className="btn transparent" id="sign-in-btn">Sign In</button>
                </div>

                <img src="" className="image" alt="Rock"/>
            </div>
        </div>
    </div>


    </div>
  )
}

export default Form3