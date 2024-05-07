// 導入模組
var fs = require('fs')
var path = require('path')

// 配合timeEnd()成對出現。 打印出代碼執行的時間
console.time('共耗費了')

// 規範化檔案路徑
var h = path.normalize('./')
// 取得當前目錄下所有檔案及資料夾
var d = fs.readdirSync(h)

// 刪除不需要的目錄
// node.js 中，很多正規式，都不能用，以下失敗 d = d.replace(',"image"', '')
// var n = d.indexOf('.git')
// d.splice(n, 1)
// var m = d.indexOf('pic')
// d.splice(m, 1)

// 倒轉陣列，以便中文筆劃多的檔在前
d.reverse()

// 設定共用函數
function addDir(IndexName) {
    // 讀取index的檔案，並導入陣列
    var k = fs.readFileSync(IndexName, 'utf8').split('\n')
    // 不必關閉檔案
    // fs.closeSync(path.normalize('./index.html'))

    // 無法在for of中使用正規，以下失敗
    // for (var i of k) {
    //     if (/var ArrLi\s?\=/.test(k)) {
    //         i = 'var ArrLi = ["' + d.join('","') + '"]'
    //     }
    // }

    // 在陣列中找出「檔名陣列」
    for (var i = 0; i < k.length; i++) {
        if (/var ArrLi\s?\=/.test(k[i])) {
            k[i] = 'var ArrLi = ["' + d.join('","') + '"]'
            // 刪除不需要的檔
            k[i] = k[i].replace(',"debug.log"', '')
            .replace(',".git"', '')
            .replace(',"pic"', '')
            .replace(',".vscode"', '')
            .replace(/\,?\"\.gitignore\"/, '')
            .replace(',"icons"', '')
            .replace(',"僧俗.txt"', '')
        }
    }

    // 用相對路徑寫入檔案
    fs.writeFileSync(IndexName, k.join('\n'), 'utf8')

    // 完成時返回通知
    console.log(IndexName + ' is OK')
}

// 套用檔案
addDir('index.html')
addDir('Lum1.html')
addDir('Lum2.html')

// 'test'名字要和time()中的名字保持一致
console.timeEnd('共耗費了')
// 本來只寫入另一檔案DirName.txt，還要人工複製，後來可以直接寫入index.html
// 用相對路徑寫入檔案
// fs.writeFileSync(path.normalize('./DirName.txt'), '["' + d.join('","') + '"]', 'utf8')