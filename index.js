console.log("POW! Loaded.")

let introduction = document.querySelector('#introduction')
introduction.innerHTML = "This is an introduction to JavaScript"

function bindSpacebarToJump() {
  document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
      jump();
    }
  });
}

let jumpContent = document.querySelector('#jump')

function jump() {
  jumpContent.textContent += "Jump! "
}

bindSpacebarToJump()