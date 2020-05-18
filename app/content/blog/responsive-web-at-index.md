---
title: responsive web at index
date: 2020-04-05T13:20:15.881Z
update: 2020-04-05T13:20:15.888Z
---
今日はレスポンシブ引き続きレスポンシブ対応の話を書く

## 画像

### やりたいこと

違う解像度の画像を同じ幅と高さで表示したい

### 解決法

widthとheightを固定長にして、以下のプロパティを追加することでできる。
```css
object-fit: cover;
```
このプロパティは指定された幅からはみ出た場合は勝手にトリミングされるというもの。
IE9とかは対応していないので、レガシーブラウザーには使えない。~~(そもそもIE9はサポート切れだから使わないでほしい)~~

参考url

-   [https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)