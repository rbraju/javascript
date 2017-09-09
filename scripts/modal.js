
var btn = document.getElementById('myBtn');
var modal = document.getElementById('myModal');
var close = document.getElementsByClassName('close')[0];

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(e) {
    if(e.target == myModal)
        closeModal();
}
