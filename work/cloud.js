$(function(){
    window.control=new function(){
        this.get=function(str){
            if(/^[a-zA-Z]+$/.test(str)){
                return eval(str)//$.parseJSON($.toJSON(eval(str)));
            }
        }
        var getWorkLog=ajaxObj({action:route.api.getWorkLog});
        getWorkLog.$content=$('#workLog');
        getWorkLog.fn=function(data){
            if(!this.dataCheck()){
                alert('获取数据失败,请刷新重试');
                return;
            }
            show(1);
            this.$content.find('tbody').updata(data.rows);
            this.$content.find(".pagination").createPage({
                pageCount: data.total||0,//总页码
                current: data.page||this.data.page,//当前页
                backFn: function (p) {
                    getWorkLog.data.page = p;
                    getWorkLog.ajax();
                }
            });

        }
        getWorkLog.seach=function(){
            var area=getWorkLog.$content.find('.seach-area').val(),
                text=getWorkLog.$content.find('.seach-text').val();
            getWorkLog.data=route.dataInit('getWorkLog');
            getWorkLog.data[area]=text;
            getWorkLog.ajax();
        }
        getWorkLog.$content.find('.seach-btn').on('click',getWorkLog.seach);

        var getToFormal=ajaxObj({action:route.api.getToFormal});
        getToFormal.$content=$('#toFormal');
        getToFormal.fn=function(data){
            if(!this.dataCheck()){
                alert('获取数据失败,请刷新重试');
                return;
            }
            this.$content.find('tbody').updata(data.rows);
            this.$content.find(".pagination").createPage({
                pageCount: data.total||0,//总页码
                current: data.page||this.data.page,//当前页
                backFn: function (p) {
                    getToFormal.data.page = p;
                    getToFormal.ajax();
                }
            });
        }
        getToFormal.seach=function(){
            var area=getToFormal.$content.find('.seach-area').val(),
                text=getToFormal.$content.find('.seach-text').val();
            getToFormal.data=route.dataInit('getToFormal');
            getToFormal.data[area]=text;
            getToFormal.ajax();
        }
        getToFormal.$content.find('.seach-btn').on('click',getToFormal.seach);

        var getQuit=ajaxObj({action:route.api.getQuit});
        getQuit.$content=$('#quit');
        getQuit.fn=function(data){
            if(!this.dataCheck()){
                alert('获取数据失败,请刷新重试');
                return;
            }
            this.$content.find('tbody').updata(data.rows);
            this.$content.find(".pagination").createPage({
                pageCount: data.total||0,//总页码
                current: data.page||this.data.page,//当前页
                backFn: function (p) {
                    getQuit.data.page = p;
                    getQuit.ajax();
                }
            });
        }
        getQuit.seach=function(){
            var area=getQuit.$content.find('.seach-area').val(),
                text=getQuit.$content.find('.seach-text').val();
            getQuit.data=route.dataInit('getQuit');
            getQuit.data[area]=text;
            getQuit.ajax();
        }
        getQuit.$content.find('.seach-btn').on('click',getQuit.seach);

        var getLeave=ajaxObj({action:route.api.getLeave});
        getLeave.$content=$('#leave');
        getLeave.fn=function(data){
            if(!this.dataCheck()){
                alert('获取数据失败,请刷新重试');
                return;
            }
            this.$content.find('tbody').updata(data.rows);
            this.$content.find(".pagination").createPage({
                pageCount: data.total||0,//总页码
                current: data.page||this.data.page,//当前页
                backFn: function (p) {
                    getLeave.data.page = p;
                    getLeave.ajax();
                }
            });
        }
        getLeave.seach=function(){
            var area=getLeave.$content.find('.seach-area').val(),
                text=getLeave.$content.find('.seach-text').val();
            getLeave.data=route.dataInit('getLeave');
            getLeave.data[area]=text;
            getLeave.ajax();
        }
        getLeave.$content.find('.seach-btn').on('click',getLeave.seach);

        var getOvertime=ajaxObj({action:route.api.getOvertime});
        getOvertime.$content=$('#overtime');
        getOvertime.fn=function(data){
            if(!this.dataCheck()){
                alert('获取数据失败,请刷新重试');
                return;
            }
            this.$content.find('tbody').updata(data.rows);
            this.$content.find(".pagination").createPage({
                pageCount: data.total||0,//总页码
                current: data.page||this.data.page,//当前页
                backFn: function (p) {
                    getOvertime.data.page = p;
                    getOvertime.ajax();
                }
            });
        }
        getOvertime.seach=function(){
            var area=getOvertime.$content.find('.seach-area').val(),
                text=getOvertime.$content.find('.seach-text').val();
            getOvertime.data=route.dataInit('getOvertime');
            getOvertime.data[area]=text;
            getOvertime.ajax();
        }
        getOvertime.$content.find('.seach-btn').on('click',getOvertime.seach);

        var getGoout=ajaxObj({action:route.api.getGoout});
        getGoout.$content=$('#goout');
        getGoout.fn=function(data){
            if(!this.dataCheck()){
                alert('获取数据失败,请刷新重试');
                return;
            }
            this.$content.find('tbody').updata(data.rows);
            this.$content.find(".pagination").createPage({
                pageCount: data.total||0,//总页码
                current: data.page||this.data.page,//当前页
                backFn: function (p) {
                    getGoout.data.page = p;
                    getGoout.ajax();
                }
            });
        }
        getGoout.seach=function(){
            var area=getGoout.$content.find('.seach-area').val(),
                text=getGoout.$content.find('.seach-text').val();
            getGoout.data=route.dataInit('getGoout');
            getGoout.data[area]=text;
            getGoout.ajax();
        }
        getGoout.$content.find('.seach-btn').on('click',getGoout.seach);

        var getReimbursement=ajaxObj({action:route.api.getReimbursement});
        getReimbursement.$content=$('#reimbursement');
        getReimbursement.fn=function(data){
            if(!this.dataCheck()){
                alert('获取数据失败,请刷新重试');
                return;
            }
            this.$content.find('tbody').updata(data.rows);
            this.$content.find(".pagination").createPage({
                pageCount: data.total||0,//总页码
                current: data.page||this.data.page,//当前页
                backFn: function (p) {
                    getReimbursement.data.page = p;
                    getReimbursement.ajax();
                }
            });
        }
        getReimbursement.seach=function(){
            var area=getReimbursement.$content.find('.seach-area').val(),
                text=getReimbursement.$content.find('.seach-text').val();
            getReimbursement.data=route.dataInit('getReimbursement');
            getReimbursement.data[area]=text;
            getReimbursement.ajax();
        }
        getReimbursement.$content.find('.seach-btn').on('click',getReimbursement.seach);

        var getRecruitAccount=ajaxObj({action:route.api.getRecruitAccount});
        getRecruitAccount.$content=$('#recruitAccount');
        getRecruitAccount.fn=function(data){
            if(!this.dataCheck()){
                alert('获取数据失败,请刷新重试');
                return;
            }
            this.$content.find('tbody').updata(data.rows);
            this.$content.find(".pagination").createPage({
                pageCount: data.total||0,//总页码
                current: data.page||this.data.page,//当前页
                backFn: function (p) {
                    getRecruitAccount.data.page = p;
                    getRecruitAccount.ajax();
                }
            });
        }
        getRecruitAccount.seach=function(){
            var area=getRecruitAccount.$content.find('.seach-area').val(),
                text=getRecruitAccount.$content.find('.seach-text').val();
            getRecruitAccount.data=route.dataInit('getRecruitAccount');
            getRecruitAccount.data[area]=text;
            getRecruitAccount.ajax();
        }
        getRecruitAccount.$content.find('.seach-btn').on('click',getRecruitAccount.seach);

        var getRecruitPlan=ajaxObj({action:route.api.getRecruitPlan});
        getRecruitPlan.$content=$('#recruitPlan');
        getRecruitPlan.fn=function(data){
            if(!this.dataCheck()){
                alert('获取数据失败,请刷新重试');
                return;
            }
            this.$content.find('tbody').updata(data.rows);
            this.$content.find(".pagination").createPage({
                pageCount: data.total||0,//总页码
                current: data.page||this.data.page,//当前页
                backFn: function (p) {
                    getRecruitPlan.data.page = p;
                    getRecruitPlan.ajax();
                }
            });
        }
        getRecruitPlan.seach=function(){
            var area=getRecruitPlan.$content.find('.seach-area').val(),
                text=getRecruitPlan.$content.find('.seach-text').val();
            getRecruitPlan.data=route.dataInit('getRecruitPlan');
            getRecruitPlan.data[area]=text;
            getRecruitPlan.ajax();
        }
        getRecruitPlan.$content.find('.seach-btn').on('click',getRecruitPlan.seach);

        var getExecutiveData=ajaxObj({action:route.api.getExecutiveData});
        getExecutiveData.$content=$('#executiveData');
        getExecutiveData.fn=function(data){
            if(!this.dataCheck()){
                alert('获取数据失败,请刷新重试');
                return;
            }
            this.$content.find('tbody').updata(data.rows);
            this.$content.find(".pagination").createPage({
                pageCount: data.total||0,//总页码
                current: data.page||this.data.page,//当前页
                backFn: function (p) {
                    getExecutiveData.data.page = p;
                    getExecutiveData.ajax();
                }
            });
        }
        getExecutiveData.seach=function(){
            var area=getExecutiveData.$content.find('.seach-area').val(),
                text=getExecutiveData.$content.find('.seach-text').val();
            getExecutiveData.data=route.dataInit('getExecutiveData');
            getExecutiveData.data[area]=text;
            getExecutiveData.ajax();
        }
        getExecutiveData.$content.find('.seach-btn').on('click',getExecutiveData.seach);

        var getBusinessData=ajaxObj({action:route.api.getBusinessData});
        getBusinessData.$content=$('#businessData');
        getBusinessData.fn=function(data){
            if(!this.dataCheck()){
                alert('获取数据失败,请刷新重试');
                return;
            }
            this.$content.find('tbody').updata(data.rows);
            this.$content.find(".pagination").createPage({
                pageCount: data.total||0,//总页码
                current: data.page||this.data.page,//当前页
                backFn: function (p) {
                    getBusinessData.data.page = p;
                    getBusinessData.ajax();
                }
            });
        }
        getBusinessData.seach=function(){
            var area=getBusinessData.$content.find('.seach-area').val(),
                text=getBusinessData.$content.find('.seach-text').val();
            getBusinessData.data=route.dataInit('getBusinessData');
            getBusinessData.data[area]=text;
            getBusinessData.ajax();
        }
        getBusinessData.$content.find('.seach-btn').on('click',getBusinessData.seach);

        var getCheckwork=ajaxObj({action:route.api.getCheckwork});
        getCheckwork.$content=$('#checkwork');
        getCheckwork.fn=function(data){
            if(!this.dataCheck()){
                alert('获取数据失败,请刷新重试');
                return;
            }
            this.$content.find('tbody').updata(data.rows);
            this.$content.find(".pagination").createPage({
                pageCount: data.total||0,//总页码
                current: data.page||this.data.page,//当前页
                backFn: function (p) {
                    getCheckwork.data.page = p;
                    getCheckwork.ajax();
                }
            });
        }
        getCheckwork.seach=function(){
            var area=getCheckwork.$content.find('.seach-area').val(),
                text=getCheckwork.$content.find('.seach-text').val();
            getCheckwork.data=route.dataInit('getCheckwork');
            getCheckwork.data[area]=text;
            getCheckwork.ajax();
        }
        getCheckwork.$content.find('.seach-btn').on('click',getCheckwork.seach);

        var getSalary=ajaxObj({action:route.api.getSalary});
        getSalary.$content=$('#salary');
        getSalary.fn=function(data){
            if(!this.dataCheck()){
                alert('获取数据失败,请刷新重试');
                return;
            }
            this.$content.find('tbody').updata(data.rows);
            this.$content.find(".pagination").createPage({
                pageCount: data.total||0,//总页码
                current: data.page||this.data.page,//当前页
                backFn: function (p) {
                    getSalary.data.page = p;
                    getSalary.ajax();
                }
            });
        }
        getSalary.seach=function(){
            var area=getSalary.$content.find('.seach-area').val(),
                text=getSalary.$content.find('.seach-text').val();
            getSalary.data=route.dataInit('getSalary');
            getSalary.data[area]=text;
            getSalary.ajax();
        }
        getSalary.$content.find('.seach-btn').on('click',getSalary.seach);

        var getMobileMoney=ajaxObj({action:route.api.getMobileMoney});
        getMobileMoney.$content=$('#mobileMoney');
        getMobileMoney.fn=function(data){
            if(!this.dataCheck()){
                alert('获取数据失败,请刷新重试');
                return;
            }
            this.$content.find('tbody').updata(data.rows);
            this.$content.find(".pagination").createPage({
                pageCount: data.total||0,//总页码
                current: data.page||this.data.page,//当前页
                backFn: function (p) {
                    getMobileMoney.data.page = p;
                    getMobileMoney.ajax();
                }
            });
        }
        getMobileMoney.seach=function(){
            var area=getMobileMoney.$content.find('.seach-area').val(),
                text=getMobileMoney.$content.find('.seach-text').val();
            getMobileMoney.data=route.dataInit('getMobileMoney');
            getMobileMoney.data[area]=text;
            getMobileMoney.ajax();
        }
        getMobileMoney.$content.find('.seach-btn').on('click',getMobileMoney.seach);

        var getAdvertisingMoney=ajaxObj({action:route.api.getAdvertisingMoney});
        getAdvertisingMoney.$content=$('#sdvertisingMoney');
        getAdvertisingMoney.fn=function(data){
            if(!this.dataCheck()){
                alert('获取数据失败,请刷新重试');
                return;
            }
            this.$content.find('tbody').updata(data.rows);
            this.$content.find(".pagination").createPage({
                pageCount: data.total||0,//总页码
                current: data.page||this.data.page,//当前页
                backFn: function (p) {
                    getAdvertisingMoney.data.page = p;
                    getAdvertisingMoney.ajax();
                }
            });
        }
        getAdvertisingMoney.seach=function(){
            var area=getAdvertisingMoney.$content.find('.seach-area').val(),
                text=getAdvertisingMoney.$content.find('.seach-text').val();
            getAdvertisingMoney.data=route.dataInit('getAdvertisingMoney');
            getAdvertisingMoney.data[area]=text;
            getAdvertisingMoney.ajax();
        }
        getAdvertisingMoney.$content.find('.seach-btn').on('click',getAdvertisingMoney.seach);

        var getResume=ajaxObj({action:route.api.getResume});
        getResume.$content=$('#resume');
        getResume.fn=function(data){
            if(!this.dataCheck()){
                alert('获取数据失败,请刷新重试');
                return;
            }
            this.$content.find('tbody').updata(data.rows);
            this.$content.find(".pagination").createPage({
                pageCount: data.total||0,//总页码
                current: data.page||this.data.page,//当前页
                backFn: function (p) {
                    getResume.data.page = p;
                    getResume.ajax();
                }
            });
        }
        getResume.seach=function(){
            var area=getResume.$content.find('.seach-area').val(),
                text=getResume.$content.find('.seach-text').val();
            getResume.data=route.dataInit('getResume');
            getResume.data[area]=text;
            getResume.ajax();
        }
        getResume.$content.find('.seach-btn').on('click',getResume.seach);

        var getStaff=ajaxObj({action:route.api.getStaff});
        getStaff.$content=$('#staff');
        getStaff.fn=function(data){
            if(!this.dataCheck()){
                alert('获取数据失败,请刷新重试');
                return;
            }
            this.$content.find('tbody').updata(data.rows);
            this.$content.find(".pagination").createPage({
                pageCount: data.total||0,//总页码
                current: data.page||this.data.page,//当前页
                backFn: function (p) {
                    getStaff.data.page = p;
                    getStaff.ajax();
                }
            });
        }
        getStaff.seach=function(){
            var area=getStaff.$content.find('.seach-area').val(),
                text=getStaff.$content.find('.seach-text').val();
            getStaff.data=route.dataInit('getStaff');
            getStaff.data[area]=text;
            getStaff.ajax();
        }
        getStaff.$content.find('.seach-btn').on('click',getStaff.seach);

        var option={
            workLog:{//工作日志
                actionList:getWorkLog,
                modalUrl:''
            },
            toFormal:{//转正管理
                actionList:getToFormal,
                modalUrl:''
            },
            quit:{//离职管理
                actionList:getQuit,
                modalUrl:''
            },
            leave:{//请假管理
                actionList:getLeave,
                modalUrl:''
            },
            overtime:{//加班管理
                actionList:getOvertime,
                modalUrl:''
            },
            goout:{//外出管理
                actionList:getGoout,
                modalUrl:''
            },
            reimbursement:{//报销管理
                actionList:getReimbursement,
                modalUrl:''
            },
            recruitAccount:{//招聘帐号管理
                actionList:getRecruitAccount,
                modalUrl:''
            },
            recruitPlan:{//招聘计划管理
                actionList:getRecruitPlan,
                modalUrl:''
            },
            executiveData:{//行政数据管理
                actionList:getExecutiveData,
                modalUrl:''
            },
            businessData:{//业务数据管理
                actionList:getBusinessData,
                modalUrl:''
            },
            checkwork:{//考勤数据管理
                actionList:getCheckwork,
                modalUrl:''
            },
            salary:{//薪资管理
                actionList:getSalary,
                modalUrl:''
            },
            mobileMoney:{//手机费用管理
                actionList:getMobileMoney,
                modalUrl:''
            },
            advertisingMoney:{//广告费用管理
                actionList:getAdvertisingMoney,
                modalUrl:''
            },
            resume:{//简历管理
                actionList:getResume,
                modalUrl:''
            },
            staff:{//员工档案管理
                actionList:getStaff,
                modalUrl:''
            }
        }
        $(document).on('show', 'a[data-toggle="tab"]', function (e) {
            var $e = $(e.target),//缓存触发事件的元素
                bodyId=$e.attr('data-target').replace('#','');
            if(!option[bodyId]){
                show('未绑定内容');
                return false;
            }
            $('#leftNav li').not($e).removeClass('active');
            option[bodyId].actionList.ajax();
        })//检测左侧导航栏的点击操作
        $(document).on('show','a[data-toggle="modal"]',function(e){
            var $e = $(e.target);//缓存触发事件的元素
            if($e.text().indexOf('新增')>-1){

            }
        })
    }
    /*$('.datetime').datetimepicker({
        language:  'zh-CN'
    });*/
})