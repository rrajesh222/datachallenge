<script>
    let { children } = $props();
</script>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Imperial+Script&family=Parisienne&family=Simonetta:ital,wght@0,400;0,900;1,400;1,900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Cinzel:wght@400..900&family=Gruppo&family=Imperial+Script&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Yeseva+One&display=swap" rel="stylesheet">
<div class="article-text">
    <p>
        {@render children()}
    </p>
</div>

<style>
    .article-text {
        margin: 50vh auto;
        width: 50%;
        background-color: #1d393d;
        color: #ffffff;
        border: solid #98426e 3px;
        border-radius: 20px;
        padding: 20px;
        box-shadow: 16px 16px #db94ca;
        font-family: "IBM Plex Serif", bold;
        font-size: 1.25rem;
    }
</style>
