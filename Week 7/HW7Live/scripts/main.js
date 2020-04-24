var myViewFinderArray = new Array();

class ViewFinder
{
    constructor(title)
    {
        this.title = title;
    }

    toString()
    {
        return "Title: " + this.title;    
    }

    get theTitle()
    {
        return this.title;
    }

}

function initializeArray()
{
    var myViewFinder = new ViewFinder("A really funny Pug");
    var myViewFinder1 = new ViewFinder("A really angry tiger");
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);

}
function accessInformation()
{
    /// random object from the array
    //console.log(myViewFinder.toString());
    //console.log(myViewFinder.theTitle);
    document.getElementById("title").innerHTML = myViewFinderArray[1].toString();

}