import '../../sass/main.scss';

import CardComponent from '../components/components/Card';

import RecipeBookImg from '../assets/img/recipeBook.jpeg'
import QuoteGeneratorImg from '../assets/img/quoteGenerator.jpeg'
import BookApiImg from '../assets/img/bookApi.jpg'
import ReservApp from '../assets/img/reservapp.png'
import CashControllerImg from '../assets/img/cashController.png'

const Projects = () => {
  return (
    <section id="projects" className='bg-light text-center p-5'>
      <p className='bg-light fw-bold fs-2 text-secondary'>
        My projects
      </p>
      <div className='row my-5 shadow mx-auto' style={{maxWidth: '1000px'}}>
        <CardComponent title="Cash Controller" description="A PWA that let's you control your expenses. You can add, edit and delete expenses. It also has a chart that shows you the expenses of the current month. It has a login and register module to control the data of each user." 
          image={CashControllerImg}
          githubLink="https://github.com/diegoalonsonm/cash-controller-server" 
          appLink="https://github.com/diegoalonsonm/cash-controller-client" 
          techStack={['Node Js', 'Bootstrap', 'Next Js', 'SQL', 'Chart JS', 'Express', 'JWT']}
        />        
      </div>
      <div className='row my-5 shadow mx-auto' style={{maxWidth: '1000px'}}>
        <CardComponent title="Recipe Book" description="Web application where you can manage recipes 
          and create a shopping list with the ingredients you’ll need. It has an auth module in order 
          to control the recipes and shopping lists." 
          image={RecipeBookImg}
          githubLink="https://github.com/diegoalonsonm/recipe-book" 
          appLink="https://recipe-book-swart.vercel.app" 
          techStack={['Angular', 'Bootstrap', 'Typescript', 'Firebase']}
        />        
      </div>
      <div className='row my-5 shadow mx-auto' style={{maxWidth: '1000px'}}>
        <CardComponent title="Quote Generator" description="Application with Next JS on the front-end 
          and AWS Amplify on the back-end. It makes an API call and generates a downloadable letter with 
          a motivational phrase and its author." 
          image={QuoteGeneratorImg}
          githubLink="https://github.com/diegoalonsonm/quote-generator" 
          appLink="https://prod.d3l8pp9jp6dwmx.amplifyapp.com/" 
          techStack={['Next JS', 'TypeScript', 'CSS', 'Material UI', 'AWS Amplify', 'Lambda', 
            'DynamoDB', 'Node JS', 'Zenquotes API']}
        />        
      </div>
      <div className='row my-5 shadow mx-auto' style={{maxWidth: '1000px'}}>
        <CardComponent title="Books API" description="This is the client side of consuming a Node JS API. It let's you see all the books stored in a MongoDB and also let's you create, update, delete and look the data of an specific book. The GitHub link redierects you to the server side of the code." 
          image={BookApiImg} 
          githubLink="https://github.com/diegoalonsonm/books-api-server"
          appLink="https://books-api-jade.vercel.app/" 
          techStack={['Vite', 'Tailwind CSS', 'Node JS', 'Mongo DB', 'Express', 'Vercel', 'Render']}
        />                
      </div>
      <div className='row my-5 shadow mx-auto' style={{maxWidth: '1000px'}}>
        <CardComponent title="ReservApp" description="A lading page for some of the best venues here in Guanacaste, Costa Rica. It has a little description of wach venue plus their individual website. It also has a form i which you can make a reservation and it'll send you an email with the data you just inserted." 
          image={ReservApp} 
          githubLink="https://github.com/diegoalonsonm/ReservAPP-server"
          appLink="https://reserv-app.vercel.app/" 
          techStack={['Next JS', 'Bootstrap', 'Node JS', 'Mongo DB', 'Express', 'Vercel', 'Render']}
        />                
      </div>
    </section>
  )
}

export default Projects