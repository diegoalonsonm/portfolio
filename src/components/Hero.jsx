import '../../sass/main.scss';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonComponent from '../components/components/Button';

import DiegoCV from '../assets/pdf/DiegoCV.pdf'

export const Hero = () => {
  return (
    <section className='container-fluid text-center p-lg-40 bg-light'>
        <p className='h1 text-secondary fw-bold bg-light'>Hi, I&apos;m Diego Naranjo</p>
        <p className="h2 text-info fw-semibold bg-light">Software Developer</p>
        <ButtonComponent className="mx-1 mt-3 hero-btn" color="primary" textColor="white" 
          text="Contact Me" href="contact" 
        />
        <ButtonComponent className="mx-1 mt-3 hero-btn" color="primary" textColor="white" 
          text="Open CV" href={DiegoCV} download="DiegoCV.pdf" cv={true}
        />
    </section>
  )
}
