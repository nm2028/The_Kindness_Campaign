import logo from './images/logo.png'
import hbImg from './images/headerbtmdesign.png'

export default function Header({headerObj}) {
    let preadd='http://nextupgrad.us/laravel-old/diligent-api/';
    return (
        <>
        <div className="header">
            <nav>
                <img src={logo}  alt="logo"/>
                <div className="navlinks">
                    <a href="/">Home</a>
                    <a href="/">The Campaign</a>
                    <a href="/">Events</a>
                    <a href="/">Support</a>
                    <a href="/">Contact</a>
                    <input type='text' placeholder='Search...' className='insearch' />
                </div>
            </nav>
            <div className="hContent1">
               {headerObj.header_text}
            </div>
            <div className="hImgsAndVideo">             
              <img alt="img" src={preadd+headerObj.image}/>
              <video autoPlay controls muted src={preadd+headerObj.image2}/>
              <img alt="img" src={preadd+headerObj.image3}/>    
            </div>
            <div className="hContent2">
                {headerObj.mission_text}
            </div>
        </div>
        <img className="headerBottomImg" src={hbImg} alt="bgimg"/>
        <div className='pgtext'>{headerObj.page_text}</div>
        <a href='/' style={{textDecoration:'none'}}><div className='btnsupport'>Support</div></a>
        <br/><br/>
        </>
    )
}