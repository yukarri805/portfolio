<template>
  <div>
    <div class="kv">
      <img src="@/assets/images/main.jpg" alt="メイン画像" style="width:100%">
    </div>

    <section id="works">
      <div class="container">
        <h2>Works</h2>

        <div class="works-flex-box">

          <div class="works-item">
            <div class="modal">
              <img src="@/assets/images/work-01.png">
              <div class="topWorks-hov">
                <div class="topWorks-exp">
                  <p class="title">新規LP</p>
                  <p class="naiyo">制作期間：約１ヶ月　(2020年４月ごろ）<br>
                    制作担当　：　コーディング
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="works-item">
            <div class="modal">
              <img src="@/assets/images/work-02.png">
              <div class="topWorks-hov">
                <div class="topWorks-exp">
                  <p class="title">新規開発プロジェクト</p>
                  <p class="naiyo">制作期間：約１ヶ月　(2020年２月ごろ）<br>
                    制作担当　：　下層ページ２p コーディング、テスト</p>
                </div>
              </div>
            </div>
          </div>
          <div class="works-item">
            <div class="modal">
              <img src="@/assets/images/work-03.png">
              <div class="topWorks-hov">
                <div class="topWorks-exp">
                  <p class="title">新規システムプロジェクト</p>
                  <p class="naiyo">制作期間：約　ヶ月(2020年7月ごろ）<br>
                    制作担当　：　下層ページ１pコーディング、テスト</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- https://qiita.com/TK-C/items/82443d1d85f2e3bb24a5 これ入れたいな -->
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

    <section id="profile">
      <div class="container">
        <h2 class="title">Profile</h2>
        <dl>
          <dt>名前</dt>
          <dd>宮坂友香里 <span>/ Miyasaka Yukari</span>
          <dt>生年月日</dt>
          <dd>1992/10/05</dd>
          <dt>出身</dt>
          <dd>東京都</dd>
          <dt>略歴</dt>
          <dd>
            2015年3月に産業能率大学を卒業後、４年間営業事務に従事。
            その後早稲田電子IT教育センター(職業訓練校)に入り３ヶ月間、WEBフロント（HTML・CSS）の勉強を行った後、
            現在は留学エージェント会社でHTML・CSS・JSのコーディングやIllustratorやPhotoshopを使用しデジタルパンフレットの作成などを担当。
          </dd>
        </dl>
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
.kv {
  max-width: 1140px;
  height: 430px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
}
.kv img {
  width: 100%;
  height: auto;
  min-height: 100%;
  max-width: inherit;
  position: absolute;
  left: 50%;
  top: 70%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
/* --- works --- */
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
.modal img {
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
.topWorks-exp p.title {
  display: block;
  margin-top: 10%;
  text-align: center;
  font-family: 'Unna', serif;
  letter-spacing: 0.3rem;
  font-size: 20px;
}
.topWorks-exp p.naiyo {
  text-align: center;
  letter-spacing: 0.1rem;
  font-size: 10px;
  margin-top: 3%;
}
.topWorks-hov:hover {
  background-color: rgba(255,255,255,0.9);
  color: #333;
  cursor: pointer;
}
/* --- skill --- */
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
  .kv {
    height: 230px;
  }
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
