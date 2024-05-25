const firebaseConfig = {
  apiKey: "AIzaSyA96lwprlTx7EeOHc1CCi1rQnTEEsEgJ2I",
  authDomain: "harmonic-beats.firebaseapp.com",
  databaseURL: "https://harmonic-beats-default-rtdb.firebaseio.com",
  projectId: "harmonic-beats",
  storageBucket: "harmonic-beats.appspot.com",
  messagingSenderId: "775513138631",
  appId: "1:775513138631:web:3d3cbce743e866e98be5e2",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// reference to databse

// coment functionality
var db = firebase.database().ref("Harmonic_beats_comments");

document.getElementById("coment-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var name = getElemwntValue("name");
  var comment = getElemwntValue("comment");
  var date = new Date().toLocaleDateString();
  var time = new Date().toLocaleTimeString();
  // console.log(name, comment);
  if(!name || !comment){
    alert("Please fill all the fields");
    return;
  }
  saveComment(name, comment, date, time);
  alert("Comment submitted successfully");
  document.getElementById("coment-form").reset();
}

const saveComment = (name, comment, date, time) => {
    const commentData ={
            name: name,
            comment: comment,
            date: date,
            time: time,
          }
  var newComment = db.push();
  newComment.set(commentData); 
  showComments();
};

const getElemwntValue = (id) => {
  return document.getElementById(id).value;
};


// to render all the comments
function showComments() {
  db.on("value", function (snapshot) {
    var value = snapshot.val();
    rendercomment(value);
  });
}

// This is to render the comments on the page
function rendercomment(value) {
    const section = document.getElementById('comment_box');
    console.log(value);
    console.log(section.innerHTML);
    section.innerHTML = "";
    console.log(section.innerHTML);
    for (var key in value) {
        const comment = document.createElement('div');
        comment.classList.add('comments-list');        
        comment.innerHTML = `
            <span>${value[key].name}</span>
            <p>${value[key].comment}</p>
            <span class='date_time'>${value[key].date} ${value[key].time}</span>
        `;
    
        section.appendChild(comment);
    
        }
}
// This will render the comments on the page load
window.onload = function() {
    showComments();
  };
