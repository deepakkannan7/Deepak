import "./Review.css";
// import rectangle37 from "./assets/rectangle37.svg";
// import rectangle38 from "./assets/rectangle38.svg";
// import rectangle36 from "./assets/rectangle36.svg";
// import rectangle34 from "./assets/rectangle34.svg";
// import star29 from "./assets/star29.svg";
// import star27 from "./assets/star27.svg";
// import star25 from "./assets/star25.svg";
// import image103 from "./assets/image103.png";
// import star26 from "./assets/star26.svg";
const Review = () => {
  return (
    <div className="mac-book-air-32">
      <div className="image-107">
        <img className="image111" />
        <span className="public-review">PUBLIC REVIEW</span>
        <div className="flex-container">
          {/* <span>COMMENTS</span> */}
          <span className="num-40">4.0</span>
          <img className="star-25" />
          <img className="star-27" />
          <img className="star-29"  />
          <img className="star-26" />
        </div>
        <div className="flex-container-1">
          <div className="rectangle-33">
            <span className="leave-your-comment-h">
              {/* Leave your comment here... */}
              <h2>COMMENTS</h2>
              <form>
                {/* <input type="text">
                </input> */}
                <textarea rows="40" cols="40" placeholder="Leave your Comments"></textarea>           </form>
            </span>
            <button className="rectangle-22">
              <span className="submit">SUBMIT</span>
            </button>
          </div>

          <div className="flex-container-2">
            <div className="rectangle-35">
              <span className="here-people-can-delv">
                Here people can delve deep into delicious meals, and order fully
                cooked grilled chicken
              </span>
            </div>
            <div className="flex-container-3">
              <div className="rectangle-37"  >
              <span className="cat-absolute-container">
              Good relaxing break! Friendly, welcoming staff. Very good location for city centre and local transport. Overall an enjoyable stay.</span>
              </div>
            </div>
            <div className="flex-container-4">
              <div className="rectangle-36" >
              <span className="cat-absolute-container-1">
              Lovely hotel in an excellent location. Rooms are spotless & cleaned daily, breakfast is plentiful</span>
              </div>
            </div>
          </div>
          <div className="flex-container-5">
            <div className="flex-container-6">
              <div className="rectangle-34" >
              <div className="cat-absolute-container-2">
                <span className="dishes-were-deliciou">
                  Dishes were delicious and I liked all the dishes i ordered.
                  Chicken tikka, grill chicken
                </span>
              </div>
            </div>
            </div>

            <div className="flex-container-7">
              <div className="rectangle-38" >
              <div className="cat-absolute-container-3">
                <span className="dishes-were-deliciou-1">
                  Family hotel.Very Good inner environment.Tastes good.Don't miss it.If you miss,you will feel.
                </span>
              </div>
            </div>
            </div>
            <div className="hi">
            <div className="rectangle-33-1">
              <span className="good-place-to-relax">
                Good place to relax and food tastes good
              </span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Review;
