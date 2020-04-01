define(['jquery']).function($){
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
}
