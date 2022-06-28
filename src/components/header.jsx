import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import logo from '../assets/Logo.svg'
import profile from '../assets/profile.jpg'
import login_icon from '../assets/icon-login.svg'
import register_icon from '../assets/icon-register.svg'
import logout_icon from '../assets/icon-logout.svg'
import write_icon from '../assets/icon-modify-white.svg'

//1024 768 540

const Head = styled.div`
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 30px 12px 40px;
    margin: 0 auto;
`

const Logo = styled.img`

`

const Profile = styled.img`
  border-radius: 100%;
  width: 42px;
  height: auto;
  margin-right: 15px;
`

const HeaderBtn = styled.button`
  width: 110px;
  font-size: 15px;
  font-weight: 700;
  border: none;
  padding: 12px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.id === 'write' ? 'white' : 'black'};
  background-color: ${props => props.id === 'write' ? '#37AAEC' : 'white'};
  @media screen and (min-width: 768px){
    border-radius: 10px;
  }
  @media screen and (min-width: 540px) and (max-width: 768px){
    border-radius: 10px;
  }
  @media screen and (max-width: 540px){
    width: 100%;
    border-radius: 100%;
  }
`

const ImginBtn = styled.img`
  width: 20px;
  height: auto;
  margin-right: 10px;
  @media screen and (max-width: 540px){
    margin-right: 0;
  }
`

const BtnList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`

function Header(){
    //btn 안의 textcontent handle
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    const handleResize = () =>{
      setWindowSize(window.innerWidth);
    }

    useEffect(()=>{
      window.addEventListener('resize', handleResize);
      return()=>{
        window.removeEventListener('resize', handleResize);
      }
    }, [])

    //login, logout handle
    const [login, setLogin] = useState(true);
    const logout_btn = useRef();
    const login_btn = useRef();
    const profile_img = useRef();

    const handleLogout = () =>{
      if(logout_btn.current.style.backgroundColor === "white"){
        setLogin(!login);
      }
    }

    const handleLogin = () =>{
      if(login_btn.current.style.color === "black"){
        setLogin(!login);
      }
    }

    useEffect(()=>{
      logout_btn.current.childNodes[0].src = !login ? `${logout_icon}` : `${register_icon}`
      logout_btn.current.style.backgroundColor = !login ? "white" : "#ebebeb"

      login_btn.current.style.backgroundColor = !login ? "#37AAEC" : "#ebebeb"
      login_btn.current.style.color = !login ? "white" : "black"
      login_btn.current.childNodes[0].src = !login ? `${write_icon}` : `${login_icon}`

      profile_img.current.style.display = !login ? "inline" : "none"
    }, [login])

    return(
      <>
        <Head>
            <Link to='/'><Logo src={logo} alt="logo"/></Link>
            <BtnList>
              <li><Profile ref={profile_img} src={profile} alt="logo"/></li>
              <li style={{marginRight: '10px'}}><HeaderBtn onClick={handleLogin} id="write" ref={login_btn}><ImginBtn src={write_icon} alt="write"/>
                {
                  windowSize <= 540 ? '' : login ? 'Login' : 'Write'
                }
              </HeaderBtn></li>
              <li><HeaderBtn onClick={handleLogout} ref={logout_btn} id="logout" type="button"><ImginBtn src={logout_icon} alt="write"/>
                {
                  windowSize <= 540 ? '' : login ? 'Register' : 'Logout'
                }
              </HeaderBtn></li>
            </BtnList>
        </Head>
      </>
    )
}

export default Header