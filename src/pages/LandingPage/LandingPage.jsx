/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/fcamLogo.png';
import contactImg from '../../assets/images/contact.png';
import harshImg from '../../assets/images/Harsh.png';
import morrisImg from '../../assets/images/Morrisjpg.jpg';
import tanishukeImg from '../../assets/images/Tanishukejfif.jfif';
import abhiImg from '../../assets/images/Abhijpg.jpg';

const LandingPage = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [navtoggle, setnavtoggle] = useState(false);

    return (
        <div className="landingpage">
            <header>
                <div class="landingContainer">
                    <a href="#" class="logo">
                        <img src={logo} width="70px" alt="logo" />
                    </a>

                    <div class="landingNavbar-wrapper">
                        <button
                            type="submit"
                            class="landingNavbar-menu-btn homepageBtn"
                            data-navbar-toggle-btn
                            onClick={() => {
                                setnavtoggle((prev) => !prev);
                            }}
                        >
                            <i className="fa-solid fa-bars" />
                        </button>

                        <nav
                            class={
                                navtoggle
                                    ? 'landingNavbar active'
                                    : 'landingNavbar'
                            }
                            data-navbar
                        >
                            <ul class="landingNavbar-list">
                                <li class="nav-item">
                                    <a href="#home" class="nav-link">
                                        Home
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href="#about" class="nav-link">
                                        Features
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href="#features" class="nav-link">
                                        Our Team
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a href="#contact" class="nav-link">
                                        Contact
                                    </a>
                                </li>
                            </ul>

                            <button
                                type="button"
                                class="btn btn-primary homepageBtn"
                                onClick={() => {
                                    navigate('/login');
                                }}
                            >
                                {token ? 'Dashboard' : 'Login'}
                            </button>
                        </nav>
                    </div>
                </div>
            </header>

            <main>
                <article>
                    {/* <!-- 
        - #superHero
      --> */}
                    <section class="superHero" id="home">
                        <div class="landingContainer">
                            <div class="superHero-content">
                                <h1 class="h1 superHero-title">
                                    Maintain your Feedbacks like never before.
                                </h1>

                                <p class="superHero-text">
                                    A way for college faculties to organise and
                                    maintain their feedbacks digitally with
                                    minimal efforts. All your progress under one
                                    roof.
                                </p>
                            </div>

                            <div class="superHero-banner" />
                        </div>
                    </section>

                    {/* <!-- 
        - #ABOUT
      --> */}

                    <section class="about" id="about">
                        <div class="custom-shape-divider-top-1673187737">
                            <svg
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1200 120"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                                    class="shape-fill"
                                />
                            </svg>
                        </div>
                        <div class="landingContainer">
                            <div class="about-top">
                                <h2 class="h2 section-title">
                                    Features to Help your feedbacks thrive
                                </h2>

                                <p class="section-text">
                                    Our feedback management app is designed to
                                    help admins collect, organize, and act on
                                    Students feedback. Our app includes a range
                                    of features to support these objectives such
                                    as :
                                </p>

                                <ul class="about-list">
                                    <li>
                                        <div class="about-card">
                                            <div class="card-icon">
                                                {/* <ion-icon name="briefcase-outline"></ion-icon> */}
                                            </div>

                                            <h3 class="h3 card-title">
                                                Collection of feedback
                                            </h3>

                                            <p class="card-text">
                                                It allows you to gather feedback
                                                from students about faculty on
                                                various parameters through
                                                google forms along with inbuilt
                                                template.
                                            </p>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="about-card">
                                            <div class="card-icon">
                                                {/* <ion-icon name="chatbubbles-outline"></ion-icon> */}
                                            </div>

                                            <h3 class="h3 card-title">
                                                Organized Data
                                            </h3>

                                            <p class="card-text">
                                                Transforms feedback into action
                                                by helping you organize the data
                                                in a way that makes it easy to
                                                understand and executable.
                                            </p>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="about-card">
                                            <div class="card-icon">
                                                {/* <ion-icon name="rocket-outline"></ion-icon> */}
                                            </div>

                                            <h3 class="h3 card-title">
                                                Analysis of feedback
                                            </h3>

                                            <p class="card-text">
                                                Generating a report is as easy
                                                as clicking a button. It helps
                                                you identify trends and patterns
                                                to extract insights of feedback
                                                given by student.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div class="custom-shape-divider-bottom-1673189152">
                                <svg
                                    data-name="Layer 1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 1200 120"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                                        class="shape-fill"
                                    />
                                </svg>
                            </div>
                        </div>
                    </section>

                    {/* <!-- 
        - #Team
      --> */}

                    <section class="features" id="features">
                        <div class="landingContainer">
                            <h2 class="h2 section-title">
                                Meet the talented and dedicated individuals who
                                make up our team
                            </h2>

                            <p class="section-text">
                                We believe that collaboration and open
                                communication are key to our success, and our
                                team members are encouraged to share their ideas
                                and insights. This creates a dynamic and
                                innovative work environment that fosters
                                creativity and continuous improvement.
                            </p>

                            <ul class="features-list">
                                <li class="features-item">
                                    <figure class="features-item-banner">
                                        <img src={morrisImg} alt="Ayush" />
                                    </figure>

                                    <div class="feature-item-content">
                                        <h3 class="h2 item-title">Ayush Pun</h3>

                                        <p class="item-text">
                                            {/* I may be a lazy frontend developer,
                                            but I&apos;m a master of the
                                            &apos;Ctrl+C, Ctrl+V&apos; workflow.
                                            And when it comes to backend, I
                                            prefer to delegate the heavy lifting
                                            to my trusty Google search bar. */}
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cum inventore id maxime facilis iusto iure repellendus fugiat accusamus deleniti, rerum ducimus vitae vel, minima voluptates, perferendis quia reiciendis odio.
                                        </p>
                                    </div>
                                </li>
                                <li class="features-item">
                                    <figure class="features-item-banner">
                                        <img src={harshImg} alt="Harsh" />
                                    </figure>

                                    <div class="feature-item-content">
                                        <h3 class="h2 item-title">
                                            Harsh Verma
                                        </h3>

                                        <p class="item-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ea consectetur est nihil aperiam, officiis molestias rem aliquam obcaecati, vel at assumenda odio accusantium ducimus! Voluptates, corporis nemo. Vero, officiis.
                                        </p>
                                    </div>
                                </li>
                                <li class="features-item">
                                    <figure class="features-item-banner">
                                        <img
                                            src={tanishukeImg}
                                            alt="Tanishcq"
                                        />
                                    </figure>

                                    <div class="feature-item-content">
                                        <h3 class="h2 item-title">
                                            Tanishcq Meheta
                                        </h3>

                                        <p class="item-text">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur illum, modi placeat maiores laudantium officiis. Nemo ex quia earum mollitia sint voluptatum distinctio assumenda, nulla, consectetur inventore fugit temporibus suscipit!
                                        </p>
                                    </div>
                                </li>

                                <li class="features-item">
                                    <figure class="features-item-banner">
                                        <img src={abhiImg} alt="Abhishek" />
                                    </figure>

                                    <div class="feature-item-content">
                                        <h3 class="h2 item-title">
                                            Abhishek Sachdeva
                                        </h3>

                                        <p class="item-text">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae numquam facere non tenetur vero ducimus voluptatibus voluptate commodi! Voluptatem rerum quisquam id vero nemo! Animi nisi quis ea mollitia enim.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* <!-- 
        - #CONTACT
      --> */}

                    <section class="contact" id="contact">
                        <div class="landingContainer">
                            <div class="contact-content">
                                <h2 class="h2 contact-title">
                                    Get in touch with our team
                                </h2>

                                <figure class="contact-banner">
                                    <img
                                        src={contactImg}
                                        alt="contact banner"
                                    />
                                </figure>
                            </div>

                            <form action="" class="contact-form">
                                <div class="input-wrapper">
                                    <label for="name" class="input-label">
                                        Name *
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        placeholder="Type Name"
                                        class="input-field"
                                    />
                                </div>

                                <div class="input-wrapper">
                                    <label for="phone" class="input-label">
                                        Phone
                                    </label>

                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        placeholder="Type Phone Number"
                                        class="input-field"
                                    />
                                </div>

                                <div class="input-wrapper">
                                    <label for="email" class="input-label">
                                        Email Address *
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        placeholder="Type Email Address"
                                        class="input-field"
                                    />
                                </div>

                                <div class="input-wrapper">
                                    <label for="message" class="input-label">
                                        How can we help? *
                                    </label>

                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Type Description"
                                        required
                                        class="input-field"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    class="btn btn-primary homepageBtn"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </section>
                </article>
            </main>

            {/* <!-- 
    - #FOOTER
  --> */}

            <footer>
                {/* <!-- <div class="footer-top"> -->
      <!-- <div class="landingContainer">

        <div class="footer-brand">

          <a href="#" class="logo">
            <img src="" alt="FMS logo">
          </a>

          <p class="footer-text">Follow us on</p>

          <ul class="social-list">

            <li>
              <a href="https://github.com/codewithsadee" class="social-link">
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </li>

            <li>
              <a href="https://instagram.com/codewithsadee" class="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="https://youtube.com/c/codewithsadee" class="social-link">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

          </ul>

        </div>

        <div class="footer-link-box"> -->

          <!-- <ul class="footer-link-list">

            <li>
              <h3 class="h4 link-title">Company</h3>
            </li>

            <li>
              <a href="#" class="footer-link">About Us</a>
            </li>

            <li>
              <a href="#" class="footer-link">Features</a>
            </li>

            <li>
              <a href="#" class="footer-link">Contact Us</a>
            </li>

          </ul> -->

          <!-- <ul class="footer-link-list">

            <li>
              <h3 class="h4 link-title">Products</h3>
            </li>

            <li>
              <a href="#" class="footer-link">Blog</a>
            </li>

            <li>
              <a href="#" class="footer-link">Help Center</a>
            </li>

            <li>
              <a href="#" class="footer-link">Contact</a>
            </li>

          </ul> -->

          <!-- <ul class="footer-link-list">

            <li>
              <h3 class="h4 link-title">Resources</h3>
            </li>

            <li>
              <a href="#" class="footer-link">FAQ’S</a>
            </li>

            <li>
              <a href="#" class="footer-link">Testimonial</a>
            </li>

            <li>
              <a href="#" class="footer-link">Terms & Conditions</a>
            </li>

          </ul> -->

          <!-- <ul class="footer-link-list">

            <li>
              <h3 class="h4 link-title">Relevent</h3>
            </li>

            <li>
              <a href="#" class="footer-link">Why</a>
            </li>

            <li>
              <a href="#" class="footer-link">Products</a>
            </li>

            <li>
              <a href="#" class="footer-link">Customers</a>
            </li>

          </ul> -->

        <!-- </div>

      </div>
    </div> --> */}

                <div class="footer-bottom">
                    <p class="copyright">
                        &copy; 2023 FCAM System All right reserved
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
