import moment from 'moment'

export const YourAPI = 
{
    headers: 
    {
        //insert your api token here
        "X-Auth-Token": '8da3e899169e4a6e9364b53bd9bdde44' ,
        "content-type": "application/json"
    }
};


const leagueContainer = {2021 : 'Premier League', 2002 : 'Bundesliga', 2014 : 'Primera Division', 2015: 'Ligue1', 2019  : 'Serie A'}

var startdate = moment();
startdate = startdate.subtract(2, "days");
startdate = startdate.format("YYYY-MM-DD");

var enddate = moment(); 
enddate = enddate.add(7, "days")
enddate = enddate.format("YYYY-MM-DD")

var clDateStart= moment();
clDateStart = clDateStart.subtract(0, "days");
clDateStart = clDateStart.format("YYYY-MM-DD");

var clDateEnd = moment(); 
clDateEnd = clDateEnd.add(30, "days")
clDateEnd = clDateEnd.format("YYYY-MM-DD")

export {enddate, startdate, clDateStart, clDateEnd}
