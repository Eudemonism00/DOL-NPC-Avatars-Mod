SF版单个头像切换显示功能实际上往存档里增加了一些代码，如果卸载mod后游戏出现问题（虽然应该不可能），则可能需要手动删除代码。

The single avatar switch display in SF actually adds some code to the save files, which may need to be removed manually if the game runs into problems after uninstalling the mod (although this should not be possible).

### Method 1

基于言灵和二代言灵，具体使用方式可自行搜索相关。

需要安装进阶指令（BetterCheatCommandManagement）模组。

Rely on Cheat Command. Need to install the BetterCheatCommandManagement mod.

https://github.com/Tony70124/BetterCheatCommandManagement-for-DOL/releases 

https://tieba.baidu.com/home/main?id=tb.1.e346c92e.63y3gzjx1XT9gyyrNEQbRg&ie=utf-8&fr=pb 

使用下面一段：

Use the following paragraph:

```
<<link [[删除SF版图像数据|$passage]]>><<run delete $robinmodicon>><<run delete $whitneymodicon>>
<<run delete $kylarmodicon>><<run delete $sydneymodicon>><<run delete $alexmodicon>><<run delete $ghmodicon>>
<<run delete $bwmodicon>><<run delete $averymodicon>><<run delete $edenmodicon>><<run delete $baileymodicon>>
<<run delete $briarmodicon>><<run delete $charliemodicon>><<run delete $darrylmodicon>><<run delete $dorenmodicon>>
<<run delete $gwylanmodicon>><<run delete $harpermodicon>><<run delete $jordanmodicon>><<run delete $landrymodicon>>
<<run delete $leightonmodicon>><<run delete $masonmodicon>><<run delete $morganmodicon>><<run delete $rivermodicon>>
<<run delete $sammodicon>><<run delete $sirrismodicon>><<run delete $wintermodicon>><<run delete $nikimodicon>>
<<run delete $quinnmodicon>><<run delete $remymodicon>><<run delete $wrenmodicon>><<run delete $zephyrmodicon>><</link>>
```


### Method 2

基于[存档修改器](https://www.saveeditonline.com/)。

Rely on [Save Editor](https://www.saveeditonline.com/).

游戏内**导出存档**，**UPLOAD FILE**导入存档，等待加载完毕。搜索“modicon”（别把双引号也输入进去了）：

**Save the file** in game, **UPLOAD FILE** in Save Editor, and wait until the loading is complete. Search for "modicon" (don't include double quotes):

![image](https://github.com/Eudemonism00/DOL-npc-avatars-mod/assets/152267917/1d6f4918-84f3-4175-ae43-d6e747a3a75c)

得到类似于图上的结果，将带有搜索结果的行全部删掉（不一定全部堆在一起，记得都删一下）；

下载修改后的存档，重新导入。

To get a result similar to the figure, delete all the rows with the search results (they may not all pile together, remember to delete them all).

Download the modified file and load it again.


### Tips:

- 请一定注意备份，修改存档导致的任何问题我没有任何办法。Please be sure to pay attention to the backup, I can not solve any problems caused by modifying the save.
- 记得先把mod卸载了再删，不然一打开社交页面又恢复原状了。Remember to uninstall the mod before sorting it, otherwise it will be restored once you open the social box.
