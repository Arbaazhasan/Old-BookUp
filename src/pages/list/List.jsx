import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import "./list.css"
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searchItem/SearchItem'


const List = () => {
  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptionsn] = useState(location.state.options)

  console.log(location)

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className='lsItem'>
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={item => setDate([item.selection])} minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <lable>Options</lable>
              <div className="lsOptions">
                <div className="liOptionsItem">
                  <span className="lsOptionText">Min price <small>per night</small></span>
                  <input type="number" className='lsOptionsInput' />
                </div>


                <div className="liOptionsItem">
                  <span className="lsOptionText">Max price <small>per night</small></span>
                  <input type="number" className='lsOptionsInput' />
                </div>

                <div className="liOptionsItem">
                  <span className="lsOptionText">Adult</span>
                  <input type="number" min={1} className='lsOptionsInput' placeholder={options.adult} />
                </div>

                <div className="liOptionsItem">
                  <span className="lsOptionText">Children</span>
                  <input type="number" min={0} className='lsOptionsInput' placeholder={options.children} />
                </div>

                <div className="liOptionsItem">
                  <span className="lsOptionText">Room</span>
                  <input type="number" min={1} className='lsOptionsInput' placeholder={options.room} />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
            
          </div>
        </div>
      </div>
    </div>

  )
}

export default List
