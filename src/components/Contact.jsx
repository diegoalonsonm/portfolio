import '../../sass/main.scss';
import '../App.css';

import { Telephone, Envelope, Linkedin, FilePdf } from 'react-bootstrap-icons';

import DiegoCV from '../assets/pdf/DiegoCV.pdf'

export const Contact = () => {
  return (
    <section id="contact" className='hero-gradient text-center p-5'>
      <div className='bg-transparent'>
        <p className='fw-bold bg-transparent fs-2 text-white'>
          Contact Me
        </p>
        <p className='fs-5 bg-transparent fw-semibold text-white'>
          I'm always excited to discuss new opportunities, innovative projects, or collaborate on interesting challenges. Feel free to reach out!
        </p>
      </div>
      <div className='bg-transparent'>
        <div className="rounded border mx-auto p-5 my-5 shadow-lg" style={{maxWidth: '500px'}}>
          <div className="container">
            <div className="row py-2">
              <div className="col">
                <div className="text-secondary">
                  <a className='text-secondary text-decoration-none' href='https://www.linkedin.com/in/diegonaranjo03/'target='_blank'>                    
                    <div>
                      <Linkedin size={24} className='me-1 me-sm-2' />
                      <span className='fs-5 mt-1 fw-semibold'>Diego Naranjo</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="row py-2">
              <div className="col">
                <div className="text-secondary">
                  <div>
                    <Telephone size={24} className='me-1 me-sm-2' />
                    <span className='fs-5 mt-1 fw-semibold'>+506 6046-9117</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row py-2">
              <div className="col">
                <div className="text-secondary">      
                  <div>
                    <Envelope size={24} className='me-1 me-sm-2' />
                    <span className='fs-5 mt-1 ms-0 fw-semibold'>diegoalon
                      <br className='d-block d-sm-none' />sonm@
                      <br className='d-block d-sm-none' />gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row py-2">
              <div className="col">
                <div className="text-secondary">
                  <a className='text-secondary text-decoration-none' href={DiegoCV} target='_blank'>                    
                    <div>
                      <FilePdf size={24} className='me-1 me-sm-2' />
                      <span className='fs-5 mt-1 fw-semibold'>Open CV</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
