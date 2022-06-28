import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/home';
import Header from './components/header';
import One from './pages/One/one';
import Two from './pages/Two/two';
import Three from './pages/Three/three';
import Four from './pages/Four/four';
import Five from './pages/Five/five';
import Six from './pages/Six/six';
import './global.css';
import Footer from './components/footer';


function App() {
  return (
    <BrowserRouter>
		<Header />
		<Routes>
			<Route exact path="/" element={<Home />}/>
			<Route exact path="/1" element={<One />}/>
			<Route exact path="/2" element={<Two />}/>
			<Route exact path="/3" element={<Three />}/>
			<Route exact path="/4" element={<Four />}/>
			<Route exact path="/5" element={<Five />}/>
			<Route exact path="/6" element={<Six />}/>
		</Routes>
		<Footer />
    </BrowserRouter>
  );
}

export default App;
