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
           The following data is from the Black Wealth Data Center, from the  <a href="https://blackwealthdata.org/explore/assets" target="_blank">Assets and Debts</a> section
        </div>
         </ArticleText>
          

            <ArticleText>
                The Median Total Net Worth for Male Households with a a Bachelor's Degree or higher is between 298k - 748k
            </ArticleText>

           

            
        {/snippet}
    </Scroller>
</div>

<style>
   .link a{
   color: #db94ca;
   }
</style>
