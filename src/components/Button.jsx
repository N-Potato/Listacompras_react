import './Button.css' 

export default function Button(props){
    return(
      <div className="divButton">
          <button onClick={props.onClick} className={props.className}>
                {props.children}
          </button>
      </div>  
    )
}