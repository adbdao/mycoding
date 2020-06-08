// 導入模組
var fs = require('fs')
var path = require('path')

// 配合timeEnd()成對出現。 打印出代碼執行的時間
console.time('共耗費了')

// 標記好的檔案，轉為cbreader的xml目錄、html網頁檔、Accelon3的XML檔。以便閱讀、搜尋
// 設定共用函數
function addV4OK(file) {
    // 讀取index的檔案，並導入陣列
    var k = fs.readFileSync(file, 'utf8').split('\n')
    // 準備轉另一個HTML,XML的陣列
    var m = [], x = [], ZZ, PP1, PP2, PP3

    // 用for of來轉換二維陣列都失敗，可能在node.js中，都必須用最原始的for循環，及最簡單的正規式
    // 轉換內容
    for (var i = 0; i < k.length; i++) {
        if (/^[^T]/.test(k[i])) {
            if (/^T/.test(k[i + 1])) {
                k[i] = k[i] + k[i + 1]
                // 刪除行末文字
                // m[i]準備轉另一個HTML的陣列
                m[i] = k[i] = k[i].replace(/║.+$/, '')
                // 準備轉另一個Accelon3的XML的陣列，加入一個內嵌的<有>，頻次檢索時，呈現才不會差一行
                x[i] = m[i].replace(/^([^T]+)T(\d+)n\d+\_p0?(\d+\w)(\d+)/, '<聯 i="taisho?$2p$3\#$4"><有>$1</有></聯>　<聯 i="rdg2011?$2p$3\#$4">校勘版</聯>')
                // 在行內加上<章節>樹狀目錄無法呈現內容，必須分行
                if (/\<有\>[^\t]/.test(x[i])) {
                    x[i] = x[i].replace(/^([^有]+有\>)([^<]+)(\<\/有\>.+)/, '<章>$2</章>\n$1$2$3')
                }
                if (/\<有\>\t[^\t]/.test(x[i])) {
                    x[i] = x[i].replace(/^([^有]+有\>)([^<]+)(\<\/有\>.+)/, '<節>$2</節>\n$1$2$3')
                }

                // cbeta的xml一卷一個，所以要判斷
                // 取出頁碼
                PP1 = k[i].substr(k[i].indexOf('p') + 1, 4)
                // 取出欄號，轉成數字
                if (/a/.test(k[i])) { PP2 = '1' }
                if (/b/.test(k[i])) { PP2 = '2' }
                if (/c/.test(k[i])) { PP2 = '3' }
                // 取出行號
                PP3 = k[i].substr(k[i].length - 2, 2)
                // 三個相加，變成數字，才可以判斷大小
                ZZ = Number(PP1 + PP2 + PP3)
                // 四分律各卷首的行號，來判斷大小，加入xml號   
                if (ZZ < 575303) { k[i] = k[i].replace(/\_/, '_001.xml#') }
                if (575304 < ZZ && ZZ < 581125) { k[i] = k[i].replace(/\_/, '_002.xml#') }
                if (581201 < ZZ && ZZ < 588104) { k[i] = k[i].replace(/\_/, '_003.xml#') }
                if (588105 < ZZ && ZZ < 594228) { k[i] = k[i].replace(/\_/, '_004.xml#') }
                if (594301 < ZZ && ZZ < 601224) { k[i] = k[i].replace(/\_/, '_005.xml#') }
                if (601301 < ZZ && ZZ < 608113) { k[i] = k[i].replace(/\_/, '_006.xml#') }
                if (608114 < ZZ && ZZ < 614322) { k[i] = k[i].replace(/\_/, '_007.xml#') }
                if (615101 < ZZ && ZZ < 621224) { k[i] = k[i].replace(/\_/, '_008.xml#') }
                if (621301 < ZZ && ZZ < 626310) { k[i] = k[i].replace(/\_/, '_009.xml#') }
                if (626311 < ZZ && ZZ < 634101) { k[i] = k[i].replace(/\_/, '_010.xml#') }
                if (634102 < ZZ && ZZ < 641226) { k[i] = k[i].replace(/\_/, '_011.xml#') }
                if (641301 < ZZ && ZZ < 649304) { k[i] = k[i].replace(/\_/, '_012.xml#') }
                if (649305 < ZZ && ZZ < 657206) { k[i] = k[i].replace(/\_/, '_013.xml#') }
                if (657207 < ZZ && ZZ < 663210) { k[i] = k[i].replace(/\_/, '_014.xml#') }
                if (663211 < ZZ && ZZ < 670203) { k[i] = k[i].replace(/\_/, '_015.xml#') }
                if (671101 < ZZ && ZZ < 677316) { k[i] = k[i].replace(/\_/, '_016.xml#') }
                if (677317 < ZZ && ZZ < 685124) { k[i] = k[i].replace(/\_/, '_017.xml#') }
                if (685201 < ZZ && ZZ < 692303) { k[i] = k[i].replace(/\_/, '_018.xml#') }
                if (692304 < ZZ && ZZ < 699310) { k[i] = k[i].replace(/\_/, '_019.xml#') }
                if (699311 < ZZ && ZZ < 707124) { k[i] = k[i].replace(/\_/, '_020.xml#') }
                if (707201 < ZZ && ZZ < 713329) { k[i] = k[i].replace(/\_/, '_021.xml#') }
                if (714101 < ZZ && ZZ < 721201) { k[i] = k[i].replace(/\_/, '_022.xml#') }
                if (721202 < ZZ && ZZ < 728219) { k[i] = k[i].replace(/\_/, '_023.xml#') }
                if (728220 < ZZ && ZZ < 735308) { k[i] = k[i].replace(/\_/, '_024.xml#') }
                if (735309 < ZZ && ZZ < 743112) { k[i] = k[i].replace(/\_/, '_025.xml#') }
                if (743113 < ZZ && ZZ < 750121) { k[i] = k[i].replace(/\_/, '_026.xml#') }
                if (750122 < ZZ && ZZ < 757304) { k[i] = k[i].replace(/\_/, '_027.xml#') }
                if (757305 < ZZ && ZZ < 764312) { k[i] = k[i].replace(/\_/, '_028.xml#') }
                if (764313 < ZZ && ZZ < 771123) { k[i] = k[i].replace(/\_/, '_029.xml#') }
                if (771201 < ZZ && ZZ < 778213) { k[i] = k[i].replace(/\_/, '_030.xml#') }
                if (779101 < ZZ && ZZ < 786312) { k[i] = k[i].replace(/\_/, '_031.xml#') }
                if (786313 < ZZ && ZZ < 794306) { k[i] = k[i].replace(/\_/, '_032.xml#') }
                if (794307 < ZZ && ZZ < 803119) { k[i] = k[i].replace(/\_/, '_033.xml#') }
                if (803120 < ZZ && ZZ < 812215) { k[i] = k[i].replace(/\_/, '_034.xml#') }
                if (812216 < ZZ && ZZ < 821203) { k[i] = k[i].replace(/\_/, '_035.xml#') }
                if (821204 < ZZ && ZZ < 830124) { k[i] = k[i].replace(/\_/, '_036.xml#') }
                if (830201 < ZZ && ZZ < 837312) { k[i] = k[i].replace(/\_/, '_037.xml#') }
                if (837313 < ZZ && ZZ < 845129) { k[i] = k[i].replace(/\_/, '_038.xml#') }
                if (845201 < ZZ && ZZ < 851323) { k[i] = k[i].replace(/\_/, '_039.xml#') }
                if (852101 < ZZ && ZZ < 859204) { k[i] = k[i].replace(/\_/, '_040.xml#') }
                if (859205 < ZZ && ZZ < 866223) { k[i] = k[i].replace(/\_/, '_041.xml#') }
                if (866301 < ZZ && ZZ < 874224) { k[i] = k[i].replace(/\_/, '_042.xml#') }
                if (874301 < ZZ && ZZ < 885107) { k[i] = k[i].replace(/\_/, '_043.xml#') }
                if (885108 < ZZ && ZZ < 893326) { k[i] = k[i].replace(/\_/, '_044.xml#') }
                if (894101 < ZZ && ZZ < 903320) { k[i] = k[i].replace(/\_/, '_045.xml#') }
                if (904101 < ZZ && ZZ < 913311) { k[i] = k[i].replace(/\_/, '_046.xml#') }
                if (913312 < ZZ && ZZ < 920116) { k[i] = k[i].replace(/\_/, '_047.xml#') }
                if (920117 < ZZ && ZZ < 927322) { k[i] = k[i].replace(/\_/, '_048.xml#') }
                if (928101 < ZZ && ZZ < 936217) { k[i] = k[i].replace(/\_/, '_049.xml#') }
                if (936218 < ZZ && ZZ < 944101) { k[i] = k[i].replace(/\_/, '_050.xml#') }
                if (944102 < ZZ && ZZ < 951205) { k[i] = k[i].replace(/\_/, '_051.xml#') }
                if (951206 < ZZ && ZZ < 958310) { k[i] = k[i].replace(/\_/, '_052.xml#') }
                if (958311 < ZZ && ZZ < 966111) { k[i] = k[i].replace(/\_/, '_053.xml#') }
                if (966112 < ZZ && ZZ < 971303) { k[i] = k[i].replace(/\_/, '_054.xml#') }
                if (971304 < ZZ && ZZ < 978314) { k[i] = k[i].replace(/\_/, '_055.xml#') }
                if (978315 < ZZ && ZZ < 986218) { k[i] = k[i].replace(/\_/, '_056.xml#') }
                if (986219 < ZZ && ZZ < 994112) { k[i] = k[i].replace(/\_/, '_057.xml#') }
                if (994113 < ZZ && ZZ < 1001313) { k[i] = k[i].replace(/\_/, '_058.xml#') }
                if (1001314 < ZZ && ZZ < 1008202) { k[i] = k[i].replace(/\_/, '_059.xml#') }
                if (1008203 < ZZ) { k[i] = k[i].replace(/\_/, '_060.xml#') }

                // 加上cbreader2019的目錄標記
                k[i] = k[i].replace(/^(\s*)([^T]+)(T.+$)/, '$1<li><cblink href="XML/T/T22/$3">$2</cblink></li>')
            }
        }
        // 刪除無標記的行，刪除不要的行
        if (/^[T\-【]/.test(k[i])) {
            k[i] = ''
            // 測試：是否有此不必要的行，結果，只有a1存在，不知何因？
            // console.log('a1')
        }
        if (/^\s+$/.test(k[i])) {
            k[i] = ''
            // console.log('a2')
        }
        if (/^[T\-【]/.test(m[i])) {
            m[i] = ''
            // console.log('a3')
        }
        if (/^\s+$/.test(m[i])) {
            m[i] = ''
            // console.log('a4')
        }
    }

    // 刪除空行
    // 無法在陣列中刪除，只好轉入另一個物件中，再刪除空行
    var j = k.join('\n').replace(/\n+/g, '\n')
    var n = ",'" + m.join("','").replace(/\,\'\'/g, '') + "'"
    var y = x.join('\n').replace(/\n+/g, '\n')

    // 加上<ol>
    // 無法在前一個循環中加上<ol>標記，會混亂。只好重新加入陣列，再重新循環
    k = j.split('\n')
    for (var i = 0; i < k.length; i++) {
        if (/^[^\t]/.test(k[i]) && /^\t[^\t]/.test(k[i + 1])) {
            k[i] = k[i].replace('</li>','')
            k[i] = k[i] + '\n\t<ol>'
        }
        if (/^\t[^\t]/.test(k[i]) && /^\t\t[^\t]/.test(k[i + 1])) {
            k[i] = k[i].replace('</li>','')
            k[i] = k[i] + '\n\t\t<ol>'
        }
        if (/^\t/.test(k[i]) && /^[^\t]/.test(k[i + 1])) {
            k[i] = k[i] + '\n\t\t</ol>\n\t\t</li>\n\t</ol>\n\t</li>'
        }
        if (/^\t\t[^\t]/.test(k[i]) && /^\t[^\t]/.test(k[i + 1])) {
            k[i] = k[i] + '\n\t\t</ol>\n\t\t</li>'
        }
    }
    // 補檔頭檔尾的<ol>
    k.unshift('<nav type="catalog">\n<h1>四分律綱目</h1>\n<ol>')
    k.push('</ol></li></ol>\n</nav>')
    // 重新轉入物件，刪除空行
    j = k.join('\n').replace(/\n+/g, '\n')

    // 為了重新命名
    // 取得本檔絕對路徑
    var p = path.parse(file)

    // 用相對路徑寫入檔案
    fs.writeFileSync(p.name + '_ok.xml', j, 'utf8')
    fs.writeFileSync(p.name + '_ok.txt', n, 'utf8')
    fs.writeFileSync(p.name + '_A3_ok.xml', y, 'utf8')

    // 完成時返回通知
    console.log(file + ' is OK')
}

// 套用檔案
addV4OK('v4Index.txt')
addV4OK('v4Index1.txt')

// 'test'名字要和time()中的名字保持一致
console.timeEnd('共耗費了')