'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const myStorage = window.sessionStorage;

  document.querySelector("#create-note").addEventListener("click", function(e) {
    const noteText = document.getElementById('note-text').value;

    e.preventDefault();
    myStorage.setItem('noteText', noteText);
    // myStorage.getItem('noteText');
    // console.log(noteText);
    // console.log(myStorage.getItem('noteText'));
  })

});
