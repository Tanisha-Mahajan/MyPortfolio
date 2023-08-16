import { Github, Home, Linkedin, Star} from 'lucide-react'
import React from 'react'
import './Navbar.css'
import Profile from '../image/profile.jpg'
import html from '../image/html.png'
import css from '../image/css.png'
import javascript from '../image/javascript.png'
import bootstrap from '../image/bootstrap.png'
import sass from '../image/sass.png'
import react from '../image/react.png'
import Cv from '../pdf/Tanisha_Mahajan_CV.pdf'
import Logo from '../image/logo-d-plus.svg'
import Ecommerce from '../image/ecommerce.png'
import InProgress from '../image/inProgress.png'
import TicTacToe from '../image/TicTacToe.png'
import github from '../image/github.png'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg position-fixed w-100 z-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Tanisha Mahajan</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>



          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><Home /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/tanisha-mahajan-1108s/" target='_blank'><Linkedin /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='https://github.com/Tanisha-Mahajan' target='_blank'><Github /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href='#project'>Projects</a>
              </li>
            </ul>
          </div>


          <button type='button' className='btn btn-light'>
            <a href='mailto:tanishamahajan11113420@gmail.com' className='text-secondary text-decoration-none'> Contact Me </a>
          </button>
        </div>
      </nav>



      <div className="hero-section">
        <div className="info">
          <h2>Hello Everyone!</h2>
            <p className='typing'>My name is Tanisha Mahajan <span>A Frontend Developer</span></p> 
            <p className='fw-bold text-light'>Aspiring and motivated frontend developer eager to bring creative designs to life in the digital realm. With a solid foundation in HTML, CSS, and JavaScript, I am committed to transforming concepts into captivating and user-centric web experiences. My passion for clean and responsive design, coupled with a hunger for continuous learning, drives me to stay at the forefront of evolving web technologies. Through my portfolio, you'll discover a collection of projects that showcase my ability to craft intuitive user interfaces, ensure seamless cross-device compatibility, and contribute to the overall enhancement of user engagement. I am excited to embark on this journey, collaborating with teams to create visually stunning and functionally exceptional websites that leave a lasting impact. Join me as I embark on this adventure of turning code into captivating artistry.</p>
            <a href={Cv} target='_blank' className='mx-3'>Check My Cv</a> 
            <a href='https://www.linkedin.com/in/tanisha-mahajan-1108s/' target='_blank'>Linkedin</a>
        </div>
      </div>



      <h3 className='text-light px-5 mt-5' id='project'>Projects</h3>
      <div className="projects mt-4 px-5 d-flex">
        <div class="card">
          <img src={Logo} class="card-img-top" alt="..." />
          <a class="card-body text-decoration-none" href=''>
            <p class="card-text">The Disney+ Hotstar clone project aims to replicate the popular streaming platform </p>
          </a>
        </div>
        <div class="card">
          <img src={Ecommerce} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">An ecommerce website is an online platform where businesses showcase and sell their products or services to customers. </p>
          </div>
        </div>
        <a class="card text-decoration-none" href='https://github.com/Tanisha-Mahajan/tictactoe'>
          <img src={TicTacToe} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">Tic Tac Toe is a classic two-player game played on a grid of 3x3 squares. </p>
          </div>
        </a>
        <div class="card">
          <img src={InProgress} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">More projects are under process. Hope to update soon</p>
          </div>
        </div>
      </div>




      <h3 className='text-light px-5 mt-5'>Skills</h3>
      <div className="projects skills mt-4 px-5 d-flex" >
        <div class="card">
          <img src={html} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              Proficiency <br />
              <span className='text-warning'><Star /><Star /><Star /><Star /><Star /></span>
            </p>
          </div>
        </div>
        <div class="card">
          <img src={css} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              Proficiency <br />
              <span className='text-warning'><Star /><Star /><Star /><Star /><Star /></span>
            </p>
          </div>
        </div>
        <div class="card">
          <img src={javascript} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              Proficiency <br />
              <span className='text-warning'><Star /><Star /><Star /></span>
            </p>
          </div>
        </div>
        <div class="card">
          <img src={bootstrap} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              Proficiency <br />
              <span className='text-warning'><Star /><Star /><Star /><Star /></span>
            </p>
          </div>
        </div>
        <div class="card">
          <img src={sass} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              Proficiency <br />
              <span className='text-warning'><Star /><Star /><Star /><Star /></span>
            </p>
          </div>
        </div>
        <div class="card">
          <img src={react} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              Proficiency <br />
              <span className='text-warning'><Star /><Star /><Star /></span>
            </p>
          </div>
        </div>
        <div class="card">
          <img src={github} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              Proficiency <br />
              <span className='text-warning'><Star /><Star /><Star /><Star /></span>
            </p>
          </div>
        </div>
      </div>


      <footer className='mb-5'> 

      </footer>
    </>
  )
}

export default Navbar
