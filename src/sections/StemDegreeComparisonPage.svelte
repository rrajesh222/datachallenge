<script>
  import { onMount } from "svelte";
  import ArticleText from "../lib/ArticleText.svelte";
  import Scroller from "../lib/Scroller.svelte";
  import { fade } from "svelte/transition";
let showImage = true;
let showAnimatedImage = false;
//   onMount(()=>{
//     setTimeout(() => {
//         showImage = false;
//     }, 3000);
//   });

  function animateOnView(node){
    const observer = new IntersectionObserver((entries) =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                node.dispatchEvent(new CustomEvent('startAnimation'));
            }
        });
    },{
        threshold:0.5
    
    });
    observer.observe(node);
   
   
    return{
        destroy(){
            observer.unobserve(node);
        }
    };
  }

  function handleImageAnimation(){
    showImage = false;
  }


</script>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Imperial+Script&family=Parisienne&family=Simonetta:ital,wght@0,400;0,900;1,400;1,900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Cinzel:wght@400..900&family=Gruppo&family=Imperial+Script&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Yeseva+One&display=swap" rel="stylesheet">

<!-- show each ethnicity and highlight the difference -->

<div class="title">
    <h1>Women in STEM Fields</h1>
    <h2>Hover over each card to see STEM vs non-STEM Employment Rates from 2019 to 2021 Among 25-35 Year Old Women with a STEM Degree. Data is presented by the Black Wealth Data Center, <a href="https://blackwealthdata.org/explore/education#EDU-02" target="_blank">Education Section</a></h2>
  </div>

  
<div class ="ethnicty">

  
  <div class="cards">
  <div class="card1">
    <img src="asianBlue.jpg" alt="asian">
    
   
  </div>
  
  <div class="card2">
    <img src="whiteBlue.jpg" alt="white">
   
 
  </div>
  
  <div class="card3">
    <img src="hispanicBlue.jpg" alt="hispanic">
   
  </div>
  <div class="card4">
    <img src="blackRed.jpg" alt="black">
    
  </div>
</div>
  <div class="footer">
  </div>
</div>





<ArticleText>
    <div class ="check">
    That's nearly a <strong>5% </strong> decrease.
</div>
   When developments in science and technology are growing everyday, especially due to Artifical Intelligence, why are less Black women with
    STEM degrees employed in STEM careers?
</ArticleText>
<ArticleText>
    It is up to us to build a more equitable and diverse future filled with 
    opportunities and support to end the wage gap while valuing different perspectives.
</ArticleText>


<ArticleText>
   We need to make sure that essential voices don't simply disappear in the STEM world.
</ArticleText>

<div  use:animateOnView on:startAnimation={handleImageAnimation}>
<!-- {#if showImage} -->
    <img class = "disp" src="blackRed.jpg" alt="image" style="opacity: {showImage ? 1 : 0}; transition: opacity 3s ease-out;"/>
<!-- {/if} -->
</div>

<ArticleText>
    <div class="name">  Thank you for joining me on this journey and I hope that you were able to view some of the differences that still exist today. 
        <div>
   - Rithika R </div></div>
</ArticleText>

<ArticleText>
    <div class="name">
   This website is part of the Kode With Klossy (KWK) and <a href="https://blackwealthdata.org/">Black Wealth Data Center (BWDC)</a>  Data Challenge.
    </div>
</ArticleText>

<style>
@import url('https://fonts.googleapis.com/css?family=Exo:700');
@import url('https://fonts.googleapis.com/css?family=Abel');
.disp{
    justify-content: center;
   display: block;
   margin: 0 auto;
}
.check strong{
    color:#db94ca;
}
.name{
    font-family: "Simonetta";
}
a{
   color: #db94ca;
   }
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
  padding: 50px;
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