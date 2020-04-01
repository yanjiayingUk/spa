$(function(){
    var $btn=$('input'),
    timer;

    $btn.click(function(){
        // $btn.attr("disabled",true);
        num=6;
        timer=setInterval(function(){
            $btn.attr("disabled",true);
            // num--;
            if(num === 0){
                clearInterval(timer);
                $btn.val('同意');
                $btn.removeAttr('disabled');
            }
            else{
                $btn.val('同意('+num+')s');
            }
            num--;
        },1000);
    })
})