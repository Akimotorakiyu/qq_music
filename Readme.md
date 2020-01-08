# QQ 音乐接口

[移动 web 开放平台](https://y.qq.com/m/api/open/index.html)
[QMplayer](https://xingqiao.gitbooks.io/qmplayer/content/)

## 分享

```html
<script src="https://y.gtimg.cn/music/h5/client/jsbridge.js?max_age=2592000"></script>

<script>
  // 分享
  function initShare(data, callback) {
  	M.client.invoke("ui", "setActionBtn", {
  		type: "icon",
  		content: "share"
  	}, function () {
  		M.client.invoke("other", "callShareWeb", data, callback);
  	})
  }
  
  // 设置分享
  initShare({
  	imgUrl: "https://y.gtimg.cn/music/common/upload/t_cm3_photo_publish/11.png?r=1508325520779",
  	link: location.href,
  	title: "分享标题",
  	desc: "分享简介"
  })

  // 调用分享
  M.client.invoke("other", "callShareWeb", ({
  	imgUrl: "https://y.gtimg.cn/music/common/upload/t_cm3_photo_publish/11.png?r=1508325520779",
  	link: location.href,
  	title: "分享标题",
  	desc: "分享简介"
  })
</script>
```

## 歌曲播放

[demo](http://y.qq.com/m/demo/2017/player.html)

```html
<script src="https://y.gtimg.cn/music/h5/player/player.js?max_age=2592000"></script>

<script>
  // 初始化播放组件
  var player = new QMplayer({ target: "auto" }); // 设置 target=music 时会拉起QQ音乐客户端进行播放

  // 播放歌曲
  player.play("003IPDsn4ZWb5H");

  // 监听事件
  player.on("play", function() {});

  // 支持的方法：play、pause、toggle、playReady、on、off
  // 支持的事件：play、pause、ended、timeupdate、waiting、error
</script>
```

## <meta>

### 缩放设置

```html
<meta
  name="viewport"
  content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0"
/>
```

### 禁用分享

```html
<meta name="qqmusic-set" content="share=0" />
```

### 设置默认分享

```html
<meta itemprop="name" content="标题:必填 长度至少为1" />
<meta itemprop="description" content="摘要:必填 长度至少为1" />
<meta itemprop="image" content="图片地址:可不填" />
```

ps：连接上需要带上参数 show_share=1

## URL 参数

### 安卓音乐内强制开启硬件加速

```
_video=true
```

### 设置标题栏透明化

```
_hidehd=1
```

### 设置标题栏文字及按钮颜色

```
_hdct=1（0-默认、1-黑色、2-白色）
```

### 设置 webview 显示透明度

```
opacity=*（值在0~1之间）
```

### 设置控制按钮类型

```
_button=1（0-默认返回按钮、1-隐藏、2-关闭（叉号））
```

### 启用分享

```
show_share=1（需配合meta参数使用）
```

## QQ 音乐播放器介绍

QQ 音乐音频播放组件是应用于全平台的 js 网页音频播放器，支持播放网络歌曲和 QQ 音乐曲库歌曲
支持功能

    支持播放歌曲id/歌曲mid/歌曲链接

    支持web播放/调用QQ音乐客户端播放

兼容性

移动端 H5 播放器

    web播放支持IOS 7.0 / 安卓4.0以上版本手机

    QQ音乐客户端播放支持QQ音乐6.1以上版本

### CDN

```url
https://y.gtimg.cn/music/h5/player/player.js?max_age=2592000

http://y.gtimg.cn/music/h5/player/player.js?max_age=2592000
```

播放器不绑定 UI，只负责处理播放逻辑

### QMplayer 提供的参数

```ts
var params = {
  target: "auto"
};
var player = new QMplayer(params);
```

| 参数   | 类型    | 默认值 | 描述                                                                |
| ------ | ------- | ------ | ------------------------------------------------------------------- |
| target | String  | "auto" | 播放方式，默认是自动选择 "auto"，值在 Player.TARGET 中定义          |
| filter | Boolean | true   | 是否自动过滤不能播放的歌曲，默认为 true，要播放的第一首歌曲不会过滤 |
| loop   | Boolean | false  | 是否循环播放，默认为 false                                          |
| report | String  | null   | WEB 播放听歌流水上报标识                                            |

### QMplayer 提供的 API 属性

```ts
var player = new QMplayer();
console.log(player.state);
```

| 属性名      | 类型    | 属性                                                         | 描述                                                                |
| ----------- | ------- | ------------------------------------------------------------ | ------------------------------------------------------------------- |
| state       | String  | -                                                            | 获取当前播放状态                                                    |
| currentTime | Number  | -                                                            | 获取或设置音频中的当前播放位置（单位秒），设置功能只对 web 播放有效 |
| duration    | Number  | -                                                            | 获取资源时长（单位秒），未加载到时返回 NaN                          |
| data        | Object  | { state, song, currentTime, duration, songs, index, params } | 获取当前播放歌曲信息                                                |
| loop        | Boolean | -                                                            | 获取或设置循环播放开关                                              |
| target      | Number  | -                                                            | 获取或设置播放方式                                                  |
| report      | String  | -                                                            | 获取或设置 WEB 播放听歌流水上报标识                                 |
| version     | Object  | { build, version }                                           | 获取组件版本号                                                      |

### QMplayer 提供的 API 方法

```ts
var player = new QMplayer();
player.play("003IPDsn4ZWb5H");
```

### 播放控制

#### play

播放歌曲
参数名 |参数类型 |描述
|---|---|---|
songs| Array、Objec、String| 要播放的歌曲列表，没有该参数时使用当前播放的歌曲列表
params| Object |播放控制参数
params.index |Number| 要播放的歌曲索引
params.report |String |web 听歌流水上报

```ts
// 歌曲 mid
player.play("003IPDsn4ZWb5H");

// 歌曲链接
player.play(
  "http://ws.stream.qqmusic.qq.com/lm005d9e8facb91a60f36de44b85ec7a6893.mp3"
);

// 歌曲列表
player.play(["003IPDsn4ZWb5H", "003PMR2c3ohl7o"]);

// 控制参数
player.play(["003IPDsn4ZWb5H", "003PMR2c3ohl7o"], { index: 1 });
```

#### pause

暂停播放

```ts
player.pause();
```

#### toggle

切换播放状态

| 参数名 | 参数类型 | 描述                           |
| ------ | -------- | ------------------------------ |
| play   | Boolean  | 是否播放，不传该参数时自动切换 |

```ts
player.toggle();
```

#### playPrev

播放上一首

```ts
player.playPrev();
```

#### playNext

播放下一首

```ts
player.playNext();
```

#### 事件绑定

##### on

绑定事件

| 参数名   | 参数类型 | 描述         |
| -------- | -------- | ------------ |
| event    | String   | 事件名       |
| listener | Function | 事件监听方法 |

```ts
player.on("play", () => {
  /_ 事件处理逻辑 _/;
});
```

#### off

解除绑定事件，不传 listener 时会移除该事件绑定的所有方法

参数名 |参数类型 |描述
event |String |事件名
listener| Function| 事件监听方法

```ts
// 绑定事件
var onplay = () => {
  /_ 事件处理逻辑 _/;
};
player.on("play", onplay);

// 解除事件绑定
player.off("play", onplay);

// 解除某事件下所有监听绑定
player.off("play");
```

### 辅助方法

#### playReady

解决 ios 无法异步播放的问题，在点击事件中调用，然后就可以异步执行 play 播放

```ts
// 在点击事件里调用 playReady 方法
player.playReady();

// 之后在异步回调中就可以正常播放
setTimeout(() => {
  player.play("003IPDsn4ZWb5H");
});
```

### QMplayer 提供的 API 事件

#### 事件列表

| 事件名     | 描述                         |
| ---------- | ---------------------------- |
| play       | 事件在暂停时触发             |
| pause      | 事件在关闭弹窗时触发         |
| ended      | 事件在播放停止时触发         |
| timeupdate | 事件在播放位置发生改变时触发 |
| waiting    | 事件在缓冲数据时触发         |
| error      | 事件在发生错误时触发         |

#### 绑定事件

```ts
// 初始化时设置
var player = new QMplayer({
  onplay: function() {}
});

// 添加事件监听方法，会移除之前用该方式绑定的监听方法
player.onplay = function() {};

// 添加事件监听方法，会保留该事件的其他监听方法，可同时设置多个事件
player.on("play pause", function() {});
```

#### 取消监听

```ts
// 解除事件绑定
player.off("play", onplay);

// 解除某事件下所有监听绑定
player.off("play");
```

### QMplayer 提供的常量

#### 播放状态 QMplayer.STATE

| 常量                   | 值                 | 描述     |
| ---------------------- | ------------------ | -------- |
| QMplayer.STATE.READY   | "ready" 播放器就绪 |
| QMplayer.STATE.PLAYING | "playing"          | 正在播放 |
| QMplayer.STATE.PAUSE   | "pause"            | 播放暂停 |
| QMplayer.STATE.ENDED   | "ended"            | 播放停止 |
| QMplayer.STATE.ERROR   | "error"            | 播放失败 |

#### 播放方式 QMplayer.TARGET

| 常量                  | 值      | 描述          |
| --------------------- | ------- | ------------- |
| QMplayer.TARGET.AUTO  | "auto"  | 自动选择      |
| QMplayer.TARGET.MUSIC | "music" | QQ 音乐客户端 |
| QMplayer.TARGET.WEB   | "web"   | 网页播放      |

#### 错误类型 QMplayer.ERROR

| 常量                               | 值  | 描述             |
| ---------------------------------- | --- | ---------------- |
| QMplayer.TARGET.GET_SONG_INFO_FAIL | -1  | 查询歌曲信息失败 |
| QMplayer.TARGET.PLAY_SONG_FAIL     | -2  | 播放歌曲失败     |
| QMplayer.TARGET.INVALID_SONG       | 1   | 播放受阻         |
