
const boton =  document.getElementById('clickme');
const botonFetch =  document.getElementById('clickmeFetch');
const url = "http://api.icndb.com/jokes/random";

//AJAX method
function llamadaAjax(){
    const containerChiste = document.getElementById('jokeplace');
    //Let blank the joke container
    containerChiste.innerHTML = "";
    //Save a new request and API URL
    const http = new XMLHttpRequest();
    //Specify type of request  (GET request on API URL)
    http.open("GET",url);
    //Send request to the server
    http.send();
    //When request state change...
    http.onreadystatechange = function () {
        //Check request state and status if its OK recover data
        if (this.readyState == 4  && this.status == 200){
            //Transform data string to object and save into variable
            let chiste = JSON.parse(this.responseText);
            //Print the joke
            containerChiste.innerHTML = chiste.value.joke;
        }
    }
}

//Fetch mehod
function llamadaFetch(){
    const containerChisteFetch = document.getElementById('jokeplaceFetch');
    //Let blank the joke container
    containerChisteFetch.innerHTML = "";
    //Start request
    fetch(url)
        //Solve request
        .then(res => res.json())
        //Receive request data
        .then(data => {
            containerChisteFetch.innerHTML = data.value.joke;
        })
}
boton.addEventListener('click', function (evento){
    llamadaAjax();
});
botonFetch.addEventListener('click', function (evento){
    llamadaFetch();
});