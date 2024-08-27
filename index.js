const express = require('express')
const { DatabaseSDK } = require('database-sdk')
const app = express()
const Config = {
    port: 8002
}
async function main() {
    app.listen(Config.port, '127.0.0.1', () => {
        console.log(`Listening at http://127.0.0.1:${Config.port}`);
    });

    app.get('/back-office', async (req, res) => {
        const result = await DatabaseSDK.user.findMany({select : {
            name : true,
            id : true
        }});

        res.json({ statusCode: 200, result: result  , message : 'OK'});
    });
}


main();