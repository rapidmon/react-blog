import { Link } from "react-router-dom";
import Article from "../../components/article";
import Aside from "../../components/aside";
import "./home.css";
import Banner from "../../components/banner";
import { useState, useEffect } from "react";

function Home({ user, login }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./react-blog/data.json", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (resData) => {
          setData(resData.posts);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <>Error: {error.message}</>;
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <>
        <Banner />
        <main>
          <div class="max-width">
            <h2 class="a11y-hidden">Post</h2>
            <ul class="posts">
              {data
                .slice(0)
                .reverse()
                .map((value) => {
                  let url = `/posts/${value.id}`;
                  return (
                    <li key={value.id}>
                      <Link class="post" to={url}>
                        <Article
                          Img={value.thumbnail}
                          Date={value.created}
                          Title={value.title}
                          Content={value.contents[0].text}
                          Category={value.category}
                        />
                      </Link>
                    </li>
                  );
                })}
            </ul>
            {login && (
              <Aside
                Category={user.category}
                Name={user.name}
                Info={user.userInfo}
                Profile={user.profileImg}
              />
            )}
          </div>
        </main>
      </>
    );
  }
}

export default Home;
