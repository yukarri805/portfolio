import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
 //スクロール継続時間
 duration: 1000,
 //速度の緩急
 easing: [0, 0, 0.1, 1],
 //遷移後の位置調整
 offset: 50,
})
