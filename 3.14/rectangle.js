function roundFractional(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}

$(function () {
    // get dom elem
    var $width = $('#width'),
        $height = $('#height'),
        $btnCal = $('#calculate'),
        $perimeter = $('#perimeter'),
        $area = $('#area');

    /*calc button click event */
    $btnCal.click(function () {
        //validate if error return;
        console.log('aa')
        if (!validate('#width') || !validate('#height')) return;
        // get value
        var w = Number($width.val()),
            h = Number($height.val());

        // caculate
        // var p=2*(roundFractional(w+h, 16)),
        // a=roundFractional(w*h, 16);
        var p = 2 * (w + h),
            a = w * h;

        // output
        $perimeter.val(p);
        $area.val(a);

    })

    // 1.event keypress
    // 2.event argument get key IDBCursorWithValue,e.key and e.target.value
    // 3.ilegal key BiquadFilterNode,e.preventDefault();
    // 4.合法字符还要考虑出现大的位置，例如.,e,E,-

    $width.keypress(function (e) {
        console.log('keypress');
        var pos = e.target.selectionStart,
            con = e.target.value;

        console.log(pos);
        console.log(con);

        // 合法字符
        // 允许出现在非科学计数法的数字末尾
        // 允许出现在非科学计数法的数字中间
        // 
        // 不允许出现在非科学计数法的数字前面
        // 不允许出现在空文本中
        // 不允许出现在负号后面
        // 不允许出现在科学计数法(e和E)数字的末尾
        // 不允许出现在科学计数法数字的前面
        // 不允许出现在科学计数法数字的中间

        // if(e.key==='e'){
        //     if(pos===0 || con.indexOf('e') !==-1 || con.indexOf('E'))
        // }

        // 合法字符E
        // 合法字符.
        // 合法字符-
    })


    // $height.keypress(function(e){
    //     if(/abcdf-zABCDF-Z)
    // })
    // 字段校验
    $width.focusout(function () {
        // if(!validate(width)) select this;
        if (!validate('#width')) $width.select();
    });
    $height.focusout(function () {
        if (!validate('#height')) $height.select();
    })

    function validate(field) {
        // get DOM error Message
        var $data = $(field),
            $msg = $(field + '-validation-message');

        //validate null
        if ($data.val() === '') {
            $msg.html('不能为空！');
            $data.select();
            return false;
        }
        //validate number
        if (!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())) {
            $msg.html('必须是数值！');
            $data.select();
            return false;
        }
        //validate>0
        if (Number($data.val()) < 0) {
            $msg.html('必须大于零！');
            $data.select();
            return false;
        }
        // prompt error Message
        // return false;
        $msg.html('');
        return true;

    }
})
