import { Link } from 'react-router-dom'
import Article from '../../components/article'
import Aside from '../../components/aside'
import './home.css'
import Banner from '../../components/banner'
import { useState, useEffect } from 'react'

function Home(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [userData, setUserData] = useState([]);
      
    useEffect(()=>{
        fetch('/data.json').then(
          res => res.json() 
        ).then(
          resData => {
            setIsLoaded(true);
            setData(resData.posts);
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
      return(
        <>
          <Banner />
          <main>
            <div class="max-width">
              <h2 class="a11y-hidden">Post</h2>
              <ul class="posts">
                {data.slice(0).reverse().map((value, key) => {
                  let url = `/${value.id}`
                  return(
                    <li id={key}><Link class="post" to={url}><Article
                      Img={value.thumbnail}
                      Date={value.created}
                      Title={value.title}
                      Content={value.contents[0].text}
                      Category={value.category}
                    /></Link></li>
                  )
                })}
              </ul>
              <Aside
               Category={userData[1].category} 
               Name={userData[1].name} 
               Info={userData[1].userInfo}
               Profile={userData[1].profileImg}
              />
            </div>
          </main>
        </>
      )
    }
}

export default Home