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
</style>