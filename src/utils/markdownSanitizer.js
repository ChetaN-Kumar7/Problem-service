const marked =require('marked')
const sanitizeHtmlLibrary = require('sanitize-html')
const TurndownService = require('turndown')

function sanitizeMarkdownContent(markdownContent){
    const turndownService = new TurndownService();
    //1. convert markdown to html
    const convertedHtml = marked.parse(markdownContent)

    
    //2 Sanitize html
    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml,{
        allowedTags: sanitizeHtmlLibrary.defaults.allowedTags.concat(['img'])});
    
    // Convert the sanitizeed html back to markdown
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

    return sanitizedMarkdown

}
const input = `
# Hello World

### this is markdown

<script> alert('whooo)</script>

[Link](www.google.com)

`;

module.exports = sanitizeMarkdownContent;

