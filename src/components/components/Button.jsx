import '../../../sass/main.scss';

const ButtonComponent = ({ className, color, textColor, text, href, cv }) => {

  if(cv) {
    return (
      <a className={`btn btn-${color} shadow-lg ${className} text-${textColor}`} href={href} 
        target='_blank'
      >
          {text}
      </a>
    )  
  } else {
    return (
      <a className={`btn btn-${color} shadow-lg ${className} text-${textColor}`} href={`#${href}`}>
          {text}
      </a>
    )
  }  
}

export default ButtonComponent