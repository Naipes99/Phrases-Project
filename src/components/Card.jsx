import Phrase from "./phrase"
function Card ({phrase,onChange}){
    return(
        <div className="card">
        <Phrase phrase= {phrase}/>
        <button type="button" className="card-button" onClick={onChange}>
          Nueva frase
        </button>
      </div>
    )
}
export default Card