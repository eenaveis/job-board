import React, {useState} from "react";
import {Header, SearchForm, JobListing, Pagination} from "./main-components.js";
import {apiCall} from "../services/api-call.js";
import {timeElapsed} from "../services/date-time-functions.js";

export const App = (props) => {
    // Hooks
    const [listings, setListings] = useState([]);
    const [location, setLocation] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [fullTime, setFullTime] = useState(false);
    const [page, setPage] = useState(1);
    const [hidePagination, setHidePagination] = useState(true);

    // Event handlers
    const handleApiCall = (data) => {
      if(data.length === 0) {
        setHidePagination(true);
      } else if(data.length < 50) {
        setHidePagination(true);
        setListings(data);
      } else {
        setHidePagination(false);
        setListings(data);
      }
    };
    
    const onSubmit = (event) => {
      event.preventDefault();
  
      const newPage = 1;
  
      apiCall(jobDescription, location, fullTime, newPage)
        .then(data => {
          handleApiCall(data);
        });
    };
  
    const onChangeLocation = (event) => {
      setLocation(event.target.value);
    };
  
    const onChangeJobDescription = (event) => {
      setJobDescription(event.target.value);
    };
  
    const onChangeFullTime = (event) => {
      setFullTime(event.target.checked);
    };
  
    const onClickPagination = (event) => {
      const newPage = page + 1;
  
      apiCall(jobDescription, location, fullTime, newPage)
        .then(data => {
          handleApiCall(data);
        });
  
      setPage(page + 1);
    };

    const onClickTitle = (id) => {
      document.getElementById(id).style.display = "block";
    };

    const onClickClose = (id) => {
      document.getElementById(id).style.display = "none";
    }
  
    // Return JSX
    return (
      <div>
        <Header />
        <SearchForm 
          onSubmit={onSubmit}
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
                  location={listing.location}
                  timeElapsed={timeElapsed(listing.created_at)}
                  description={listing.description}
                  apply={listing.how_to_apply}
                  id={i}
                  onClickTitle={onClickTitle}
                  onClickClose={onClickClose}
                />
              </li>
            }
            )}
          </ul>
          <Pagination onClick={onClickPagination} hide={hidePagination} />
        </div>
      </div>
    );
};