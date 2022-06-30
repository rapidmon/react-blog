import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import logo from '../assets/Logo.svg'
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
    margin-top: ${props => props.id === 'modal_logo' ? "20px" : "0"};
`

const Profile = styled.img`
  display: ${props => !props.state ? 'none' : 'inline'};
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
  color: ${props => props.id === 'write' ? (props.login_state ? 'white' : 'black') : 'black'};
  background-color: ${props => props.id === 'write' ? (props.login_state ? '#37AAEC' : '#ebebeb') : (props.login_state ? 'white' : "#ebebeb")};
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

const ModalBackground = styled.div`
  display: ${props => !props.modal_state ? 'none' : 'block'};
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #474747;
  opacity: 0.8;
  z-index: 200;
`

const Modal = styled.section`
  display: ${props => !props.modal_state ? 'none' : 'block'};
  position: fixed;
  width: 400px;
  border-radius: var(--border-radius);
  background-color: white;
  z-index: 300;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 10px 10px 30px 30px;
`

const Alert = styled.p`
  margin: 5px 0 0 5px;
  font-size: 5px;
  color: var(--red-color);
  display: ${props => props.state ? 'block' : 'none'};
`

const CloseBtn = styled.button`
  background-color: white;
  font-weight: 800;
  border: none;
  text-align: center;
  border-radius: var(--border-radius);
  float: right;
`

const ModalTitle = styled.h2`
  margin-top: 20px;
  font-weight: 800;
`

const Input = styled.input`
  margin: 20px 80px 0 0;
  border-radius: var(--border-radius);
  border: 0.5px solid #ebebeb;
  padding: 5px 10px;
  &::placeholder{
    font-size: 12px;
    color: #acacac;
    transform: translateY(-2px);
  }
`

const ModalLoginBtn = styled.button`
  border: none;
  background-color: #ebebeb;
  padding: 5px 10px;
  border-radius: var(--border-radius);
  font-weight: 800;
`

function Header({user, handleUser, login, handleLogin}){
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

    //login, logout, modal handle
    const [modalOn, setModalOn] = useState(false);
    const [check, setCheck] = useState(false);
    const inputText = useRef();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [userData, setUserData] = useState([]);
      
    useEffect(()=>{
        fetch('/data.json').then(
          res => res.json() 
        ).then(
          resData => {
            setIsLoaded(true);
            setUserData(resData.users);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
    
    if(error){
      return(
        <>
          Error: {error.message}
        </>
      )
    } else if(!isLoaded){
      return(
        <>
          loading...
        </>
      )
    } else {
    const handleLogout = () =>{
      if(login){
        handleLogin(!login);
      }
    }

    const handleModalOn = () =>{
      if(!login){
        setModalOn(!modalOn)
      }
    }
    
    const handleModalOff = () =>{
      setModalOn(!modalOn)
    }

    let approve = false;

    const handleLoginBtn = () =>{
      for(let i=0; i<userData.length; i++){
        if(userData[i].email === inputText.current.value){
          handleUser(userData[i])
          approve = true;
          break;
        }
      }

      if(!login && approve === true){
        setModalOn(!modalOn)
        handleLogin(!login);
        inputText.current.value = "";
        if(check === true){
          setCheck(!check)
        }
      } else if(!login && approve === false && !check){
        setCheck(!check);
      }
    }

    return(
      <>
        <Head>
            <Link to='/'><Logo src={logo} alt="logo"/></Link>
            <BtnList>
              <li><Profile state={login} src={user.profileImg} alt="logo"/></li>
              <li style={{marginRight: '10px'}}>
                <HeaderBtn
                  onClick={handleModalOn} 
                  id="write" 
                  login_state={login}
                  type="button"
                  ><ImginBtn src={!login ? login_icon : write_icon} alt="write"/>
                    {
                      windowSize <= 540 ? '' : !login ? 'Login' : 'Write'
                    }
                </HeaderBtn>
              </li>
              <li>
                <HeaderBtn
                  onClick={handleLogout} 
                  login_state={login} 
                  id="logout" 
                  type="button"
                ><ImginBtn src={!login ? register_icon : logout_icon} alt="write"/>
                  {
                    windowSize <= 540 ? '' : !login ? 'Register' : 'Logout'
                  }
                </HeaderBtn>
              </li>
            </BtnList>
        </Head>
        <ModalBackground modal_state={modalOn}></ModalBackground>
        <Modal modal_state={modalOn}>
          <CloseBtn onClick={handleModalOff}>X</CloseBtn>
          <Logo id='modal_logo' src={logo} alt="logo"/>
          <ModalTitle>Enter your E-mail</ModalTitle>
          <Input ref={inputText} type="text" placeholder='E-mail Address' /><ModalLoginBtn type='button' onClick={handleLoginBtn}>Login</ModalLoginBtn>
          <Alert state={check}>Please check your E-mail</Alert>
        </Modal>
      </>
    )}
}

export default Header