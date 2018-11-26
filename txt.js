// 導入模組
var fs = require('fs')
var path = require('path')
// 建立函數，以便回呼使用
function XmlToMypb(go) {
    // 規範檔案路徑
    var h = path.normalize(go)
    // 取得本檔檔名，以本檔檔名作參數，在當前目錄下：若有相同名的副檔名的檔案，就進行轉換
    // 取得本檔絕對路徑
    var p = path.parse(__filename)
    // { root: 'D:\\',
    //   dir: 'D:\\nj',
    //   base: 'txt.js',
    //   ext: '.js',
    //   name: 'txt' }

    // 取得當前目錄下所有檔案及資料夾
    var d = fs.readdirSync(h)
    // 循環目錄
    for (var k of d) {
        // 取得絕對路徑，並規範路徑
        var n = path.normalize(h + '/' + k)
        // 取得檔案資訊
        var c = fs.statSync(n)
        // 判斷是否為資料夾，如果是：回呼函數，來執行下一層目錄
        if (c.isDirectory()) {
            XmlToMypb(n)
            // 判斷是否為所要轉換的副檔名的檔案
        } else if (path.extname(n) == ('.' + p.name)) {

            // 用絕對路徑讀入檔案，使用node的readFileSync同步函數
            var a = fs.readFileSync(n, 'utf16LE')
            // 導入陣列
            var b = a.split('\n')
            // 首行加一空行，後來不必了
            // b.unshift('\n')

            // 將幾個檔頭位元，改為第一行，後來這方法無效
            // if(/0xEF0xBB0xBF/.test(b[0])){
            //     b.unshift('﻿')
            // b[0].replace(/[0xEF|0xBB|0xBF]/,'')
            // 加上批次頁碼
            // for (var i = -1, j = 0; i < b.length; i += 20, j++) {
            for (var i = 0, j = 1; i < b.length; i += 20, j++) {
                b[i] = '<pb n="' + j + '"/>\n' + b[i]
            }
            // 位元組順序記號 0a ef bb bf ，會被插入第2行
            // 用絕對路徑寫入檔案
            fs.writeFileSync(n + '.log', b.join('\n'), 'utf8')
            // 完成時返回通知
            console.log('mypb is OK: ' + k)
        }
    }
}
// 啟用函數
XmlToMypb('./')
