const fs = require('fs');
const path = './message.txt';

fs.writeFile(path, 'Node.js is awesome!', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }

    console.log('File created and message written.');

    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error('Error readin file.', err);
            return;
        }

        console.log('File contents:', data);

        fs.unlink(path, (err) => {
            if (err) {
                console.error('Error deleting file:');
                return;
            }

            console.log('File deleted successfully');
        });
    });
});
  