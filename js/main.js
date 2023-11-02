// Enter your code below.

const resourceList = document.querySelector('#javascriptResourcese')
const showResourcesBtn = document.querySelector('#show-resources')

showResourcesBtn.addEventListener('click', (event)=>{
    resourceList.classList.remove("d-none")
})

resourceList.addEventListener('mouseover', (event)=>{
    console.log(event.target)

    event.target.classList.add('fw-bold')
})

resourceList.addEventListener('mouseout', (event)=>{
    console.log(event.target)

    event.target.classList.remove('fw-bold')
})

resourceList.addEventListener('click', (event)=>{
    event.target.classList.add("fst-italic")
})