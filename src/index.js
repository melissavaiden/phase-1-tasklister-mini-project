document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    makeToDo(document.querySelector('#new-task-description').value);
  })
});

function makeToDo(toDo) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', deleteToDo);
  btn.innerHTML = 'x'
  p.textContent = `${toDo}`;
  p.appendChild(btn);
  document.querySelector('#tasks').appendChild(p);
}

function deleteToDo(e) {
  e.target.parentNode.remove();
}
