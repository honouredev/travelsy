import oval from '../Assets/images/Oval.png';
import shape from '../Assets/images/Shape.png';
import search from '../Assets/images/Shape Copy.png';
import arrow from '../Assets/images/down-arrow (1).png';
import color from '../Assets/images/Oval (2).png';
const Header = () => {
  return (
    <header className="flex">    
      <h1>Travelsy</h1>
      <nav className="">
        <ul className="flex">
          <li><a href="#">Camping Locations</a></li>
          <li><a href="#">Activities</a></li>
          <li><a href="#">Equipments</a></li>
          <li><a href="#">Blogs</a></li>
        </ul>
      </nav>
      <div className='top-icon'>
        <button className="btn"> 
            <img src={shape} alt="" width={"13px"} height={"14px"}/>
          <span>Reservations</span>
        </button>
        <img src={search} alt="search icon" width={"19px"} height={"19px"} className="search"/>
       <img src={oval} alt="profile" width={"40px"} height={"40px"}  />
        <img  src={color} alt="" width={"10px"} height={"10px"} className='top'/>
        <img src={arrow} alt="menu" width={"11px"} height={"6px"}  className='top'/>
      </div>
    </header>
  );
};  
export default Header;