import React, {useState} from "react";
import {Header, SearchForm, JobListing} from "./main-components.js";
import axios from "axios";


export const App = (props) => {
    const [listings, setListings] = useState([]);
    const [location, setLocation] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    
    const handleOnSubmit = (event) => {
      event.preventDefault();
    
      axios
        .get(`https://jobs.github.com/positions.json?description=${jobDescription}&location=${location}`)
        .then(response => {
          setListings(response.data)
        });
    };
  
    const onChangeLocation = (event) => {
      setLocation(event.target.value);
    };
  
    const onChangeJobDescription = (event) => {
      setJobDescription(event.target.value);
    };
  
    return (
      <div>
        <Header />
        <SearchForm 
          onSubmit={handleOnSubmit}
          locationOnChange={onChangeLocation}
          jobDescriptionOnChange={onChangeJobDescription}
        />
        <h1>Jobs</h1>
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