import '../../sass/main.scss';

import React from 'react'
import CardComponent from '../components/components/Card';

import RecipeBookImg from '../assets/img/recipeBook.jpeg'
import QuoteGeneratorImg from '../assets/img/quoteGenerator.jpeg'
import CitrusCommerceImg from '../assets/img/citrusCommerce.jpeg'

const Projects = () => {
  return (
    <section id="projects" className='bg-light text-center p-5'>
      <p className='bg-light fw-bold fs-2 text-secondary'>
        My projects
      </p>
      <div className='row my-5 shadow'>
        <CardComponent title="Recipe Book" description="Web application where you can manage recipes 
          and create a shopping list with the ingredients you’ll need. It has an auth module in order 
          to control the recipes and shopping lists." 
          image={RecipeBookImg}
          githubLink="https://github.com/diegoalonsonm/recipe-book" 
          appLink="https://recipe-book-swart.vercel.app" 
          techStack={['Angular', 'Bootstrap', 'Typescript', 'Firebase']}
        />        
      </div>
      <div className='row my-5 shadow'>
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
      <div className='row my-5 shadow'>
        <CardComponent title="Citrus Commerce" description="This is a full stack application developed
          with NextJS 13. This app lets you track the price of your favourite Amazon products.
          You could see the highest, lowest, average and current price of your items. You could also
          see similar products below the one you are tracking.
          Once the app gets a change on the item, a notification will be sent to your email." 
          image={CitrusCommerceImg} 
          githubLink="https://github.com/diegoalonsonm/citrus-commerce"
          appLink="https://citrus-commerce.vercel.app/" 
          techStack={['Next JS', 'Tailwind CSS', 'Typescript', 'Mongo DB', 'Bright Data', 'Vercel']}
        />        
      </div>
    </section>
  )
}

export default Projects