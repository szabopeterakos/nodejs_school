let http = require('http');
let url = require('url');

let arr = [11, 23, 32, 10, 1, 2, 3, 4, 7, 1];

http.createServer(
    function (req, res) {
        let num = url.parse(req.url,true).query;
        let number = Number(num.value);
        res.end(JSON.stringify(arr)+' '+havePairForN(arr,number));
    }
).listen(8080);

function havePairForN(arr, num) {
    let flag = false;
    arr.forEach(e => {
        arr.forEach(x=>{
            let sum = e + x;
            if(sum==num){
                flag = true;
            }
        })
    });
    return flag;
}