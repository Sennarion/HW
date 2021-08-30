import http from 'http';
import fs from 'fs';
import path from 'path';

const serverPath = path.dirname(process.argv[1]);
const homeWorks = JSON.parse(fs.readFileSync(path.join(serverPath, 'static', 'homeworks.json'), 'utf-8'));

const server = http.createServer((req, res) => {
    const id = req.url.split('/')[2];
    if (req.url.startsWith(`/homework/${id}`) && id) {
        let homeWork = homeWorks.find(function (el) {
            return el._id === id;
        })
        res.write(`
        <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                    <link rel="stylesheet" href="/styles/style.css">
                </head>
                <body>
                    <table cellpadding="20px">
                        <tr>
                            <td>ID</td>
                            <td>${homeWork._id}</td>
                        </tr>
                        <tr>
                            <td>TITLE</td>
                            <td>${homeWork.title}</td>
                        </tr>
                        <tr>
                            <td>AUTHOR</td>
                            <td>${homeWork.author.first_name_en} ${homeWork.author.last_name_en}</td>
                        </tr>
                        <tr>
                            <td>DESCRIPTION</td>
                            <td>${homeWork.description}</td>
                        </tr>
                    </table>
      `);
        res.write(`
                </body>
            </html>
        `);
        res.end();
    } else if (req.url === '/homework' || req.url === '/homework/') {
        res.write(`
        <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                    <link rel="stylesheet" href="/styles/style.css">
                </head>
                <body>
                    <ul>
                `);
        homeWorks.forEach(element => {
            res.write(`<li><a href="/homework/${element._id}">${element.title}</a></li>`);
        });
        res.write(`
                    </ul>
                </body>
            </html>
                `);
        res.end();
    } else {
        const htmlPath = path.join(serverPath, 'static', req.url);
        fs.readFile(htmlPath, (err, htmlContent) => {
            if (err) {
                res.statusCode = 404;
                res.end();
            }
            res.end(htmlContent);
        });
    }
});

server.listen(3000, () => console.log('Сервак пашет'));