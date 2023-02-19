// function myFunction() {
//     document.getElementById("demo").innerHTML = document.getElementById("range").value;
//     console.log("Hello")
//   }

//   document.getElementById("range").addEventListener("input", myFunction());

let i = document.querySelector('input'),
  o = document.querySelector('output')

o.innerHTML = i.value

// use 'change' instead to see the difference in response

counterValue = document.getElementById('counterValue')

let counter

document.addEventListener('DOMContentLoaded', function () {
  chrome.storage.local.get(['counterValue'], (result) => {
    if (!result.counterValue) {
      result.counterValue = 0
    }
    i.value = result.counterValue
    console.log(result.counterValue)
    counter = result.counterValue
    console.log(counter)
    document.getElementById('counterValue').innerHTML = result.counterValue
    // counterValue.innerText=result.counterValue;
    // bannerValue.value=result.counterValue;
  })
})

document.addEventListener('DOMContentLoaded', function () {
  var link = document.getElementById('subtract')
  // onClick's logic below:
  link.addEventListener('click', function () {
    subtract()
  })
})

i.addEventListener(
  'input',
  function () {
    o.innerHTML = i.value
    counter = i.value
    chrome.storage.local.set({ counterValue: counter }, () => {
      console.log('data had been stored')
      updateCounter()
    })
  },
  false
)

function subtract() {
  if (counter > 0) {
    counter--
  }
  i.value = counter
  chrome.storage.local.set({ counterValue: counter }, () => {
    console.log('data had been stored')
    updateCounter()
  })
}

document.addEventListener('DOMContentLoaded', function () {
  var link = document.getElementById('add')
  // onClick's logic below:
  link.addEventListener('click', function () {
    add()
  })
})

function add() {
  if (counter < 10) {
    counter++
  }

  i.value = counter
  chrome.storage.local.set({ counterValue: counter }, () => {
    console.log('data had been stored')
    updateCounter()
  })
}

document.addEventListener('DOMContentLoaded', function () {
  var link = document.getElementById('reset')
  // onClick's logic below:
  link.addEventListener('click', function () {
    reset()
  })
})

function reset() {
  counter = 0
  i.value = counter
  chrome.storage.local.set({ counterValue: counter }, () => {
    console.log('data had been stored')
    updateCounter()
  })
}

function updateCounter() {
  chrome.storage.local.get(['counterValue'], (result) => {
    if (!result.counterValue) {
      result.counterValue = 0
    }
    i.value = counter
    console.log(result.counterValue)
    console.log(counter)
    document.getElementById('counterValue').innerHTML = result.counterValue
    // counterValue.innerText=result.counterValue;
    // bannerValue.value=result.counterValue;
  })
}

document.addEventListener('DOMContentLoaded', function () {
  var num = Math.floor(Math.random() * 17) + 1
  switch (num) {
    case 1:
      factText =
        'There is the same amount of water on Earth as there was when the Earth was formed. The water from your faucet could contain molecules that dinosaurs drank.'
      break
    case 2:
      factText =
        'Water is composed of two elements, Hydrogen and Oxygen. 2 Hydrogen + 1 Oxygen = H2O.'
      break
    case 3:
      factText =
        'Water regulates the Earth’s temperature. It also regulates the temperature of the human body, carries nutrients and oxygen to cells, cushions joints, protects organs and tissues, and removes wastes.'
      break
    case 4:
      factText =
        'If the entire world’s water were fit into a 4 liter jug, the fresh water available for us would equal only about one tablespoon'
      break
    case 5:
      factText =
        'There is more fresh water in the atmosphere than in all of the rivers on the planet combined'
      break
    case 6:
      factText =
        'Ocean tides are caused by the rotation of the Earth and the gravitational pull of the Moon and Sun acting on ocean water.'
      break
    case 7:
      factText =
        'The freezing point of water lowers as the amount of salt dissolved in at increases. With average levels of salt, seawater freezes at -2 °C (28.4 °F).'
      break
    case 8:
      factText = 'To create one pint of beer it takes 20 gallons of water'
      break
    case 9:
      factText = '7% of the fresh water on Earth is trapped in glaciers'
      break
    case 10:
      factText = 'NASA has discovered water in the form of ice on the moon'
      break
    case 11:
      factText =
        '$260 billion is the estimated annual economic loss from poor water and sanitation in developing countries.'
      break
    case 12:
      factText =
        'The average cost for water supplied to a home in the U.S. is about $2.00 for 1,000 gallons, which equals about 5 gallons for a penny.'
      break
    case 13:
      factText = '300 tons of water are required to manufacture 1 ton of steel.'
      break
    case 14:
      factText = 'Water regulates the Earth temperature.'
      break
    case 15:
      factText =
        'Freshwater withdrawals for agriculture exceed 90% in many countries: Cambodia 94%, Pakistan 94%, Vietnam 95%, Madagascar 97%, Iran 92%, Ecuador 92%.'
      break
    case 16:
      factText =
        'In a 100-year period, a water molecule spends 98 years in the ocean, 20 months as ice, about 2 weeks in lakes and rivers, and less than a week in the atmosphere.'
      break
    case 17:
      factText =
        'Ground water occurs almost everywhere beneath the land surface. The widespread occurrence of potable ground water is the reason that it is used as a source of water supply by about one-half the population of the United States.'
      break
    case 18:
      factText =
        'At any given moment, groundwater is 20 to 30 times greater than the amount in all the lakes, streams, and rivers of the United States.'
      break
  }
  const factElement = document.getElementById('facts')
  factElement.innerHTML = factText
})

const date = new Date()
hours = date.getHours()
minutes = date.getMinutes()
seconds = date.getSeconds()
console.log(hours)
console.log(minutes)
console.log(seconds)
if (hours == 3 && minutes == 28 && seconds == 0) {
  reset()
  console.log('hrl')
}

function Notification() {
  chrome.notifications.create(
    'what',
    {
      type: 'basic',
      iconUrl: 'logo.png',
      title: 'Water Reminder!',
      message: `It's time for you to drink some water💧`,
    },
    function () {}
  )
  console.log('notify')
}

function resetAtMidnight() {
  var now = new Date()
  var night = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1, // the next day, ...
    0,
    0,
    0 // ...at 00:00:00 hours
  )
  var msToMidnight = night.getTime() - now.getTime()

  setTimeout(function () {
    reset() //      <-- This is the function being called at midnight.
    resetAtMidnight() //      Then, reset again next midnight.
  }, msToMidnight)
}

window.setInterval(Notification, 5400000)

a.addEventListener('click', function () {
  chrome.tabs.create({ url: this.href })
})
