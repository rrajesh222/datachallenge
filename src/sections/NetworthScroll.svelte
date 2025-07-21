<script>
   
    import Scroller from "../lib/Scroller.svelte";
    import ArticleText from "../lib/ArticleText.svelte";

   

    
</script>

<div>
    <Scroller layout="left">
        {#snippet sticky()}
        <img src="dist/menDatBach.png" alt="Man Data" style="width: 700px; height:auto"> 
           <img src="dist/manSuit.jpeg" alt="Man Image" style="width: 700px; height:auto">  
            <div>
               
            </div>
        {/snippet}

        {#snippet scrolly()}
            
          

            <ArticleText>
                The Median Total Net Worth for Male Households with a a Bachelor's Degree or higher is between 298k - 748k
            </ArticleText>

            <ArticleText>
               This seems like a significant amount
            </ArticleText>

            
        {/snippet}
    </Scroller>
</div>

<style>
   
</style>
