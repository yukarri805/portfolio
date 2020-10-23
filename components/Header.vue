<template>
  <header>
    <nav id="gnav">
      <div class="nav-box">
        <h1 class="logo"><span>Portfolio</span><br>yukari</h1>
        <ul class="pc-menu">
          <li class="pc-nav"><nuxt-link v-scroll-to="'#works'"to>works</nuxt-link></li>
          <li class="pc-nav"><nuxt-link v-scroll-to="'#skills'"to>skills</nuxt-link></li>
          <li class="pc-nav"><nuxt-link v-scroll-to="'#profile'"to>profile</nuxt-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  z-index: 500;
  background-color: rgba(255,255,255,0.6);
}
h1 {
  text-align: center;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 4.3px;
}
h1 span {
  font-size: 10px;
  line-height: 1;
  letter-spacing: 2px;
}
.nav-box {
  top: 0;
  display: flex;
  justify-content: space-between;
  max-width: 1080px;
  height: 80px;
  padding: 20px;
  margin: 0 auto;
}
.nav-box ul {
  display: flex;
  align-items: center;
}
.nav-box li {
  display: list-item;
  text-align: -webkit-match-parent;
  font-size: 15px;
  height: 50px;
  margin: 0 1.3rem;
  letter-spacing: 0.12rem;
  line-height: 50px;
}
a {
  position: relative;
  display: inline-block;
}
a::after {
  position: absolute;
  bottom: 13px;
  left: 0;
  content: '';
  width: 100%;
  height: 1px;
  background: #333;
  transform: scale(0, 1);
  transform-origin: left top;
  transition: transform .3s;
}
a:hover::after {
  transform: scale(1, 1);
}
@media (max-width: 576px){
  .nav-box {
    height: 50px;
    padding: 5px;
  }
  .nav-box li {
    margin: 0 0.5rem;
  }
  a {
    vertical-align: middle;
    vertical-align: -webkit-baseline-middle;
  }
}

</style>