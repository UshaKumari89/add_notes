showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", (e) => {
  let addText = document.getElementById("addText");
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addText.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addText.value = "";
  console.log(notes);
  showNotes();
});
//Function to show notes
function showNotes(){
        let notes = localStorage.getItem("notes");
        if (notes === null) {
          notesObj = [];
        } else {
          notesObj = JSON.parse(notes);
        }
        let html = "";
            notesObj.forEach(function(element, index){
            html +=`
            <div class="card notesCard mx-1 my-2" style = "width:16.5rem">
            <div class="card-body">
                <h5 class="card-title">Notes ${index + 1 }</h5>
                <p class="card-text">${element}</p>
                <button class="btn btn-primary mt-3" id="${index}" onclick = "deleteNote(this.id)"
              >Delete Notes</button>
            </div>
        </div>`
        });
        let notesElm = document.getElementById("notes");
            if(notesObj.length != 0) {
             notesElm.innerHTML = html;
         }else{
              notesElm.innerHTML =`nothing to show! Add notes using above`
         }
  
        }


//Function to delete a  notes
function deleteNote(index){
// console.log("Im deleting note", index) 
let notes = localStorage.getItem("notes");
if (notes === null) {
  notesObj = [];
} else {
  notesObj = JSON.parse(notes);
  
}
notesObj.splice(index, 1);
localStorage.setItem("notes", JSON.stringify(notesObj));
showNotes();
}
//filter notes
let search = document.getElementById('searchText');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();
    //  console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('notesCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";s
        }
        //  console.log(cardTxt);
    })
})









