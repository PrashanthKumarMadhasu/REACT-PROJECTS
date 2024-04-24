function ProfilePicture(){

    const imageUrl = './src/assets/hinata.jpg';

    const handleClick = (e) => e.target.style.display = "none";

    return(<img className="pic" onClick={(e) => handleClick(e)} src={imageUrl}></img>);
}
export default ProfilePicture