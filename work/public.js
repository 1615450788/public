/**
 * @author : 王涛
 * @date : 2015年10月23日 16:39:20
 * @Description：管理前端页面路径route、后端接口api路径、常用表现方法封装
 * */
var route = {
    path: {
        'index': window.WWWROOT + '/html/xwt/front/page/public/index.jsp',//首页
        'pifa': 'http://zhenhaipifa.com/',//首页
        'login': window.WWWROOT + '/html/xwt/front/page/public/login.jsp',//登录页面
        'register': window.WWWROOT + '/html/xwt/front/page/public/register.jsp',//注册页面
        'forgetPwd': window.WWWROOT + '/html/xwt/front/page/public/forgetPwd.jsp',//注册页面
        'serverList': window.WWWROOT + '/html/xwt/front/page/order/serverList.jsp',//服务列表
        'buyCar': window.WWWROOT + '/html/xwt/front/page/order/buyCar.jsp',//服务列表
        'agencyServer': window.WWWROOT + '/html/xwt/front/page/order/agencyServer.jsp',//代理商服务页面
        'license': window.WWWROOT + '/html/xwt/front/page/order/license.jsp',//订单提交页面
        'paySubmit': window.WWWROOT + '/html/xwt/front/page/order/paySubmit.jsp',//确认支付页面
        'payover': window.WWWROOT + '/html/xwt/front/page/order/payover.jsp',//支付完成
        'orderInfo': window.WWWROOT + '/html/xwt/front/page/order/info.jsp',//订单详情
        'addInfo': window.WWWROOT + '/html/xwt/front/page/order/billAddInfo.jsp',//补资料
        'addMoney': window.WWWROOT + '/html/xwt/front/page/order/billAddMoney.jsp',//补费用
        'agency': window.WWWROOT + '/html/xwt/front/page/userType/agency/account.jsp',//代理商户中心
        'user': window.WWWROOT + '/html/xwt/front/page/userType/user/account.jsp',//用户中心
        'productSetting': window.WWWROOT + '/html/xwt/front/page/userType/agency/productSetting.jsp',//商品详细页面设置
        'agencyIndex': window.WWWROOT + '/html/xwt/front/page/userType/agency/productSetting.jsp',//代理商户店铺首页
        'userBill': window.WWWROOT + '/html/xwt/front/page/userType/user/bill.jsp',//普通用户记账单
        'userAllPapers': window.WWWROOT + '/html/xwt/front/page/userType/user/allPapers.jsp',//普通用户全部证件
        'special': window.WWWROOT + '/html/xwt/front/page/news/special/index.jsp',//小微专题首页页面
        'law': window.WWWROOT + '/html/xwt/front/page/news/law/index.jsp',//政策法规首页页面
        'civil': window.WWWROOT + '/html/xwt/front/page/news/law/civil.jsp',//政策民事页面
        'scope': window.WWWROOT + '/html/xwt/front/page/userType/agency/scope.jsp',//商户经营范围设置页面
        'schedule': window.WWWROOT + '/html/xwt/front/page/order/schedule.jsp',//商户经营范围设置页面
        'market': window.WWWROOT + '/html/xwt/front/page/userType/market/account.jsp',//市场管理用户中心
        'marketApply': window.WWWROOT + '/html/xwt/front/page/userType/market/apply.jsp',//市场管理申请页面
        'marketIndex': window.WWWROOT + '/html/xwt/front/page/userType/market/index.jsp',//市场管理入口页面
        'governmentIndex': window.WWWROOT + '/html/xwt/front/page/userType/government/index.jsp',//政府入口
        'governmentApply': window.WWWROOT + '/html/xwt/front/page/userType/government/apply.jsp'//政府申请页面
    },
    api: {
        getAgencysInfo: window.WWWROOT + '/agencyservice/getAgencysInfo.action',//获取代理商信息
        getEnterpriseInfo: window.WWWROOT + '/agencyservice/getEnterpriseInfo.action',//获取所有类型商户信息
        getOrderDetail: window.WWWROOT + '/orders/getOrderDetail.action',//获取订单详情
        getAgencyOrder: window.WWWROOT + '/suborders/agencyOrdersList.action',//获取商户订单列表
        getServiceFile: window.WWWROOT +'/servicedocuments/getServiceDocumentsBySid.action',//获取服务所需提供证照信息
        getServiceInfo: window.WWWROOT +'/agencyservice/loadServicePayListData.action',//获取服务信息
        pay: window.WWWROOT + "/orders/pay.action"
    },
    goto: function (e, data, target) {
        e = e || 'index';
        if (data) {
            formSend(data, this.path[e] || e);
            return;
        }
        if (this.path[e]) {
            open(this.path[e], target || '_self');
        } else {
            open(e, target || '_self');
        }
    }
}
function ajaxObj(obj) {
    obj = obj || {};
    obj.type = obj.type || 'post';
    obj.data = obj.data || {id: '1'};
    obj.fn = obj.fn || function (data) {
            show(data);
        };
    obj.errfn = obj.errfn || function (err) {
            islogin(err);
            show(err);
        }
    obj.ajax = function () {
        $.ajax({
            type: this.type,
            url: this.url,
            success: this.fn,
            error: this.errfn,
            data: this.data,
            dataType: "json"
        });
    }
    return obj;
}
/**
 * 判断是否登录
 *
 */
function islogin(data) {
    var islogin = $.toJSON(data).indexOf('<title>登录</title>') >= 0 ? true : false;
    islogin && route.goto("login");
}
/**
 * 封装提示消息
 *
 */
function show(data) {
    try {
        console.log(data)
    }
    catch (err) {
        alert($.toJSON(data));
    }
}
/**
 * 封装数据表现方法
 * @param {html模版} template
 * @param {待显示数据} data
 * @param {装载数据元素} targetElement
 * @param {填充类型} append
 */
function showData(obj) {
    obj = obj || {};
    obj.init = function (html, data, target, append) {
        this.html = html;
        this.data = data;
        this.target = target;
        this.append = append || 'append';
    }
    obj.show = function () {
        var strs = '';
        for (var i in this.data) {
            var str = this.html;
            for (var x in this.data[i]) {
                var o = eval("/\\[=" + x + "]/g");
                str = str.replace(o, this.data[i][x])
            }
            strs += str;
        }
        if (this.append) {
            $(this.target)[this.append](strs);
        } else {
            $(this.target).html(strs);
        }
    }
    return obj;
}
/**
 * 封装serialize方法，拼装为JSON
 * @param {表单ID} e
 */
function from2Json(e) {//传入参数为jq表单对象才进行数据整理
    var data = [], str = '', Json = '';
    if (typeof e == "object") {
        str = "'" + $(e).serialize() + "'";
        str = decodeURIComponent(str);
    } else if (typeof e == "string") {
        str = e;
    } else {
        alert('from2Json参数格式错误');
        return;
    }
    //str=str.replace(/\n/g,'space');
    str = str.replace(/\?/g, '');
    str = str.replace(/\+/g, '');
    str = str.replace(/&/g, ',');
    str = str.replace(/=/g, ',');
    data = str.split(',');
    for (var i in data) {
        var x = data[i];
        if (i % 2 == 0) {
            Json += "\"" + x + "\":"
        } else {
            if (data.length == (++i)) {
                Json += "\"" + x + "\""
            } else {
                Json += "\"" + x + "\","
            }
        }
    }
    Json = Json.replace(/\'/g, "");
    Json = JSON.parse('{' + Json + '}');
    return Json;
}
/**
 * 生成随机数
 *
 */
function random() {
    var x = new Date();
    var y = Math.random().toString(16).slice(2)
    return x.getTime().toString(16) + y;
}
/**
 * 模拟提交表单
 *
 */
function formSend(data, url, type) {
    var html = {
        head: '<form method="post" id="formSend" action="' + url + '">',
        body: '<input name="[=data]" value=\'[=value]\'/>',
        foot: '</form>'
    };
    var bodys = '';
    if (type) {
        for (var i in data) {
            bodys += html.body.replace('[=data]', i).replace('[=value]', data[i]);
        }
    } else {
        bodys += html.body.replace('[=data]', 'data').replace('[=value]', $.toJSON(data));
    }
    bodys = html.head + bodys + html.foot;
    $(bodys).appendTo('body').submit();
}
/**
 *    表格选中效果
 *
 */
function tableHover(e, c, fn) {
    $(e).on('mouseover', c, function () {
        $(this).addClass('tableHover');
    }).on('mouseout', c, function () {
        $(this).removeClass('tableHover');
    }).on('click', c, function (event) {
        var obj = event.srcElement ? event.srcElement : event.target,
            $obj = $(obj);
        if ($obj.is('input')) {
            if ($obj.parent().index() == 0) {
                fn && fn($(this).attr('data-sid'));
            }
            else {
                fn && fn();
            }
            return;
        }
        if ($obj.find('input').length && $obj.index() != 0) {
            if ($obj.find('input').length == 1) {
                $obj.find('input').attr('checked') ? $obj.find('input').attr('checked', false) : $obj.find('input').attr('checked', true);
                fn && fn();
            }
            return;
        }
        else if ($obj.find('a').length || obj.nodeName == 'A') {
            return;
        }
        var $input = $(this).find('input[type=checkbox]').eq(0);
        $input.attr('checked') ? $input.removeAttr('checked') : $input.attr('checked', true);
        fn && fn($(this).attr('data-sid'));
    })
}
/**
 *    新增本行html
 *
 */
function addNode(e) {
    var $this = $(e);
    var tag = '<p>' + $this.parent().html() + '</p>';
    $this.parent().parent().append(tag);
}
/**
 *    ul折叠效果
 *
 */
function foldLi(e, c) {
    $(e).on('click', c, function () {
        var $this = $(this), $ul = $this.parent(), m = 200;
        $this.attr('data-height') || $this.attr('data-height', $ul.height())
        $ul.height() != $this.attr('data-height') ?
            $ul.animate({height: $this.attr('data-height')}, m) :
            $ul.animate({height: $this.height() + 2}, m);
    })
}
/**
 *    选中效果
 *
 */
function select(e, c, cla, isAlone, func) {
    $(e).on('click', c, func || function () {
            if (isAlone) {
                $(this).toggleClass(cla).siblings().removeClass(cla);
            } else {
                $(this).toggleClass(cla);
            }
        })
}
function tabs(tabTit, cls) {
    $(tabTit).on('click', 'a', function () {
        var $this = $(this), index = $(this).index();
        $this.addClass(cls).siblings().removeClass(cls);
        $this.parent().next().children().eq(index).show().siblings().hide();
    })
}
function allSelect(e, elem, find) {
    if ($(e).attr('checked')) {
        $(elem).attr('checked', true)
    }
    else {
        $(elem).attr('checked', false)
    }
    ;
}
/**
 *    cookie操作
 *
 */
function $cookie(k, v) {
    var x = document.cookie;
    x = '{"' + x.split(';').join('","').replace(/\=/g, '":"') + '"}';
    show(x);
    if (v) {

    }


}
/**
 *    为数组添加字符串操作
 *
 */
function ArrayReplace(e,reg,rpby){
    var ta=e.slice(0),d='\0';
    var str=ta.join(d);str=str.replace(reg,rpby);
    return str.split(d);
}
$(function () {
    var x = 1;
    $(document).ajaxStart(function () {
        x = new Date().getTime()
        show('ajax 开始了 ');
    })
    $(document).ajaxStop(function () {
        x = (new Date()).getTime() - x;
        show('ajax 执行完成了 总耗时：' + x + 'ms');
    })
    tableHover('.table','tr');//初始化表格行指向效果
    foldLi('.fold', 'ul>:first-child');//初始化例如用户中心左侧菜单栏的滑动显示和隐藏
    var option = {
        css: "datetime-day", //datetime-hour 时分样式 ，datetime-day 日期样式
        offset: {
            left: 0, //向左偏移的位置
            top: 10 //向上偏移的位置
        },
        dateType: 'D', //H选择时分，D选择日期
        date: {
            'H': {
                begin: '8:00', //开始时分
                end: '23:30', //结束时分
                step: "30" //时分步长
            },
            'D': {
                month: new Date(), //日期默认时间
                selected: (new Date()).getDate()
            },
            'M': {
                begin: 1, //月份开始
                end: 12, //月份结束
                selected: (new Date()).getMonth() + 1  //月份初始
            },
            'Y': {
                begin: (new Date()).getFullYear(), //年份开始
                end: 2020, //年份结束
                selected: (new Date()).getFullYear() //年份初始
            }
        }
    }
    $(".dataTime").val((new Date()).getFullYear() + '-' + (new Date()).getMonth() + '-' + (new Date()).getDay()).on("click", function (e) {
        e.stopPropagation();
        $(this).lqdatetimepicker(option);
    });//时间文本框插件的初始化方式
})


/**
 *    封装基础数据类表现方式
 *    数据格式：[{},{}]
 *    引用方式：var x=baseShow();x.init(elem)//传入elem参数则只初始化该元素！不传则初始化全部
 */
function baseShow(){
    var that = this;
    that.option = {
        _for: 'for-data',
        _if: 'if',
        html:{
            _for:[],
            _if:[]
        },
        data:{
            z:[{a:1,b:2},{a:1,b:2},{a:1,b:2},{a:1,b:2}]
        }
    }
    that._find = function (elem) {
        elem=that.index(elem);
        var $for=$('['+that.option._for+']'),$forNodes=elem?$for.eq(elem):$for;
        $forNodes.each(function (i) {
            i=elem||i;
            var $this = $(this), data = eval('that.option.data.'+$this.attr(that.option._for)),
                html=that.option.html._for[i];
            html=that.filter(html);
            var strs;
            if(typeof html=='object'){
                strs = that._for(data, html[1],html[0]);
            } else{
                strs = that._for(data, html);
            }
            $this.html(strs);
        })
    }
    that.filter=function(html){
        if($(html).get(0).nodeName=='TBODY'){
            var strs=[];
            strs.push($('<div></div>').append($(html).find('tr').first().clone()).html());
            strs.push($('<div></div>').append($(html).find('tr').last().clone()).html());
            return strs;
        }
        return html;
    }
    that.index=function(elem){
        var _index=$('['+that.option._for+']').index($(elem));
        return _index>=0?_index:'';
    }
    that._for = function (data, html,first) {
        var str = '',x={}, strs = '';
        if(data&&data.length){
            for (var i = 0; i < data.length; i++) {
                str = html;
                for (var o in data[i]) {
                    //x = new RegExp('{{' + o + '}}', "g");
                    //str = str.replace(x,data[i][o]);
                    x.Reg=new RegExp("\{{(?="+o+"[ ])(.| )+?\}}","g");
                    x.Array=str.match(x.Reg);
                    if(x.Array==null){continue;}
                    x.Reg2=new RegExp("(}|{|"+o+")+","g");
                    x.Array2=ArrayReplace(x.Array,x.Reg2,'');
                    for(var n in x.Array){
                        x.str=data[i][o];
                        x.value=eval('data[i][o]' + x.Array2[n]);
                        str = str.replace(x.Array[n], x.value);
                    }
                }
                strs += str;

            }
        }
        strs=first?first+strs:strs;
        return strs;
    }
    that._event=function(elem){
        $(elem).on('change',function(){
            that._find($(this));
        })
    }
    that.init=function(){
        var elem=$('['+that.option._for+']');
        that._event(elem);
        elem.each(function(i){
            that.option.html._for.push($(this).html());
        });
    }
}
