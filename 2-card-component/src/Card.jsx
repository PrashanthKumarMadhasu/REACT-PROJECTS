import luffy from './assets/luffy.jpg'

function Card(){
    return(
       <div className="card">
            <img className="card-image" src={luffy} alt="profile picture"></img>
            <h2 className="card-title">Moneky-D-Luffy </h2>
            <p className="card-text">Monkey D. Luffy is the captain of the Straw Hat Pirates.</p>
       </div> 
    );
}
export default Card