// 導入模組
var fs = require('fs')
var path = require('path')
// 可改寫副檔名及編碼
var x = '.txt'
var ru = 'utf16le'
var wu = 'utf8'
// 完成後的副檔名
var afterName = '.log'
// 建立函數，以便回呼使用
function XmlAddMypb(go) {
    // 規範化檔案路徑
    var h = path.normalize(go)
    // 取得本檔檔名，以本檔檔名作參數，在當前目錄下：若有相同名的副檔名的檔案，就進行轉換
    // 取得本檔絕對路徑
    // var p = path.parse(__filename)
    // { root: 'D:\\',
    //   dir: 'D:\\nj',
    //   base: 'txt.js',
    //   ext: '.js',
    //   name: 'txt' }

    // 取得當前目錄下所有檔案及資料夾
    var d = fs.readdirSync(h)
    // 循環目錄
    for (var k of d) {
        // 取得絕對路徑，並規範化路徑
        var n = path.normalize(h + '/' + k)
        // 取得檔案資訊
        var c = fs.statSync(n)
        // 判斷是否為資料夾，如果是：回呼函數，來執行下一層目錄
        if (c.isDirectory()) {
            // 若只執行當前目錄，則註釋此行，並啟動返回通知
            // console.log('Stop read Directory:' + n)
            XmlAddMypb(n)
            // 判斷是否為所要轉換的副檔名的檔案
        } else if (path.extname(n) == x) {

            // 用絕對路徑讀入檔案，使用node的readFileSync同步函數
            var a = fs.readFileSync(n, ru)
            // 導入陣列
            var b = a.split('\n')

            // 首行加一空行，後來不必了，b[0]之前，不能加任何字，否則「位元組順序記號」 EF BB BF ，會跑到第2行，變成亂碼
            // b.unshift('\n')
            // 將幾個檔頭位元，改為第一行，後來這方法無效
            // if(/0xEF0xBB0xBF/.test(b[0])){
            // b[0].replace(/[0xEF|0xBB|0xBF]/,'')

            // 加上批次頁碼
            for (var i = 0, j = 1; i < b.length; i += 20, j++) {
                // <pb>不能寫在b[0]之前，否則「位元組順序記號」 EF BB BF ，會跑到第2行，變成亂碼
                b[i] = b[i] + '<pb n="' + j + '"/>'
            }
            // 用絕對路徑寫入檔案
            fs.writeFileSync(n + afterName, b.join('\n'), wu)
            // 完成時返回通知
            console.log('addpb is OK: ' + n + afterName)
        }
    }
}
// 配合timeEnd()成對出現。 打印出代碼執行的時間
console.time('共耗費了')
// 啟用函數
XmlAddMypb('./')
// 'test'名字要和time()中的名字保持一致
console.timeEnd('共耗費了')