import axios from "axios"
const insertingCategories=document.querySelector('.aside-list')
insertingCategories.innerHTML= '<li>All categories</li>'
insertingCategories.addEventListener("wheel", function(event) {
  event.preventDefault()
  var delta = event.deltaY || event.detail || event.wheelDelta;
  insertingCategories.scrollTop += delta;
});
fetchCategories()
async function fetchCategories(){
    const apiCategories="https://books-backend.p.goit.global/books/category-list"
    await axios.get(apiCategories)
    .then(response=>{
        console.log(response.data)
        for(let i=0; i<response.data.length; i++){
            insertingCategories.insertAdjacentHTML('beforeend', `<li>${response.data[i].list_name}</li>`)
        }
    })
}
