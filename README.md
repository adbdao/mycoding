## 我自己學習，並試作的JS網頁程式  
### 主要為了寺院文書工作，補充：市面上程式所缺少的功能！  
> #### 聲明：其中有些函數，是網路上擷取來的，不完全是我寫的，著作權屬於原著者，我只是拿公開的程式碼來使用、開發…而已！  
  
>> 展示網址 https://adbdao.github.io/mycoding/  
  
>> Blogger http://adbdao.blogspot.com/  
  
---  
#### Git常用指令  
* 刪除上一次推送。出問題時，使用此命令  
git remote rm origin  
  
* 一次進行：加入與提交  
git commit -a -m "first commit"  
或者  
git commit -am "first commit"  
  
* 將這次提交，合併到上一次提交  
git commit --amend --no-edit  
合并上一次提交（用于反复修改）  
git commit --amend -m 'xxx'  
  
---  
#### Git基本起始指令  
1. echo "# mycoding" >> README.md  
git init  
git add README.md  
git commit -m "first commit"  
git remote add origin https://github.com/adbdao/mycoding.git  
git push -u origin master  
  
2. 直接拉取  
git clone https://github.com/adbdao/mycoding.git  
git remote add origin https://github.com/adbdao/mycoding.git  
git push -u origin master  