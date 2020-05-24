// 導入模組
var fs = require('fs')
// var path = require('path')

// 配合timeEnd()成對出現。 打印出代碼執行的時間
console.time('共耗費了')

// // 規範化檔案路徑
// var h = path.normalize('./')
// // 取得當前目錄下所有檔案及資料夾
// var d = fs.readdirSync(h)

// // 刪除不需要的目錄
// // node.js 中，很多正規式，都不能用，以下失敗 d = d.replace(',"image"', '')
// var n = d.indexOf('.git')
// d.splice(n, 1)
// var m = d.indexOf('pic')
// d.splice(m, 1)

// // 倒轉陣列，以便中文筆劃多的檔在前
// d.reverse()

// 設定共用函數
function addV4() {
    // 讀取index的檔案，並導入陣列
    // var k = fs.readFileSync('v4.txt', 'utf8').split('\n')
    // 不必關閉檔案
    // fs.closeSync(path.normalize('./index.html'))

    // 無法在for of中使用正規，以下失敗
    // for (var i of k) {
    //     if (/var ArrLi\s?\=/.test(k)) {
    //         i = 'var ArrLi = ["' + d.join('","') + '"]'
    //     }
    // }

    // 比丘比丘尼戒條，加上二十犍度名相。本來想用json，但反而複雜，用二維陣列即可，簡單明了
    var ArrBK = [['四波羅夷', '婬戒', '盜戒', '殺人戒', '大妄語戒']
        , ['十三僧伽婆尸沙', '故失精戒', '摩觸女人戒', '與女人麤語戒', '向女歎身索供戒', '媒人戒', '無主僧不處分過量房戒', '有主僧不處分房戒', '無根重罪謗他戒', '假根謗戒', '破僧違諫戒', '助破僧違諫戒', '汙家擯謗違諫戒', '惡性拒僧違諫戒']
        , ['二不定法', '屏處不定戒', '露處不定戒']
        , ['三十尼薩耆波逸提', '長衣過限戒', '離三衣宿戒', '月望衣戒', '取非親里尼衣戒', '使非親里尼浣故衣戒', '從非親里居士乞衣戒', '過分取衣戒', '勸增衣價戒', '勸二家增衣價戒', '過限索衣價戒', '乞蠶綿作袈裟戒', '黑毛作臥具戒', '白衣作臥具戒', '減六年作臥具戒', '不貼坐具戒', '持羊毛過限戒', '使非親里尼浣染毛戒', '畜錢寶戒', '貿寶戒', '販賣戒', '畜長缽過限戒', '乞缽戒', '自乞縷使非親友織戒', '勸織師增衣縷戒', '先與衣後奪戒', '畜七日藥過限戒', '過前求雨衣用戒', '過前受急施衣後畜戒', '有難蘭若離衣宿戒', '迴僧物入己戒']
        , ['九十波逸提', '小妄語戒', '罵戒', '兩舌戒', '共女人宿戒', '共未受具人宿過限戒', '與未具人同誦戒', '向非具人說麤罪戒', '實得道向未具人說戒', '與女人說法過限戒', '掘地戒', '壞生種戒', '異語惱僧戒', '嫌罵僧知事戒', '露地敷僧物不舉戒', '覆處敷僧物不舉戒', '強敷止宿戒', '牽他出僧房戒', '坐脫腳床戒', '用蟲水戒', '覆屋過三節戒', '輒教尼戒', '與尼說法至日暮戒', '譏教尼人戒', '與非親尼衣戒', '與非親尼作衣戒', '獨與尼屏露坐戒', '與尼期行戒', '與尼同船戒', '食尼歎食戒', '與女人期同行戒', '施食處過受戒', '展轉食戒', '別眾食戒', '過兩三缽受食戒', '足食竟更食戒', '勸足食者更食戒', '非時食戒', '食殘宿食戒', '不受食戒', '索美食戒', '與外道食戒', '先受請不囑餘比丘戒', '食家強坐戒', '屏與女坐戒', '獨與女人坐戒', '言與食後不與戒', '過受四月藥請戒', '觀軍戒', '有緣軍中過限戒', '觀軍鬥戰戒', '飲酒戒', '水中戲戒', '擊攊他戒', '不受諫戒', '怖比丘戒', '半月浴過戒', '露地然火戒', '藏他衣缽戒', '輒著他淨施衣戒', '新衣不作壞色著戒', '斷畜生命戒', '飲蟲水戒', '故惱比丘戒', '覆他麤罪戒', '與年不滿受具戒', '發諍戒', '與賊期行戒', '惡見違諫戒', '與被舉比丘同事戒', '畜被擯沙彌戒', '拒勸學戒', '毀訶毘尼戒', '恐舉先言戒', '同羯磨後悔戒', '不與欲起去戒', '與欲後悔戒', '屏聽四諍戒', '瞋打比丘戒', '搏比丘戒', '無根僧殘謗戒', '突入王宮戒', '捉寶戒', '非時入聚落戒', '過量床足戒', '兜羅貯床褥戒', '骨牙角作鍼筒戒', '過量尼師壇戒', '覆瘡衣過量戒', '雨衣過量戒', '與佛等量作衣戒']
        , ['四波羅提提舍尼法', '在俗家從非親尼取食戒', '在俗家偏心授食戒', '學家過受戒', '有難蘭若受食戒']
        , ['百眾學法', '齊整著涅槃僧戒', '齊整著三衣戒', '反抄衣戒', '反抄衣坐戒', '衣纏頸戒', '衣纏頸坐戒', '覆頭戒', '覆頭坐戒', '跳行戒', '跳行坐戒', '蹲坐戒', '叉腰戒', '叉腰坐戒', '搖身戒', '搖身坐戒', '掉臂戒', '掉臂坐戒', '覆身戒', '覆身坐戒', '左右顧視戒', '左右顧視坐戒', '靜默戒', '靜默坐戒', '戲笑戒', '戲笑坐戒', '用意受食戒', '平缽受食戒', '平缽受羹戒', '羹飯等食戒', '以次食戒', '不挑缽中央食戒', '索羹飯戒', '飯覆羹戒', '視比座缽戒', '繫缽想食戒', '大摶食戒', '張口待食戒', '含飯語戒', '遙擲口中戒', '遺落食戒', '頰食戒', '嚼飯作聲戒', '噏飯食戒', '舌舐食戒', '振手食戒', '手把散飯食戒', '污手捉食器戒', '棄洗缽水戒', '生草上大小便戒', '水中大小便戒', '立大小便戒', '為反抄衣者說法戒', '為衣纏頸者說法戒', '為覆頭者說法戒', '為裹頭者說法戒', '為叉腰者說法戒', '為著革屣者說法戒', '為著木屐者說法戒', '為騎乘者說法戒', '佛塔中宿戒', '藏物塔中戒', '著革屣入塔戒', '捉革屣入塔戒', '著革屣繞塔行戒', '著富羅入塔戒', '捉富羅入塔戒', '塔下坐食戒', '塔下擔死屍戒', '塔下埋死屍戒', '塔下燒死屍戒', '向塔燒死屍戒', '塔四邊燒死屍戒', '持死人衣及床塔下過戒', '塔下大小便戒', '向塔大小便戒', '繞塔四邊大小便戒', '持佛像至大小便處戒', '塔下嚼楊枝戒', '向塔嚼楊枝戒', '塔四邊嚼楊枝戒', '塔下涕唾戒', '向塔涕唾戒', '塔四邊涕唾戒', '向塔舒腳坐戒', '安佛像在下房戒', '人坐己立說法戒', '人臥己坐說法戒', '人在座己在非座說法戒', '人在高座己在下座說法戒', '人在前行己在後說法戒', '人在高經行處己在下經行處說法戒', '人在道己在非道說法戒', '攜手在道行戒', '上樹過人戒', '杖絡囊行戒', '為持杖人說法戒', '為持劍人說法戒', '為持矛人說法戒', '為持刀人說法戒', '為持蓋人說法戒']
        , ['七滅諍法', '現前法', '憶念法', '不痴法', '自言治法', '覓罪相法', '多人語法', '草覆地法']

        , ['八波羅夷法', '婬戒', '盜戒', '殺人戒', '大妄語戒', '摩觸戒', '八事成重戒', '覆藏他重戒', '隨舉三諫不捨戒']
        , ['十七僧殘法', '媒嫁戒', '無根重謗戒', '假根謗戒', '詣官言人戒', '度賊女戒', '界外輒解三舉戒', '四獨戒', '受染心男子衣食戒', '勸受染心男子衣食戒', '破僧違諫戒', '助破僧違諫戒', '汙家擯謗違諫戒', '惡性拒僧違諫戒', '習近住違諫戒', '謗僧勸習近住違諫戒', '瞋心捨三寶違僧三諫戒', '發起四諍謗僧違諫戒']
        , ['三十捨墮法', '長衣過限戒', '離五衣宿戒', '一月衣戒', '從非親里居士乞衣戒', '過知足受衣戒', '勸增衣價戒', '勸二家增衣價戒', '過限匆切索衣價戒', '畜錢寶戒', '貿寶戒', '販賣戒', '乞缽戒', '乞縷使非親織戒', '勸織師增衣縷戒', '與他衣強奪戒', '畜七日藥過限戒', '過前受急施衣過後畜戒', '迴僧物入己戒', '乞酥油戒', '互用說戒堂物戒', '迴現前僧食直用作五衣戒', '互用別房戒', '互為現前僧堂戒', '畜長缽過限戒', '過畜十六枚器戒', '許病衣不與戒', '過前求雨衣用戒', '貿易衣已後強奪戒', '過乞重衣戒', '過乞輕衣戒']
        // 2018.09.26已更新「誦戒前懺悔」app程式，修正比丘尼戒條中之誤，除了單提的前69條，及百眾學法 用佛瑩法師的科文外，皆改用《四分律》的科文。之前是用佛瑩法師的科文，但轉換時誤刪所有單提的第一個字！
        , ['一百七十八單提法', '小妄語戒', '毀訾語戒', '兩舌戒', '共男子同室宿戒', '共未受具人同宿過限戒', '與未受具人同誦戒', '向未受具人說他麤罪戒', '實得道向未具者說戒', '與男子說法過五六語戒', '掘地戒', '壞生種戒', '異語惱僧戒', '嫌罵僧知事戒', '露敷僧物戒', '屏處敷僧臥具戒', '強敷僧臥具惱他戒', '牽他出房戒', '坐脫腳床戒', '用蟲水戒', '覆屋過三節戒', '施一食處過受戒', '別眾食戒', '取行人糧過三缽戒', '非時食戒', '食殘宿食戒', '不受食戒', '不囑同利入聚落戒', '食家強坐戒', '共俗男子屏坐戒', '共男子露坐戒', '驅他出聚戒', '過受四月藥戒', '觀軍陣戒', '有緣軍中過限宿戒', '觀軍合戰戒', '飲酒戒', '水中戲戒', '擊攊他戒', '不受諫戒', '恐怖他戒', '減半月洗浴戒', '露地燃火戒', '藏他衣缽戒', '真實淨不與取戒', '著新衣不壞色戒', '殺畜生戒', '飲蟲水戒', '疑惱他戒', '覆他殘罪戒', '發諍戒', '與賊期同道行戒', '惡見違諫戒', '隨舉戒', '隨擯沙彌尼戒', '拒勸學戒', '毀毘尼戒', '恐舉先言戒', '同羯磨賞知事後悔謗僧戒', '不與欲戒', '與欲後悔戒', '屏聽諍事戒', '瞋打比丘尼戒', '搏比丘尼戒', '無根僧殘謗他戒', '突入王宮戒', '捉寶戒', '非時入聚落戒', '過量造床戒', '兜羅綿貯床褥戒', '食蒜戒', '剃三處毛戒', '洗淨過分戒', '用胡膠作男根戒', '共相拍戒', '供僧水扇戒', '乞生五穀戒', '生草上大小便戒', '不看棄大小便戒', '觀伎樂戒', '共男子入屏處共語戒', '共男子入屏障處戒', '遣伴遠去與男子屏處耳語戒', '入白衣舍坐已不辭主人去戒', '輙坐他牀戒', '白衣舍輒宿戒', '與男人入闇室戒', '不審諦受語向人說戒', '惡心咒詛戒', '因瞋椎胸戒', '覆身同牀戒', '同被裖臥戒', '故惱客舊戒', '同活尼病不看戒', '安居中牽他出房戒', '三時無事遊行戒', '安居竟不知請戒', '邊界恐怖處遊行戒', '界內遶城四邊有疑恐處遊行戒', '習近住違諫戒', '往觀王宮戒', '泉渠水中露身洗浴戒', '過量浴衣戒', '縫僧伽梨過五日戒', '過五日不看僧伽梨戒', '與僧衣作留難戒', '輒著他衣戒', '與俗人外道衣戒', '遮僧分衣戒', '停眾僧出功德衣戒', '遮比丘尼僧不出功德衣戒', '不與他滅諍戒', '與白衣外道食戒', '為白衣作使戒', '自手紡績戒', '著俗服輒在白衣牀臥戒', '經宿不辭主人去戒', '自誦咒術戒', '教人誦習咒術戒', '度妊身女人戒', '度乳身婦女戒', '度童女年不滿受具戒', '不與二歲學戒羯磨戒', '不說六法名字戒', '度諸遮童女戒', '度少年曾嫁婦受具戒', '度受諸遮曾嫁婦女戒', '度婬女戒', '不與二事攝弟子戒', '不二歲隨和尚尼戒', '違僧度人授具戒', '未滿十二夏度人戒', '無德度人戒', '不聽度人謗僧戒', '父母夫主不聽輒度人戒', '度惡行喜瞋者戒', '不與學戒尼受具戒', '受衣已不與授具足戒', '多度弟子戒', '不即往大僧求具戒', '教授日不往聽戒', '不半月請教授師戒', '不詣大僧自恣戒', '不依大僧安居戒', '不白入大僧寺戒', '訶罵比丘戒', '罵尼眾戒', '不白眾使男子治癰戒', '背請戒', '於家生嫉妬心戒', '用香塗摩身戒', '以胡麻滓塗摩身戒', '使比丘尼塗摩身戒', '使式叉摩那塗摩身戒', '使沙彌尼塗摩身戒', '使白衣婦女塗摩身戒', '著貯跨衣戒', '畜婦女嚴身具戒', '著革屣持蓋行戒', '乘乘行戒', '不著僧祇支入村戒', '向暮至白衣家戒', '向暮開僧伽藍門戒', '日沒開僧伽藍門戒', '不安居戒', '度有病女受具戒', '與二形人受具戒', '與二道合人受具戒', '與負債難病難人受具戒', '誦咒為活命戒', '以世俗伎術教授白衣戒', '被擯不去戒', '先不請比丘尼輒問義戒', '身業惱他戒', '在比丘寺內起塔戒', '百歲尼不敬比丘戒', '搖身趨行戒', '作婦女莊嚴香塗身戒', '使外道女香塗身戒']
        , ['八波羅提提舍尼法', '無病乞酥食戒', '無病乞油食戒', '無病乞蜜食戒', '無病乞黑石蜜食戒', '無病乞乳食戒', '無病乞酪食戒', '無病乞魚食戒', '無病乞肉食戒']
        , ['百眾學戒法', '齊整著涅槃僧戒', '齊整著五衣戒', '反抄衣戒', '反抄衣坐戒', '衣纏頸入白衣舍戒', '衣纏頸入白衣舍坐戒', '覆頭入白衣舍戒', '覆頭入白衣舍坐戒', '跳行入白衣舍戒', '跳行入白衣舍坐戒', '蹲坐戒', '叉腰戒', '叉腰坐戒', '搖身戒', '搖身坐戒', '掉臂戒', '掉臂坐戒', '覆身戒', '覆身坐戒', '左右顧視戒', '左右顧視坐戒', '靜默戒', '靜默坐戒', '戲笑戒', '戲笑坐戒', '用意受食戒', '平缽受食戒', '平缽受羹戒', '羹飯等食戒', '以次食戒', '不挑缽中央食戒', '索羹飯戒', '飯覆羹戒', '視比座缽戒', '繫缽想食戒', '大摶食戒', '張口待食戒', '含飯語戒', '遙擲口中戒', '遺落食戒', '頰食戒', '嚼飯作聲戒', '噏飯食戒', '舌舐食戒', '振手食戒', '手把散飯食戒', '污手捉食器戒', '棄洗缽水戒', '生草上大小便戒', '水中大小便戒', '立大小便戒', '為反抄衣者說法戒', '為衣纏頸者說法戒', '為覆頭者說法戒', '為裹頭者說法戒', '為叉腰者說法戒', '為著革屣者說法戒', '為著木屐者說法戒', '為騎乘者說法戒', '佛塔中宿戒', '藏物塔中戒', '著革屣入塔戒', '捉革屣入塔戒', '著革屣遶塔行戒', '著富羅入佛塔戒', '捉富羅入塔戒', '塔下坐食戒', '塔下擔死屍戒', '塔下埋死屍戒', '塔下燒死屍戒', '向塔燒死屍戒', '塔四邊燒死屍戒', '持死人衣及床塔下過戒', '塔下大小便戒', '向塔大小便戒', '遶塔四邊大小便戒', '持佛像至大小便處戒', '塔下嚼楊枝戒', '向塔嚼楊枝戒', '塔四邊嚼楊枝戒', '塔下涕唾戒', '向塔涕唾戒', '塔四邊涕唾戒', '向塔舒腳坐戒', '安佛像在下房戒', '人坐己立說法戒', '人臥己坐說法戒', '人在座己在非座說法戒', '人在高座己在下座說法戒', '人在前行己在後說法戒', '人在高經行處己在下經行處說法戒', '人在道己在非道說法戒', '攜手在道行戒', '上樹戒', '杖絡囊戒', '為持杖人說法戒', '為持劍人說法戒', '為持鉾人說法戒', '為持刀人說法戒', '為持蓋人說法戒']
        , ['七滅諍法', '現前法', '憶念法', '不癡法', '自言治法', '覓罪相法', '多人語法', '草覆地法']
        , ['八敬法', '禮敬比丘', '不得訶罵比丘', '不得舉比丘罪', '式叉尼當於二部僧中求大戒', '尼犯第二篇應於二部僧中懺', '半月當請大僧教授', '結夏必依大僧', '解夏應詣僧中求自恣']
        , ['二十犍度', '受戒犍度', '說戒犍度', '安居犍度', '自恣犍度', '皮革犍度', '衣犍度', '藥犍度', '迦稀那衣犍度', '俱睒彌犍度', '瞻波犍度', '呵責犍度', '人犍度', '覆藏犍度', '遮犍度', '破僧犍度', '滅諍犍度', '尼犍度', '法犍度', '房舍犍度', '雜犍度']
    ]
    // 羯磨總數
    var ArrKamma = [
        // '單白羯磨有39'
        ['單白羯磨', '三十中二十七受懺法', '行缽法', '餘語法', '觸惱法', '與剃髮法', '與出家法', '差教授法', '喚入眾法', '對眾問和法', '說戒和法', '僧懺悔法', '僧發露法', '非時和合法', '諍滅說戒法', '自恣和合法', '難事略自恣法', '修道增自恣法', '諍事增自恣法', '第二諍增自恣法', '受功德衣和法', '捨功德衣法', '第一增說戒法', '第二增說戒法', '簡集智人法', '斷事遣不誦戒毗尼者出二法', '遣捨正義者出法', '草覆地法', '差往王城結集法', '迦葉論法毗尼法', '問優波離法毗尼法', '優波離答法', '問阿難法毗尼法', '阿難答法', '七百中論法白', '差比丘論法白', '正論法毗尼法白', '問一切去上座白', '上座答白', '行舍羅應有法白']
        // , '白二羯磨有57'
        , ['白二羯磨', '作小房法', '作大房法', '差分臥具法', '差說麤罪法', '二十七還衣法', '離衣法', '減六年臥具法', '護缽法', '差教授尼師法', '制不往學家法', '解制不往學家法', '畜眾法', '尼差求教授法', '尼差自恣人往大僧中法', '與外道住法', '結受戒小界法', '解受戒小界法', '結說戒堂法', '解說戒堂法', '結大界法', '解大界法', '結戒場法', '結不失衣界法', '解不失衣界法', '結說戒小界法', '解說戒小界法', '結二同界法', '結一同界法', '結食同法上三應有解', '與狂癡法', '解狂癡法', '受日法', '差受自恣人法', '結自恣小界法', '解自恣小界法', '分四方僧物法', '賞看病人法', '分亡人輕物法', '結庫藏法', '差人守藏法', '結淨地法', '解淨地法', '差人守功德衣法', '付功德衣法', '差人懺白衣法', '差人行籌法', '遣信受戒差使法', '尼與僧作不禮法', '解尼與僧作不禮法', '差比丘料理房法', '持故房與道俗經營法', '持故房與道俗經營治法', '與覆缽法', '差使告覆缽家法', '解覆缽法', '杖絡囊法', '差分粥', '分小食', '分佉闍尼', '差請敷臥', '分浴衣', '分衣可取可與', '差比丘沙彌使']
        // , '白四羯磨有38'
        , ['白四羯磨', '諫破僧法', '諫助破僧法', '諫擯謗法', '諫惡性法', '諫惡邪法', '諫惡邪沙彌', '擯惡邪沙彌', '諫隨舉比丘尼法', '諫習近住法', '諫勸習近住法', '諫瞋捨三寶法', '諫發諍法', '諫習近居士子法', '式叉學戒法', '受具戒法', '學悔法', '訶責法', '解訶責法', '擯出法', '解擯出法', '依止法', '解依止法', '遮不至白衣家法', '解遮不至白衣家法', '不見舉法', '解不見舉法', '不懺舉法', '解不懺舉法', '不捨舉法', '解不捨舉法', '與覆藏法', '本日治法', '摩那埵法', '出罪', '憶念法', '不癡法', '罪處所法', '解罪處所法']
        // , '對首法有33'
        , ['但對首法', '受三衣法', '捨三衣法', '受缽法', '捨缽法', '受尼師壇法', '捨尼師壇法', '受百一衣物法', '捨百一衣物法', '捨請法', '捨戒法', '受請依止法', '衣說淨法 缽說淨法 藥說淨法', '受三藥法', '受七日法', '安居法', '與欲法', '懺波逸提法', '懺提舍尼法', '懺偷蘭遮法', '懺重突吉羅法', '自露六聚法', '露他重罪法', '捨僧殘行法', '白行行法', '白僧殘諸行法', '白入聚法', '尼白入僧寺法 尼請教授法', '作餘食法']
        , ['眾法對首', '捨墮法', '說戒法', '自恣法', '受僧得施法', '受亡五眾物法']
        // , '心念法有14'
        , ['但心念法', '懺輕突吉羅法', '六念法', '說戒座中發露諸罪法']
        , ['對首心念法', '安居法', '說淨法', '受藥法', '受七日法', '受持三衣法', '捨三衣法', '受持缽法']
        , ['眾法心念法', '說戒法', '自恣法', '受僧得施法', '受亡五眾衣物法']
    ]
    // 用for of來轉換二維陣列都失敗，可能在node.js中，都必須用最原始的for循環，及最簡單的正規式
    // 循環戒條
    for (var i = 0; i < ArrBK.length; i++) {
        for (var j = 1; j < ArrBK[i].length; j++) {
            ArrBK[i][j] = '\t' + ArrBK[i][j] + '\n\t\t' + '緣起 ' + ArrBK[i][j] + ' ' + ArrBK[i][0] + ' 四分律\n\t\t' + '戒條 ' + ArrBK[i][j] + ' ' + ArrBK[i][0] + ' 四分律\n\t\t' + '釋義 ' + ArrBK[i][j] + ' ' + ArrBK[i][0] + ' 四分律\n\t\t' + '犯相 ' + ArrBK[i][j] + ' ' + ArrBK[i][0] + ' 四分律\n\t\t' + '兼制 ' + ArrBK[i][j] + ' ' + ArrBK[i][0] + ' 四分律\n\t\t' + '附隨 ' + ArrBK[i][j] + ' ' + ArrBK[i][0] + ' 四分律\n\t\t' + '方便罪 ' + ArrBK[i][j] + ' ' + ArrBK[i][0] + ' 四分律\n\t\t' + '開緣不犯 ' + ArrBK[i][j] + ' ' + ArrBK[i][0] + ' 四分律'
        }
        // 先join一次
        ArrBK[i] = ArrBK[i].join('\n')
    }
    // 循環羯磨
    for (var i = 0; i < ArrKamma.length; i++) {
        for (var j = 1; j < ArrKamma[i].length; j++) {
            ArrKamma[i][j] = '\t\t' + ArrKamma[i][j] + ' ' + ArrKamma[i][0] + ' 四分律'
        }
        // 先join一次
        ArrKamma[i] = ArrKamma[i].join('\n')
    }
    // 在陣列中找出「檔名陣列」
    // for (var i = 0; i < k.length; i++) {
    //     if (/var ArrLi\s?\=/.test(k[i])) {
    //         k[i] = 'var ArrLi = ["' + d.join('","') + '"]'
    //     }
    // }

    // 用相對路徑寫入檔案
    fs.writeFileSync('v4.txt', ArrBK.join('\n') + '\n======\n' + ArrKamma.join('\n'), 'utf8')

    // 完成時返回通知
    console.log('v4.txt is OK')
}

// 套用檔案
addV4()

// 'test'名字要和time()中的名字保持一致
console.timeEnd('共耗費了')
// 本來只寫入另一檔案DirName.txt，還要人工複製，後來可以直接寫入index.html
// 用相對路徑寫入檔案
// fs.writeFileSync(path.normalize('./DirName.txt'), '["' + d.join('","') + '"]', 'utf8')