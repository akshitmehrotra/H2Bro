// function myFunction() {
//     document.getElementById("demo").innerHTML = document.getElementById("range").value; 
//     console.log("Hello")
//   }
  
//   document.getElementById("range").addEventListener("input", myFunction());
  

  let i = document.querySelector('input'),
  o = document.querySelector('output');

o.innerHTML = i.value;

// use 'change' instead to see the difference in response
i.addEventListener('input', function () {
o.innerHTML = i.value;
document.getElementById('op').style.color = "blue";
document.getElementById('op').style.fontSize = "20px";
document.getElementById('op').style.fontWeight = "bold";

}, false);

chrome.notifications.create('test', {
    type: 'basic',
    iconUrl: 'download.png',
    title: 'Test Message',
    message: 'You are awesome!',
    priority: 2
});



fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('facts');

        jokeElement.innerHTML = jokeText;
    })


