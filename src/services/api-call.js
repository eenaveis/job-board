import axios from "axios";

const apiCall = (jobDescription, location, fullTime, page) => {
    // API and proxy url
    const url = `https://jobs.github.com/positions.json?
      description=${jobDescription}
      &location=${location}
      &full_time=${fullTime}
      &page=${page}`;
    const proxy = "https://cors-anywhere.herokuapp.com/"
    // Make the API call      
    const data = axios
      .get(url)
      .then(response => {
        return response.data;
      });
    return data;
  };

  export {apiCall};