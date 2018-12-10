// 導入模組
// 導入「知更鳥」模組，要先安裝在當前目錄下 npm install bluebird
var promise = require('bluebird')
var fs = promise.promisifyAll(require('fs'))
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
    // 取得並循環目錄下的檔案
    fs.readdirAsync(h).map(k => {
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
            // 用絕對路徑讀入檔案
            fs.readFileAsync(n, ru)
                .then(function (a) {
                    var b = a.split('\n')
                    for (var i = 0, j = 1; i < b.length; i += 20, j++) {
                        // <pb>不能寫在b[0]之前，否則「位元組順序記號」 EF BB BF ，會跑到第2行，變成亂碼
                        b[i] = b[i] + '<pb n="' + j + '"/>'
                    }
                    // 用絕對路徑寫入檔案
                    return fs.writeFileAsync(n + afterName, b.join('\n'), wu)
                        .then(() => {
                            // 完成時返回通知
                            console.log('addpb is OK: ' + n + afterName)
                        })
                })
                .catch(function (error) {
                    // 擷取錯誤
                    console.error(error)
                })
        }
    })
        .catch(function (error) {
            // 擷取錯誤
            console.error(error)
        })
}
// 配合timeEnd()成對出現。 打印出代碼執行的時間
console.time('共耗費了')
// 啟用函數
XmlAddMypb('./')
// 'test'名字要和time()中的名字保持一致
console.timeEnd('共耗費了')