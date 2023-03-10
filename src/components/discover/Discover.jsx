import f1 from "../../assets/images/featured/f2.png"
import NFT from "./NFT";

const Discover = () => {
  const lists = [
    "All categories",
    "Art",
    "Celebrities",
    "Gaming",
    "Sport",
    "Music",
    "Cryptic",
  ];

  const nftList = [1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1]; 
  return (
    <div className="default-padding bg-slate-100 py-20 flex flex-col">
      <h1>DISCOVER MORE NFTS</h1>
      <div className="flex justify-between items-center">
        <div className="flex gap-5 my-5">
          {lists.map((list, index) => {
            return (
              <p className="px-3 py-1 border bg-gray-50 rounded-full" key={index}>{list}</p>
            );
          })}
        </div>

        <div>
        <p className="px-3 py-1 border bg-gray-50 rounded-full"> All Filters</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {
          //should pass any other id as key instead of index
            nftList.map((nft, index) => {
                return <NFT key={index} image={f1}/>
            })
        }
      </div>
      <button className="self-center px-10 py-3 rounded-3xl border-2 border-[#3D00B7] mt-8">More NFTs</button>
    </div>

  );
};

export default Discover;
