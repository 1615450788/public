/**
 * @author : 王涛
 * @date : 2015年10月23日 16:39:20
 * @Description：管理前端页面路径route、后端接口api路径、常用表现方法封装
 * */
var route = {
    path: {
        'index': window.WWWROOT + '/html/xwt/front/page/public/index.jsp',//首页
        'head': window.WWWROOT + '/html/xwt/front/page/layout/head.jsp',//首页
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
        'market': window.WWWROOT + '/html/xwt/front/page/userType/market/account.jsp',//市场管理用户中心
        'government': window.WWWROOT + '/html/xwt/front/page/userType/government/account.jsp',//政府中心
        'productSetting': window.WWWROOT + '/html/xwt/front/page/userType/agency/productSetting.jsp',//商品详细页面设置
        'agencyIndex': window.WWWROOT + '/html/xwt/front/page/order/agencyIndex.jsp',//代理商户店铺首页
        'userBill': window.WWWROOT + '/html/xwt/front/page/userType/user/bill.jsp',//普通用户记账单
        'userAllPapers': window.WWWROOT + '/html/xwt/front/page/userType/user/allPapers.jsp',//普通用户全部证件
        'special': window.WWWROOT + '/html/xwt/front/page/news/special/index.jsp',//小微专题首页页面
        'law': window.WWWROOT + '/html/xwt/front/page/news/law/index.jsp',//政策法规首页页面
        'civil': window.WWWROOT + '/html/xwt/front/page/news/law/civil.jsp',//政策民事页面
        'scope': window.WWWROOT + '/html/xwt/front/page/userType/agency/scope.jsp',//商户经营范围设置页面
        'schedule': window.WWWROOT + '/html/xwt/front/page/order/schedule.jsp',//商户经营范围设置页面
        'marketApply': window.WWWROOT + '/html/xwt/front/page/userType/market/apply.jsp',//市场管理申请页面
        'marketIndex': window.WWWROOT + '/html/xwt/front/page/public/marketIndex.jsp',//市场管理入口页面
        'governmentIndex': window.WWWROOT + '/html/xwt/front/page/public/governmentIndex.jsp',//政府入口
        'governmentApply': window.WWWROOT + '/html/xwt/front/page/userType/government/apply.jsp',//政府申请页面
        'agencyApplyIndex': window.WWWROOT + '/html/xwt/front/page/public/agencyIndex.jsp',//服务机构申请入口
        'userApply': window.WWWROOT + '/html/xwt/front/page/userType/user/apply.jsp',//小微企业申请页面
        'addBuyCar': window.WWWROOT + '/html/xwt/front/page/order/addBuyCar.jsp',//添加购物车成功页面
        'newsDetail': window.WWWROOT + '/html/xwt/front/page/news/detail.jsp',//添加购物车成功页面
        'applyAgency': window.WWWROOT + '/html/xwt/front/page/userType/agency/apply.jsp',//服务商申请页面
        'applyMarket': window.WWWROOT + '/html/xwt/front/page/userType/market/apply.jsp',//市场申请页面
        'getUserToMarket': window.WWWROOT + '/html/xwt/front/page/userType/market/userOrder.jsp',//市场查看企业交易页面
        'billLicense': window.WWWROOT + '/html/xwt/front/page/userType/user/billLicense.jsp',//小微企业记账凭证上传
        cloud: window.WWWROOT + '/html/xwt/front/page/cloud/index.jsp'//小微云
    },
    api: {
        getAgencysInfo: window.WWWROOT + '/agencyservice/getAgencysInfo.action',//获取服务商信息
        getEnterpriseInfo: window.WWWROOT + '/agencyservice/getEnterpriseInfo.action',//获取所有类型用户(当前)信息
        getEnterpriseInfoToId: window.WWWROOT + '/agencyservice/getEnterpriseInfoByOrgId.action',//获取所有类型商户信息
        getOrderDetail: window.WWWROOT + '/orders/getOrderDetail.action',//获取订单详情
        getAgencyOrder: window.WWWROOT + '/suborders/agencyOrdersList.action',//获取商户订单列表
        getUserOrder: window.WWWROOT + '/orders/userOrdersList.action',//获取用户订单
        getServiceFile: window.WWWROOT + '/servicedocuments/getServiceDocumentsBySid.action',//获取服务所需提供证照信息
        getServiceFile2: window.WWWROOT + '/servicedocuments/getServiceDocumentsBySidForAudit.action',//获取子订单所需提供证照信息
        getFileByOrderServer: window.WWWROOT + '/servicedocuments/getServiceDocumentsByOrderDetail.action',//获取大订单下多个服务所需提供证照信息；
        getServiceInfo: window.WWWROOT + '/agencyservice/loadServicePayListData.action',//获取服务信息
        getServiceInfoById: window.WWWROOT + '/services/getServicesInfoBySid.action',//获取服务信息
        getUserInfo: window.WWWROOT + '/orders/getUserInfoByOrderId.action',//获取用户企业信息
        changeMoney: window.WWWROOT + '/orders/updatePrice.action',//服务商子订单改价接口
        getSelectBody: window.WWWROOT + '/dict/getSelectBody.action',//获取预设订单流程记录类型（数据字典）
        getRecordUser: window.WWWROOT + '/user/getSelectBody.action',//获取流程接收人
        getAgencyServerType: window.WWWROOT + '/servicetype/getSelectBody.action',//获取商家自定义里面的服务类型
        getAgencyServerProject: window.WWWROOT + '/services/getSelectBody.action',//获取商家自定义里面的服务项目
        sendOrderRecord: window.WWWROOT + '/deploy/complete.action',//订单流程操作接口
        closeOrders: window.WWWROOT + '/orders/closeOrders.action',//关闭订单
        orderRecord: window.WWWROOT + '/flowvariables/loadFlowvariablesListByPara.action',//获取订单流程记录
        fileUpload: window.WWWROOT + '/base/processFileUpload.action',//上传证照文件
        getChildOrder: window.WWWROOT + '/suborders/getSubOrderInfo.action',//获取子订单信息
        updataUserInfo: window.WWWROOT + '/user/userMoreInfo.action',//用户附加资料更新
        updateUserInfo: window.WWWROOT + '/enterprise/frontEnterpriseUpdate.action',//用户附加资料更新
        updateAgencyInfo: window.WWWROOT + '/agencies/frontAgenciesUpdate.action',//企业附加资料更新
        updateMarketInfo: window.WWWROOT + '/markets/frontMarketsUpdate.action',//市场附加资料更新
        updateGovsInfo: window.WWWROOT + '/govs/frontGovsUpdate.action',//政府附加资料更新
        getNews: window.WWWROOT + '/news/getNewsInfoByNewsType.action',//获取首页新闻公告
        getNewsById: window.WWWROOT + '/news/getNewsInfoById.action',//获取根据id获取新闻公告详细信息
        getIndexServer: window.WWWROOT + '/services/getTagsServices.action',//获取首页最热服务
        sendAgencyDiv: window.WWWROOT + '/agencycustom/agencycustomInfoSave.action',//商家自定义接口定义
        getAgencyDiv: window.WWWROOT + '/agencycustom/loadAgencycustomListData.action',//读取商家自定义信息接口url
        sendAgencyDivImg: window.WWWROOT + '/base/processFileUpload.action',//商家自定义图片上传接口
        delAgencyDivImg: window.WWWROOT + '/agencycustom/agencycustomDelete.action ',//商家自定义图片删除接口
        getFile: window.WWWROOT + '/base/getRemoteImg.action?remoteFileName=',//获取文件接口
        uploadFile: window.WWWROOT + '/base/getFile.action?remoteFileName=',//下载文件接口
        getAgencyDivServerList: window.WWWROOT + '/agencycustom/loadAgencyCustomServiceTypeSet.action',//获取服务商自定义-服务类型设置-列表展示
        getAgencyDivServerSort: window.WWWROOT + '/agencycustom/agencyCustomServiceDown.action',//服务商自定义-服务类型设置-列表展示排序
        getAgencyServer: window.WWWROOT + '/agencyservice/getAgeServices.action',//获取代理商所有服务
        getProjectList: window.WWWROOT + '/services/loadServicesListData.action',//获取服务商商品管理列表
        openServer: window.WWWROOT + '/agencyservice/agencyserviceOpen.action',//服务商商品管理开通服务
        //getOpenServerInfo: window.WWWROOT + '/agencyservice/agencyserviceOpen.action',//获取单个已开通的服务
        closeServer: window.WWWROOT + '/agencyservice/agencyserviceClose.action',//关闭服务
        getServerInfo: window.WWWROOT + '/agencyservice/getAgencyserviceInfo.action',//获取服务详细（开放接口）
        sendRecordUserOption: window.WWWROOT + '/flowconfig/flowconfigSaveInfo.action',//新增流程人员配置
        getRecordUserOption: window.WWWROOT + '/flowconfig/flowconfigInfoUpdate.action',// 获取流程人员人员配置
        getRecordList: window.WWWROOT + '/flowconfig/loadFlowconfigListData.action',// 获取流程配置列表
        getStaffList: window.WWWROOT + '/user/loadUserListData.action',//获取员工管理列表
        updataStaff: window.WWWROOT + '/user/addUserManage.action',//新增（保存）员工信息
        testLoginName: window.WWWROOT + '/user/isExists.action',//验证登录名是否重复
        delStaff: window.WWWROOT + '/user/userDeleteFront.action',//删除员工
        getStaffInfo: window.WWWROOT + '/user/userUpdateInfo.action',//获取员工详细信息
        changeStaffPwd: window.WWWROOT + '/user/personPaswUpdateForFront.action',//修改员工密码
        getMyFileList: window.WWWROOT + '/personfiles/loadPersonfilesListData.action',//获取我的文件列表
        delFile: window.WWWROOT + '/personfiles/personFileAndShareFileDelete.action',//删除用户文件
        getSureShareUser: window.WWWROOT + '/fileshare/getShareAgencies.action',//获取可共享用户
        optionShare: window.WWWROOT + '/fileshare/shareFile.action',//设置共享
        delShareUser: window.WWWROOT + '/fileshare/cancelShareFile.action',//取消共享
        cancelOrder: window.WWWROOT + '/suborders/startRefundFlow.action',//退款
        checkCancelMoney: window.WWWROOT + '/orders/refund.action',//服务商确认退款
        getCancelOrderList: window.WWWROOT + '/suborders/loadUserRefundOrderList.action',//退款列表

        getAgencyCancelOrderList: window.WWWROOT + '/suborders/loadAgencyRefundOrderList.action',//退款列表

        getCloseOrderList: window.WWWROOT + '/suborders/loadUserColseOrderList.action',//关闭订单列表
        cancelRefundOrder: window.WWWROOT + '/suborders/cancelRefundOrderForUserSave.action',//取消退款订单
        alreadyShareUser: window.WWWROOT + '/fileshare/getAlreadyShareAgencies.action',//获取共享用户列表
        resetFileName: window.WWWROOT + '/personfiles/resetFileNameSave.action',//我的文件重命名
        getMyShareList: window.WWWROOT + '/orders/getShareListByUser.action',//获取我的收入列表
        getMyShareSelf: window.WWWROOT + '/orders/getMyShareList.action',//获取我的分享-我的分享列表
        getMyShareOther: window.WWWROOT + '/orders/getShareListByUser.action',//获取我的分享-我的用户分享列表
        getServerType: window.WWWROOT + '/servicetype/getTypesForConfig.action',//服务设置模块-服务类型获取
        optionServer: window.WWWROOT + '/agencycustom/frontAgencycustomSave.action',//服务设置页面信息提交
        getBuyCarList: window.WWWROOT + '/cart/getDetailCarts.action',//获取购物车服务列表
        addBuyCar: window.WWWROOT + '/cart/cartsSave.action',//加入购物车
        delBuyCar: window.WWWROOT + '/cart/forntCartDelete.action',//删除购物车服务项
        buyCarSum: window.WWWROOT + '/cart/showCarts.action',//购物车结算中转接口
        register: window.WWWROOT + '/user/userRegister.action',//用户注册接口
        addLicense: window.WWWROOT + '/attachdatum/attachdatumInfoSave.action',//审核页补充证照资料接口
        getAgencyInfo: window.WWWROOT + '/user/loadUserMoreInfo.action',//获取服务商补充企业资料；
        sendEvaluate: window.WWWROOT + '/evaluation/evaluationSaveInfo.action',//提交评价信息；
        getEvaluateList: window.WWWROOT + '/evaluation/loadEvaluationListData.action',//我的评价列表；
        getComplainList: window.WWWROOT + '/complaint/loadComplaintListData.action',//我的投诉列表；
        getAgencyComplain: window.WWWROOT + '/complaint/loadAgencyProcessComplaintList.action',//我的投诉列表；
        sendComplain: window.WWWROOT + '/complaint/complaintSaveInfo.action',//提交投诉信息；
        getChangeOrder: window.WWWROOT + '/suborders/loadCustomServiceCoordinationList.action',//获取客服协调单列表；
        getShareCode: window.WWWROOT + '/user/getRelationsCode.action',//获取分享码；
        getAddressList: window.WWWROOT + '/takedelivery/loadTakedeliveryByuserId.action',//获取用户地址信息；
        updataAddress: window.WWWROOT + '/takedelivery/takedeliverySave.action',//新增收货地址；
        updateAddress: window.WWWROOT + '/takedelivery/frontTakedeliveryForUpdate.action',//更新收货地址；
        getAddrInfo: window.WWWROOT + '/takedelivery/takedeliveryInfoForUpdate.action',//获取收货地址信息；
        setDefaultAddr: window.WWWROOT + '/takedelivery/takedeliveryDefault.action',//设为默认收货地址；
        delAddr: window.WWWROOT + '/takedelivery/takedeliveryDelete.action',//删除收货地址；
        getLoginInfo: window.WWWROOT + '/user/loadPersonInfo.action',//获取用户信息；
        updataLoginInfo: window.WWWROOT + '/user/personInfoUpdate.action',//更新用户信息；
        getBillServer: window.WWWROOT + '/agencyservice/getAgencyBookkeepingService.action',//结算页获取记账服务项目；
        login: window.WWWROOT + '/front/j_spring_security_check',//登录接口；
        getAddrByOrderId: window.WWWROOT + '/orders/loadTakedeliveryByOrderId.action',//根据订单id获取用户收货地址信息；
        getBillByOrderId: window.WWWROOT + '/suborders/getTaxSubOrdersByOrderId.action',//获取指定订单的记账服务子订单；
        getOrderStateToSeach: window.WWWROOT + '/orders/getSubOrderStateForType.action',//获取指定订单类型下的订单状态；
        getRecordTypeToSeach: window.WWWROOT + '/orders/getFlowStateForOrderType.action',//获取指定订单类型下的流程类型；
        getEvaluateDetail: window.WWWROOT + '/evaluation/getEvaluationInfo.action',//获取评价详情；
        changeEvaluate: window.WWWROOT + '/evaluation/evaluationUpdate.action',//修改评价信息；
        delEvaluate: window.WWWROOT + '/evaluation/evaluationDelete.action',//修改评价信息；
        getCloseServer: window.WWWROOT + '/services/loadServicesNotOpenListData.action',//获取未开通服务列表；
        getLicenseByOrder: window.WWWROOT + '/servicedocuments/getServiceDocumentsByOrderId.action',//获取订单所上传证照；
        getComplaintInfo: window.WWWROOT + '/complaint/getComplaintInfo.action',//获取投诉详细信息；
        changeComplaintDetail: window.WWWROOT + '/complaint/complaintUpdateSave.action',//编辑更新投诉信息；
        delComplaint: window.WWWROOT + '/complaint/complaintDelete.action',//删除投诉信息；
        findServer: window.WWWROOT + '/agencyservice/loadListByServiceId.action',//搜索服务信息；
        getEvaluateByOrderid: window.WWWROOT + '/evaluation/getEvaluationInfoBySubOrderId.action',//获取子订单评价信息；
        getPublicEvaluate: window.WWWROOT + '/evaluation/frontLoadEvaluationListData.action',//获取子订单评价信息；
        getServerNum: window.WWWROOT + '/statistics/frontGetStatisticsData.action',//获取服务数据（服务页面购买按钮上方的灰条）；
        getChildTypes: window.WWWROOT + '/servicetype/getChildTypes.action',//获取搜索列表子服务类型；
        sendRobOrder: window.WWWROOT + '/deploy/claim.action',//抢单接口，请求参数参照流程；
        applyAgency: window.WWWROOT + '/agencies/frontAgenciesSave.action',//申请服务商；
        applyMaket: window.WWWROOT + '/markets/frontMarketsSave.action',//申请市场；
        applyGovs: window.WWWROOT + '/govs/frontGovsSave.action',//申请政府；
        applyUser: window.WWWROOT + '/enterprise/frontEnterprisesSave.action',//申请小微企业；
        getRunArea: window.WWWROOT + '/servicesconfig/getchilds.action',//获取经营范围关系；
        getRunPath: window.WWWROOT + '/dict/getChildTypeSelectBody.action',//获取经营地址关系；
        getServerLicense:window.WWWROOT+'/orders/orderGen.action',//提交订单
        sendOrderShare:window.WWWROOT+'/fileshare/shareFileByPurchase.action',//提交订单时发送接收文件分享关系
        sendServerRecode:window.WWWROOT+'/accessrecord/frontAccessrecordSave.action',//发送商品访问记录
        addDivLicense:window.WWWROOT+'/servicedocuments/frontOrgServicedocumentsSave.action',//商户添加服务自定义证照
        getDivLicense:window.WWWROOT+'/servicedocuments/frontGetOrgServicedocumentsBySid.action',//商户获取服务自定义证照
        delDivLicense:window.WWWROOT+'/servicedocuments/fronServicedocumentsDelete.action',//商户删除服务自定义证照
        getUnionChildType:window.WWWROOT+'/servicesconfig/loadServicesconfigListData.action',//获取经营类型id+服务类型顶级id的子类型
        getPartneredUser:window.WWWROOT+'/markets/frontGetPartneredForEnterprise.action',//市场获取已有合作关系的小微企业列表
        getNotPartneredAgency:window.WWWROOT+'/markets/frontGetPartnersForAgency.action',//市场获取未合作的服务商列表
        getNotPartneredUser:window.WWWROOT+'/markets/frontGetPartnersForEnterprise.action',//市场获取未合作的小微企业列表
        setPartneredAgencyToMarket:window.WWWROOT+'/markets/frontSetPartnerForAgency.action',//市场申请与服务商合作的接口
        setPartneredUserToMarket:window.WWWROOT+'/markets/frontSetPartnerForEnterprise.action',//市场申请与小微企业合作的接口
        getUserOrderToMarket:window.WWWROOT+'/suborders/frontLoadSubordersOfEnterprise.action',//市场获取小微企业订单的接口
        getPartneredAgency0:window.WWWROOT+'/markets/frontGetApplyingPartneredForAgency.action',//市场获取合作申请中的服务商（partnerState,0）
        getPartneredAgency1:window.WWWROOT+'/markets/frontGetAppliedPartneredForAgency.action',//市场获取已合作的服务商（partnerState,1）
        getPartneredAgency2:window.WWWROOT+'/markets/frontGetTerminationPartneredForAgency.action',//市场获取已解的服务商（partnerState,2）
        delPartneredAgency:window.WWWROOT+'/markets/frontSetTerminationPartneredForAgency.action',//市场取消已合作的服务商
        delPartneredUser:window.WWWROOT+'/markets/frontSetTerminationPartneredForEnterparise.action',//市场取消已合作的小微企业

        getNotPartneredMarketToAgency:window.WWWROOT+'/agencies/frontGetPartnersForMarkets.action',//服务商获取可合作的市场
        getPartneredMarketToAgency0:window.WWWROOT+'/agencies/frontGetApplyingPartneredForMarkets.action',//服务商获取合作申请中的市场（partnerState,0）
        getPartneredMarketToAgency1:window.WWWROOT+'/agencies/frontGetAppliedPartneredForMarkets.action',//服务商获取已合作的市场（partnerState,1）
        getPartneredMarketToAgency2:window.WWWROOT+'/agencies/frontGetTerminationPartneredForMarkets.action',//服务商获取已解约的市场（partnerState,2）
        setPartneredMarketToAgency:window.WWWROOT+'/agencies/frontSetPartnerForMarkets.action',//服务商申请与市场合作的接口
        delPartneredMarketToAgency:window.WWWROOT+'/agencies/frontSetTerminationPartneredForMarkets.action',//服务商取消与市场合作的接口

        getBillVoucherToOrderId:window.WWWROOT+'/certificatefile/frontLoadCertificatefileListDataBySubOrderId.action',//根据子订单id获取对应的凭证列表
        updataBillVoucher:window.WWWROOT+'/base/processFileUpload.action',//上传凭证接口
        delBillVoucher:window.WWWROOT+'/certificatefile/frontCertificatefileDelete.action',//删除凭证接口
        getBillEvaluation:window.WWWROOT+'/evaluation/getEvaluationInfoStatistics.action',//记账凭证页面评价

        getMyNewsList:window.WWWROOT+'/noticeinfo/frontLoadNoticeinfoListDataGrid.action',//获取我的资讯列表
        addMyNewsList:window.WWWROOT+'/noticeinfo/frontNoticeinfoSave.action',//添加我的资讯
        updataMyNews:window.WWWROOT+'/noticeinfo/frontNoticeinfoUpdate.action',//修改我的资讯
        delMyNews:window.WWWROOT+'/noticeinfo/frontNoticeinfoDelete.action',//删除我的资讯
        toogleMyNews:window.WWWROOT+'/noticeinfo/frontUpdateNoticeinfoState.action',//打开关闭我的资讯
        getMyNewsDetail:window.WWWROOT+'/noticeinfo/frontGetNoticeinfo.action',//获取我的资讯详细
        getNoticeList:window.WWWROOT+'/noticeinfo/frontLoadByAllNoticeinfoListDataGrid.action',//资讯公告列表


        getFootprintServer:window.WWWROOT+'/accessrecord/frontLoadMyFootprintData.action',//读取首页我的足迹
        sendShareData:window.WWWROOT+'/commodityshare/frontCommodityshareSave.action',//保存我的足迹
        getUserBillList:window.WWWROOT+'/orders/userTaxOrdersList.action',//读取我的记账单
        messageCheck: window.WWWROOT + "/base/getSMS.action",//短信验证接口
        getExpress: window.WWWROOT + "/base/getExpress.action",//快递信息查询接口
        pay: window.WWWROOT + "/orders/pay.action"
    },
    img:{
        logo:window.WWWROOT + '/html/xwt/front/images/apply/pic03.png',
        license:window.WWWROOT + '/html/xwt/front/images/apply/pic30.png'
    },
    other:{
        yyzz:['营业执照证（新开）','营业执照（企业新开）'],
        jjxm:["taxFlow"]
    },
    goto: function (_path, data, target,search) {
        var path= _path || 'index',urlData=search||'';
        if (data) {
            formSend(data, this.path[path] || path, '', target);
        }else{
            open((this.path[path]||path)+urlData, target || '_self');
        }
    },
    userType: function (type,search) {
        if (!type) {
            alert('请登录');
            route.goto(route.path.login);
            return
        }
        var path;
        switch (parseInt(type)) {
            case 1:
            case 2:
                path='user';
                break;
            case 9:
                alert('升级用户后开启个人中心！');
                return;
            case 3:
                path='agency';
                break;
            case 4:
                path='market';
                break;
            case 5:
                path='government';
                break;
            default :
                show('错误的用户类型:' + type)
                break;
        }
        route.goto(path,'','_self',search);
    },
    close: function () {
        window.opener = null;
        window.open('', '_self');
        window.close();
    }
}

function orderState(type,orderStute){
    var n={stateName:''},flow={
        refundFlow:{
            1:'等待服务商审核',
            2:'等待双方协商',
            3:'等待客服协商',
            4:'审核成功',
            66:'退款成功',
            67:'退款失败',
            68:'取消退款'
        },
        complaintFlow:{
            1:'投诉中,等待审核',
            2:'已审核,投诉成功',
            3:'已审核,投诉失败'
        },
        taxFlow:{
            0:'等待付款',
            1:'等待审核',
            2:'等待记账',
            3:'等待申报',
            4:'等待发送',
            5:'等待签收',
            6:'等待确认',
            7:'等待存档',
            8:'交易完成',
            9:'客服协调',
            10:'订单已关闭',
            88:'退款中',
            89:'退款成功',
            90:'退款失败',
            91:'取消退款'
        }
    };
    if(flow[type]){//记账流程id;
        n.stateName=flow[type][orderStute];
    }else{
        switch (parseInt(orderStute)){
            case 0://'未付款,等待付款'
                n.stateName='未付款,等待付款';
                break;
            case 1://已付款,等待审核
                n.stateName = '已付款,等待审核';
                break;
            case 2://已审核,等待送办
                n.stateName = '已审核,等待送办';
                break;
            case 3://已送办,等待出证
                n.stateName = '已送办,等待出证';
                break;
            case 4://已出证,等待存档
                n.stateName = '已出证,等待存档';
                break;
            case 5://已存档,等待发送
                n.stateName = '已存档,等待发送';
                break;
            case 6://已发送,等待签收
                n.stateName = '已发送,等待签收';
                break;
            case 7://已签收,等待确认
                n.stateName = '已签收,等待确认';
                break;
            case 8://付款成功,评价
                n.stateName = '交易完成';
                break;
            case 9://客服协调
                n.stateName = '客服协调';
                break;
            case 10://订单关闭
                n.stateName = '订单已关闭';
                break;
            case 88://订单关闭
                n.stateName = '退款中';
                break;
            case 89://订单关闭
                n.stateName = '退款成功';
                break;
            case 90://订单关闭
                n.stateName = '退款失败';
                break;
            case 91://订单关闭
                n.stateName = '取消退款';
                break;
            default :
                show('错误的子订单状态：');
                show(n)
                break;
        }
    }
    return n.stateName;
}
function userTypeMsg(data){
    var dataType = data.dataType,htmlStr ='';
    if ('1' == dataType) {//个体户
        htmlStr += '         <p>字号名称：' + data.object.enName + '</p>';
        htmlStr += '          <p>注册号：' + data.object.enCode + '</p>';
        htmlStr += '        <p>经营范围：' + data.object.enRange + '</p>';
        htmlStr += '           <p>经营地址：' + data.object.enAddr + '</p>';
        htmlStr += '              <p>所属档口：' + data.object.enShop + '</p>';
        htmlStr += '                  <p>经营者：' + data.object.enOwner + '</p>';
        htmlStr += '                  <p>移动电话：' + data.object.enMobile + '</p>';
        htmlStr += '                   <p>固话：' + data.object.enPhone + '</p>';
        htmlStr += '       <div class="clear"></div>';
    }
    if ('2' == dataType) {//小微企业
        if(getjylx.result&&getjylx.result.list&&data.object.enTradeType){
            for(var i=0;i<getjylx.result.list.length;i++){
                if(data.object.enTradeType==getjylx.result.list[i].id){
                    data.object.enTradeType=getjylx.result.list[i].dictName;
                    break;
                }
            }
        }
        htmlStr += '         <p>企业名称：' + data.object.enName + '</p>';
        htmlStr += '         <p>注册号：' + data.object.enCode + '</p>';
        htmlStr += '          <p>经营类型：' + data.object.enTradeType + '</p>';
        htmlStr += '            <p>法人代表：' + (data.object.enLegalPerson||'暂无') + '</p>';
        htmlStr += '              <p>纳税性质：' + (data.object.enProperty==1?'一般纳税人':'小规模纳税人') + '</p>';
        htmlStr += '       <div class="clear"></div>';
    }
    if ('3' == dataType) {//服务中介
        htmlStr += '         <p>企业名称：' + data.object.agyName + '</p>';
        htmlStr += '          <p>企业注册号：' + data.object.agyCode + '</p>';
        htmlStr += '              <p>成立日期：' + data.object.agyCreateTime + '</p>';
        htmlStr += '                  <p>注册资本：' + data.object.agyCapital + '</p>';
        htmlStr += '                  <p>法人代表：' + data.object.agyLegalPerson + '</p>';
        htmlStr += '                   <p>法人代表联系电话：' + data.object.agyLegalPersonPhone + '</p>';
        htmlStr += '       <div class="clear"></div>';
    }
    if ('4' == dataType) {//市场主体
        htmlStr += '         <p>市场名称：' + data.object.mktName + '</p>';
        htmlStr += '          <p>市场登记号：' + data.object.mktCode + '</p>';
        htmlStr += '        <p>市场地址：' + data.object.mktAddr + '</p>';
        htmlStr += '           <p>所属区域：' + data.object.mktRegion + '</p>';
        htmlStr += '              <p>开办单位：' + data.object.mktComp + '</p>';
        htmlStr += '                  <p>登记证有效期：' + data.object.mktValidTime + '</p>';
        htmlStr += '                  <p>市场负责人：' + data.object.mktOwner + '</p>';
        htmlStr += '                  <p>市场负责人电话：' + data.object.mktOwnerPhone + '</p>';
        htmlStr += '       <div class="clear"></div>';
    }
    if ('5' == dataType) {//政府部门
        htmlStr += '         <p>政府名称：' + data.object.govName + '</p>';
        htmlStr += '          <p>管辖区域：' + data.object.govRegion + '</p>';
        htmlStr += '              <p>负责人名称：' + data.object.govOwner + '</p>';
        htmlStr += '                  <p>负责人电话：' + data.object.govOwnerPhone + '</p>';
        htmlStr += '       <div class="clear"></div>';
    }
    return htmlStr;
}
function getFileUrl(_url){
    var url=_url
    if(url){
        url=route.api.getFile+encodeURI(url);
    }
    return url;
}

function ajaxObj(_obj, type) {
    var obj = _obj || {};
    obj.type = obj.type || 'post';
    obj.data = obj.data ||{};
    obj.async = (obj.async != false) ? true : false;
    obj.dataType=obj.dataType||'json';
    obj.fn = obj.fn || function (data) {
            show(data);
        };
    obj.errfn = obj.errfn || function (err) {
            islogin(err);
            show(err);
        }
    obj.ajax = function () {
        $.extend(obj.data, {_: random()});
        if (this.result) {//是否缓存
            obj.fn(this.result);
            return;
        }
        if (!type) {
            $.ajax({
                type: this.type,
                url: this.url,
                success: function (data) {
                    data = (function (_data) {
                        for (var i in _data) {
                            if (_data[i] == null || typeof _data[i] == 'undefined') {
                                _data[i] = '';
                            } else if (typeof _data[i] == 'object' || typeof _data[i] == 'array') {
                                arguments.callee(_data[i]);
                            }
                        }
                        return _data;
                    })(data)
                    obj.fn(data)
                },
                error: this.errfn,
                data: this.data,
                dataType: obj.dataType
            });
        }
        else {
            var checkFile={is:true,text:''};
            obj.input.each(function(){
                if(!checkFile.is){return;}
                var realname = $(this).val();
                realname = realname.split('.');
                if (realname[realname.length - 1]) {
                    switch (realname[realname.length - 1]) {
                        case "jpg":
                        case "jpeg":
                        case "gif":
                        case "png":
                            break;
                        default :
                            checkFile.is=false;
                            checkFile.text='文件类型错误，目前支持jpg/jpeg/gif/png格式的文件';
                            return;
                    }
                }else {
                    checkFile.is=false;
                    checkFile.text='请选择上传文件';
                    return;
                }
            })
            if(!checkFile.is){
                alert(checkFile.text);
                return;
            }
            $.ajaxFileUpload({
                url: obj.url,//用于文件上传的服务器端请求地址
                secureuri: false, //是否需要安全协议，一般设置为false
                fileElementId: obj.input, //文件上传的表单元素
                data: obj.data,
                //dataType: 'json', //返回值类型 一般设置为json
                success: function (data) {
                    data = $.parseJSON($(data).text());
                    obj.fn(data)
                },
                error: this.errfn
            })
        }
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
 * ajax返回数据是否成功
 *
 */
function dataIsTrue(data, apimsg) {
    show(apimsg + ":");
    show(data);
    var x = '';
    if (data) {
        x = data.success==true||data.success=='true' ? true : false;
    } else {
        show('返回数据为空')
    }
    if (!x) {
        show(apimsg + '==>失败信息:'+data.msg);
    }
    return x;
}
/**
 * 封装提示消息
 *
 */
function show(data) {
    //return;
    try {
        if ($.browser.msie && typeof data == 'object') {
            data = $.toJSON(data);
        }
        console.log(data)
    }
    catch (err) {
        //alert($.toJSON(data));
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
        for (var i = 0; i < this.data.length; i++) {
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
function formDataToJson(e) {//传入参数为jq表单对象才进行数据整理
    var data = [], str = '', Json = {};
    if (typeof e == "object") {
        str = "'" + $(e).serialize() + "'";
        if (str == '\'\'' || !str) {
            show('表单数据为空');
            return;
        }
        str = decodeURIComponent(str);
    } else if (typeof e == "string") {
        str = e;
        if (!str) {
            show('表单数据为空');
            return;
        }
    } else {
        alert('formDataToJson参数格式错误');
        show(e);
        return;
    }
    //str=str.replace(/\n/g,'space');
    str = str.replace(/[\?|\+|\']/g, '');
    str = str.replace(/[&|=]/g, ',');
    data = str.split(',');
    var x = '';
    for (var i in data) {
        x = data[i];
        if (i % 2 == 0) {
            if (Json[data[i]]) {
                if (typeof Json[data[i]] != 'object') {
                    Json[data[i]] = [Json[data[i]]];
                }
                Json[data[i]].push(data[parseInt(i) + 1]);
            }
            else {
                Json[data[i]] = data[parseInt(i) + 1];
            }
        }
        /*if (i % 2 == 0) {
         Json += "\"" + x + "\":"
         } else {
         if (data.length == (++i)) {
         Json += "\"" + x + "\""
         } else {
         Json += "\"" + x + "\","
         }
         }*/
    }
    /*Json = Json.replace(/\'/g, "");
     Json = JSON.parse('{' + Json + '}');*/
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
function formSend(data, url, isJson, target) {
    target = target || '_self';
    var html = {
        head: '<form method="post" id="formSend" action="' + url + '" target="' + target + '">',
        body: '<input name="[=data]" value=\'[=value]\'/>',
        foot: '</form>'
    };
    var bodys = '';
    if (isJson) {
        for (var i in data) {
            bodys += html.body.replace('[=data]', i).replace('[=value]', data[i]);
        }
    } else {
        bodys += html.body.replace('[=data]', 'data').replace('[=value]', $.toJSON(data));
    }
    bodys = html.head + bodys + html.foot;
    if ($.browser.msie || $.browser.mozilla) {
        $(bodys).appendTo('body').submit();
        $('#formSend').remove();
        return;
    }
    $(bodys).submit();
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
        if ($obj.is('input') || $obj.find('a').length || obj.nodeName == 'A') {
            return;
        }
        if ($obj.find('input').length) {
            if ($obj.find('input').length == 1) {
                $obj.find('input').attr('checked') ? $obj.find('input').attr('checked', false) : $obj.find('input').attr('checked', true);
                $obj.find('input').change();
            }
            return;
        }
        var $input = $(this).find('input[type=checkbox]').eq(0);
        $input.attr('checked') ? $input.removeAttr('checked') : $input.attr('checked', true);
        $input.change();
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
function foldLi(e, c,m) {
    $(e).on('click', c, function () {
        var $this = $(this), $ul = $this.parent();
        m = m||200;
        $this.attr('data-height') || $this.attr('data-height', $ul.height());
        $ul.height() != $this.attr('data-height') ?
            $ul.animate({height: $this.attr('data-height')}, m) :
            $ul.animate({height: $this.height() + 2}, m);
    })
}//在同一个div内的伸缩
function elastic(e, target) {
    var $target = $(target), $e = $(e);
    if($target.length&&$target.filter('.addr').find('input').attr('disabled')){
        $target=$target.not('.addr');
    }
    if($e.text()=='展开∨'){
        $target.slideDown();
        $e.text('收缩∧')
    }else{
        $e.text('展开∨')
        $target.slideUp();
    }
}//不同div的伸缩
/**
 *    选中效果
 *
 */
function select(e, c, cla, isAlone, func) {
    $(e).on('click', c, func || function () {
            if (isAlone) {
                $(this).addClass(cla).siblings().removeClass(cla);
            } else {
                $(this).toggleClass(cla);
            }
        })
}
function tabs(tabTit, cls, fn) {
    $(tabTit).on('click', 'a', function () {
        var $this = $(this), index = $(this).index();
        if ($(tabTit).find('a').not('[data-tabs=no]').index($this) < 0) {
            return;
        }
        $this.addClass(cls).siblings().removeClass(cls);
        $this.parent().next().children().eq(index).show().siblings().hide();
        if (typeof fn == 'function') {
            fn($this);
        }
    }).find('a').eq(0).addClass(cls);
    $(tabTit).next().children().eq(0).show().siblings().hide();
}
function allSelect(e, elem, find) {
    if ($(e).attr('checked')) {
        $(elem).attr('checked', true)
    }
    else {
        $(elem).attr('checked', false)
    }
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
 *    为数组添加替换操作
 *
 */
function ArrayReplace(arr, reg, rpby) {
    var ta = arr.slice(0), d = '\0';
    var str = ta.join(d);
    str = str.replace(reg, rpby);
    return str.split(d);
}
/**
 *    为数组查找选项
 *
 */
function ArrayIndex(arr,text) {
    var index=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]==text){
            index=i+1;
            break;
        }
    }
    return index;
}
/**
 *    图片滚动效果
 *
 */
function srollImage(e, changeTime, animateTime) {
    var $div = $(e), $imgdiv, that = this, n;
    this.data = {};
    this.scroll = setInterval(function () {
        $div = $(e);
        $imgdiv = $div.find('>div');
        n = {
            width: $imgdiv.width(),//总长度
            imgWidth: $div.width(),//单个轮播div长度
            left: parseInt($imgdiv.css('left'))//当前偏移位置
        }
        if (n.left <= n.imgWidth - n.width || n.left < n.imgWidth * 2 - n.width) {//ie下宽度多出(n-1)*7像素
            $imgdiv.animate({left: n.left = 0}, animateTime || 300);
        } else {
            $imgdiv.animate({left: n.left = n.left - n.imgWidth}, animateTime || 300);
        }
    }, changeTime || 3000);
    this.clear = function () {
        clearInterval(this.scroll);
    }
}
/**
 *    蒙层禁用效果
 *
 */
function coverElem(e) {
    var n, path,
        html = '<div class="js-div" onclick="event.stopPropagation()">暂未开放</div>';
    $(e).each(function () {
        n = $(this);
        path = n.offset();
        n.append(html);
    })
}
/**
 *    获取对象成员数量
 *
 */
function objectLength(obj) {
    if (typeof obj != 'object') {
        return 0;
    }
    var l = 0;
    for (var i in obj) {
        l++;
    }
    return l;
}
function baiduShare(isShare, option) {
    if (isShare) {
        return;
    }
    window._bd_share_config = $.extend({}, {
        common: {
            //此处放置通用设置
            bdText: '震海小微企业服务管理云平台致力于为小微企业财税方面需求提供一站式服务！',
            bdDesc: '震海小微企业服务管理云平台',
            bdUrl: location.origin + route.path.index,
            bdPic: location.origin + '/XWT/html/xwt/front/images/apply/logo.png',
            onBeforeClick: function (e, config) {
            }
        }, share: [
            //此处放置分享按钮设置
        ]
    }, option || window._bd_share_config || {});
    with (document)0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=' + ~(-new Date() / 36e5)];
}
/**
 ** 乘法函数，用来得到精确的乘法结果
 ** 说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
 ** 调用：accMul(arg1,arg2)
 ** 返回值：arg1乘以 arg2的精确结果
 **/
function NumberMul(arg1, arg2) {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
        m += s1.split(".")[1].length;
    }
    catch (e) {
    }
    try {
        m += s2.split(".")[1].length;
    }
    catch (e) {
    }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}
/**
 ** 加法函数，用来得到精确的加法结果
 ** 说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
 ** 调用：accAdd(arg1,arg2)
 ** 返回值：arg1加上arg2的精确结果
 **/
function NumberAdd(arg1, arg2) {
    var r1, r2, m, c;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    c = Math.abs(r1 - r2);
    m = Math.pow(10, Math.max(r1, r2));
    if (c > 0) {
        var cm = Math.pow(10, c);
        if (r1 > r2) {
            arg1 = Number(arg1.toString().replace(".", ""));
            arg2 = Number(arg2.toString().replace(".", "")) * cm;
        } else {
            arg1 = Number(arg1.toString().replace(".", "")) * cm;
            arg2 = Number(arg2.toString().replace(".", ""));
        }
    } else {
        arg1 = Number(arg1.toString().replace(".", ""));
        arg2 = Number(arg2.toString().replace(".", ""));
    }
    return (arg1 + arg2) / m;
}

/**
 *    js本地图片上传前预览，兼容ie[6-9]、火狐、Chrome17+、Opera11+、Maxthon3
 *
 */
jQuery.fn.extend({
    uploadPreview: function (opts) {
        opts = jQuery.extend({
            inputclass: '',
            Width: '100%',
            Height: 'auto',
            ImgType: ["gif", "jpeg", "jpg", "bmp", "png"],
            Callback: function () {
            }
        }, opts || {});
        $(document).on('change', opts.inputclass, function () {
            var _this = $(this);
            var _self = this;
            _self.getObjectURL = function (file) {
                var url = null;
                if (window.createObjectURL != undefined) {
                    url = window.createObjectURL(file)
                } else if (window.URL != undefined) {
                    url = window.URL.createObjectURL(file)
                } else if (window.webkitURL != undefined) {
                    url = window.webkitURL.createObjectURL(file)
                }
                return url
            };
            if (this.value) {
                if (!RegExp("\.(" + opts.ImgType.join("|") + ")$", "i").test(this.value.toLowerCase())) {
                    alert("选择文件错误,图片类型必须是" + opts.ImgType.join("，") + "中的一种");
                    this.value = "";
                    return false
                }
                if ($.browser.msie) {
                    try {
                        if (_this.prev().hasClass('reView')) {
                            _this.prev().replaceWith('<div class="reView"><a href="' + _self.getObjectURL(this.files[0]) + '"><img src="' + _self.getObjectURL(this.files[0]) + '"></a></div>').prev().css({
                                'width': opts.Width,
                                'height': opts.Height
                            }).find('img').css({'width': '100%', 'vertical-align': 'text-top'});
                        } else {
                            _this.before('<div class="reView"><a target="_blank" href="' + _self.getObjectURL(this.files[0]) + '"><img src="' + _self.getObjectURL(this.files[0]) + '"></a></div>').prev().css({
                                'width': opts.Width,
                                'height': opts.Height
                            }).find('img').css({'width': '100%', 'vertical-align': 'text-top'});
                        }
                    } catch (e) {
                        var src = "";
                        var obj = _this.before('<div><a href="javascript:" target="_blank"><img src=""></a></div>').prev().find('img');
                        var div = obj.parent().parent()[0];
                        _self.select();
                        if (top != self) {
                            window.parent.document.body.focus()
                        } else {
                            _self.blur()
                        }
                        src = document.selection.createRange().text;
                        document.selection.empty();
                        obj.hide();
                        obj.parent().parent("div").css({
                            'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)',
                            'width': opts.Width,
                            'height': '100px'
                        })
                        div.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = src
                    }
                } else {
                    if (_this.prev().hasClass('reView')) {
                        _this.prev().replaceWith('<div class="reView"><a href="' + _self.getObjectURL(this.files[0]) + '"><img src="' + _self.getObjectURL(this.files[0]) + '"></a></div>').prev().css({
                            'width': opts.Width,
                            'height': opts.Height
                        }).find('img').css({'width': '100%', 'vertical-align': 'text-top'});
                    } else {
                        _this.before('<div class="reView"><a target="_blank" href="' + _self.getObjectURL(this.files[0]) + '"><img src="' + _self.getObjectURL(this.files[0]) + '"></a></div>').prev().css({
                            'width': opts.Width,
                            'height': opts.Height
                        }).find('img').css({'width': '100%', 'vertical-align': 'text-top'});
                    }
                }
                opts.Callback()
            }
        })
    }
});
/**
 *    兼容ie8时间差计算
 *
 */
function getDays(strDateStart,strDateEnd,type){
    var strSeparator = "-";
    var oDate1; var oDate2; var iDays;
    oDate1= strDateStart.split(strSeparator);
    oDate2= strDateEnd.split(strSeparator),
    action={
        'month':function(){
            var month= 0,year=0;
            month=(oDate2[0]-oDate1[0])*12+(oDate2[1]-oDate1[1])
            return month
        },
        'day':function(){
            var strDateS = new Date(oDate1[0], oDate1[1]-1, oDate1[2]);
            var strDateE = new Date(oDate2[0], oDate2[1]-1, oDate2[2]);
            iDays = parseInt(Math.abs(strDateS - strDateE ) / (1000*24*3600))
            return iDays
        }
    };
    if(type&&action[type]){
        return action[type]()
    }else{
        return false;
    }
}
(function( $ ) {
    $.widget( "custom.combobox", {
        _create: function() {
            this.wrapper = $( "<span>" )
                .addClass( "custom-combobox" )
                .insertAfter( this.element );

            this.element.hide();
            this._createAutocomplete();
            this._createShowAllButton();
        },

        _createAutocomplete: function() {
            var selected = this.element.children( ":selected" ),
                value = selected.val() ? selected.text() : "";

            this.input = $( "<input>" )
                .appendTo( this.wrapper )
                .val( value )
                .attr( "title", "" )
                .addClass( "custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left" )
                .autocomplete({
                    delay: 0,
                    minLength: 0,
                    source: $.proxy( this, "_source" )
                })
                .tooltip({
                    tooltipClass: "ui-state-highlight"
                });

            this._on( this.input, {
                autocompleteselect: function( event, ui ) {
                    ui.item.option.selected = true;
                    this._trigger( "select", event, {
                        item: ui.item.option
                    });
                },

                autocompletechange: "_removeIfInvalid"
            });
        },

        _createShowAllButton: function() {
            var input = this.input,
                wasOpen = false;

            $( "<a>" )
                .attr( "tabIndex", -1 )
                .attr( "title", "Show All Items" )
                .tooltip()
                .appendTo( this.wrapper )
                .button({
                    icons: {
                        primary: "ui-icon-triangle-1-s"
                    },
                    text: false
                })
                .removeClass( "ui-corner-all" )
                .addClass( "custom-combobox-toggle ui-corner-right" )
                .mousedown(function() {
                    wasOpen = input.autocomplete( "widget" ).is( ":visible" );
                })
                .click(function() {
                    input.focus();

                    // Close if already visible
                    if ( wasOpen ) {
                        return;
                    }

                    // Pass empty string as value to search for, displaying all results
                    input.autocomplete( "search", "" );
                });
        },

        _source: function( request, response ) {
            var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
            response( this.element.children( "option" ).map(function() {
                var text = $( this ).text();
                if ( this.value && ( !request.term || matcher.test(text) ) )
                    return {
                        label: text,
                        value: text,
                        option: this
                    };
            }) );
        },

        _removeIfInvalid: function( event, ui ) {

            // Selected an item, nothing to do
            if ( ui.item ) {
                return;
            }

            // Search for a match (case-insensitive)
            var value = this.input.val(),
                valueLowerCase = value.toLowerCase(),
                valid = false;
            this.element.children( "option" ).each(function() {
                if ( $( this ).text().toLowerCase() === valueLowerCase ) {
                    this.selected = valid = true;
                    return false;
                }
            });

            // Found a match, nothing to do
            if ( valid ) {
                return;
            }

            // Remove invalid value
            this.input
                .val( "" )
                .attr( "title", "找不到选项:"+ value )
                .tooltip( "open" );
            this.element.val( "" );
            this._delay(function() {
                this.input.tooltip( "close" ).attr( "title", "" );
            }, 2500 );
            this.input.autocomplete( "instance" ).term = "";
        },

        _destroy: function() {
            this.wrapper.remove();
            this.element.show();
        }
    });
})( jQuery );
(function($) {
    $.fn.slideBox = function(options) {
        //默认参数
        /*direction : 'top',//left,top#方向
         duration : 0.3,//滚动持续时间，单位：秒
         easing : 'linear',//swing,linear//滚动特效
         delay : 5,//滚动延迟时间，单位：秒
         hideBottomBar : true//隐藏底栏
         hideClickBar : false,//不自动隐藏点选按键
         startIndex : 1//初始焦点顺序*/

        var defaults = {
            direction : 'left',//left,top
            duration : 0.6,//unit:seconds
            easing : 'swing',//swing,linear
            delay : 3,//unit:seconds
            startIndex : 0,
            hideClickBar : true,
            clickBarRadius : 5,//unit:px
            hideBottomBar : false,
            width : null,
            height : null
        };
        var settings = $.extend(defaults, options || {});
        //计算相关数据
        var wrapper = $(this), ul = wrapper.children('ul.items'), lis = ul.find('li'), firstPic = lis.first().find('img');
        var li_num = lis.size(), li_height = 0, li_width = 0;
        //定义滚动顺序:ASC/DESC.ADD.JENA.201208081718
        var order_by = 'ASC';
        //初始化
        var init = function(){
            if(!wrapper.size()) return false;
            //手动设定值优先.ADD.JENA.201303141309
            li_height = settings.height ? settings.height : lis.first().height();
            li_width = settings.width ? settings.width : lis.first().width();

            wrapper.css({width: li_width+'px', height:li_height+'px'});
            lis.css({width: li_width+'px', height:li_height+'px'});//ADD.JENA.201207051027

            if (settings.direction == 'left') {
                ul.css('width', li_num * li_width + 'px');
            } else {
                ul.css('height', li_num * li_height + 'px');
            }
            ul.find('li:eq('+settings.startIndex+')').addClass('active');

            if(!settings.hideBottomBar){//ADD.JENA.201208090859
                var tips = $('<div class="tips"></div>').css('opacity', 0.6).appendTo(wrapper);
                var title = $('<div class="title"></div>').html(function(){
                    var active = ul.find('li.active').find('a'), text = active.attr('title'), href = active.attr('href');
                    return $('<a>').attr('href', href).text(text);
                }).appendTo(tips);
                var nums = $('<div class="nums"></div>').hide().appendTo(tips);
                lis.each(function(i, n) {
                    var a = $(n).find('a'), text = a.attr('title'), href = a.attr('href'), css = '';
                    i == settings.startIndex && (css = 'active');
                    $('<a>').attr('href', href).text(text).addClass(css).css('borderRadius', settings.clickBarRadius+'px').mouseover(function(){
                        $(this).addClass('active').siblings().removeClass('active');
                        ul.find('li:eq('+$(this).index()+')').addClass('active').siblings().removeClass('active');
                        start();
                        stop();
                    }).appendTo(nums);
                });

                if(settings.hideClickBar){//ADD.JENA.201206300847
                    tips.hover(function(){
                        nums.animate({top: '0px'}, 'fast');
                    }, function(){
                        nums.animate({top: tips.height()+'px'}, 'fast');
                    });
                    nums.show().delay(2000).animate({top: tips.height()+'px'}, 'fast');
                }else{
                    nums.show();
                }
            }

            lis.size()>1 && start();
        }
        //开始轮播
        var start = function() {
            var active = ul.find('li.active'), active_a = active.find('a');
            var index = active.index();
            if(settings.direction == 'left'){
                offset = index * li_width * -1;
                param = {'left':offset + 'px' };
            }else{
                offset = index * li_height * -1;
                param = {'top':offset + 'px' };
            }

            wrapper.find('.nums').find('a:eq('+index+')').addClass('active').siblings().removeClass('active');
            wrapper.find('.title').find('a').attr('href', active_a.attr('href')).text(active_a.attr('title'));

            ul.stop().animate(param, settings.duration*1000, settings.easing, function() {
                active.removeClass('active');
                if(order_by=='ASC'){
                    if (active.next().size()){
                        active.next().addClass('active');
                    }else{
                        order_by = 'DESC';
                        active.prev().addClass('active');
                    }
                }else if(order_by=='DESC'){
                    if (active.prev().size()){
                        active.prev().addClass('active');
                    }else{
                        order_by = 'ASC';
                        active.next().addClass('active');
                    }
                }
            });
            wrapper.data('timeid', window.setTimeout(start, settings.delay*1000));
        };
        //停止轮播
        var stop = function() {
            window.clearTimeout(wrapper.data('timeid'));
        };
        //鼠标经过事件
        wrapper.hover(function(){
            stop();
        }, function(){
            wrapper.data('timeid', window.setTimeout(start, settings.delay*1000));//ADD.JENA.201303141309
        });
        //首张图片加载完毕后执行初始化
        var imgLoader = new Image();
        imgLoader.onload = function(){
            imgLoader.onload = null;
            init();
        }
        imgLoader.src = firstPic.attr('src');

    };
})(jQuery);
/**
 *    鼠标指向变大图片，兼容ie[6-9]、火狐、Chrome17+、Opera11+、Maxthon3
 *
 */
 function imagePreview(elem){
    /* CONFIG */
    xOffset = 10;
    yOffset = 10;
    // these 2 variable determine popup's distance from the cursor
    // you might want to adjust to get the right result

    /* END CONFIG */
    $(document).on('mouseover',elem,function(e){
            this.t = this.title;
            this.title = "";
            this.rel=this.rel||this.src||this.href;
            var c = (this.t != "") ? "<br/>" + this.t : "";
            $("body").append("<div id='preview'><img src='"+ this.rel +"' alt='Image preview' />"+ c +"</div>");
            $("#preview")
                .css("top",(e.pageY - xOffset) + "px")
                .css("left",(e.pageX + yOffset) + "px")
                .fadeIn("fast");
    })
    $(document).on('mouseout',elem,function(){
            this.title = this.t;
            $("#preview").remove();
    });
    $(document).on('mousemove',elem,function(e){
        $("#preview").css("top",(e.pageY - xOffset) + "px").css("left",(e.pageX + yOffset) + "px");
    });
};

var xDate = 1;
$('body').append('<div id="loading" style="z-index:10; display:none;position: fixed;width: 100%; height: 100%;top:0;left: 0;background: url(' + WWWROOT + '/html/xwt/front/images/public/shade.png)"> <img style="position: fixed;top: 50%;left: 50%;margin: -18px;" src="' + WWWROOT + '/html/xwt/front/images/public/loading.gif"> </div>')
$(document).ajaxStart(function () {
    if ($.browser.msie) {
        $('#loading').show();
    } else {
        $('#loading').fadeIn();
    }
    xDate = new Date().getTime()
    show('ajax 开始了 ');
});
$(document).ajaxStop(function () {
    if ($.browser.msie) {
        $('#loading').hide();
    } else {
        $('#loading').fadeOut();
    }
    xDate = (new Date()).getTime() - xDate;
    show('ajax 执行完成了 总耗时：' + xDate + 'ms');
});
$(document).ajaxError(function (event, jqxhr, settings, thrownError) {
    var url=settings.url,status=jqxhr.status,
        option={
            //3xx  重定向
            200:'登录超时，请重新登录',
            301:"已移动 — 请求的数据具有新的位置且更改是永久的。",
            302:"已找到 — 请求的数据临时具有不同 URI。",
            303:"请参阅其它 — 可在另一URI下找到对请求的响应，且应使用GET方法检索此响应。",
            304:"未修改 — 未按预期修改文档。",
            305:"使用代理 — 必须通过位置字段中提供的代理来访问请求的资源。",
            306:"未使用 — 不再使用；保留此代码以便将来使用。",
            //4xx  客户机中出现的错误
            400:"错误请求 — 请求中有语法问题，或不能满足请求。",
            401:"未授权 — 未授权客户机访问数据。",
            402:"需要付款 — 表示计费系统已有效。",
            403:"禁止 — 即使有授权也不需要访问。",
            404:"找不到 — 服务器找不到给定的资源；文档不存在。",
            407:"代理认证请求 — 客户机首先必须使用代理认证自身。",
            415:"介质类型不受支持 — 服务器拒绝服务请求，因为不支持请求实体的格式。",
            //5xx服务器中出现的错误
            500:"内部错误 — 因为意外情况，服务器不能完成请求。",
            501:"未执行 — 服务器不支持请求的工具。",
            502:"错误网关 — 服务器接收到来自上游服务器的无效响应。",
            503:"无法获得服务 — 由于临时过载或维护，服务器无法处理请求。"
        }
    if($.ajaxSettings.notError){
        return
    }
    if ($.browser.msie) {
        $('#loading').hide();
    } else {
        $('#loading').fadeOut();
    }
    show(jqxhr);
    if(option[status]){
        alert('错误码'+status+'：'+option[status]);
        show(status+'==>url:'+url+'==>'+option[status]);
        if(status==200){
            route.goto("login");
        }
    }else{
        alert('错误码'+status);
    }
});
var base;
$(function () {
    base = new baseShow();
    base.init();
    imagePreview('.imgReview');
    tableHover('.table', 'tr');//初始化表格行指向效果
    foldLi('.fold', 'ul>:first-child');//初始化例如用户中心左侧菜单栏的滑动显示和隐藏
        $(document).on("click", '.dataTime', function (e) {
            $(this).datetimepicker({
                lang: "ch",           //语言选择中文
                format: "Y-m-d",      //格式化日期
                timepicker: false,    //关闭时间选项
                yearStart: 2000,     //设置最小年份
                yearEnd: 2050,        //设置最大年份
                todayButton: false    //关闭选择今天按钮
            }).focus();
        });//时间文本框插件的初始化方式

    $('.buyCar').mouseenter(function (event) {
        var obj = event.srcElement ? event.srcElement : event.target, $this = $(this);
        if ($(obj).text() == '删除') {
            return;
        }
        var getList = ajaxObj({url: route.api.getBuyCarList});
        $.ajaxSettings.global = false;
        getList.fn = function (data) {
            if (!dataIsTrue(data, '获取购物车列表')) {
                return;
            }
            if (!data.list||!data.list.length){
                $('#buyCarList').html('<li style="text-align: center;">购物车暂无项目</li>')
            } else {
                $('#buyCarList').updata(data.list);
            }
            $.ajaxSettings.global = true;
        }
        getList.ajax();
    })//读取购物车列表
    $('#buyCarList').on('click', 'li a', function () {
        var delBuyCar = ajaxObj({url: route.api.delBuyCar}),
            $this = $(this);
        delBuyCar.data.ids = $this.parent().attr('data-id');
        delBuyCar.fn = function (data) {
            if (!dataIsTrue(data, '删除购物车项目')) {
                return;
            }
            show('删除成功')
            $this.parent().remove();
            $.ajaxSettings.global = true;
        }
        $.ajaxSettings.global = false;
        $this.html('<img style="display:block;margin:0 auto;height:17px; width:17px;" src="' + WWWROOT + '/html/xwt/front/images/public/loading.gif">')
        delBuyCar.ajax();
    })//删除购物差服务项
    $("input.imgReview").uploadPreview({inputclass: 'input.imgReview'});
    coverElem('.js-cover')//未完成功能蒙层效果
    setTimeout(function () {
        $('form').checkForm();
        baiduShare(window.isShare);
    }, 0);
})
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
            _for: {},
            _if: []
        },
        data: {}
    }
    that.addData = function (key, value) {
        that.option.data[key] = value;
    }
    that._find = function (elem) {
        var $for = $('[' + that.option._for + ']'), $forNodes;
        if ($(elem).length >= 1) {
            $forNodes = $(elem);
        } else {
            $forNodes = $for;
        }
        $forNodes.each(function (i) {
            var $this = $(this),
                data = eval('that.option.data.' + $this.attr(that.option._for)),
                index = $('[for-data="' + $this.attr('for-data') + '"]').index($this),
                forName = $this.attr('for-data');
            i = forName;
            if (!i) {
                show('错误的for-data');
                return
            }
            var html = that.option.html._for[i][index], length = $this.attr('for-length');
            html = that.filter(html, $this);
            var strs = '';
            if (typeof html == 'object') {
                if (!data||!data.length) {
                    show('该for-data无数据：' + $this.attr(that.option._for));
                    $(this).html(html[0]+'<tr><td colspan="'+$(html[0]).find('td').length+'" style="text-align: center;line-height: 30px; height: 30px;">暂无数据</td></tr>');//清空无数据元素内的模版数据；
                    return
                }else{
                    if (length && data.length > length) {
                        data.length = parseInt(length)
                    }
                    strs = that._for(data, html[1], html[0]);
                }
            } else {
                if (!data||!data.length) {
                    show('该for-data无数据：' + $this.attr(that.option._for));
                    $(this).html('<div  style="text-align: center;line-height: 30px; height: 30px;">暂无数据<div>');//清空无数据元素内的模版数据；
                    return
                }else{
                    if (length && data.length > length) {
                        data.length = parseInt(length)
                    }
                    strs = that._for(data, html);
                }
            }

            $this.html(strs);
            $this.checkForm();
        })
    }
    that.filter = function (html, elem) {
        var $html = $(html);
        var strs = [];
        if ($html.get(0) && $html.get(0).nodeName == 'TBODY') {
            strs.push($('<div></div>').append($html.find('tr').first().clone()).html());
            strs.push($('<div></div>').append($html.find('tr').last().clone()).html());
            return strs;
        }
        if (elem.attr('for-only') == 'last') {
            strs.push($('<div></div>').append($html.filter(':not(:last)')).html());
            strs.push($('<div></div>').append($html.last()).html());
            return strs;
        } else if (elem.attr('for-only') == 'first') {
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
    that._for = function (data, html, off) {
        var str = '', x = {}, strs = '';
        html && (html = html.replace(/\r\n/g, ''));//兼容ie8标签渲染插入换行符，eval方法出错；
        if (data && data.length) {
            for (var i = 0; i < data.length; i++) {
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
        strs = off ? off + strs : strs;
        x.Reg3 = new RegExp("\{{(.| |\n)+?\}}", "g");
        strs = strs.replace(x.Reg3, '');
        strs.indexOf('data-src') >= 0 && (strs = that.dataSrc(strs));
        strs=that.dataToValue('data-style',strs);
        strs=that.dataToValue('data-href',strs);
        strs=that.dataToValue('data-class',strs);
        return strs;
    }
    that.dataSrc = function (html) {
        var $html = $(html), $elem;
        $html.is('[data-src]') && $html.attr('src', $html.attr('data-src')).removeAttr('data-src');
        $html.find('[data-src]').each(function () {
            $elem = $(this);
            $elem.attr('src', $elem.attr('data-src')).removeAttr('data-src');
        })
        return $('<div></div>').append($html).html();
    }//图片延时加载策略
    that.dataToValue = function (attr,html) {
        if(html.indexOf(attr)<0){
            return html;
        }
        var $html = $(html), $elem,attrName=attr.split('-')[1];
        $html.is('['+attr+']') && $html.attr(attrName, $html.attr(attr)).removeAttr(attr);
        $html.find('['+attr+']').each(function () {
            $elem = $(this);
            $elem.attr(attr)&&$elem.attr(attrName, $elem.attr(attr)).removeAttr(attr);
        })
        return $('<div></div>').append($html).html();
    }
    that.init = function (local) {
        var elem = $('[' + that.option._for + ']');
        elem.each(function (i, e) {
            var $this = $(this), forName = $this.attr('for-data'), forIndex = $('[for-data="' + forName + '"]').index($this);
            if (forName) {
                if (that.option.html._for[forName]) {
                    that.option.html._for[forName][forIndex] = $this.html();
                } else {
                    that.option.html._for[forName] = [$this.html()];
                }
            }
        });
        elem.html('');
        if (!$.ajaxSettings.global) {
            elem.html('<img style="display:block;margin:0 auto;height:37px; width:37px;" src="' + WWWROOT + '/html/xwt/front/images/public/loading.gif">')
        }
        $.fn.updata = function (data, key) {
            if (key && data) {
                if (typeof key == "string") {
                    that.addData(key, data);
                } else {
                    show("参数名类型错误");
                }
            } else if (data && !key) {
                that.addData($(this).attr('for-data'), data);
            }
            $(this).each(function () {
                that._find($(this));
            })
        }
    }
}
