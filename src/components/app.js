import React, {useState} from "react";
import {Header, SearchForm, JobListing} from "./main-components.js";
import axios from "axios";


export const App = (props) => {
    const [listings, setListings] = useState([]);
    const [location, setLocation] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [fullTime, setFullTime] = useState(false);
    
    const handleOnSubmit = (event) => {
      event.preventDefault();

      // API and proxy url
      const url = `https://jobs.github.com/positions.json?description=${jobDescription}&location=${location}&full_time=${fullTime}`;
      const proxy = "https://cors-anywhere.herokuapp.com/"
      
      axios
        .get(proxy + url)
        .then(response => {
          setListings(response.data)
        });
    };

    // Event listeners
    const onChangeLocation = (event) => {
      setLocation(event.target.value);
    };
  
    const onChangeJobDescription = (event) => {
      setJobDescription(event.target.value);
    };

    const onChangeFullTime = (event) => {
      setFullTime(event.target.checked);
    };
  
    return (
      <div>
        <Header />
        <SearchForm 
          onSubmit={handleOnSubmit}
          onChangeLocation={onChangeLocation}
          onChangeJobDescription={onChangeJobDescription}
          onChangeFullTime={onChangeFullTime}
        />
        <div id="listings">
          <ul>
            {listings.map((listing, i) => {
              return <li key={i}>
                <JobListing 
                  jobTitle={listing.title}
                  company={listing.company}
                />
              </li>
            })}
          </ul>
        </div>
      </div>
    );
};