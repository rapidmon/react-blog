import './banner.css'
import { useState, useEffect } from 'react'

function Banner(){
    const [data, setData] = useState([]);
    
    useEffect(()=>{
      const fetchData = () => {
        fetch('/data.json').then(
          res => res.json() 
        ).then(
          resData => setData(resData.blog)
        )}
      fetchData();
    }, [])

    return(
        <div class="banner">
            <div class="max-width">
                <div class="banner-contents">
                    <p class="sub-text">{data.subTitle}</p>
                    <p class="main-text">{data.mainTitle}</p>
                    <p class="description">
                        {data.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Banner;