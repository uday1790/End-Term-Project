function showData()
{
    event.preventDefault();
    var country=document.getElementById("country").value;
    var start=document.getElementById("start").value;
    var end=document.getElementById("end").value;

    var confirmed=document.getElementById("confirmed");
    var active=document.getElementById("active");
    var deaths=document.getElementById("deaths");

    console.log(start);

    if(country=='' || start=='' || end=='')
    alert("enter the required field");

    else
    {
        var url="https://api.covid19api.com/country/"+country+"?from="+start+"T00:00:00Z&to="+end+"T00:00:00Z";

        fetch(url)
        .then((info) => info.json())
        .then((info) => {
            console.log(info);
            var length=info.length;
            var index=length-1;

            var c=info[index].Confirmed;
            var a=info[index].Active;
            var d=info[index].Deaths;

            confirmed.innerHTML=c;
            active.innerHTML=a;
            deaths.innerHTML=d;

            document.getElementById("info").style.display="block";
            
        })
    }
    
}