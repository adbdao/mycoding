// 導入模組
var fs = require('fs')
var path = require('path')

// 規範化檔案路徑
var h = path.normalize('./')
// 取得當前目錄下所有檔案及資料夾
var d = fs.readdirSync(h)
// 刪除.git這個目錄
if (d[0] == '.git') {
    d.shift()
}
// 倒轉陣列，以便中文筆劃多的檔在前
d.reverse()
// 用相對路徑寫入檔案
fs.writeFileSync(path.normalize('./DirName.txt'), '["' + d.join('","') + '"]', 'utf8')
// 完成時返回通知
console.log('DirName is OK')

