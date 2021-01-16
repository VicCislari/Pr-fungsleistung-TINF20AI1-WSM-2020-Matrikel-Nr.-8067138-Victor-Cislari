/*Victor Cislari (DHBW-Mannheim, Matrikel-Nr.: 8067138)*/
var allNews;
var likedNews;
var newsLikedContainer;
var from;
var until;
var From;
var Until;

function getValidator(from, until) //helper function //just checkes if the user entered everything correctly
{
  //returns the appropriate if clause
  //to validate the newsReport publication date relative to the users specifications

  //in order to use the Date Object in an if-clause correctly, you have to add the +-sign

    if (from != "" && until != "") {
        return function(publicationDate) {
            if (+From <= +publicationDate && +publicationDate <= +Until)//checks if the publicationDate is in the user-defined intervall.
              return true;
            return false;
        };
    } else if (from != "") {
        return function(publicationDate) {
            if (+From <= +publicationDate)//cecks if the publicationdate is after the userdefined date
                return true;
            return false;
        };

    } else if (until != "") {
        return function(publicationDate) {
            if (+publicationDate <= +Until)//cecks if the publicationdate comes before the userdefined date
                return true;
            return false;
        };
    } else {
        alert("pick a date range"); //abrupt end of execution
        return function(){return true;}; //returns true, meaning that every publication datetime is valid, since there is no user defined specification given.
    }
}

function filterByDate() //filters the 'allNews' section by the picked date/s
{
    from = document.getElementById("datetime-picker-from").value;
    until = document.getElementById("datetime-picker-until").value;
    From = new Date(from);
    Until = new Date(until);

    var validator = getValidator(from, until);//gets the appropriate if-clause

    for (var i = 0; i < allNews.length; i++) {
        var publicationDate = new Date(allNews[i].querySelector("#publication").value);
        if (validator(publicationDate)) allNews[i].setAttribute("style", "");//let's the article appear
        else allNews[i].setAttribute("style", "display:none");//doesn't let the article appear
    }
}

function showArticle(newsReport) //HTML-Manipulation-function
{
    newsReport.querySelector("article").setAttribute("class", "showContent");
}

function closeArticle(article) //HTML-Manipulation-function
{
    article.setAttribute("class", "hideContent");
}

function setDateLimitMin(datetime_value) //HTML-Manipulation-function
{
    document.getElementById("datetime-picker-until").setAttribute("min", new Date(datetime_value).toISOString().substring(0, 16));//0 to 16 in order to only get the year,month,day/date, hour and minute value
}

function setDateLimitMax(datetime_value) //HTML-Manipulation-function
{
    document.getElementById("datetime-picker-from").setAttribute("max", new Date(datetime_value).toISOString().substring(0, 16));//0 to 16 in order to only get the year,month,day/date, hour and minute value
}

function unset(id) //HTML-Manipulation-function
{
    document.getElementById(id).value = "";//asically resets the value of any input element to nothing
}

function setMaxDate(id) //HTML-Manipulation-function
{
  //the following is a compressed command to set the maximum date of choice of any datetime input to the current date and current time value.
  //because it doesn't make much sense to search for a newsreport from the future... That would be cheating
    document.getElementById(id).max = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
}
