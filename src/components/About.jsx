import '../../sass/main.scss';
import { PcDisplayHorizontal } from 'react-bootstrap-icons';
import NextIcon from './icons/NextIcon';
import AngularIcon from './icons/AngularIcon';
import TypescriptIcon from './icons/TypescriptIcon';
import GitHubIcon from './icons/GitHubIcon';
import { NodeJsIcon } from './icons/NodeJsIcon';
import { SQLIcon } from './icons/SQLIcon';
import { AWSIcon } from './icons/AWSIcon';
import { FlutterIcon } from './icons/FlutterIcon';
import { JavaIcon } from './icons/JavaIcon';

const About = () => {
  return (
    <section id='about' className='bg-danger text-center p-5'>                  
          <p className='bg-danger fw-bold fs-2 text-secondary'>
            About Me
          </p>
          <div className="rounded border mx-auto p-3 shadow-lg" style={{maxWidth: '1000px'}}>
            <div>
              <p className='fw-semibold fs-4 text-secondary'>
                A Software Development enthusiast <PcDisplayHorizontal className='ms-1 mb-1' size={20} />
              </p>
              <p className='text-success'>
                I&apos;m a Software Developer located in Costa Rica. I have a passion for <span className='text-primary fw-semibold'>software development</span> and love to create for web and mobile devices. I like to turn <span className='text-primary fw-semibold'>ideas into code</span>. I&apos;m constantly learning since the past 3 years and looking for an opportinuty where I could use all my knowledge in order to help others. I&apos;m a very <span className='text-primary fw-semibold'>focused</span>, <span className='text-primary fw-semibold'>passionate</span> and <span className='text-primary fw-semibold'>commited</span> person. I&apos;m always looking for new challenges and opportunities to grow as a developer.
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
                    <NextIcon />
                  </div>
                  <div className="col">
                    <NodeJsIcon />
                  </div>
                  <div className="col">
                    <SQLIcon />
                  </div>
                </div>
                <div className="row mx-auto my-2">
                  <div className="col">
                    <AWSIcon />
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
                    <FlutterIcon />
                  </div>
                  <div className="col">
                    <JavaIcon />
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