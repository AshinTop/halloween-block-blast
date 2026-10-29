[English](README.md) · [简体中文](README.zh-CN.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [日本語](README.ja.md)

# Witch’s Candy Blocks｜万圣节糖果方块消除与魔药订单

🍬 女巫端来一盘奇形怪状的糖果，坩埚等着你的好点子。**Witch’s Candy Blocks** 在 8×8 棋盘上玩“给下一块留空间”：摆放糖果、填满整行整列，让每次消除都酿成一点午夜魔法。

**[立即试玩](https://halloween-block-blast.crazy3d.org/)** · [浏览全部 12 款万圣节游戏](https://github.com/AshinTop/halloween-games) · [⭐ 在 GitHub 点亮 Star](https://github.com/AshinTop/halloween-block-blast)

README 提供五种语言版本。**游戏界面目前仅支持英语和简体中文**；文档翻译不代表新增了对应界面语言。

![Witch’s Candy Blocks 的八乘八糖果棋盘、三块托盘、蛛网目标与坩埚](docs/images/gameplay.jpg)

## 这款游戏有什么特别

- **8×8 摆放棋盘**配三块托盘；整行和整列可同时清除，交叉格不会重复计算。
- **经典模式**持续挑战分数，另有 **五份固定魔药订单**，每份都验证过完整通关步骤。
- 可拖放，也可先选方块再点落点；支持键盘，提供合法落位和即将清行的预览。
- 每局一次**月光回溯**，完整恢复上次摆放前的棋盘、分数、托盘、目标和随机序列。
- 原创糖果、蛛网、瓶子与坩埚画面，可选合成音效、减少动态效果和本地进度保存。

## 怎么玩

从托盘选一块形状，完整放进棋盘且不能压住已有格子。填满任意一行或一列的八个格子，就会清除它。**颜色无需匹配，方块也不能旋转。** 没有下落倒计时；当前三块全部用完，下一盘才会出现。

**经典模式**要持续腾出空间并提高分数，每清除 12 条线会酿出一瓶魔药。只有托盘里剩下的所有形状都没有合法落点时，才结束本局；某一块暂时放不下，并不代表已经失败。

**魔药订单**要求在限定摆放次数内清掉开局就带蛛网的糖果，新放下的糖果不会变成额外目标。五份订单依次练习单行、成对行、交叉清除、三块之间的安排和双行收尾，起始棋盘与形状顺序固定。

**月光回溯**每局只可使用一次，即使刚刚没有空间，也能退回最后一次摆放；但订单已经完成后不能再撤回。重来会开始新的尝试，月光回溯不是无限撤销。

## 操作方式

| 操作 | 输入方式 |
| --- | --- |
| 选择托盘方块 | 点击／触摸，或 **1／2／3** |
| 摆放方块 | 拖到棋盘，或点击形状左上角应落下的格子 |
| 键盘摆放 | 方向键移动光标，**Enter** 放下 |
| 月光回溯 | **Z** 或回溯按钮 |
| 模式、订单、重来和帮助 | 游戏按钮或紧凑菜单；键盘需要焦点在 iframe 内 |

## 一点小策略

先看完三块形状，再决定把最大的空地用在哪里。有时眼前能清掉一小行，却会让下一块无处可放。订单中重点照顾最初带蛛网的格子，不必把所有彩色糖果都清空。松开拖动前检查预览，把唯一一次月光回溯留给后果超出预想的摆放。

## 存档与挑战链接

本地存储可用时，会保存未完成的经典局、最高分、已完成订单、语言和音效偏好；设备之间没有账号同步。[魔药订单 3](https://halloween-block-blast.crazy3d.org/#order=3)可直接打开对应固定挑战，参数 1–5 选择其他订单。分享的是实际得分或订单结果与链接，不是操作回放，也不上传棋盘。无法复制时会显示可手动选择的文字。

## 实机界面截图与视频介绍

![紧凑糖果方块界面保留棋盘、托盘、订单进度和月光回溯](docs/images/mobile.jpg)

实际游戏在紧凑浏览器 iframe 中的截图，用于展示小窗口布局，不代表实体手机测试。

[打开视频播放器与文字介绍](https://halloween-block-blast.crazy3d.org/intro.html) · [下载 MP4](docs/media/intro.mp4)

**24 秒无声介绍视频**由真实游戏截图与字幕编排而成，用于介绍画面与玩法，并非连续操作录像或音效演示。

## 常见问题

### 它是三消游戏吗？

玩法是摆形状来填满整行整列。颜色只负责表现糖果，不需要相邻交换或凑同色。想玩交换原料的三消，可以试试下方互推的 Witch’s Potion Match。

### 为什么托盘迟迟不补充？

这一盘三块必须全部用完。规划时既要考虑好放的小块，也要给最难摆的形状留位置。

### 月光回溯到底恢复哪些内容？

恢复上一步之前的棋盘、托盘、分数、清行数、蛛网目标和随机状态。每局只有一次，不能无限重复尝试所有落点。

## 本地运行与嵌入

在仓库根目录启动 HTTP 服务：

```sh
python3 -m http.server 4173
```

打开 **http://localhost:4173/**。无需构建或安装依赖；直接使用 `file://` 可能阻止 JavaScript 模块加载。

使用 Node 运行内置检查：

```sh
npm test
```

Node 检查覆盖非法落位、交叉行列同时清除、托盘补充时机、结束状态、确定性生成、五份订单完整解法和经典存档验证。无需安装依赖或构建。

```html
<iframe src="https://halloween-block-blast.crazy3d.org/?embed=1"
  title="Witch’s Candy Blocks"
  style="display:block;width:100%;height:654px;border:0"
  allow="fullscreen" allowfullscreen></iframe>
```

桌面游戏区高度为 **654 px**。浏览器验收覆盖 1160×654、390×650、844×340 这类窗口，并实际完成订单和回溯操作。托盘会随空间移到棋盘旁边或下方；长说明在对话框内部滚动。

尺寸、存储、焦点和权限说明见[嵌入文档](EMBEDDING.md)。请按扣除主站工具栏后的实际剩余高度设置 iframe。

## 继续逛逛万圣节小游戏集

- **[Witch’s Potion Match](https://halloween-potion-match.crazy3d.org/)** · [源码](https://github.com/AshinTop/halloween-potion-match) — 交换魔药原料，触发连锁并点亮烛火。
- **[Pumpkin 2048](https://halloween-2048.crazy3d.org/)** · [源码](https://github.com/AshinTop/halloween-2048) — 合成南瓜数字，挑战指定落点的灯笼试炼。
- **[Trick-or-Treat TriPeaks](https://halloween-tripeaks.crazy3d.org/)** · [源码](https://github.com/AshinTop/halloween-tripeaks) — 串连相邻点数纸牌，挑战八个营救牌局。
- **[Haunted Hearts](https://halloween-love-game.crazy3d.org/)** · [源码](https://github.com/AshinTop/halloween-love-game) — 帮助两只幽灵开门、让路，并分享一盏灯。

## 创作说明与支持

为 **AshinTop** 与 **Midnight Candy Club** 制作，由人主导、AI 辅助设计、编程和审查。插画与合成音效为本项目创作。游戏无需远程账号；托管服务可以独立加入脚本或请求日志。

喜欢的话，欢迎**[点亮 GitHub Star](https://github.com/AshinTop/halloween-block-blast)**。反馈问题时，请附浏览器、iframe 尺寸、挑战链接与复现步骤。
