import './post.css'
import profile from '../assets/profile.jpg'
import { useState } from 'react';
import { Link } from 'react-router-dom'

function Post({Day, Category, Title, Text1, Text2, Img}){
    const [like, setLike] = useState(false);

    function handleLike(){
        setLike(!like)
    }

    return(
        <>
            <div class="view">
                <div class="max-width">
                    <section class="wrap-box">
                        <div class="inner">
                            <dl class="author-wrap">
                                <dt class="a11y-hidden">Author</dt>
                                <dd class="author"><img src={profile} alt="" /> Chilli</dd>
                                <dt class="a11y-hidden">Created</dt>
                                <dd class="created">{Day}</dd>
                            </dl>
                            <dl class="category">
                                <dt class="a11y-hidden">Category</dt>
                                {Category.map((index, key)=>(
                                    <dd key={key}>{index}</dd>
                                ))}
                            </dl>
                            <div class="title-wrap">
                                <h2>{Title}</h2>
                                <button onClick={handleLike} class={like ? "btn-like active" : "btn-like"}>Like</button>
                            </div>
                            <hr />
                            <div class="view-contents">
                                <p>
                                    {Text1}
                                </p>
                                <img src={Img} alt="" />
                                <p>
                                    {Text2}
                                </p>
                            </div>
                            <div class="btn-group">
                                <button class="btn-modify">
                                    <span class="a11y-hidden">modify</span>
                                </button>
                                <button type="button" class="btn-delete">
                                    <span class="a11y-hidden">delete</span>
                                </button>
                            </div>
                            <Link to="/" class="btn-back">
                                <span class="a11y-hidden">Back</span>
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Post;