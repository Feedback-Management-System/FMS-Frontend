import React from 'react';
import loginIllustration from '../../assets/images/loginIllustration.webp';
import msiLogo from '../../assets/images/msi_logo.png';
import './LoginPage.css';

const LoginPage = () => {
    return (
        <div className="loginBody">
            <main className="Main_login">
                <nav>
                    <div className="logo">
                        <img src={msiLogo} alt="logo" />
                    </div>
                    <div className="nav-links" id="navLinks">
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Features</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <section className="main-container">
                    <div className="img-container">
                        <img src={loginIllustration} alt="img" />
                    </div>
                    <div className="form-container">
                        <h1>Welcome Back!</h1>
                        <form>
                            <div className="input-container">
                                <i className="fa-solid fa-user" />
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                />
                            </div>

                            <div className="input-container">
                                <i className="fa-solid fa-lock" />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                            </div>

                            <div className="rf-container">
                                <div className="remember">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        id="remember"
                                    />
                                    <label htmlFor="remember">Remember</label>
                                </div>
                                <div className="forgot">
                                    <a href="#">Forgot password?</a>
                                </div>
                            </div>

                            <button type="button">Log In</button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default LoginPage;
