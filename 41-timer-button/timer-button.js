// var timerBtn={
//     show:function(){
//         //被抛弃
//     }
// }

function TimerButton() {
    var $btn = $("<input class='timer-button'  type='button' value='同意(6s)' disabled>")
    var cfg = {
        container: 'body',
        num: 6,
        title: '同意',
        onClick: null
    },
        num,
        timer;

    this.show = function (conf) {
        $(cfg.container).append($btn);
        $.extend(cfg, conf);
        num = cfg.num

        $btn.val(cfg.title + '(' + num + 's)');

        timer = setInterval(function () {
            num--;
            if (num === 0) {
                clearInterval(timer);
                $btn.val(cfg.title);
                $btn.removeAttr('disabled');
            }
            else {
                $btn.val(cfg.title + '(' + num + 's)');
            }
        }, 1000);

        $btn.click(cfg.onClick)
    }
}



var $timerButton = (function () {

    // $btn.css({
    //     height:'50px',
    //     width:'100px'
    // })
    function show(conf) {

        var $btn = $("<input class='timer-button'  type='button' value='同意(6s)' disabled>")
        var cfg = {
            container: 'body',
            num: 6,
            title: '同意',
            onClick: null
        },
            num,
            timer;

        //1.DOM graw
        $(cfg.container).append($btn);
        $.extend(cfg, conf);
        num = cfg.num

        $btn.val(cfg.title + '(' + num + 's)');

        timer = setInterval(function () {
            num--;
            if (num === 0) {
                clearInterval(timer);
                $btn.val(cfg.title);
                $btn.removeAttr('disabled');
            }
            else {
                $btn.val(cfg.title + '(' + num + 's)');
            }
        }, 1000);

        $btn.click(cfg.onClick)

    }

    return {
        show: show
    }
}())
// 不用 page load event

// 封装成对象，有几种方案

// 1.全局对象:简单对象字面量，不完全面向对象，不能包括私有方法
// var timerBtn={
//     show:function()
// }

// 2.工厂函数,一个函数返回值是一个简单对象
// var timerBtn=(function(){
//     这里私有
//     return {
//         show:function(){}
//     }
// }())

// 3.构造函数
// function TimerBtn(){}
// var tb=new TimerBtn();