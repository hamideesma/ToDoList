let addToDoButton = document.getElementById('addToDo'); 
let toDoContainer = document.getElementById('toDoContainer');
let inputText = document.getElementById('inputText');
addToDoButton.addEventListener('click', function(e){
    e.preventDefault()
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');

    paragraph.innerHTML = inputText.value;
    toDoContainer.append(paragraph);

    inputText.value = "";

    
    
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    });

    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    });

    clearToDo.addEventListener('click',function(){
        paragraph.remove();
    })

})
