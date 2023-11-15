import '../../sass/main.scss';
import '../App.css';

import { Telephone, Envelope, Linkedin, FilePdf } from 'react-bootstrap-icons';

import DiegoCV from '../assets/pdf/DiegoCV.pdf'

export const Contact = () => {
  return (
    <section id="contact" className='bg-danger text-center p-5'>
      <div className='bg-danger'>
        <p className='bg-danger fw-bold fs-2 text-secondary'>
          Contact Me
        </p>
        <p className='bg-danger fs-5 fw-semibold'>
          If you would like to <span className='text-warning bg-danger'>hire me</span>, 
          please <span className='text-warning bg-danger'>call me</span>,  
          <span className='text-warning bg-danger'> text me</span> or send me an
          <br />
          <span className='text-warning bg-danger'>email</span>. And let's connect
          on LinkedIn too!
        </p>
      </div>
      <div className="bg-danger">
        <div className="rounded border mx-auto p-5 my-5 shadow-lg" style={{maxWidth: '500px'}}>
          <div className="container">
            <div className="row py-2">
              <div className="col">
                <div className="text-secondary">
                  <a className='text-secondary text-decoration-none' href='https://www.linkedin.com/in/diegonaranjo03/'
                    target='_blank'
                  >                    
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
