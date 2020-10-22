<template>
  <header>
    <nav id="gnav">
      <div class="nav-box">
        <h1 class="logo">yukari</h1>
        <ul class="pc-menu">
          <li class="pc-nav">works</li>
          <li class="pc-nav">skills</li>
          <li class="pc-nav">profile</li>
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