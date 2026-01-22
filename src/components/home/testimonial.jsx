import right from '../../Assets/images/down-arrow (1) copy 9.png';
import left from '../../Assets/images/down-arrow (1) copy 10.png';
import slant from '../../Assets/images/Rectangle Copy 9.png';
import derek from '../../Assets/images/Oval (1).png';
import dunn from '../../Assets/images/Oval Copy 6.png';

const Testimonial = () => {
  return (
    <section id='about-us'>
        <div className='flex' id='testimonial'>

        
        <div>
            <p>TESTIMONIALS</p>
        <h2>What <br /> customers <br /> <span>say about us.</span> </h2>
        <img className='quote' src={right} alt=""  width={""} style={{color:"#4A4A4A"}}/>
        <img className='quote' id='slant' src={slant} alt="" style={{color:'#D8D8D8'}} />
        <img className='quote' src={left} alt="" style={{color:"#9B9B9B"}} />
        </div>
    
    <div className=" testimonial">
        <article>
            <h3>Best User Experience</h3>
            <p>Because the rock was laid down in layers, <br/> there is a variation in the hardness of the rock , <br/> formed. When water runoff trickles across the <br/> rock, some areas erode rapidly whereas <br/> others hold firm. This variation in erosion <br/> speed causes the formation of pinnacles, <br/> or “hoodoos” of stable rock.</p>
            <span className='flex'>
                <img src={derek} alt="star icon" />
                <p>Derek Dunn</p>
            </span>
        </article>
        <article id='staff'>
            <h3>Friendly staff</h3>
            <p>Whether its a driving tour, a cruise or a bus, <br /> leaf viewing is a great way to spend a fall <br /> vacation. It’s also big tour business and there <br /> are many options. </p>
            <span className='flex'>
                <img src={dunn} alt="star icon" />
                <p>Derek Dunn</p>
            </span>
        </article>
    </div>
    </div>
  </section>
  )
}
export default Testimonial;