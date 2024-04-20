import React from 'react'
import "./searchItem.css"

function SearchItem() {
  return (
    <div className='searchItem'>
      <img src="https://cf.bstatic.com/xdata/images/hotel/square200/380240550.webp?k=c97ff06bc9eae837e7dc609dc0612bcc02a42071940f8efa9ea2375ed1507341&o=&s=1" alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">Studio Apartment with Air conditioning</span>
        <span className="siFeatures">Entire studio . 1 barthroom . 21m 1 full bed</span>
        <span className="siCancelOp">Free cancelation</span>
        <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailsTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">$Include taxes and fees</span>
          <button className='siCheckButton'>See availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
