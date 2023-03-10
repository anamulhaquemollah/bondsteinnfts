import f1 from "../../assets/images/featured/f1.png"
import f11 from "../../assets/images/featured/f11.png"
import f12 from "../../assets/images/featured/f12.png"
import f13 from "../../assets/images/featured/f13.png"
import f2 from "../../assets/images/featured/f2.png"
import f21 from "../../assets/images/featured/f21.png"
import f3 from "../../assets/images/featured/f3.png"
import f31 from "../../assets/images/featured/f31.png"
import f32 from "../../assets/images/featured/f32.png"

import Collection from './Collection';

const Features = () => {
  return (
   <div className="default-padding py-14">
    <h2>COLLECTION FEATURED NFTS</h2>
    <div className="grid grid-cols-3 gap-5 mt-7">
        <Collection featureImage={f1} imageOne={f11} imageTwo={f12} imageThree = {f13}/>
        <Collection featureImage={f2} imageOne={f21} imageTwo={f12} imageThree = {f13}/>
        <Collection featureImage={f3} imageOne={f32} imageTwo={f13} imageThree = {f31}/>
    </div>
   </div>
  )
}

export default Features