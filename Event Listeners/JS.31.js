/* const grandParent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child") */

/* grandParent.addEventListener("click", e => {
    console.log("GrandParent")
})

parent.addEventListener("click", e => {
    console.log("parent")
})

child.addEventListener("click", e => {
    console.log("child")
})
// The above event listeners are examples of bubbling events. Meaning that events will occur bubblle out to the nearest event.
// For instance, if you click on the color green (child), it will return The Child event, followed by the Parent event, and lastly
// the GrandParent event. It returns all 3 events because because the child event is nested inside the the parent event, which
// is nested inside the grandparent event, which means that clicking on the child event will also bubble out to the outer events
// the child is nested in until the events are done. Bubbling events work their way from the inside out.

///////////////////////////////////////////////////////

grandParent.addEventListener("click", e => {
    console.log("GrandParent 1")
}, {capture: true})

parent.addEventListener("click", e => {
    console.log("parent 1")
}, {capture: true})

child.addEventListener("click", e => {
    console.log("child 1")
}, {capture: true})
// The above code is an example of Capture
// Cature is the exact opposite of Bubbling. It works entirely the same but instead of working its way from the inside out,
// it starts from the outside and works its way in. Meaning that the grandparent event would be called first, followed by the parent,
// and lastly the child event. Capture starts from the outside and works inward.

///////////////////////////////////////////////////////////////////// */

/* grandParent.addEventListener("click", e => { e.stopPropagation()
    console.log("GrandParent 2")
})

parent.addEventListener("click", e => {
    console.log("parent 2")
})

child.addEventListener("click", e => { 
    console.log("child 2")
})
// In the above example, an event stopPropagation function is used. When this function is pused into a parameter, it stops Bubbling
// and capturing at the event the e.stopPropagation was called on, meaning that no extra events will take place once the 
// event stopPropagation function is called. In the above example, once the bubbling event reaches the e.stopPropagation(),
// no other actions happen.

///////////////////////////////////////// */

/* grandParent.addEventListener("click", e => {
    console.log("GrandParent 3")
})

parent.addEventListener("click", e => {
    console.log("parent 3")
}, {once: true})

child.addEventListener("click", e => { 
    console.log("child 3")
})
// The above code is an example "once" property. When you want a program or event to run only once, then remove itself
// from further use, you can pass in "Once" inside the parameter and set it true. This will run the program or event just once
// and remove it for good.

///////////////////////////////////////// */

/* grandParent.addEventListener("click", e => {
    console.log("GrandParent 4")
})

parent.addEventListener("click", printHi)

setTimeout(() => {
    parent.removeEventListener("click", printHi)
}, 30000)

child.addEventListener("click", e => { 
    console.log("child 4")
})

function printHi() {
    console.log("Hi")
} */
// The above code is an example of a "removeEventListener()". This is used when you want to run an event a set amount of times
// or for a set amount of time, then have the function removed after a set period of time. In the example, the "removeEventListener()" is added with a 
// "setTimeOut()". It is set to remove the parent.addEventListener("click", printHi) after the page hs been loaded for 30 seconds.
// After 30 seconds the parent.addEventListener("click", printHi) is no longer recognized as a readable function and your computer
// will no longer try to run it. 

//////////////////////////////////////

/* const divs = document.querySelectorAll("div")

divs.forEach(div => {
  div.addEventListener("click", () => {
    console.log("hi")
  })
})
// In the above code, a "querySelectorAll()" is used and targets all the divs we have in use. Also, each div is targeted and 
// given an "eventListener()" by using a "forEach()". By doing this, it doesn't matter which div is click, they all run the
// same code, (or produce the same output). */

////////////////////////////////////////////

const text = document.querySelector(".click-me")

text.addEventListener("click", clickOutCome)

function clickOutCome() {
    alert("Alia Marie Loves Brian Javelle")
}
// In the above example I created an extra "div" with a class of "click-me". When "Click Me!" is pushed on the website page
// an alert pops up that displays a prewritten message.





