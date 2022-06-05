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
        hour: "9AM",
        time: "9",
    },    {
        id: "1",
        hour: "10AM",
        time: "10",
    },    {
        id: "2",
        hour: "11AM",
        time: "11",
    },    {
        id: "3",
        hour: "12PM",
        time: "12",
    },   {
        id: "4",
        hour: "1PM",
        time: "13",
    },    {
        id: "5",
        hour: "2PM",
        time: "14",
    },    {
        id: "06",
        hour: "3PM",
        time: "15",
    },    {
        id: "07",
        hour: "4PM",
        time: "16",
    },    {
        id: "08",
        hour: "5PM",
        time: "17",
    },
];

