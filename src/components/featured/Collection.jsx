import user from "../../assets/images/featured/user.png"

const Collection = ({ featureImage, imageOne, imageTwo, imageThree }) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2">
        <div>
          <img src={featureImage} alt="" />
        </div>

        <div className="flex flex-col gap-2">
          <img src={imageOne} alt="" />
          <img src={imageTwo} alt="" />
          <img src={imageThree} alt="" />
        </div>
      </div>

      <div className="mt-4">
        <h4>Amazing Collection</h4>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-3">
            <img src={user} alt="" />
            <span>by Arkhan</span>
          </div>
          <button className="border border-solid border-black rounded-full px-3 py-1">Total 54 items</button>
        </div>
      </div>
    </div>
  );
};

export default Collection;
