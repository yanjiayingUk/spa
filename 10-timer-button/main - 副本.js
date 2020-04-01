$(function(){
    var $btn=$('input'),
    num=6,
    timer;

    $btn.click(function(){
        // console.log('就知道你会同意的！')
        $btn.setAttr('disabled');
        timer=setInterval(function(){
            num--;
            if(num === 0){
                clearInterval(timer);
                $btn.val('同意');
                $btn.removeAttr('disabled');
            }
            else{
                $btn.val('同意('+num+')s');
            }
        },1000);
    })
})