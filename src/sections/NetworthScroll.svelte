<script>
   
    import Scroller from "../lib/Scroller.svelte";
    import ArticleText from "../lib/ArticleText.svelte";

   

    
</script>

<div>
    <Scroller layout="left">
        {#snippet sticky()}
        <img src="menDatBach.png" alt="Man Data" style="width: 700px; height:auto"> 
           <img src="manSuit.jpeg" alt="Man Image" style="width: 700px; height:auto">  
            <div>
               
            </div>
        {/snippet}

        {#snippet scrolly()}
        <ArticleText>
            <div class="link">
           The following data is from the Black Wealth Data Center, from the  <a href="https://blackwealthdata.org/explore/assets" target="_blank">Assets and Debts</a> section.
        </div>
         </ArticleText>
          

            <ArticleText>
                The Median Total Net Worth for Male Households with a Bachelor's Degree or higher is between <strong>98k - 748k</strong>.
            </ArticleText>

           

            
        {/snippet}
    </Scroller>
</div>

<style>
    strong{
    color:#db94ca;
}
   .link a{
   color: #db94ca;
   }
</style>
