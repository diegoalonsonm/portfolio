import '../../sass/main.scss';
import { PcDisplayHorizontal } from 'react-bootstrap-icons';
import HtmlIcon from './icons/HtmlIcon';
import { CssIcon } from './icons/CssIcon';
import JavaScriptIcon from './icons/JavaScriptIcon';
import NextIcon from './icons/NextIcon';
import AngularIcon from './icons/AngularIcon';
import TypescriptIcon from './icons/TypescriptIcon';
import FigmaIcon from './icons/FigmaIcon';
import GitHubIcon from './icons/GitHubIcon';
import BootstrapIcon from './icons/BootstrapIcon';

const About = () => {
  return (
    <section id='about' className='bg-danger text-center p-5'>                  
          <p className='bg-danger fw-bold fs-2 text-secondary'>
            About Me
          </p>
          <div className="rounded border mx-auto p-3 shadow-lg" style={{maxWidth: '1000px'}}>
            <div>
              <p className='fw-semibold fs-4 text-secondary'>
                A Web Development enthusiast <PcDisplayHorizontal className='ms-1 mb-1' size={20} />
              </p>
              <p className='text-success'>
                I'm a Web Developer located in Costa Rica. I have a passion for <span className='text-primary fw-semibold'>web development</span> and love to create for web and mobile devices. I like to turn <span className='text-primary fw-semibold'>ideas into code</span>. I'm constantly learning since the past 3 years and looking for an opportinuty where I could use all my knowledge in order to help others. I'm a very <span className='text-primary fw-semibold'>focused</span>, <span className='text-primary fw-semibold'>passionate</span> and <span className='text-primary fw-semibold'>commited</span> person. I'm always looking for new challenges and opportunities to grow as a developer.
              </p>
            </div>
            <hr />            
            <div className='container'>
              <div className="row text-center">
                <div className="col">
                  <p className='fw-semibold text-secondary fs-5'>
                    My Skills
                  </p>
                </div>
                <div className="row mx-auto my-2">
                  <div className="col">                    
                    <HtmlIcon />
                  </div>
                  <div className="col">
                    <CssIcon />
                  </div>
                  <div className="col">
                    <JavaScriptIcon />
                  </div>
                </div>
                <div className="row mx-auto my-2">
                  <div className="col">
                    <NextIcon />
                  </div>
                  <div className="col">
                    <AngularIcon />
                  </div>
                  <div className="col">
                    <TypescriptIcon />
                  </div>
                </div>
                <div className="row mx-auto my-2">
                  <div className="col">
                    <BootstrapIcon />
                  </div>
                  <div className="col">
                    <FigmaIcon />
                  </div>
                  <div className="col">
                    <GitHubIcon />
                  </div>
                </div>
              </div>          
            </div>
          </div>
    </section>
  )
}

export default About