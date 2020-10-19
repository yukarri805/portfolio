<template>
<div>
  <div class="kv">
    <img src="" alt="メイン画像">
  </div>

  <section class="section">
    <div class="flex-box">
      <div class="top-left">
        <p>はじめまして</p>
        <p>簡単に自己紹介します。</p>
      </div>
      <div class="top-right">
        <div class="waku">
          <div class="picture-me">
            <img src="" alt="私の写真">
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="works">
    <h2 class="title">Works</h2>
    <p class="subtitle">制作したもの</p>

    <div class="works-flex-box">

      <div class="works-item">
        <img src="">
        <div class="mask">
          <div class="caption">制作物の説明</div>
          <a href=""></a>
        </div>
      </div>

      <div class="works-item">
        <img src="">
        <div class="mask">
          <div class="caption">制作物の説明</div>
          <a href=""></a>
        </div>
      </div>

      <div class="works-item">
        <img src="">
        <div class="mask">
          <div class="caption">制作物の説明</div>
          <a href=""></a>
        </div>
      </div>

      <div class="works-item">
        <img src="">
        <div class="mask">
          <div class="caption">制作物の説明</div>
          <a href=""></a>
        </div>
      </div>

      <div class="works-item">
        <img src="">
        <div class="mask">
          <div class="caption">制作物の説明</div>
          <a href=""></a>
        </div>
      </div>

      <div class="works-item">
        <img src="">
        <div class="mask">
          <div class="caption">制作物の説明</div>
          <a href=""></a>
        </div>
      </div>

    </div>
  </section>

  <section id="skills">
    <h2 class="title">Skills</h2>
    <p class="subtitle">出来ること</p>

    <div class="skills-flex-box">

      <div class="skill-item1">
        <img src="">
        <p>HTML</p>
        <p>自己評価レベル：★★★☆☆</p>
        <p>学習期間：1年</p>
        <p>一般的な制作は可能。現在はわかりやすいタグをつけることができるよう勉強中です</p>
      </div>

      <div class="skill-item">
        <img src="">
        <p>CSS</p>
        <p>自己評価レベル：★★★☆☆</p>
        <p>学習期間：1年</p>
        <p>一般的な制作は可能。現在はわかりやすいタグをつけることができるよう勉強中です</p>
      </div>

      <div class="skill-item">
        <img src="">
        <p>JavaScript</p>
        <p>自己評価レベル：★★★☆☆</p>
        <p>学習期間：1年</p>
        <p>一般的な制作は可能。現在はわかりやすいタグをつけることができるよう勉強中です</p>
      </div>
    </div>

    <div class="skills2-flex-box">

      <div class="skill-item">
        <img src="">
        <p>Illustrator</p>
        <p>自己評価レベル：★★★☆☆</p>
        <p>学習期間：1年</p>
        <p>一般的な制作は可能。現在はわかりやすいタグをつけることができるよう勉強中です</p>
      </div>

      <div class="skill-item">
        <img src="">
        <p>Photoshop</p>
        <p>自己評価レベル：★★★☆☆</p>
        <p>学習期間：1年</p>
        <p>一般的な制作は可能。現在はわかりやすいタグをつけることができるよう勉強中です</p>
      </div>

      <div class="skill-item">
        <img src="">
        <p>XD</p>
        <p>自己評価レベル：★★★☆☆</p>
        <p>学習期間：1年</p>
        <p>一般的な制作は可能。現在はわかりやすいタグをつけることができるよう勉強中です</p>
      </div>

    </div>

    <p>メモ：githubやebook触ったこともいれる？？</p>

  </section>
</div>
</template>

<script>
export default {
  head () {
    return {
      title: "Yukari Miyasaka's Portfolio",
      meta: [
        { hid: 'description', name: 'description', content: '宮坂友香里のポートフォリオです。' }
      ]
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
