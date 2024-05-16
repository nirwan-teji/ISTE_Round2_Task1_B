const button = document.querySelector('button');
button.addEventListener('click', function() {
    alert('You just clicked there!');
});
button.addEventListener('dblclick', function() {
    alert('You just double-clicked there!');
});
button.addEventListener('mouseover', function() {
    alert('You just moved in!');
});
button.addEventListener('mouseout', function() {
    alert('You just moved out!');
});

document.body.appendChild(button);