import React from 'react'
import "./featuerd.css"

const Featuerd = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/540x270/684764.webp?k=6c3c9e920a39ca4f9eddcdfaa916999ea5d2765844610dd59349f4271f7596b3&o=" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>New Delhi</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/540x270/684655.webp?k=2afb45c7a46dedbc5b5b360599dbbb7a7165ac823b22dd66d7602ea4c49de1c4&o=" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Jaipur</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/540x270/619923.webp?k=4fb13225390240a51ee5aa1d76318d03dc0de8a046ddc06e4598f17b287bdcc9&o=" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Dubai</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      {/* <div className="featuredItem">
        <img src="https://cf.bstatic.com/xdata/images/city/540x270/684499.webp?k=05c9fc4396edfc04f1e0f3d00ffbe182ebd969c9d83857a8e10a4e046fae21cd&o=" alt="" className="featuredImg" />
        <h1>Agra</h1>
        <h2>123 properties</h2>
      </div> */}

    </div>
  )
}

export default Featuerd
