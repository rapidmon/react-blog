import Post from "../../components/post";
import PostBanner from "../../components/postbanner";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Posts() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  let params = useParams();

  useEffect(() => {
    fetch("/data.json", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (resData) => {
          setIsLoaded(true);
          setData(resData.posts[parseInt(params.postId) - 1]);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [params]);
  if (error) {
    return <>Error: {error.message}</>;
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    let create_date = new Date(data.created);
    return (
      <>
        <PostBanner
          Img={data.mainBg}
          Month={create_date.toLocaleString("en-US", { month: "long" })}
          Day={create_date.getDate()}
          Week={create_date.toLocaleString("en-US", { weekday: "long" })}
        />
        <Post
          Day={data.created}
          Category={data.category}
          Title={data.title}
          Text1={data.contents[0].text}
          Text2={data.contents[2].text}
          Img={data.thumbnail}
        />
      </>
    );
  }
}

export default Posts;
