import '../../sass/main.scss';

const ButtonComponent = ({className, color, textColor, text}) => {
  return (
    <button className={`btn btn-${color} ${className} text-${textColor}`}>
        {text}
    </button>
  )
}

export default ButtonComponent