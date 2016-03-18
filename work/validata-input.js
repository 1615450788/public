
$(function(){
    $.validator.setDefaults({
        debug: true,
        ignore: "noValidata"
    })
    $.aaa=[];
    jQuery.extend(jQuery.validator.messages, {
        required: "必填字段",
        remote: "请修正该字段",
        email: "请输入正确格式的邮箱",
        url: "请输入合法的网址",
        date: "请输入正确的日期",
        dateISO: "请输入正确的日期",
        number: "请输入正确的数字",
        digits: "只能输入整数",
        creditcard: "请输入正确的信用卡号",
        equalTo: "请再次输入相同的值",
        accept: "请选择指定类型文件",
        maxlength: jQuery.validator.format("长度最多是{0}"),
        minlength: jQuery.validator.format("长度最少是{0}"),
        rangelength: jQuery.validator.format("长度介于{0}和{1}之间"),
        range: jQuery.validator.format("大小介于{0}和{1}之间"),
        max: jQuery.validator.format("最大值为{0}"),
        min: jQuery.validator.format("最小值为{0}"),
        stringCH:'只能输入汉字',
    });
    var check={
        text:{
            required:true,
            stringCH:true,
            rangelength:[1,200]
        },
        addr:{
            required: true,
            letterNumberChinese:true,
            rangelength:[1,50]
        },
        code:{
            required: true,
            digits:true,
            rangelength:[1,20]
        },
        date:{
            required: true,
            dateISO:true
        },
        idCard:{
            required: true,
            idCard:true
        },
        number:{
            required: true,
            number:true,
            range:[0.01,10000],
            menberLength:true
        },
        email:{
            required:true,
            email:true
        },
        mobile:{
            required:true,
            mobile:true
        },
        phone:{
            required:true,
            phone:true
        },
        checkLogin:{
            required: true,
            digitLetter:true,
            rangelength:[3,20],
            remote:route.api.testLoginName
        },
        loginName:{
            required: true,
            digitLetter:true,
            rangelength:[3,20]
        },
        alipayKey:{
            required: true,
            digitLetter:true,
            rangelength:[1,64]
        },
        partner:{
            required: true,
            partner: true
        },
        loginAccount:{
            required: true,
            mobileAndMail:true
        },
        userName:{
            required: true,
            letterNumberChinese:true,
            rangelength:[2,20]
        },
        peopleName:{
            required:true,
            stringCH:true,
            rangelength:[2,20]
        },
        password:{
            required:true,
            rangelength:[4,20],
            digitLetter:true
        },
        passwordTo:function(str){
            return $.extend({},this.password,{equalTo:str});
        },
        fileName:{
            required: true,
            letterNumberChinese:true,
            rangelength:[1,20]
        },
        textarea:{
            required:true,
            string:true,
            rangelength:[1,200]
        },
        textTitle:{
            required:true,
            string:true,
            rangelength:[1,64]
        }
    }
    var option={
        agency:{//网页对应route.path的地址
            'form-no2':{//当前页面的需验证的表单id
                rules:{//验证规则
                    agyName:check.peopleName,
                    agyRegion:check.addr,
                    addDetial:check.addr,
                    agyCode:check.code,
                    agyLlicenceCode:check.code,
                    agyCreateTime:check.date,
                    agyCapital:check.code,
                    agyLegalPerson:check.peopleName,
                    agyLegalPersonId:check.idCard,
                    agyLegalPersonPhone:check.mobile,
                    addAreas:check.addr,
                    addRegion:check.addr,
                    agyTradeRange:{required:true}
                },
                messages:{//验证对应规则自定义提示信息

                }
            },
            'form-no1':{//当前页面的需验证的表单id
                rules:{//验证规则
                    agyName:check.peopleName,
                    agyRegion:check.addr,
                    agyCompRegion:check.addr,
                    agyCode:check.code,
                    agyLlicenceCode:check.code,
                    agyCreateTime:check.date,
                    agyCapital:check.code,
                    agyLegalPerson:check.peopleName,
                    agyLegalPersonId:check.idCard,
                    agyLegalPersonPhone:check.mobile
                },
                messages:{//验证对应规则自定义提示信息

                }
            },
            loginInfo:{
                rules:{
                    userName:check.userName,
                    email:check.email,
                    phone:check.mobile,
                    address:check.addr
                }
            },
            myFileUploadForm:{
                rules:{
                    fileName:check.fileName
                }
            },
            newStaffForm:{
                rules:{
                    accountName:check.checkLogin,
                    userName:check.userName,
                    phone:check.mobile,
                    pwd:check.password,
                    pwdTo:check.passwordTo('#newStaffFormPwd')
                },
                messages:{
                    accountName:{
                        remote:'账户名重复'
                    }
                }
            },
            Staff:{
                rules:{
                    userName:check.userName,
                    phone:check.mobile
                },
                messages:{}
            },
            StaffPwd:{
                rules:{
                    pwd:check.password,
                    pwdTo:check.passwordTo('#StaffPwdPwd')
                }
            },
            fileRename:{
                rules:{
                    fileName:check.fileName
                }
            },
            changeMoney:{
                rules:{
                    changeMoney:check.number
                }
            },
            payAccount:{
                rules:{
                    seller_email: check.loginAccount,
                    key: check.alipayKey,
                    partner:check.partner
                }
            },
            orderSeach:{
                rules:{
                    sordSubOrderNo:{
                        digits:true,
                        rangelength:[1,20]
                    },
                    sordSubOrgName:{
                        stringCH:true,
                        rangelength:[1,20]
                    }
                }
            },
            recodeData:{
                rules:{
                    sendType:{required:true},
                    sendAgency:{required:true},
                    sendNumber:check.code,
                    recordType:{required:true},
                    recordText: $.extend({},check.textarea,{required:false}),
                    doubleMoney:check.number,
                    billMoney:check.number,
                    runTax:check.number,
                    taxPwd:check.password,
                    fileCode:check.fileName
                }
            },
            addStaffForm:{
                rules:{
                    fcContent: $.extend({},check.peopleName,{required:false})
                }
            },
            agencyComplain_check:{
                rules:{
                    auditIdea: $.extend({},check.textarea,{required:false})
                }
            },
            cancelOrderForm:{
                rules: {
                    cancelContent: $.extend({}, check.textarea, {required: false})
                }
            }
        },
        market:{
            loginInfo:{
                rules:{
                    userName:check.userName,
                    email:check.email,
                    phone:check.mobile,
                    address:check.addr
                }
            },
            'form-no2':{//当前页面的需验证的表单id
                rules:{//验证规则
                    mktCode:check.code,
                    mktCode2:check.code,
                    mktName:check.peopleName,
                    mktValidTime:check.date,
                    addDetial:check.addr,
                    mktOwner:check.peopleName,
                    mktLegalPersonId:check.idCard,
                    mktOwnerPhone:check.mobile,
                    addAreas:check.addr,
                    addRegion:check.addr,
                    mktTradeRange:{required:true}
                }
            },
            payAccount:{
                rules:{
                    seller_email: check.loginAccount,
                    key: check.alipayKey,
                    partner:check.partner
                }
            }
        },
        paySubmit:{
            addAddr:{
                rules:{
                    tdUserName:check.peopleName,
                    tdMobile:check.mobile,
                    tdPhone:{
                        phone:true
                    },
                    'tdAddress.addAreas':check.addr,
                    'tdAddress.addDetial':check.addr,
                    tdEmail: $.extend({},check.email,{required:false})
                }
            },
            updataAddr:{
                rules:{
                    tdUserName:check.peopleName,
                    tdMobile:check.mobile,
                    tdPhone:{
                        phone:true
                    },
                    'tdAddress.addAreas':check.addr,
                    'tdAddress.addDetial':check.addr,
                    tdEmail: $.extend({},check.email,{required:false})
                }
            }
        },
        forgetPwd:{
            resetPwd:{
                rules:{
                    loginNama:check.loginName,
                    code:{
                        required:true,
                        rangelength:[4,4],
                        digits:true
                    }
                }
            }
        },
        register:{
            registerForm:{
                rules:{
                    accountName: $.extend({},check.mobile,{remote:route.api.testLoginName}),
                    identifyingCode:{
                        required:true,
                        rangelength:[4,4],
                        digits:true
                    },
                    pwd:check.password,
                    pwdTo:check.passwordTo('#pwd')
                },
                messages:{
                    accountName:{
                        remote:'用户名重复'
                    },
                    identifyingCode:{
                        rangelength:'验证码长度为4',
                        digits:'只允许输入数字'
                    }
                }
            }
        },
        login: {
            loginForm: {
                rules: {
                    j_username:check.loginName,
                    j_password:check.password
                },
                messages:{
                    j_username:{
                        mobile:'登录名格式必须为手机号',
                        required:'请输入登录名'
                    },
                    j_password:{
                        required:'请输入密码'
                    }
                }
            }
        },
        user:{
            myFileUpload:{
                rules:{
                    fileName:check.fileName
                },
                messages:{

                }
            },
            fileRename:{
                rules:{
                    fileName:check.fileName
                },
                messages:{
                }
            },
            loginInfo:{
                rules:{
                    userName:check.userName,
                    email:{
                        required: true,
                        email:true
                    },
                    phone:{
                        required: true,
                        mobile:true
                    },
                    address:check.addr
                },
                messages:{
                    address:{
                        rangelength:'请补充详细的地址信息'
                    }
                }
            },
            userInfoType1:{
                rules:{
                    enCode:{
                        required: true,
                        digits:true,
                        rangelength:[15,15]
                    },
                    enName:{
                        required: true,
                        letterNumberChinese:true,
                        rangelength:[1,20]
                    },
                    enAddr:{
                        required: true,
                        letterNumberChinese:true,
                        rangelength:[5,50]
                    },
                    enRange:{
                        required: true,
                        letterNumberChinese:true,
                        rangelength:[2,20]
                    },
                    enOwner:{
                        required: true,
                        stringCH:true,
                        rangelength:[1,20]
                    },
                    enShop:{
                        required: true,
                        letterNumberChinese:true,
                        rangelength:[1,20]
                    },
                    enPhone:{
                        required: true,
                        phone:true
                    },
                    enMobile:{
                        required: true,
                        mobile:true
                    },
                    enLetAmount:{
                        required: true,
                        digits:true,
                        range:[100,1000000]
                    }
                },
                messages:{
                    enAddr:{
                        rangelength:'请补充详细的地址信息'
                    }
                }
            },
            userType1:{
                rules:{
                    enCode:{
                        required: true,
                        digits:true,
                        rangelength:[15,15]
                    },
                    enName:{
                        required: true,
                        letterNumberChinese:true,
                        rangelength:[1,20]
                    },
                    enAddr:{
                        required: true,
                        letterNumberChinese:true,
                        rangelength:[5,50]
                    },
                    enRange:{
                        required: true,
                        letterNumberChinese:true,
                        rangelength:[2,20]
                    },
                    enOwner:{
                        required: true,
                        stringCH:true,
                        rangelength:[1,20]
                    },
                    enShop:{
                        required: true,
                        letterNumberChinese:true,
                        rangelength:[1,20]
                    },
                    enPhone:{
                        required: true,
                        phone:true
                    },
                    enMobile:{
                        required: true,
                        mobile:true
                    },
                    enLetAmount:{
                        required: true,
                        digits:true,
                        range:[100,1000000]
                    }
                },
                messages:{
                    enAddr:{
                        rangelength:'请补充详细的地址信息'
                    }
                }
            },
            userInfoType2:{
                rules:{
                    enCode:check.code,
                    enName:check.peopleName,
                    enLegalPersonId:{
                        idCard:true
                    },
                    enLegalPerson:{
                        stringCH:true,
                        rangelength:[2,20]
                    },
                    enLegalPersonPhone:{
                        mobile:true
                    },
                    addAreas:{
                        letterNumberChinese:true,
                        rangelength:[1,50]
                    },
                    addRegion:{
                        letterNumberChinese:true,
                        rangelength:[1,50]
                    },
                    addDetial:{
                        letterNumberChinese:true,
                        rangelength:[1,50]
                    },
                    enTradeRange:{
                        required:true
                    }

                }
            },
            complainForm:{
                rules:{
                    cpContent:check.textarea
                },
                messages:{

                }
            },
            checkForm:{
                rules:{
                    evaSyn:{
                        required:true
                    },
                    evaResSpeed:{
                        required:true
                    },
                    evaService:{
                        required:true
                    },
                    evaIsanonymity:{
                        required:true
                    },
                    evaReviews:check.textarea
                },
                messages:{}
            },
            changeComplaint:{
                rules:{
                    cpContent:check.textarea
                },
                messages:{
                    id:{
                        required:'id为空，请重新打开'
                    }
                }
            },
            changeEvaluate:{
                rules:{
                    evaReviews:check.textarea
                }
            },
            cancelOrderSeach:{
                rules:{
                    SordSubOrderNo:$.extend({},check.code,{required:false})
                }
            },
            closeOrderSeach:{
                rules:{
                    SordSubOrderNo: $.extend({},check.code,{required:false})
                }
            },
            closeOrder:{
                rules:{
                    remark: $.extend({},check.textarea,{required:false})
                }
            },
            addNews:{
                rules:{
                    noticeTheme:check.textarea,
                    noticeContent:check.textTitle
                }
            },
            cancelOrderForm:{
                rules: {
                    cancelTextType: {
                        required: true
                    },
                    cancelContent: $.extend({}, check.textarea, {required: false})
                }
            }
        },
        productSetting:{
            'form-no1':{
                rules:{
                    serviceCharge:check.number,
                    licenseName:check.fileName,
                    p1:check.number,
                    p2:check.number,
                    p3:check.number
                }
            }
        },
        applyAgency:{
            addInfo:{
                rules:{
                    agyName:check.peopleName,
                    agyRegion:check.addr,
                    agyCompRegion:check.addr,
                    agyCode:check.code,
                    agyLlicenceCode:check.code,
                    agyCreateTime:check.date,
                    agyCapital:check.code,
                    agyLegalPerson:check.peopleName,
                    agyLegalPersonId:check.idCard,
                    agyLegalPersonPhone:check.mobile,
                    addAreas:check.addr,
                    addRegion:check.addr,
                    addDetial:check.addr,
                    agyTradeRange:{required:true},
                    userInfo:{required:true}
                }
            }
        },
        marketApply:{
            addInfo:{
                rules:{
                    mktName:check.peopleName,
                    mktCode:check.code,
                    mktCode2:check.code,
                    mktValidTime:check.date,
                    mktOwner:check.peopleName,
                    mktLegalPersonId:check.idCard,
                    mktOwnerPhone:check.mobile,
                    addAreas:check.addr,
                    addRegion:check.addr,
                    addDetial:check.addr,
                    mktTradeRange:{required:true},
                    userInfo:{required:true}
                }
            }
        },
        governmentApply:{
            addInfo:{
                rules:{
                    govName:check.peopleName,
                    govOwner:check.peopleName,
                    govOwnerPhone:check.mobile,
                    govOwnerId:check.idCard,
                    addAreas:check.addr,
                    addDetial:check.addr,
                    addRegion:check.addr,
                    userInfo:{required:true}
                }
            }
        },
        government:{
            'form-no2':{
                rules:{
                    govName:check.peopleName,
                    govOwner:check.peopleName,
                    govOwnerPhone:check.mobile,
                    govOwnerId:check.idCard,
                    addAreas:check.addr,
                    addRegion:check.addr,
                    addDetial:check.addr
                }
            },
            loginInfo:{
                rules:{
                    userName:check.userName,
                    email:check.email,
                    phone:check.mobile,
                    address:check.addr
                }
            },
            payAccount:{
                rules:{
                    acContent: check.email,
                    acName:{
                        required:true
                    }
                },
                messages:{
                    acContent:'请输入正确的支付宝账户名'
                }
            }
        },
        userApply:{
            addInfo:{
                rules:{
                    enCode:check.code,
                    enName:check.peopleName,
                    enLegalPersonId:{
                        idCard:true
                    },
                    addDetial:{
                        letterNumberChinese:true,
                        rangelength:[1,50]
                    },
                    enLegalPerson:{
                        stringCH:true,
                        rangelength:[2,20]
                    },
                    enLegalPersonPhone:{
                        mobile:true
                    },
                    addRegion:{
                        letterNumberChinese:true,
                        rangelength:[1,50]
                    },
                    enTradeRange:{required:true},
                    userInfo:{required:true}
                }
            }
        },
        license:{
            addInfo:{
                rules:{
                    enCode:check.code,
                    enName:check.peopleName,
                    enLegalPersonId:{
                        idCard:true
                    },
                    enLegalPerson:{
                        stringCH:true,
                        rangelength:[2,20]
                    },
                    enLegalPersonPhone:{
                        mobile:true
                    },
                    addAreas:{
                        letterNumberChinese:true,
                        rangelength:[1,50]
                    },
                    addRegion:{
                        letterNumberChinese:true,
                        rangelength:[1,50]
                    },
                    addDetial:{
                        letterNumberChinese:true,
                        rangelength:[1,50]
                    },
                    enTradeRange:{
                        required:true
                    }
                }
            },
            login:{
                rules:{
                    j_username:check.loginName,
                    j_password:check.password
                }
            }
        },
        billLicense:{
            myFileUpload:{
                rules:{
                    fileCode:check.fileName,
                    remark:$.extend({},check.textarea,{required:false})
                }
            }
        },
        userBill:{
            billSeach:{
                rules:{
                    sorderNo: $.extend({},check.code,{required:false})
                }
            }
        }
    };
    option.agency.addAddr=option.user.addAddr=option.paySubmit.addAddr;
    option.agency.updataAddr=option.user.updataAddr=option.paySubmit.updataAddr;
    option.agency.closeOrder=option.user.closeOrder;
    option.user.updataNews=option.agency.updataNews=option.agency.addNews=option.user.addNews;

    jQuery.validator.option={};
    jQuery.extend(jQuery.validator.option,option);

    var path=location.pathname,area='';
    for(var i in route.path){
        if(route.path[i]==path){
            area=i;
            break;
        }
    }
    if(option[area]){
        for(var i in option[area]){
            $.aaa.push($('#'+i).validate(option[area][i]));

        }
    }
})
jQuery.fn.checkForm=function(){

    $(this).each(function(){
        var $this=$(this);
        if(!$this.get(0).nodeName=='FORM') {
            show('is not form')
            return;//当前不是form
        }
        var formName=$this.attr('id'),formInput=jQuery.validator.option;
        var path=location.pathname,area='',check=null,elems=$();
        for(var i in route.path){
            if(route.path[i]==path){
                area=i;
                break;
            }
        }
        if(formInput&&formInput[area]&&formInput[area][formName]&&formInput[area][formName].rules){
            check=formInput[area][formName].rules;
            for(var i in check){
                if(check[i]['required']){
                    elems=elems.add($('#'+formName+' [name="'+i+'"]'));
                }
            }
        }
        elems.each(function(){
            var $this=$(this);
            if($this.parent().children().last().text().indexOf('*')>=0){
                return;
            }
            if($this.hasClass('notStar')){
                return
            }
            $('<span style="color: red;text-indent: 6px;line-height: 30px;">*</span>').appendTo($this.parent())
        });
        return;
    })
};