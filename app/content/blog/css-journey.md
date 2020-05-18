---
title: css journey
date: 2020-04-01T13:50:00.193Z
update: ''
---

CSSフルスクラッチでやるとなかなかしんどい....そんな思える今日この頃。  
今日はレスポンシブ画像の話。

## つまったところ

### 前提条件
- 画像ファイルを編集用ページにて記事ごとに管理したい(無理矢理画像ファイルだけをcommitしたくない）

パフォーマンスの観点等を考慮し、できれば`srcset`で実装しようとしたが、断念。  
以下の通り`@media`にて対応することにした。

```css
.image { max-width: 700px; }

  @media screen and (max-width: 480px) {
    .image { max-width: 300px; }
  }
```

明日以降は
- 記事内容に日付を表示(ほぼ出来上がりなので確認)
- ヘッダーのwidthの修正

かなぁ。

参考にしたurl

-   https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
-   https://css-tricks.com/responsive-images-css/
-   https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries