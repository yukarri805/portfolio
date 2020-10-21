<template>
  <div>
    <div class="kv">
      <img src="" alt="メイン画像">
    </div>

  <section class="us">
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
    <div class="container">
      <h2>Works</h2>

      <div class="works-flex-box">

        <div class="works-item">
          <div class="syousai">
            <img src="@/assets/images/work-01.png">
            <div class="topWorks-hov">
              <div class="topWorks-menu">
                <p class="title">新規LP</p>
                <p class="naiyo">制作期間：約１ヶ月　(2020年４月ごろ）<br>
                   制作担当　：　コーディング</p>
              </div>
            </div>
          </div>
        </div>
        <div class="works-item">
          <div class="syousai">
            <img src="@/assets/images/work-02.png">
            <div class="topWorks-hov">
              <p class="topWorks-menu">制作物の説明</p>
            </div>
          </div>
        </div>
        <div class="works-item">
          <div class="syousai">
            <img src="@/assets/images/work-03.png">
            <div class="topWorks-hov">
              <p class="topWorks-menu">制作物の説明</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section id="skills">
    <div class="container">
      <h2 class="title">Skills</h2>

      <h3>coding</h3>

      <div class="skills-flex-box">
        <dl class="skill-item">
          <dt>
            <h4>HTML5</h4>
            <img src="@/assets/images/html.png">
          </dt>
          <dd>
            <p>自己評価レベル：★★★☆☆</p>
            <p class="xs-none">学習期間：1年</p>
            <p>書籍、webサイト業務を通して学習。一般的なwebサイト製作が可能。現在は役割を正確にしたマークアップができるよう勉強中。</p>
          </dd>
        </dl>
        <dl class="skill-item">
          <dt>
            <h4>CSS3</h4>
            <img src="@/assets/images/css.png">
          </dt>
          <dd>
            <p>自己評価レベル：★★★☆☆</p>
            <p class="xs-none">学習期間：1年</p>
            <p>書籍、webサイト業務を通して学習。一般的なwebサイト製作が可能。現在は他の人が見ても読みやすい予測、再利用、保守、拡張しやすい書き方を勉強中。</p>
          </dd>
        </dl>
        <dl class="skill-item">
          <dt>
            <h4>JavaScript</h4>
            <img src="@/assets/images/js.png">
          </dt>
          <dd>
            <p>自己評価レベル：★★★☆☆</p>
            <p class="xs-none">学習期間：1年</p>
            <p>Udemy、書籍、webサイトを通して学習。１からの制作は難しいが、プラグインなど使用しての実装は可能。現在はプラグイン実装の際に記述内容が理解できるよう勉強中。</p>
          </dd>
        </dl>
      </div>

      <h3>design</h3>

      <div class="skills-flex-box">

        <dl class="skill-item">
          <dt>
            <h4>Illustrator</h4>
            <img src="@/assets/images/ai.png">
          </dt>
          <dd>
            <p>自己評価レベル：★★★☆☆</p>
            <p class="xs-none">学習期間：1年</p>
            <p>webサイトで使用する画像の作成や切り抜きが可能。業務でデジタルパンフレットの制作にも携わる。制作していく上でわからない部分は調べながら学習。</p>
          </dd>
        </dl>

        <dl class="skill-item">
          <dt>
            <h4>Photoshop</h4>
            <img src="@/assets/images/ps.png">
          </dt>
          <dd>
            <p>自己評価レベル：★★★☆☆</p>
            <p>学習期間：1年</p>
            <p>webサイトで使用する画像の修正や切り抜きが可能。制作していく上でわからない部分は調べながら学習。</p>
          </dd>
        </dl>

        <dl class="skill-item">
          <dt>
            <h4>XD</h4>
            <img src="@/assets/images/xd.png">
          </dt>
          <dd>
            <p>自己評価レベル：★★★☆☆</p>
            <p class="xs-none">学習期間：1年</p>
            <p>IllustratorやPhotoshou業務経験はないがアセット やコンポーネントを使用してワイヤーフレームなどの制作は可能。制作していく上でわからない部分は調べながら学習。</p>
          </dd>
        </dl>

      </div>

    </div>
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
.works-flex-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 70px;
}
.works-item{
  position: relative;
  width: 32%;
  margin-bottom: 18px;
}
.syousai img {
  vertical-align: bottom;
  max-width: 100%;
  height: auto;
}
.topWorks-hov {
  position: absolute;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 90%;
  transition: all .2s;
  color: transparent;
}
.topWorks-menu p.title {
  display: block;
  margin-top: 10%;
  text-align: center;
  font-family: 'Unna', serif;
  letter-spacing: 0.3rem;
  font-size: 22px;
}
.topWorks-menu p.naiyo {
  text-align: center;
  letter-spacing: 0.1rem;
    font-size: 10px;

}

.topWorks-hov:hover {
  background-color: rgba(255,255,255,0.9);
  color: #333;
  cursor: pointer;
}
/* --- slill --- */
.skills-flex-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.skill-item {
  position: relative;
  width: 32%;
  margin-bottom: 18px;
}
.skill-item p {
  font-size: 0.8rem;
}

@media screen and (max-width: 480px) {
  .xs-none {
    display: none;
  }
  .skill-item, .works-item{
    width: 100%;
  }
  .skill-item dt {
    float: left ;
    clear: left ;
    margin-right: 0.5em ;
    width : 23%;
    text-align: center;
  }
  .skill-item dd {
    margin-top: 20px;
    margin-left: 1em ;
  }
}


</style>
