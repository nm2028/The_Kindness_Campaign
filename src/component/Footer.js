import logo from './images/logo.png';
import yt from './images/youtube.png';
import fb from './images/facebook.png';
import insta from './images/instagram.png';
import twi from './images/twitter.png';

export default function Footer() {
    return (
        <>
        <div className="footer">
            <div className='logoInfoAddress'>
                <img src={logo} alt="logo"/>
                <div className='infoAddress'>
                    <div className='info'>
                        Lorem ipsum dolor sit amet, eder iut consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        <div className='sc'>
                            <a href='/'>SUPPORT US</a>
                            <a href='/'>CONTACT US</a>
                        </div>
                    </div>
                    <div className='address'>
                        <span>Kindness Campaign</span>
                        <span>703 E 75th St Chicago, IL</span>
                        <span>60619</span>
                        <span>7732222222</span>
                        <span className='eml'>info@kindnesseveryday.org</span>
                    </div>
                </div>
            </div>
            <div className='singLineSocial'>
                <div className='sign'>
                    <div>Get exclusive updates on our work
                        and how you can help.</div>
                    <div className='singup'>SIGN UP TODAY</div>
                </div>
                <div className='line'></div>
                <div className='social'>
                    <div>Think people should hear about this?
                        Share it.</div>
                    <div className='icons'>
                      <a href="#"><img src={yt} alt="youtube"/></a>
                      <a href="#"><img src={fb} alt="facebook"/></a>
                      <a href="#"><img src={insta} alt="instagram"/></a>
                      <a href="#"><img src={twi} alt="twitter"/></a>
                     </div>
                </div>
            </div>
        </div>
        <div className='lastfooter'>© 2023 by The Kindness Campaign.&nbsp;&nbsp;&nbsp;The Kindness Campaign is a 501©3 organization.</div>
    </>
    )
}