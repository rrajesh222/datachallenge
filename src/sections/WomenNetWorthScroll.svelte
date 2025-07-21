<script>
   
    import Scroller from "../lib/Scroller.svelte";
    import ArticleText from "../lib/ArticleText.svelte";
  import { onMount } from "svelte";
  import ObservedArticleText from "../lib/ObservedArticleText.svelte";
  export { typewriter };
  let showTypewriter = false;

function typewriterOnView(node) {
    const observer = new IntersectionObserver((entries) =>{
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                node.dispatchEvent(new CustomEvent('startTypewriter'));
            }
        });
    },{
        threshold: 0.5
    
    });
    observer.observe(node);

    return{
        destroy(){
            observer.unobserve(node);
        }
    };
}

  function typewriter(node, {speed = 1}) {
        const valid = node.childNodes.length == 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;
        const text = node.textContent;
        const duration = text.length / (speed * 0.1);

        return{
            duration,
            tick: (t) => {
                const i = Math.trunc(text.length * t);
                node.textContent = text.slice(0, i);
            }
        };

    }

    function handleTypewriter(){
        showTypewriter = true;
    }

</script>

<div>
    <Scroller layout="right">
        {#snippet sticky()}
        <img src="womenDataBach.png" alt="Woman Data" style="width: 700px; height:auto"> 
           <img src="womanSuit.jpeg" alt="Man Image" style="width: 700px; height:auto">  
            <div>
               
            </div>
        {/snippet}

        {#snippet scrolly()}
            
          

            <ArticleText>
                The Median Total Net Worth for Female Households with a a Bachelor's Degree or higher is between <strong>40k - 250k</strong>.
            </ArticleText>



            <ArticleText>
               40k vs 98k...
            </ArticleText>

            
        {/snippet}
    </Scroller>
</div>

<ArticleText >
    <div use:typewriterOnView on:startTypewriter={handleTypewriter}>

    {#if showTypewriter}
    <h2 transition:typewriter={{ speed: 0.1 }}> Why is a Man's Household Net Worth nearly <strong> 3 TIMES </strong> that of a Woman's?</h2>
    {/if}

    </div> 
</ArticleText> 
    

<ArticleText>
    The differences don't stop there.
</ArticleText>
<style>
   strong{
    color:#db94ca;
}
</style>
