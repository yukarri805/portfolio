<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>
  import Header from "@/components/Header";
	export default {
		components: {
      Header
		}
	};
</script>

<style>
html {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-size:16px;

}
body{
  font-family: '游ゴシック',YuGothic,'ヒラギノ角ゴ ProN W3','Hiragino Kaku Gothic ProN','メイリオ',Meiryo,sans-serif;
  font-size:16px;
  line-height: 1.8;
	background:#fff;
  word-break : break-all;
  color: #2b2b2b;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
/*
html5doctor.com Reset Stylesheet
v1.6.1
Last Updated: 2010-09-17
Author: Richard Clark - http://richclarkdesign.com
Twitter: @rich_clark
*/

html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}
article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section {
    display:block;
}
nav ul {
    list-style:none;
}
blockquote, q {
    quotes:none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}
a {
    margin:0;
    padding:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

/* change colours to suit your needs */
mark {
    background-color:#ff9;
    color:#000;
    font-style:italic;
    font-weight:bold;
}
del {
    text-decoration: line-through;
}
abbr[title], dfn[title] {
    border-bottom:1px dotted;
    cursor:help;
}
table {
    border-collapse:collapse;
    border-spacing:0;
}

/* change border colour to suit your needs */
hr {
    display:block;
    height:1px;
    border:0;  
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}
input, select {
    vertical-align:middle;
}

/*common*/
a {
  color: #323333;
}
ul {
  list-style: none;
  padding-left: 0;
}
.mb0 {
  margin-bottom: 0;
}
h1, h2, h3, h4, h5, h6 {
  font-weight: bold;
}
h2 {
  font-size: 30px;
  line-height: 1.5;
  font-family: 'Unna', serif;
  margin-bottom: 3rem;
}
h3 {
  font-size: 24px;
  line-height: 1.5;
  font-family: 'Unna', serif;
  margin-bottom: 2rem;
}
small{
  display: inline-block;
  line-height: 1.5;
}
.container {
  width: 100%;
  max-width: 1120px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.centeryose {
  text-align: center;
  margin: 0 auto;
  width: 100%;
}
.txt-white{
  color: #fff;
}
.txt50{
    font-size: 50px;
}
.txt40{
    font-size: 40px;
}
.txt30{
    font-size: 30px;
}
.txt20{
    font-size: 20px;
}
section{
    padding:50px 0;
}
@media screen and (max-width: 1400px) {
  html{
    font-size: 14px;
  }
	body {
    font-size: 14px;
    line-height: 1.6;
  }
}
@media (max-width: 768px){
  h1{
    font-size: 22px;
  }
  h2{
    font-size: 19px;
  }
  h3{
    font-size: 18px;
    line-height: 1.4;
  }
  .txt30{
    font-size: 20px;
  }
  .txt40{
    font-size: 30px;
  }
  section {
    padding: 30px 0;
  }
}
@media (max-width: 576px){
  html{
    font-size: 13px;
  }
	body {
    font-size: 13px;
    line-height: 1.6;
  }
  .container {
    padding-right: 10px;
    padding-left: 10px;
  }
  .mt20{
    margin-top: 10px;
  }
}
</style>
