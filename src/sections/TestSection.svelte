<script>
import Scroller from "../lib/Scroller.svelte";
import ArticleText from "../lib/ArticleText.svelte";
</script>
<div>
<Scroller layout="left">
    {#snippet sticky()}
        <img src="https://images.ctfassets.net/pdf29us7flmy/2wG8ah2H71AaboKXxJikkC/76e80c9d3833d1054bc327db256e69a0/GOLD-6487-CareerGuide-Batch04-Images-GraphCharts-02-Bar.png?w=720&q=100&fm=jpg">
    {/snippet}

    {#snippet scrolly()}
        <ArticleText>
            <p> This is a test</p>
        </ArticleText>
    {/snippet}
</Scroller>

</div>
<div>
    <Scroller layout="left">
        {#snippet sticky()}
            <img src="https://images.ctfassets.net/pdf29us7flmy/2wG8ah2H71AaboKXxJikkC/76e80c9d3833d1054bc327db256e69a0/GOLD-6487-CareerGuide-Batch04-Images-GraphCharts-02-Bar.png?w=720&q=100&fm=jpg">
        {/snippet}
    
        {#snippet scrolly()}
            <ArticleText>
                <p> This is a test</p>
            </ArticleText>
        {/snippet}
    </Scroller>
    
    </div>
    <div>
        <Scroller layout="left">
            {#snippet sticky()}
                <img src="https://images.ctfassets.net/pdf29us7flmy/2wG8ah2H71AaboKXxJikkC/76e80c9d3833d1054bc327db256e69a0/GOLD-6487-CareerGuide-Batch04-Images-GraphCharts-02-Bar.png?w=720&q=100&fm=jpg">
            {/snippet}
        
            {#snippet scrolly()}
                <ArticleText>
                    <p> This is a test</p>
                </ArticleText>
            {/snippet}
        </Scroller>
        
        </div>