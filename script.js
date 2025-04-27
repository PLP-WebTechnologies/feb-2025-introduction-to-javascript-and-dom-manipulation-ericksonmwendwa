// Change text content
document.getElementById('changeTextButton').addEventListener('click', function () {
  const textContentElement = document.getElementById('textContent');
  textContentElement.textContent = "The text content has been changed!";
});

// Change background color
document.getElementById('changeColorButton').addEventListener('click', function () {
  document.body.style.backgroundColor = "lightblue";
});

// Add a new element when a button is clicked
document.getElementById('addElementButton').addEventListener('click', function () {
  const newElementContainer = document.getElementById('newElementContainer');

  const newElement = document.createElement('div');
  newElement.classList.add('new-element');
  newElement.textContent = "This is a newly added element!";

  newElementContainer.appendChild(newElement);
});
