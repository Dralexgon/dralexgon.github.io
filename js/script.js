function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function addBr(text) {
    //return text.replace(/^\n/, "").replace(/\n/g, "<br>");
    return text.replace(/\n/g, "<br>");
}

function convertMarkdown() {
    // Get Markdown text from the textarea
    const markdownText = document.getElementById("markdown-input").innerHTML;

    const btText = addBr(markdownText);
    
    // Convert Markdown to HTML using marked.js
    const htmlText = marked.parse(btText);
    
    // Display HTML output in the output div
    document.getElementById("html-output").innerHTML = htmlText;
}

window.onload = convertMarkdown;