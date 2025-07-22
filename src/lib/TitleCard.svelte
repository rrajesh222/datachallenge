<script>


import { typewriter } from './transitions.js'; // Import the transition
    
    let { title, subtitle } = $props()
</script>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Imperial+Script&family=Parisienne&family=Simonetta:ital,wght@0,400;0,900;1,400;1,900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Cinzel:wght@400..900&family=Gruppo&family=Imperial+Script&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Yeseva+One&display=swap" rel="stylesheet">

<div class="title-card">
    <div class="content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      

       
    </div>
    <div>
        <h2 transition:typewriter={{ speed: 0.1 }}> Scroll Below to Begin Your Discovery</h2>
    </div>

</div>

<style>
    .title-card {
        background-color: #1c0b14;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 1rem;

        box-sizing: border-box;

    }

    .content {
        max-width: 700px;
        background-color: #1d393d;
        padding: 2rem;
        border: 6px solid #98426e;
        border-radius: 2rem;
        box-shadow: 16px 16px #db94ca;
    }

    h1 {
        font-size: 3rem;
        margin: 0;
        color: #f6eadf;
        text-shadow: 1px 1px 0 #231414;
        /* like this */
        font-family: "Yeseva One"; 
    }

    p {
        font-size: 1.3rem;
        color: #f7f5eb;
        margin-top: 1rem;
        font-family: "IBM Plex Serif"
    }
    h2{
    font-size: 1.5rem;
        margin-top: 2rem;
        color: #f6eadf;
        text-shadow: 1px 1px 0 #231414;
        /* like this */
        font-family: "Yeseva One"; 
        border: 6px solid #98426e;
        border-radius: 2rem;
         /*background-color: #3f5a5f;*/
         padding: 0.8rem 1.2rem;
         max-width: 905;

    }


   

    @media (max-width: 600px) {
        h1 {
            font-size: 2.2rem;
        }

        p {
            font-size: 1.1rem;
        }
        h2{
            font-size: 1.2rem;
        }
    }
</style>
