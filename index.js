const container = document.getElementById('app');
const addButton = container.querySelector('.add-note');

getNotes().forEach ( note => {
    const noteElement = createNoteElement(note.id , note.content);
    container.insertBefore(noteElement , addButton);
})

addButton.addEventListener('click' , () => addNote())
function getNotes(){
    return JSON.parse(localStorage.getItem('sticky-notes') || "[]")

}

function saveNotes(notes){
    localStorage.setItem('sticky-notes' , JSON.stringify(notes));
}

function createNoteElement(id,content){
    const element = document.createElement("textarea");
    element.classList.add("note")
    element.value = content;
    element.placeholder = "Empty whooo"
  element.addEventListener('change', () => {
    updateNote(id,element.value)

});

element.addEventListener("dblclick", () => {
    const doDelete = confirm(
      "Are you sure you wish to delete this sticky note?"
    );

    if (doDelete) {
      deleteNote(id, element);
    }
  });

  return element;
}

function addNote(){
    const existingNote = getNotes();
    const noteObject = {
        id:Math.floor(Math.random()  * 1000),
        content : ""
    };
    const noteElement = createNoteElement(noteObject.id, noteObject.content);
    container.insertBefore(noteElement , addButton);
    

    existingNote.push(noteObject);
    saveNotes(existingNote)
};

function updateNote(id,newContent){

    const note = getNotes();
    const targetNote = note.filter(note => note.id == id)[0]

    targetNote.content = newContent;
    saveNotes(note)
}

function deleteNote(id, element) {
    const notes = getNotes().filter((note) => note.id != id);
  
    saveNotes(notes);
    container.removeChild(element);
  }
  




  function darkMode(){
    const container = document.body
    container.classList.toggle("dark-mode");
        console.log('click')
      }

      
  function PinkMode(){
    const container = document.body
    container.classList.toggle("pink-mode");
        console.log('click')
      }

