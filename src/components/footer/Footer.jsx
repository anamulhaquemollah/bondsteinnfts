import fb from "../../assets/images/footer/facebook.png";
import linkedin from "../../assets/images/footer/linkedin.png";
import twitter from "../../assets/images/footer/twitter.png";

const Footer = () => {
  const lists = [
    "All categories",
    "Art",
    "Celebrities",
    "Gaming",
    "Sport",
    "Music",
    "Cryptic",
  ];
  return (
    <div className="default-padding py-16 flex ">
      <div className="basis-1/3 flex flex-col gap-5 w-[70%]">
        <h2>NFTERS</h2>
        <p className="text-sm pr-6">
          The world’s first and largest digital marketplace for crypto
          collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
          exclusive digital items.
        </p>
        <div className="flex gap-2">
          <img src={fb} alt="" />
          <img src={linkedin} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>

      <div className="basis-1/5 flex flex-col gap-5">
        <h4>Market Price</h4>
        <div>
        {
            lists.map((list, index) =>{
                return <p className="text-sm" key={index}>{list}</p>
            })
        }
        </div>
      </div>
      <div className="basis-1/5 flex flex-col gap-5">
        <h4>My Account</h4>
        <p>Profile</p>
      </div>

      <div className="basis-1/3 flex flex-col gap-5">
        <h4>Stay In The Loop</h4>
        <div>
            <p className="text-sm mb-5">Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.</p>
            <div className="relative">
                <input type="text" 
                    placeholder="Enter your email address" 
                    className="border-2 border-black w-[100%] px-6 py-3 rounded-full text-sm"
                />
                <button className="absolute text-white bg-blue-900 right-0 top-0 px-6 py-3 bottom-0 rounded-full">Subscribe</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
