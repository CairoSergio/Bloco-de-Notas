const body = document.querySelector(".notes-bd");
const newm = body.querySelector(".btn-new");
const svmemory = document.querySelector(".newnote");
const volt = document.getElementById("volt");
const foot = document.getElementById("foot");
const more =document.getElementById("more");
const setings = document.querySelector(".setings");
const not = document.querySelector(".newnote .nov")
const titleinput =not.querySelector("input");
const descinput= not.querySelector("textarea");
const svenew = not.querySelector("button");

const notes = JSON.parse(localStorage.getItem("notes") || "[]");

newm.onclick = ()=>{
    svmemory.classList.remove("disply");
};

volt.onclick = ()=>{
    svmemory.classList.add("disply");
};


// more.onclick = () =>{
//     setings.classList.remove("disply")
// }

svenew.addEventListener("click", e =>{
    e.preventDefault();
    let title = titleinput.value,
    desc = descinput.value;

    if(title || desc){
        let dte = new Date(),
        dia = String(dte.getDate()).padStart(2,'0'),
        mes = String(dte.getMonth() + 1).padStart(2,'0'),
        ano = dte.getFullYear()
        const datanow =  `${dia}/${mes}/${ano}`;

        let noteinfo = {
            titulo: title,
            descrition: desc, 
            dt:datanow,
        }
        
        notes.push(noteinfo)
        localStorage.setItem("notes",JSON.stringify(notes));
        svmemory.classList.add("disply");
        showNotes();
        URL = 'file:///E:/PROJETOS%20HTML/Notas/index.html';
    }
});

function showMenu(elem){
    elem.classList.remove("disply")
    document.addEventListener("click", e =>{
        if(e.target.tagName != "I" || e.target != elem){
            elem.classList.add("disply")
            console.log('certo4')
        }
        console.log('certo2')
    })
}

function showNotes(){
    notes.forEach((note) => {
        let nolist = `
                    <div class="crd-note">
                        <header class="head">
                            <h1>${note.titulo}</h1>
                        </header>
                        <span class="body">
                            <h1 class="descri">${note.descrition}</h1>
                        </span>
                        <footer id="footer" class="footer">
                            <span>${note.dt}</span>
                            <span id="more"  onclick="showMenu();">...</span>
                            <div class="setings disply">
                                <span>DELETE</span>
                                <span>EDIT</span>
                            </div>
                        </footer>
                    </div> `;
        body.insertAdjacentHTML("beforeend", nolist)
    });
}
showNotes();
