import './aside.css'
import facebook from '../assets/Facebook.svg'
import twitter from '../assets/Twitter.svg'
import instagram from '../assets/Instagram.svg'
import github from '../assets/Github.svg'

function Aside({Category, Name, Info, Profile}){
    return(
        <aside class="about">
			<h2>About Me</h2>
			<img src={Profile} alt="" class="user-profile" />
			<p class="user-name">{Name}</p>
			<p class="user-description">{Info}</p>
			<h3>Categories</h3>
			<ul class="categories">
				{Category.map((index, key)=>(
					<li key={key}><a href='#'>{index}</a></li>
				))}
			</ul>
			<h3>Follow</h3>
			<ul class="sns">
				<li>
					<a href="#">
						<img src={facebook} alt="Facebook" />
					</a>
				</li>
				<li>
					<a href="#">
						<img src={twitter} alt="Twitter" />
					</a>
				</li>
				<li>
					<a href="#">
						<img src={instagram} alt="Instagram" />
					</a>
				</li>
				<li>
					<a href="#">
						<img src={github} alt="GitHub" />
					</a>
				</li>
			</ul>
		</aside>
    )
}

export default Aside