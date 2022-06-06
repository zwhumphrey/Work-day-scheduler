// puts date in header
function headerDate() {
    var currentDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentDate);
}
headerDate();

// var for all the times of the work day

var workDay = [
    {
        id: "0",
        hour: "9",
        time: "9",
        meridiem: "AM",
        reminder: ""
    },    {
        id: "1",
        hour: "10",
        time: "10",
        meridiem: "AM",
        reminder: ""
    },    {
        id: "2",
        hour: "11",
        time: "11",
        meridiem: "AM",
        reminder: ""
    },    {
        id: "3",
        hour: "12",
        time: "12",
        meridiem: "PM",
        reminder: ""
    },   {
        id: "4",
        hour: "1",
        time: "13",
        meridiem: "PM",
        reminder: ""
    },    {
        id: "5",
        hour: "2",
        time: "14",
        meridiem: "PM",
        reminder: ""
    },    {
        id: "06",
        hour: "3",
        time: "15",
        meridiem: "PM",
        reminder: ""
    },    {
        id: "07",
        hour: "4",
        time: "16",
        meridiem: "PM",
        reminder: ""
    },    {
        id: "08",
        hour: "5",
        time: "17",
        meridiem: "PM",
        reminder: ""
    },
];

// function to display time and data

workDay.forEach(function(currentHour) {
    var hourRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourRow);

    var hourField = $("<div>")
        .text(`${currentHour.hour}${currentHour.meridiem}`)
        .attr({
            "class": "col-md-2 hour"
    }); 

    var hourPlan = $("<div>")
        .attr({"class": "col-md-9"});
    var taskEntry = $("<textarea>");
    hourPlan.append(taskEntry);
    taskEntry.attr("id", currentHour.id);
    if (currentHour.time < moment().format("HH")) {
        taskEntry.attr ({
            "class": "past", 
        })
    } else if (currentHour.time === moment().format("HH")) {
        taskEntry.attr({
            "class": "present" 
        })
    } else if (currentHour.time > moment().format("HH")) {
        taskEntry.attr({
            "class": "future" 
        })
    }

    // creates saveButton
    var saveButton = $("<i class='far fa-save fa-lg'></i>")
    var savePlan = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
    });
    savePlan.append(saveButton);
    hourRow.append(hourField, hourPlan, savePlan);
});

// save on local storage
function saveTask() {
    localStorage.setItem("workDay", JSON.stringify(myDay));

    saveTask();
}

console.log(saveTask);