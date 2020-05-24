// 導入模組
var fs = require('fs')
var path = require('path')

// 配合timeEnd()成對出現。 打印出代碼執行的時間
console.time('共耗費了')

// 標記好的檔案，轉為cbreader的xml目錄。及html網頁檔。以便閱讀、搜尋
// 設定共用函數
function addV4OK(file) {
    // 讀取index的檔案，並導入陣列
    var k = fs.readFileSync(file, 'utf8').split('\n')
    // 準備轉另一個HTML的陣列
    var m = []

    // 用for of來轉換二維陣列都失敗，可能在node.js中，都必須用最原始的for循環，及最簡單的正規式
    // 轉換內容
    for (var i = 0; i < k.length; i++) {
        m[i] = []
        if (/^[^T]/.test(k[i])) {
            if (/^T/.test(k[i + 1])) {
                k[i] = k[i] + k[i + 1]
                // 準備轉另一個HTML的陣列
                m[i] = k[i].replace(/║.+$/, '')
                // 刪除行末文字
                k[i] = k[i].replace(/║.+$/, '').replace(/\_/, '_001.xml#')
                // 加上cbreader的標記
                k[i] = k[i].replace(/^(\s*)([^T]+)(T.+$)/, '$1<li><cblink href="XML/T/T22/$3">$2</cblink></li>')
            }
        }
        // 刪除無標記的行，刪除不要的行
        if (/^[T\-【]/.test(k[i])) {
            k[i] = ''
        }
        if (/^\s+$/.test(k[i])) {
            k[i] = ''
        }
        if (/^[T\-【]/.test(m[i])) {
            m[i] = ''
        }
        if (/^\s+$/.test(m[i])) {
            m[i] = ''
        }
    }

    // 刪除空行
    // 無法在陣列中刪除，只好轉入另一個物件中，再刪除空行
    var j = '<pre><h1>四分律綱目</h1>\n' + k.join('\n').replace(/\n+/g, '\n')
    var n = ",'" + m.join("','").replace(/\,\'\'/g, '') + "'"

    // 加上<ol>
    // 無法在前一個循環中加上<ol>標記，會混亂。只好重新加入陣列，再重新循環
    k = j.split('\n')
    for (var i = 0; i < k.length; i++) {
        if (/^[^\t]/.test(k[i]) && /^\t[^\t]/.test(k[i + 1])) {
            k[i] = k[i] + '\n\t<ol>'
        }
        if (/^\t[^\t]/.test(k[i]) && /^\t\t[^\t]/.test(k[i + 1])) {
            k[i] = k[i] + '\n\t\t<ol>'
        }
        if (/^\t/.test(k[i]) && /^[^\t]/.test(k[i + 1])) {
            k[i] = k[i] + '\n\t\t</ol>'
        }
        if (/^\t\t[^\t]/.test(k[i]) && /^\t[^\t]/.test(k[i + 1])) {
            k[i] = k[i] + '\n\t\t</ol>'
        }
    }
    // 補檔頭檔尾的<ol>
    k.unshift('<ol>')
    k.push('</ol>')

    var j = k.join('\n').replace(/\n+/g, '\n')

    // 為了重新命名
    // 取得本檔絕對路徑
    var p = path.parse(file)

    // 用相對路徑寫入檔案
    fs.writeFileSync(p.name + '_ok.xml', j, 'utf8')
    fs.writeFileSync(p.name + '_ok.txt', n, 'utf8')

    // 完成時返回通知
    console.log(file + ' is OK')
}

// 套用檔案
addV4OK('v4Index.txt')
addV4OK('v4Index1.txt')

// 'test'名字要和time()中的名字保持一致
console.timeEnd('共耗費了')