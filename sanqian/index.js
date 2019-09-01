var http = require("axios");
var basePage = 22223426;
var fs = require("fs")
var url = "https://www.shuyuewu.net"
var outstream = fs.createWriteStream('./output.txt');

var cheerio = require("cheerio")
async function getPage(pageNum, URL) {
    if (!URL) {
        var baseUrl = `https://www.shuyuewu.net/book/42296/${basePage}.html`;
        var URL;
        http.get(baseUrl).then(result => {
            if (result.data) {
                var $ = cheerio.load(result.data);
                var bottom=$(".bottem");
                let next=bottom.children().last().attr("href");
                let nextUrl=url+next;
                console.log(nextUrl)
                // console.log(URL)
                let headline=$("h1").text();
                let content=headline+"\n"+$("#content").text()
                outstream.write(content);
                console.log(nextUrl)
                getPage(pageNum, nextUrl)
            }
        });
    } else {
        http.get(URL).then(result => {
            var $ = cheerio.load(result.data);
            var bottom=$(".bottem");
            let next=bottom.children().last().attr("href");
            let nextUrl=url+next;
            let headline=$("h1").text();
            let content=headline+"\n"+$("#content").text()
            outstream.write(content);
            console.log(nextUrl)
            // outstream.write($("#content").text());
            getPage(pageNum, nextUrl)
        })
    }



}
getPage(basePage)