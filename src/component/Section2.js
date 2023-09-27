import pic2 from "./images/pic2.jpg";
export default function Section2() {
    return (
        <>
        <div className="section2">
            <img className="sec2_1" src={pic2}/>
            <div className="sec2_2">  
                <p><span className="meetf">Meet Our Founder</span><br/>Lorem ipsum dolor sit amet, eder iut consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                Lorem ipsum dolor sit amet, consectetur adipis <span className="sec2link">Read More</span></p>
                <p className="seclink">CLICK HERE to meet The Kindness Compaign TEAM!</p>
            </div>
        </div>
        </>        
    )
}