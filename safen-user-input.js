// Your mission is to implement a function that converts the following potentially harmful characters:

// < --> &lt;
// > --> &gt;
// " --> &quot;
// & --> &amp;

htmlspecialchars = formData => formData.replace(/[<>"&]/g,replacerFunction =>({'<': '&lt;', '>': '&gt;', '"': '&quot;', '&': '&amp;'})[replacerFunction])
