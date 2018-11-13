const parent = document.getElementById("parent")
const children = document.getElementById("children")

parent.addEventListener("touchstart", event => {
    console.log("Parent");
})

children.addEventListener("touchstart", event => {
    console.log("children");
})

// function onParentClick() {
// }
// function onChildrenClick() {
//     console.log("Chilren");
// }