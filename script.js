document.getElementById('changeMessage').addEventListener('click', function() {
    document.getElementById('message').textContent = "I'm sorry! I was hangry, and that's why I said what I said. I'm also sorry for assuming the worst about your words so quickly. I was very excited about all of it, which is why I got upset so fast. :( I'm sorry for whatever I said to you—I didn't mean it, baby. Will you forgive me?" ;
    document.getElementById('changeMessage').style.display = 'none';
    document.getElementById('options').style.display = 'block';
});

document.getElementById('yesButton').addEventListener('click', function() {
    const pdfUrl = 'guilty.pdf'; 
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'guilty.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

document.getElementById('noButton').addEventListener('click', function() {
    alert('Oops! Wrong option, think again.');
});
