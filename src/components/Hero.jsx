import '../../sass/main.scss';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonComponent from './Button';

export const Hero = () => {
  return (
    <section className='container-fluid text-center p-lg-40 bg-light'>
        <p className='h1 text-dark fw-bold bg-light'>Hi, I'm Diego Naranjo</p>
        <p className="h2 text-info fw-semibold bg-light">Full-Stack Web Developer</p>
        <ButtonComponent className="mx-1 mt-3" color="primary" textColor="white" text="Contact Me" href="about" />
        <ButtonComponent className="mx-1 mt-3" color="primary" textColor="white" text="Open CV" />
    </section>
  )
}
