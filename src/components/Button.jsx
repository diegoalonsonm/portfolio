import '../../sass/main.scss';

const ButtonComponent = ({ className, color, textColor, text, href }) => {

  if(!href) {
    return (
      <button className={`btn btn-${color} shadow-lg ${className} text-${textColor}`}>
          {text}
      </button>
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