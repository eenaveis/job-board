const parseDateTime = (dateString) => {
    const parsedDateTime = Date.parse(dateString);
    
    return parsedDateTime;
};

const getMinutes = (milliseconds) => {
    const minutes = milliseconds / 1000 / 60;

    return minutes.toFixed(0);
}

const getHours = (milliseconds) => {
    const hours = milliseconds / 1000 / 60 / 60;

    return hours.toFixed(0);
};

const getDays = (milliseconds) => {
    const days = milliseconds / 1000 / 60 / 60 / 24;

    return days.toFixed(0);
}

const timeElapsed = (dateString) => {
    const currentDate = Date.now();
    const previousDate = parseDateTime(dateString);
    const difference = currentDate - previousDate;

    const minutes = getMinutes(difference);
    const hours = getHours(difference);
    const days = getDays(difference);

    if(days < 1) {
        if(hours < 1) {
            return `about ${minutes} minutes ago`
        } else {
            return `about ${hours} hours ago`
        }
    } else {
        if(days > 1) {
            return `${days} days ago`;
        } else {
            return `${days} day ago`;
        }
    }
};

export {timeElapsed};