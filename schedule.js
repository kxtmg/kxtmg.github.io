import scheduleInfo from './scheduleInfo.json' assert {type: 'json'};

const pstOffset = 0;
const estOffset = 3; 
const gmtOffset = 8;

$(document).ready(function() {
    for (var i = 0; i < scheduleInfo.length; i++) {
        createScheduleElement(scheduleInfo[i]); // Creates instance of schedule
    }
});

function createScheduleElement(info) {
    var element = $(`
    <div class="scheduleLayout" style="padding: 0px 40px 40px 40px; gap: 20px;">
        <div class="dateContainer">
            <img src="schedule assets/singleFlower.svg" style="height: 25px; position: absolute;">
            <h2 class="numericDate">${info.dateNumber}</h2>
        </div>
        <img class= "diamondDivider" src="schedule assets/diamondDivider.svg">
        <div class="scheduleLayout" style="flex-grow: 1;">
            <img class="borderLeft" src="schedule assets/borderLeft.svg">
            <div class="midBorder">
                <p class="weekday">${info.dateWeekday}</p>
                <img class="flowerLeft" src="schedule assets/flowerDivider.svg">
                <p class="gameContent">${info.gameTitle}</p>
                <img class="flowerRight" src="schedule assets/flowerDivider.svg" >
                <div class="timeSchedule">
                    <div class="postedTimes">
                        <div class="timezone">
                            pst
                        </div>
                        <div class="time">
                        ${convertTimeFormatted(info.time, pstOffset)}
                        </div>
                    </div>
                    <div class="postedTimes">
                        <div class="timezone">
                            est
                        </div>
                        <div class="time">
                            ${convertTimeFormatted(info.time, estOffset)}
                        </div>
                    </div>
                    <div class="postedTimes">
                        <div class="timezone">
                            gmt
                        </div>
                        <div class="time">
                            ${convertTimeFormatted(info.time, gmtOffset)}
                        </div>
                    </div>
                </div>
            </div>
            <img class="borderRight" src="schedule assets/borderRight.svg">
        </div>
    </div>
    `);

    $("#schedule").append(element);
}

function convertTimeFormatted(time, timeOffset) {
    // Extract time 
    var extractedHour = time.toString().substring(0, 2);
    var extractedMins = time.toString().substring(3, 5);

    // Convert pst to timezone 
    var convertedHour = parseInt(extractedHour) + timeOffset;

    // Convert military time to standard time with period
    if (convertedHour >= 24) { // Advanced day
        if (convertedHour == 24) {
            return "12:00 am<sup>+1</sup>";
        } else {
            return convertedHour - 24 + ":" + extractedMins + " am<sup>+1</sup>";
        }
    } else if (convertedHour >= 12) { // Afternoon
        if (convertedHour == 12) { // Midday
            return "12:" + extractedMins + " pm";
        } else {
            return convertedHour - 12 + ":" + extractedMins + " pm";
        }
    } else { // Morning
        return convertedHour + ":" + extractedMins + " am";
    }
}