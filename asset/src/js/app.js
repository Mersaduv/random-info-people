//--------random selector-------
//  var joke = arr[Math.floor(Math.random()*arr.length)]

//  console.log(joke);


// variable 




// eventListener 
function eventListener() {

}
eventListener()


document.querySelector('.refresh').addEventListener('click' , loadAPI)

function loadAPI() {
    fetch('https://api.randomuser.me/')
    //sending request
    .then((response)=> response.json())
    // receive reponse and inner HTML
    .then((load)=>{
        load.results.forEach(person => {
              
            let im =person.picture.large
            document.getElementById('image').src=im
            document.querySelector('.info').innerHTML=`${person.name.first} - ${person.name.last}`,
            document.querySelector('.infoB').innerHTML=`${person.dob.age}`,
            document.querySelector('.infoA').innerHTML=`${person.location.city} - ${person.location.country} - ${person.location.street.number} - ${person.location.street.name}`,
            document.querySelector('.infoN').innerHTML=` ${person.phone}`,
            document.querySelector('.infoP').innerHTML=`${person.login.password}`

        });
    })
}




