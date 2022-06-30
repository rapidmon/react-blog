import './article.css'
import profile from '../assets/profile.jpg'

function Article({Img, Date, Title, Content, Category}){
    return(
        <article>
            <img src={Img} alt="" />
            <div class="contents-wrap">
                <dl class="category">
                    <dt class="a11y-hidden">Category</dt>
                    {Category.map((index, key)=>(
                        <dd key={key}>{index}</dd>
                    ))}
                </dl>

                <h3>{Title}</h3>

                <dl class="author-wrap">
                    <dt class="a11y-hidden">Author</dt>
                    <dd class="author"><img src={profile} alt="" /> Chilli</dd>
                    <dt class="a11y-hidden">Created</dt>
                    <dd class="created">{Date}</dd>
                </dl>

                <p class="post-description">
                    {Content}
                </p>
            </div>
        </article>
    )
}

export default Article;