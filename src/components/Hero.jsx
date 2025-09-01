import '../../sass/main.scss';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonComponent from '../components/components/Button';

import DiegoCV from '../assets/pdf/DiegoCV.pdf'

export const Hero = () => {
  return (
    <section className='container-fluid text-center p-lg-40 hero-gradient'>
        <p className='bg-transparent h1 text-white fw-bold'>Hi, I&apos;m Diego Naranjo</p>
        <p className="bg-transparent h2 text-white fw-semibold">Software Developer</p>
        <div className='bg-transparent d-flex justify-content-center mt-4'>
          <ButtonComponent className="mx-1 mt-3 hero-btn" color="primary" textColor="white" 
            text="View my work" href="projects" 
            />
          <ButtonComponent className="mx-1 mt-3 hero-btn" color="primary" textColor="white" 
            text="Open CV" href={DiegoCV} download="DiegoCV.pdf" cv={true}
            />
        </div>
    </section>
  )
}
