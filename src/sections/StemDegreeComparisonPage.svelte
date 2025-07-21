<script>
  import ArticleText from "../lib/ArticleText.svelte";
  import Scroller from "../lib/Scroller.svelte";

</script>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Imperial+Script&family=Parisienne&family=Simonetta:ital,wght@0,400;0,900;1,400;1,900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Cinzel:wght@400..900&family=Gruppo&family=Imperial+Script&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Yeseva+One&display=swap" rel="stylesheet">

<!-- show each ethnicity and highlight the difference -->

<div class="title">
    <h1>Women in STEM Fields</h1>
    <h2>Hover over each card to see STEM vs non-STEM Employment Rates from 2019 to 2021 Among 25-35 Year Old Women with a STEM Degree</h2>
  </div>

  <Scroller layout="right">
    {#snippet sticky()}
<div class ="ethnicty">

  
  <div class="cards">
  <div class="card1">
    <img src="dist/asianBlue.jpg" alt="asian">
    
   
  </div>
  
  <div class="card2">
    <img src="dist/whiteBlue.jpg" alt="white">
   
 
  </div>
  
  <div class="card3">
    <img src="dist/hispanicBlue.jpg" alt="hispanic">
   
  </div>
  <div class="card4">
    <img src="dist/blackRed.jpg" alt="black">
    
  </div>
</div>
  <div class="footer">
  </div>
</div>

{/snippet}


{#snippet scrolly()}
<ArticleText>
    In a day and age when science and technology is becoming more relevant, why are less black women with STEM degrees employed in STEM careers?
</ArticleText>
<ArticleText>
    It is up to us to build a more equitable and diverse future filled with 
    opportunities and support to end the wage gap and motivate more Black women to pursue STEM careers.
</ArticleText>
{/snippet}
</Scroller>

<style>
@import url('https://fonts.googleapis.com/css?family=Exo:700');
@import url('https://fonts.googleapis.com/css?family=Abel');


.ethnicity{
    padding: 4rem 1rem;
    background-color: #dfe6e9;
}

.cards{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 2rem;
    object-fit: cover;
  
    
}
body {
  background-color: #dfe6e9;
  -webkit-transform: perspective(900px);
  -webkit-transform-style: preserve-3d;
}
.title{ 
  
  text-align: center;
}
.title h1{
  font-size:50px;
  font-family: "Yeseva One";
   color: white;
}
h2{
   color:rgb(250, 215, 250);
  font-family:"IBM Plex Serif";
}
.card1 {
  text-align:center;
  /* position: absolute; */
  left: 100px;
  width: 250px;
  height: 350px;
  margin-top: 10px;
  margin-bottom: 10px;
  
  transition:.6s;
  transform: rotatex(75deg) translatey(-200px) translatez(-100px);
  box-shadow: 0px 20px 60px rgba(102, 224, 255, 0.5);
}
.card1:hover{
  transform: rotatex(0deg);
  transform: rotatez(0deg);
  transition:.6s;
  box-shadow: 0px 0px 20px rgba(246, 228, 228, 0.3);
}
.card1 img{
  transform: translateY(15px);
  /* width:200px;
  height:120px; */
  /* object-fit: cover; */
}
h3{
  font-size:25px;
  font-family: 'Abel', sans-serif;
  color:rgb(255,255,255);
  text-shadow: 0 0 2px rgb(255,255,255);
  transform: translatey(10px);
}

p{
  
  font-family: 'Abel', sans-serif;
  color: white;
  text-align:center;
  width:220px;
  transform: translatex(12px);
}


.card2 {
  text-align:center;
  /* position: absolute; */
  left: 400px;
  width: 250px;
  height: 350px;
  margin-top: 10px;
  margin-bottom: 10px;
  /* background: white;
  animation: animate 1s linear infinite; */
  transition:.6s;
  
  transform: rotatex(75deg) translatey(-200px) translatez(-100px);
  box-shadow: 0px 20px 60px rgba(255, 102, 189, 0.5);
}
.card2:hover{
   transform: rotatex(0deg);
  transition:.6s;
  box-shadow: 0px 0px 20px rgba(247, 237, 237, 0.3);
}
.card2 img{
  transform: translateY(15px);
  /* width:180px;
  height:150px; */
}
.card3 {
  text-align:center;
  /* position: absolute; */
  left: 600px;
  width: 250px;
  height: 350px;
  margin-top: 10px;
  margin-bottom: 10px;

  transition:.6s;
  
  transform: rotatex(75deg) translatey(-200px) translatez(-100px);
  box-shadow: 0px 20px 60px rgba(255, 102, 189, 0.5);
}



.card3:hover{
   transform: rotatex(0deg);
  transition:.6s;
  box-shadow: 0px 0px 20px rgba(226, 221, 221, 0.3);
}
.card3 img{
  transform: translateY(15px);
  /* width:200px;
  height:120px; */
}

.card4{
    text-align:center;
  /* position: absolute; */
  left: 800x;
  width: 250px;
  height: 350px;
  margin-top: 10px;
  margin-bottom: 10px;

  transition:.6s;
  
  transform: rotatex(75deg) translatey(-200px) translatez(-100px);
  box-shadow: 0px 20px 60px rgba(255, 102, 189, 0.5);
}
.card4:hover{
   transform: rotatex(0deg);
  transition:.6s;
  box-shadow: 0px 0px 20px rgba(226, 221, 221, 0.3);
}
.card4 img{
  transform: translateY(15px);
  /* width:200px;
  height:120px; */
}

.footer{
  /* position: absolute; */
  top: 500px;
  margin: 10px;
  width: 100%;
   text-align: center;
}
.footer h2{
  font-size:18px;
  font-family: 'Exo', sans-serif;
  
}
  </style>