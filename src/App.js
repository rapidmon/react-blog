import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home/home';
import Header from './components/header';
import Footer from './components/footer';
import Posts from './pages/Post/posts';
require('./global.css');

function App() {
  const [user, setUser] = useState({});
  const [login, setLogin] = useState(false);
  
  function handleUser(user){
	setUser(user)
  }

  function handleLogin(login){
	setLogin(login)
  }

  return (
    <BrowserRouter>
		<Header user={user} handleUser={handleUser} login={login} handleLogin={handleLogin}/>
		<Routes>
			<Route path="/" element={<Home user={user} login={login}/>}/>
			<Route path="/posts/:postId" element={<Posts />}/>
		</Routes>
		<Footer />
    </BrowserRouter>
  );
}

export default App;
