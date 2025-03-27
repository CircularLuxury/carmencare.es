const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000; // Use environment port, default to 3000

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    // Add more mime types as needed
};

function getMimeType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    return MIME_TYPES[ext] || 'application/octet-stream'; // Default to binary
}

const server = http.createServer((req, res) => {
    let filePath = '.' + req.url; // Add dot for current directory

    if (filePath === './') {
        filePath = './index.html'; // Serve index.html if root is requested
    } else if (filePath.startsWith('./resources/')) {
        // Serve files from the resources directory
    } else if (filePath === './index.html') {
        // Serve index.html directly
    }
    else {
        filePath = './' + req.url;
    }

    const absolutePath = path.resolve(filePath); // Resolve relative paths
    console.log(`Attempting to serve: ${absolutePath}`);

    fs.readFile(absolutePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // File not found
                console.log(`File not found: ${absolutePath}`);
                res.writeHead(404, { 'Content-Type': 'text/html' });
                fs.readFile('./404.html', (err404, content404) => { //serve 404.html if available
                    if(err404) {
                        res.end("<h1>404 Not Found</h1>");
                    } else {
                        res.end(content404);
                    }
                });
            } else {
                // Server error
                console.error(`Server error reading ${absolutePath}: ${err}`);
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('<h1>500 Server Error</h1>');
            }
        } else {
            // File found, serve the content
            const mimeType = getMimeType(absolutePath);
            res.writeHead(200, { 'Content-Type': mimeType });
            res.end(content);
            console.log(`Served ${absolutePath} with MIME type ${mimeType}`);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
