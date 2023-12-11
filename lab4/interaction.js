document.getElementById('clickCounterBtn').addEventListener('click', function() {
    const countElement = document.getElementById('clickCount');
    let count = parseInt(countElement.innerText);
    countElement.innerText = ++count;
});
