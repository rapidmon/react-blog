import "./postbanner.css";

function PostBanner({ Img, Month, Day, Week }) {
  console.log(Img);
  return (
    <div class="banner" style={{ backgroundImage: `url(${Img})` }}>
      <div class="max-width">
        <div class="banner-contents">
          <p class="today">
            {Month} <em>{Day}</em> {Week}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostBanner;
