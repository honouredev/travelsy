import rafting from '../../Assets/images/Rectangle.png';
import walk from '../../Assets/images/Rectangle Copy.png';
import riding from '../../Assets/images/Rectangle Copy 4.png';
import jumping from '../../Assets/images/Rectangle Copy 3.png';
import wine from '../../Assets/images/Rectangle Copy 2.png';
import coffee from '../../Assets/images/Rectangle Copy 6.png';
import visit from '../../Assets/images/Rectangle Copy 5.png';
import camping from '../../Assets/images/Rectangle Copy 11.png';
import tour from '../../Assets/images/Group 4.png';
import mark from '../../Assets/images/Path Copy 2.png';

const Interest = () => {
    return (
        <main>
        <section className="interest">
            <p>What are your interests?</p>
            <div className='nature'>
                <div id='raft' >
                    <img id='raft' src={rafting} alt="rafting" width={"733px"} height={"250px"} />
                    <p>Rafting</p>
                </div> 
                <div className='hero'>
                <img id='walk' src={walk} alt="down arrow" width={"356px"} height={"250px"} />
                {/* {/* <span><img src={mark} alt='' width={"50px"} /> */}
                 <p>Nature Walk</p>
                {/* //  </span> */} 
                </div>
                <div className='hero'>
                <img src={riding} alt="down arrow" width={"356px"} height={"250px"} />
                <p>Bike Riding</p>
                </div>
               <div className='hero'> 
                <img src={jumping} alt="down arrow" width={"356px"} height={"250px"} />
                 <p> Bungee Jumping</p>
                </div>
                <div className='hero'>
                    <img src={wine} alt="down arrow" width={"356px"} height={"250px"} />
                    <p>Wine Tasting</p>
                </div>
                <div className='hero'>
                    <img src={coffee} alt="down arrow" width={"356px"} height={"250px"} />
                    <p>Coffee Tasting</p>
                </div>
                <div className='hero visit'>
                    <img id='visit' src={visit} alt="down arrow" width={"733px"} height={"250px"} />
                    <p>Farm Visit</p>
                </div>
                <div className='hero camp'>
                    <img id='camp' src={camping} alt="down arrow" width={"733px"} height={"250px"} />
                   <p>Camping</p>
               </div> 
               <div className='hero'>
                <img src={tour} alt="down arrow" width={"356px"} height={"250px"} />
                {/* <p>Kibera Tour</p> */}
            </div>
            </div>
            <button className="btn set"> 
          <p>Set</p>
        </button>
        </section>
        </main>
    )
}
export default Interest;