$(function(){
    window.onhashchange=function(){
        var $block=$('.main'),
        strHash=this.window.location.hash,
        color=strHash.substring(3,strHash.length);

        $block.css({
            'background-color':color
        })
    }
})