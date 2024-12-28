function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function addBr(text) {
    console.log("---- text 1:");
    console.log(text);
    console.log("---- text 2:");
    const text2 = text.replace(/\n/g, "<br>");
    console.log(text2);
    /*
    console.log("---- text 3:");
    const text3 =  text.replace(/\n[ ]*(<)/g, '$1');
    console.log(text3);
    console.log("---- text 4:");
    const text4 = text.replace(/\n[ ]*(<)/g, '$1').replace(/\n/g, "<br>")
    console.log(text4);
    */
    return text2;
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