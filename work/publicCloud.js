/**
 * @author : 王涛
 * @date : 2015年10月23日 16:39:20
 * @Description：管理前端页面路径route、后端接口api路径、常用表现方法封装
 * */
WWWROOT='/XWT';
var rows=10;
var route = {
    path: {

    },
    api: {
        getWorkLog:{
            name:'获取工作日志列表',
            text:'获取工作日志列表信息,返回字段参考:Wordlog.java',
            url:'/wordlog/frontLoadWordlogListData.action',
            data:{
                rows:rows,//行数
                page:1,//页码
                slogTheme:'',//主题
                slogContent:'',//内容
                slogType:'',//类型
                slogFinishCondition:'',//完成情况
                slogCreateStartTime:'',//创建开始时间
                slogCreateEndTime:''//创建结束时间
            }
        },//1
        addWorkLog:{
            name:'新增工作日志',
            text:'新增工作日志信息,字段参考:Wordlog.java',
            url:'/wordlog/frontWordlogSave.action',
            data:{
            }
        },
        delWorkLog:{
            name:'删除工作日志',
            text:'删除工作日志信息',
            url:'/wordlog/frontWordlogDelete.action',
            data:{
                ids:''//记录id
            }
        },
        updateWorkLog:{
            name:'更新工作日志',
            text:'更新工作日志信息，字段参考:Wordlog.java',
            url:'/wordlog/frontWordlogUpdateSave.action',
            data:{
                id:''//记录id
            }
        },
        getWorkLogDetail:{
            name:'获取工作日志详细',
            text:'获取工作日志详细信息',
            url:'/wordlog/frontGetWordlogInfo.action',
            data:{
                id:''//记录id
            }
        },
        getWorkLogRemark:{
            name:'获取工作日志备注列表',
            text:'获取工作日志备注列表',
            url:'/wordlog/frontGetLogremarkByLogId.action',
            data:{
                logId:''//logId
            }
        },
        addWorkLogRemark:{
            name:'新增工作日志备注',
            text:'新增工作日志备注信息，字段参考:Logremark.java',
            url:'/logremark/frontLogremarkSave.action',
            data:{
            }
        },
        delWorkLogRemark:{
            name:'删除工作日志备注',
            text:'删除工作日志备注信息',
            url:'/logremark/frontLogremarkDelete.action',
            data:{
                ids:''//记录id
            }
        },
        updateWorkLogRemark:{
            name:'编辑工作日志备注',
            text:'编辑工作日志备注信息',
            url:'/logremark/frontLogremarkUpdateSave.action',
            data:{
                id:''//记录id
            }
        },
        getWorkLogDetail:{
            name:'获取工作日志备注详细',
            text:'获取工作日志备注详细信息',
            url:'/logremark/frontGetLogremarkInfo.action',
            data:{
                id:''//记录id
            }
        },


        getToFormal:{
            name:'获取转正管理列表',
            text:'获取转正管理列表信息，返回字段参考:Regularization.java',
            url:'/regularization/frontLoadRegularizationListData.action',
            data:{
                rows:rows,//行数
                page:1,//页码
                sreguApplyNo:'',//申请单号
                sreguApplyUsername:'',//申请人
                sstatus:'',//状态
                sreguApplyStartTime:'',//申请开始时间
                sreguApplyEndTime:''//申请结束时间
            }
        },//1
        getQuit:{
          name:'获取离职管理列表',
          text:'获取离职管理列表信息，返回字段参考:Dimission.java',
          url:'/dimission/frontLoadDimissionListData.action',
          data:{
              rows:rows,//行数
              page:1,//页码
              sdisApplyNo:'',//申请单号
              sdisApplyUsername:'',//申请人
              sstatus:'',//状态
              sdisApplyStartTime:'',//申请开始时间
              sdisApplyEndTime:'',//申请结束时间
              sdisType:'',//离职类型
              sdisStartTime:'',//离职开始日期
              sdisEndTime:''//离职结束时间
          }
        },//1
        getLeave:{
            name:'获取请假管理列表',
            text:'获取请假管理列表信息，返回字段参考:Leave.java',
            url:'/leave/frontLoadLeaveListData.action',
            data:{
                rows:rows,//行数
                page:1,//页码
                sleaApplyNo:'',//申请单号
                sleaApplyUsername:'',//申请人
                sstatus:'',//状态
                sleaApplyStartTime:'',//申请开始时间
                sleaApplyEndTime:'',//申请结束时间
                sleaType:'',//请假类型
                sleaStartTime:'',//请假开始日期
                sleaEndTime:''//请假结束时间
            }
        },//1
        getOvertime:{
            name:'获取加班管理列表',
            text:'获取加班管理列表信息，返回字段参考:Overtime.java',
            url:'/overtime/frontLoadOvertimeListData.action',
            data:{
                rows:rows,//行数
                page:1,//页码
                soveApplyNo:'',//申请单号
                soveApplyUsername:'',//申请人
                sstatus:'',//状态
                soveApplyStartTime:'',//申请开始时间
                soveApplyEndTime:'',//申请结束时间
                soveType:'',//加班类型
                soveStartTime:'',//加班开始日期
                soveEndTime:''//加班结束时间
            }
        },//1
        getGoout:{
            name:'获取外出管理列表',
            text:'获取外出管理列表,字段参考:Evection.java',
            url:'/evection/frontLoadEvectionListData.action',
            data:{
                rows:rows,//行数
                page:1,//页码
                seveApplyNo:'',//申请单号
                seveApplyUsername:'',//申请人
                sstatus:'',//状态
                seveApplyStartTime:'',//申请开始时间
                seveApplyEndTime:'',//申请结束时间
                seveStartTime:'',//外出开始日期
                seveEndTime:'',//外出结束时间
                seveDestination:''//目的地
            }
        },//1
        getReimbursement:{
            name:'获取报销管理列表',
            text:'获取报销管理列表,字段参考:Reimbursement.java',
            url:'/reimbursement/frontLoadReimbursementListData.action',
            data:{
                rows:rows,//行数
                page:1,//页码
                srsNo:'',//报销单号
                srsApplyUsername:'',//申请人
                sstatus:'',//状态
                srsApplyStartTime:'',//申请开始时间
                srsApplyEndTime:'',//申请结束时间
                srsDesc:''//报销摘要
            }
        },//1
        getRecruitAccount:{
            name:'获取招聘账号管理列表',
            text:'获取招聘账号管理列表,字段参考:Recruitaccount.java',
            url:'/recruitaccount/frontLoadRecruitaccountListData.action',
            data:{
                rows:rows,//行数
                page:1,//页码
                sraPlatform:'',//招聘平台
                sraPlatformUrl:'',//招聘平台网址
                sraLoginAccount:'',//登陆账号
                sraLoginPasw:''//登陆密码
            }
        },//1
        getRecruitPlan:{
            name:'获取招聘计划列表',
            text:'获取招聘计划列表，字段参考:Recruitplan.java',
            url:'/recruitplan/frontLoadRecruitplanListData.action',
            data:{
                rows:rows,//行数
                page:1,//页码
                srpApplyNo:'',//申请单号
                srpApplyUsername:'',//申请人
                sstatus:'',//状态
                srpApplyStartTime:'',//申请开始时间
                srpApplyEndTime:''//申请结束时间
            }
        },//1
        getExecutiveData:{
            name:'获取行政数据管理列表',
            text:'获取行政数据管理列表，字段参考:Administrativedata.java',
            url:'/administrativedata/frontLoadAdministrativedataListData.action',
            data:{
                rows:rows,//行数
                page:1,//页码
                sasdEmpNo:'',//员工编号
                sasdEmpName:'',//员工姓名
                sasdEmpDepartid:'',//部门id
                sasdAssessMonth:'',//考核月份
                sisExcess:''//是否超额
            }
        },//1
        getBusinessData:{
            name:'获取业务数据管理列表',
            text:'获取业务数据管理列表，字段参考:Businessdata.java',
            url:'/businessdata/frontLoadBusinessdataListData.action',
            data:{
                rows:rows,//行数
                page:1,//页码
                sbdEmpNo:'',//员工编号
                sbdEmpName:'',//员工姓名
                sbdEmpDepartid:'',//部门id
                sbdAssessMonth:''//考核月份
            }
        },//1
        getCheckwork:{
            name:'获取考勤数据管理列表',
            text:'获取考勤数据管理列表，字段参考:Attendancedata.java',
            url:'/attendancedata/frontLoadAttendancedataListData.action',
            data:{
                rows:rows,//行数
                page:1,//页码
                sasdEmpNo:'',//员工编号
                sasdEmpName:'',//员工姓名
                sasdEmpDepartid:'',//部门id
                sasdAssessMonth:''//考核月份
            }
        },//1
        getSalary:{
            name:'获取薪资管理列表',
            text:'获取薪资管理列表,字段参考:Salary.java',
            url:'/salary/frontLoadSalaryListData.action',
            data:{
                rows:rows,//行数
                page:1,//页码
                sempNo:'',//员工编号
                sempName:'',//员工姓名
                sempDepartid:'',//部门id
                sassessMonth:''//考核月份
            }
        },//1
        getMobileMoney:{
            name:'获取手机费用管理列表',
            text:'获取手机费用管理列表，字段参考:Cost.java',
            url:'/cost/frontLoadCostListData.action',
            data:{
                rows:rows,//行数
                page:1,//页码
                scostEmpNo:'',//员工编号
                scostEmpName:'',//员工姓名
                scostEmpDepartid:'',//部门id
                scostAssessMonth:'',//考核月份
                scostEmpJobid:'',//职务名称
                scostBusinessPhone:''//办公电话
            }
        },//1
        getAdvertisingMoney:{
            name:'获取广告费用管理列表',
            text:'获取广告费用管理列表,字段参考:Advertisement.java',
            url:'/advertisement/frontLoadAdvertisementListData.action',
            data:{
                rows:rows,//行数
                page:1,//页码
                sadvsMarket:'',//市场
                sadvsLocation:'',//放置位置
                sadvsCorp:'',//广告单位
                sadvsCorpAddress:'',//广告单位地址
                sadvsPerson:'',//联系人
                sadvsPhone:'',//联系人电话
                sadvsAgencyPerson:''//经办人
            }
        },//1
        getResume:{
            name:'获取简历管理列表',
            text:'获取简历管理列表，字段参考:Resume.java',
            url:'/resume/frontLoadResumeListData.action',
            data:{
                rows:rows,//行数
                page:1//页码
            }
        },//1
        getStaff:{
            name:'获取员工档案管理列表',
            text:'获取员工档案管理列表，字段参考:Archives.java',
            url:'/archives/frontLoadArchivesListData.action',
            data:{
                rows:rows,//行数
                page:1//页码
            }
        },//1
        getGoods:{
            name:'获取物资管理列表',
            text:'获取物资管理列表，字段参考:Supplies.java',
            url:'/supplies/frontLoadSuppliesListData.action',
            data:{
                rows:rows,//行数
                page:1,//页码
                ssupNo:'',//物资ID
                ssupType:'',//物资类型
                ssupName:'',//物资名称
                ssupStatus:'',//物资状态
                ssupPurchaseStartTime:'',//购买开始时间
                ssupPurchaseEndTime:''//购买结束时间
            }
        }
    },
    dataInit:function(key){
        if(!route.api[key]){
            show('不存在的api接口')
            return
        }
        return $.parseJSON($.toJSON(route.api[key].data));
    },
    goto: function (e, data, target) {
        e = e || 'index';
        if (data) {
            formSend(data, this.path[e] || e,'',target);
            return;
        }
        if (this.path[e]) {
            open(this.path[e], target || '_self');
        } else {
            open(e, target || '_self');
        }
    }
}
function show(data) {
    try {
        if($.browser.msie&&typeof data=='object'){
            data= $.toJSON(data);
        }
        console.log(data)
    }
    catch (err) {
        //alert($.toJSON(data));
    }
}
function islogin(data) {
    var islogin = $.toJSON(data).indexOf('<title>登录</title>') >= 0 ? true : false;
    islogin && route.goto("login");
}
function ArrayReplace(e, reg, rpby) {
    var ta = e.slice(0), d = '\0';
    var str = ta.join(d);
    str = str.replace(reg, rpby);
    return str.split(d);
}
function ajaxObj(obj,type) {
    obj = obj || {};
    obj.action=obj.action||{};
    obj.url=(function(){
        if(obj.action&&obj.action.url){return WWWROOT+obj.action.url;}
        return obj.url||'';
    })();
    obj.type = obj.type || 'post';
    obj.data =(function(){
        if(obj.action&&obj.action.data){return $.parseJSON($.toJSON(obj.action.data));}
        return obj.data||{id:1};
    })();
    obj.fn = obj.fn || function (data) {
            show(data);
        };
    obj.errfn = obj.errfn || function (err) {
            islogin(err);
            show(err);
        }
    obj.ajax = function () {
        if(this.cache){//是否缓存
            obj.fn(this.cache);
            return;
        }
        $.ajax({
            success:function(data){
                obj.resultData=data;
                data=(function(_data){
                    for(var i in _data){
                        if(_data[i]==null||typeof _data[i]=='undefined'){
                            _data[i]='';
                        }else if(typeof _data[i]=='object'||typeof _data[i]=='array'){
                            arguments.callee(_data[i]);
                        }
                    }
                    return _data;
                })(data)//替换返回数据中null、undefined字段；
                obj.fn(data)
            },
            type: this.type,
            url: this.url,
            error: this.errfn,
            data: this.data,
            dataType: "json"
        });
    };
    obj.dataCheck=function(){
        var data=obj.resultData,
            apimsg=obj.action.name;
        show(apimsg+":");
        show(data);
        var x = '';
        if(data&&data.success=='false'){
            show(apimsg + ' ==> 返回失败');
            return false;
        }
        /*if(data&&data.list&&data.list.length==0){
            show(apimsg + ' ==> 返回列表为空');
            return false;
        }
        if(data&&data.rows&&data.rows.length==0){
            show(apimsg + ' ==> 返回列表为空');
            return false;
        }*/
        return true;
    };
    return obj;
}

var xDate = 1;
$(document).ajaxStart(function () {
    if($.browser.msie){
        $('#loading').show();
    }else{
        $('#loading').fadeIn();
    }
    xDate = new Date().getTime()
    show('ajax 开始了 ');
});
$(document).ajaxStop(function () {
    if($.browser.msie){
        $('#loading').hide();
    }else{
        $('#loading').fadeOut();
    }
    xDate = (new Date()).getTime() - xDate;
    show('ajax 执行完成了 总耗时：' + xDate + 'ms');
});

var base;
$(function () {
    $('body').append('<div id="loading" style="z-index:10; display:none;position: fixed;width: 100%; height: 100%;top:0;left: 0;background: url('+WWWROOT+'/html/xwt/front/images/public/shade.png)"> <img style="position: fixed;top: 50%;left: 50%;margin: -18px;" src="'+WWWROOT+'/html/xwt/front/images/public/loading.gif"> </div>')
    base = new baseShow();
    base.init();
});

/**
 *    封装基础数据类表现方式
 *    数据格式：[{},{}]
 *    引用方式：var x=baseShow();x.init(elem)//传入elem参数则只初始化该元素！不传则初始化全部
 */
function baseShow() {
    var that = this;
    that.option = {
        _for: 'for-data',
        _if: 'if',
        html: {
            _for:{},
            _if: []
        },
        data: {
        }
    }
    that.addData=function(key,value){
        that.option.data[key]=value;
    }
    that._find = function (elem) {
        var $for = $('[' + that.option._for + ']'), $forNodes;
        if($(elem).length>=1){
            $forNodes=$(elem);
        }else{
            $forNodes=$for;
        }
        $forNodes.each(function (i) {
            var $this = $(this),
                data = eval('that.option.data.' + $this.attr(that.option._for)),
                index=$('[for-data="'+$this.attr('for-data')+'"]').index($this),
                forName=$this.attr('for-data');
            i = forName;
            if(!i){show('错误的for-data');return}
            var html = that.option.html._for[i][index],length=$this.attr('for-length');
            $this.parents('table').next().text()=='暂无数据'&&$this.parents('table').next().remove();//移除暂无数据提示窗口
            if(!data||!data.length){
                show('该for-data无数据：'+$this.attr(that.option._for));
                //$this.html('暂无数据');//清空无数据元素内的模版数据；
                $this.html('').parents('table').after('<div style="text-align: center">暂无数据</div>');//清空无数据元素内的模版数据；
                return
            }
            if(length&&data.length>length){(data.length=parseInt(length))};
            html = that.filter(html,$this);
            var strs='';
            if (typeof html == 'object') {
                strs = that._for(data, html[1], html[0]);
            } else {
                strs = that._for(data, html);
            }
            $this.html(strs);
        })
    }
    that.filter = function (html,elem){
        var $html=$(html);
        var strs = [];
        if ($html.get(0)&&$html.get(0).nodeName == 'TBODY') {
            strs.push($('<div></div>').append($html.find('tr').first().clone()).html());
            strs.push($('<div></div>').append($html.find('tr').last().clone()).html());
            return strs;
        }
        if(elem.attr('for-only')=='last'){
            strs.push($('<div></div>').append($html.filter(':not(:last)')).html());
            strs.push($('<div></div>').append($html.last()).html());
            return strs;
        }else if(elem.attr('for-only')=='first'){
            strs.push($('<div></div>').append($html.filter(':not(:first)')).html());
            strs.push($('<div></div>').append($html.first()).html());
            return strs;
        }
        return html;
    }
    that.index = function (elem) {
        var _index = $('[' + that.option._for + ']').index($(elem));
        return _index >= 0 ? _index : '';
    }
    that._for = function (data, html,off) {
        var str = '', x = {}, strs = '';
        html&&(html=html.replace(/\r\n/g,''));//兼容ie8标签渲染插入换行符，eval方法出错；
        if (data && data.length) {
            for (var i=0;i<data.length;i++) {
                str = html;
                for (var o in data[i]) {
                    x.Reg = new RegExp("\{{(?=" + o + "[ ])(.| |\n)+?\}}", "g");
                    x.Array = str.match(x.Reg);
                    if (x.Array == null) {
                        continue;
                    }
                    x.Reg2 = new RegExp("(}|{|" + o + " )+", "g");
                    x.Array2 = ArrayReplace(x.Array, x.Reg2, '');
                    for (var n = 0; n < x.Array.length; n++) {
                        x.value = eval('data[i][o]' + x.Array2[n]);
                        str = str.replace(x.Array[n], x.value);
                    }
                }
                strs += str;
            }
        }
        strs=off?off+strs:strs;
        x.Reg3=new RegExp("\{{(.| |\n)+?\}}", "g");
        strs=strs.replace(x.Reg3,'');
        strs.indexOf('data-src')>=0&&(strs=that.dataSrc(strs));
        return strs;
    }
    that.dataSrc=function(html){
        var $html=$(html),$elem;
        $html.is('[data-src]')&&$html.attr('src',$html.attr('data-src')).removeAttr('data-src');
        $html.find('[data-src]').each(function(){
            $elem=$(this);
            $elem.attr('src',$elem.attr('data-src')).removeAttr('data-src');
        })
        return $('<div></div>').append($html).html();
    }//图片延时加载策略
    that.dataSelect=function(html){
        var $html=$(html),$elem;
        $html.is('[data-select]')&&$html.val($html.attr('data-select'));
        $html.find('[data-select]').each(function(){
            $(this).val($(this).attr('data-src'));
        })
        return $('<div></div>').append($html).html();
    }
    that.init = function (local) {
        var elem = $('[' + that.option._for + ']');
        elem.each(function (i,e) {
            var $this=$(this),forName=$this.attr('for-data'),forIndex=$('[for-data="'+forName+'"]').index($this);
            if(forName){
                if(that.option.html._for[forName]){
                    that.option.html._for[forName][forIndex]=$this.html();
                }else{
                    that.option.html._for[forName]=[$this.html()];
                }
            }
        });
        elem.html('');
        if(!$.ajaxSettings.global){
            elem.html('<img style="display:block;margin:0 auto;height:37px; width:37px;" src="'+WWWROOT+'/html/xwt/front/images/public/loading.gif">')
        }
        $.fn.updata=function(data,key){
            if(key&&data){
                if(typeof key == "string"){
                    that.addData(key,data);
                }else{
                    show("参数名类型错误");
                }
            }else if(data&&!key){
                that.addData($(this).attr('for-data'),data);
            }
            $(this).each(function(){
                that._find($(this));
            })
        }
    }
}
