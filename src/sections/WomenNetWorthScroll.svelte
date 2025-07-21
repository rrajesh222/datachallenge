<script>
   
    import Scroller from "../lib/Scroller.svelte";
    import ArticleText from "../lib/ArticleText.svelte";
  import { onMount } from "svelte";

let startTyping = false;
let headingRef;
    

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

    onMount(() =>{
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    startTyping = true;
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
if(headingRef){
    observer.observe(headingRef);
}
       
    });
</script>

<div>
    <Scroller layout="right">
        {#snippet sticky()}
        <img src="womenDataBach.png" alt="Woman Data" style="width: 700px; height:auto"> 
           <img src="womanSuit.jpeg" alt="Man Image" style="width: 700px; height:auto">  
            <div>
                <!-- <p>
                    You can use Svelte to add and remove data from a Highcharts
                    chart.
                </p>
               -->
            </div>
        {/snippet}

        {#snippet scrolly()}
            
          

            <ArticleText>
                The Median Total Net Worth for Female Households with a a Bachelor's Degree or higher is between 40k - 250k
            </ArticleText>

            <ArticleText>
               250k vs 748k...
            </ArticleText>

            
        {/snippet}
    </Scroller>
</div>

<ArticleText>

    <h2 bind:this={headingRef} transition:typewriter={startTyping? { speed: 50}: null}> 
        Why is a man's Household Net Worth nearly 3 TIMES that of a woman's?</h2>
</ArticleText>

<ArticleText>
    The differences don't stop there.
</ArticleText>
<style>
   
</style>
