const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const content3 = document.getElementById('content3');

function changeContent() {
    if (content1.style.display !== 'none') {
        content1.style.display = 'none';
        content2.style.display = 'block';
    } else if (content2.style.display !== 'none') {
        content2.style.display = 'none';
        content3.style.display = 'block';
    } else {
        content3.style.display = 'none';
        content1.style.display = 'block';
    }
}



setInterval(changeContent, 3000); // Change content every 3 seconds (3000 milliseconds)

