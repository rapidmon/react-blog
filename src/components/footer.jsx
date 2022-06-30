import './footer.css'

function Footer(){
    const handleTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    
    return(
        <footer>
            <div class="max-width">
                <h2>©Weniv Corp.</h2>
                <button class="top-button" onClick={handleTop}>TOP</button>
            </div>
        </footer>
    )
}

export default Footer