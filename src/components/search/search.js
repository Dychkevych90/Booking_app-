import React, {useState} from 'react';

import { DateRange } from "react-date-range";
import { format } from "date-fns";

import MainButton from '../layout/buttons/mainButton';

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderSearch } from './styled.js';

const Search = () => {
  // eslint-disable-next-line no-unused-vars
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    //dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    //navigate("/hotels", { state: { destination, dates, options } });
  };

  return(
    <HeaderSearch>
      { /* search hotels */ }
      <div className="headerSearchItem">
        <FontAwesomeIcon icon={ faBed } className="headerIcon" />
        <input
          type="text"
          placeholder="Where are you going?"
          className="headerSearchInput"
          onChange={ (e) => setDestination(e.target.value) }
        />
      </div>

      { /* range dates */ }
      <div className="headerSearchItem">
        <FontAwesomeIcon icon={ faCalendarDays } className="headerIcon" />
        <span
          onClick={ () => setOpenDate(!openDate) }
          className="headerSearchText"
        >{ `${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
            dates[0].endDate,
            "MM/dd/yyyy"
          )}` }</span>
        { openDate && (
          <DateRange
            editableDateInputs={ true }
            onChange={ (item) => setDates([item.selection]) }
            moveRangeOnFirstSelection={ false }
            ranges={ dates }
            className="date"
            minDate={ new Date() }
          />
        ) }
      </div>

      { /* add person */ }
      <div className="headerSearchItem">
        <FontAwesomeIcon icon={ faPerson } className="headerIcon" />
        <span
          onClick={ () => setOpenOptions(!openOptions) }
          className="headerSearchText"
        >{ `${options.adult} adult · ${options.children} children · ${options.room} room` }</span>
        { openOptions && (
          <div className="options">
            <div className="optionItem">
              <span className="optionText">Adult</span>
              <div className="optionCounter">
                <button
                  disabled={ options.adult <= 1 }
                  className="optionCounterButton"
                  onClick={ () => handleOption("adult", "d") }
                >
                  -
                </button>
                <span className="optionCounterNumber">
                  { options.adult }
                </span>
                <button
                  className="optionCounterButton"
                  onClick={ () => handleOption("adult", "i") }
                >
                  +
                </button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Children</span>
              <div className="optionCounter">
                <button
                  disabled={ options.children <= 0 }
                  className="optionCounterButton"
                  onClick={ () => handleOption("children", "d") }
                >
                  -
                </button>
                <span className="optionCounterNumber">
                  { options.children }
                </span>
                <button
                  className="optionCounterButton"
                  onClick={ () => handleOption("children", "i") }
                >
                  +
                </button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Room</span>
              <div className="optionCounter">
                <button
                  disabled={ options.room <= 1 }
                  className="optionCounterButton"
                  onClick={ () => handleOption("room", "d") }
                >
                  -
                </button>
                <span className="optionCounterNumber">
                  { options.room }
                </span>
                <button
                  className="optionCounterButton"
                  onClick={ () => handleOption("room", "i") }
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ) }
      </div>

      <div className="headerSearchItem">
        <MainButton
          text={ 'Search' }
          onClick={ handleSearch }
          backgroundColor={ '#0071c2' }
        />
      </div>
    </HeaderSearch>
  );
};

export default Search;
