import "./postbanner.css";

function PostBanner({ Img, Month, Day, Week }) {
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
