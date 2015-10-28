// JavaScript Document
/*首页导航*/
function hoverCity(){
	var itemdlclo=$(".clothes ul > li a");
	var timeOut = null;
	itemdlclo.hover(function(){
		var iteminc=itemdlclo.index(this);
		$(".clothes ul li").eq(iteminc).hover(function(){
			$(".clothes ul").children().eq(iteminc).addClass("openclothes").siblings().removeClass("openclothes");
			$(".clothescontentbox").children().eq(iteminc).show().siblings().hide();
		})
	})
	itemdlclo.mouseover();
}
$(function(){
	var itemdlsho=$(".shoes ul > li a");
	itemdlsho.hover(
	function(){
		var itemins=itemdlsho.index(this);
		$(".shoes ul li").eq(itemins).hover(function(){
			$(".shoes ul").children().eq(itemins).addClass("openshoes").siblings().removeClass("openshoes");
			$(".shoescontentbox").children().eq(itemins).show().siblings().hide();
		})
	})
})
$(function(){
	var itemdlfo=$(".food ul > li a");
	itemdlfo.hover(
	function(){
		var iteminf=itemdlfo.index(this);
		$(".food ul li").eq(iteminf).hover(function(){
			$(".food ul").children().eq(iteminf).addClass("openfood").siblings().removeClass("openfood");
			$(".foodcontentbox").children().eq(iteminf).show().siblings().hide();
		})
	})
})
$(function(){
	var itemdlpen=$(".pencil ul > li a");
	itemdlpen.hover(
	function(){
		var iteminp=itemdlpen.index(this);
		$(".pencil ul li").eq(iteminp).hover(function(){
			$(".pencil ul").children().eq(iteminp).addClass("openpencil").siblings().removeClass("openpencil");
			$(".pencilcontentbox").children().eq(iteminp).show().siblings().hide();
		})
	})
})
$(function(){
	var itemdlumb=$(".umbrella ul > li a");
	itemdlumb.hover(
	function(){
		var iteminu=itemdlumb.index(this);
		$(".umbrella ul li").eq(iteminu).hover(function(){
			$(".umbrella ul").children().eq(iteminu).addClass("openumbrella").siblings().removeClass("openumbrella");
			$(".umbrellacontentbox").children().eq(iteminu).show().siblings().hide();
		})
	})
})
$(function(){
	var itemdlele=$(".electric ul > li a");
	itemdlele.hover(
	function(){
		var itemine=itemdlele.index(this);
		$(".electric ul li").eq(itemine).hover(function(){
			$(".electric ul").children().eq(itemine).addClass("openelectric").siblings().removeClass("openelectric");
			$(".electriccontentbox").children().eq(itemine).show().siblings().hide();
		})
	})
})

$(function(){
	var itemdlele=$(".farm ul > li a");
	itemdlele.hover(
	function(){
		var itemine=itemdlele.index(this);
		$(".farm ul li").eq(itemine).hover(function(){
			$(".farm ul").children().eq(itemine).addClass("openelectrid").siblings().removeClass("openelectrid");
			$(".farmcontentbox").children().eq(itemine).show().siblings().hide();
		})
	})
})
function loadCity(obj){
	obj=obj||{};
	obj.init=function(){
		this.city=this.city||'';//当前城市名
		this.obj=this.obj||'';//城市数据，由excel2JSON插件生成
		this.elem=this.elem||$('.dhli');//数据渲染容器元素*全局唯一
		this.html={
			"head":'<li><div class="newdh" style="margin-top:-15px;"> <div class="icoimg"> <em><img src="../images/public/clothes.png" data-original="" />[=head]</em> </div> <div class="ctent"> <div class="ctop clothes"><ul>',
			"title":'<li><a href="">[=title]</a></li>',
			"mid":'</ul></div><div class="clothescontentbox">',
			"body":{
				'head':'<div class="cdown"><ul>',
				'body':'<li><a href="">[=body]</a></li>',
				'foot':'</ul></div>'
			},
			"foot":'</div></div></div></li>'
		}
	}
	obj.show=function(){
		if(typeof this!="object"){
			try {
				obj = JSON.parse(obj);
			}
			catch(err){
				alert("数据序列号失败，可能是由于当前浏览器版本过低，请更新后再试");
			}
		}
		if(!this.city||!this.city){
			alert("请传入正确城市、商圈参数");
			return;
		}
		var city=this.city;
		if(this.obj[city]){
			var html='';
			for(var i in this.obj[city]){
				var heads='',titles='',bodys='';
				heads=this.html.head.replace(/\[=head\]/g,i);
				for(var n in this.obj[city][i]){
					titles+=this.html.title.replace(/\[=title\]/g,n);
					var bodysChild='';
					for(var m in this.obj[city][i][n]){
						bodysChild+=this.html.body.body.replace(/\[=body\]/g,this.obj[city][i][n][m]);
					}
					bodys+=this.html.body.head+bodysChild+this.html.body.foot;
				}
				html+=heads+titles+this.html.mid+bodys+this.html.foot;
			}
			$(this.elem).html(html);
		}
	}
	return obj;
}
$(function(){
	var x=loadCity();
	x.city='杭州市';//当前城市名
	x.obj={"杭州市":{"批发":{"富阳市":["晓华水暖批发富阳市"],"桐庐县":["老麻干货批发","高华油漆批发","木材批发零售","阿超灯具城","鑫荣丝网批发","晓波陶瓷批发商行","皇甫红强批发部","雪良板材批发部"]},"五金":{"富阳市":["富阳市五金建材批发经营部"],"桐庐县":["小杨五金批发总汇","建中五金电器批发"]},"农贸":{"桐庐县":["果蔬批发"]},"门窗":{"桐庐县":["琦峰门窗配件批发","明兴方木批发中心"]}}};//城市数据，由excel2JSON插件生成
	x.elem=$('.dhli');//数据渲染容器元素*全局唯一
	x.init();//初始化对象；
	x.show();//对象的表现方法
	hoverCity();
})
//function loadCity(obj){
//	obj=obj||{};
//	obj.init=function(){
//		this.city=this.city||'';//当前城市名
//		this.obj=this.obj||'';//城市数据，由excel2JSON插件生成
//		this.elem=this.elem||$('.dhli');//数据渲染容器元素*全局唯一
//		this.img=this.img||'';
//		this.html={
//			"head":'<li><div class="newdh" style="margin-top:-15px;"> <div class="icoimg"> <em><img src="[=head]" data-original="" /></em> </div> <div class="ctent"> <div class="ctop clothes"><ul>',
//			"title":'<li><a href="">[=title]</a></li>',
//			"mid":'</ul></div><div class="clothescontentbox">',
//			"body":{
//				'head':'<div class="cdown"><ul>',
//				'body':'<li><a href="">[=body]</a></li>',
//				'foot':'</ul></div>'
//			},
//			"foot":'</div></div></div></li>'
//		}
//	}
//	obj.show=function(){
//		if(typeof this!="object"){
//			try {
//				obj = JSON.parse(obj);
//			}
//			catch(err){
//				alert("数据序列号失败，可能是由于当前浏览器版本过低，请更新后再试");
//			}
//		}
//		if(!this.city||!this.city){
//			alert("请传入正确城市、商圈参数");
//			return;
//		}
//		var city=this.city;
//		if(this.obj[city]){
//			var html='';
//			for(var i in this.obj[city]){
//				var heads='',titles='',bodys='';
//				heads=this.html.head.replace(/\[=head\]/g,this.img[i]);
//				for(var n in this.obj[city][i]){
//					titles+=this.html.title.replace(/\[=title\]/g,n);
//					var bodysChild='';
//					for(var m in this.obj[city][i][n]){
//						bodysChild+=this.html.body.body.replace(/\[=body\]/g,this.obj[city][i][n][m]);
//					}
//					bodys+=this.html.body.head+bodysChild+this.html.body.foot;
//				}
//				html+=heads+titles+this.html.mid+bodys+this.html.foot;
//			}
//			$(this.elem).html(html);
//		}
//	}
//	return obj;
//}
//$(function(){
//	var x=loadCity();
//	x.city='成都市';//当前城市名
//	x.obj={"成都市":{"综合":{"青羊区":["成都杜甫草堂市场","成都杜甫草堂市场"],"金牛区":["成都府河桥市场","成都国际商贸城","成都荷花池奥港皮具批发城","成都荷花池大成市场","成都荷花池宏正广场","成都荷花池批发市场","成都天海大市场","成都文具小商品批发市场","荷花池皮具箱包批发市场","成都文体批发市场","成都荷花池药材市场","成都五块石轻纺城","成都荷花池奥港皮具批发城"],"武侯区":["成都金花鞋材广场","四川成都中兴礼品城","四川省成都双楠皮革市场"],"锦江区":["成都九龙广场","成都青年路服装市场"],"都江堰市":["成都市宝济路批发市场"],"双流县":["成都农产品中心批发市场"],"成华区":["成都年货批发市场","成都府青路不锈钢市场"],"龙泉驿区":["成都水产物流批发市场"]},"小商品":{"金牛区":["成都文体批发市场","成都文具小商品批发市场"],"锦江区":["成都办公用品批发市场"]},"食品":{"成华区":["成都驷马桥水果批发"],"龙泉驿区":["成都水产物流批发市场"],"彭州市":["成都濛阳农产品交易中心"],"郫县":["成都郫县唐昌镇蔬菜批发市场"]},"汽配":{"武侯区":["成都红运汽车美容装饰广场","成都瑞德长城汽车装饰美容广场","成都鸿达汽配城","成都摩尔国际汽配城","绵州汽配城"]},"农副产品":{"双流县":["成都农产品中心批发市场"],"彭州市":["成都濛阳农产品交易中心"]},"建材":{"金牛区":["成都金府五金机电城","成都万贯五金机电城"],"成华区":["成都府青路不锈钢市场"],"武侯区":["成都富森美家居南商城"],"龙泉驿区":["成都博美银河装饰建材市场"],"青白江区":["成都青龙国际建材装饰城"]},"家居":{"金牛区":["成都金府灯具装饰材料城"],"锦江区":["成都水碾河辉煌灯具城","成都九眼桥灯具批发市场","成都东大灯饰城"]},"服装":{"金牛区":["成都荷花池童鞋批发城","成都荷花池服装批发城","成都荷花池大正鞋城","成都金荷花国际时装城","成都五块石轻纺城","成都海发内衣城","成都万贯时装城","成都海发内衣城","成都荷花池服装批发城","成都金荷花国际时装城","成都万贯时装城"],"武侯区":["成都金花鞋材广场"],"锦江区":["成都尚都服饰广场","成都尚都服饰广场"],"龙泉驿区":["四川省成都万紫服装批发城","四川省成都万紫服装批发城"]},"电子电器":{"金牛区":["成都城北电子电器批发市场"]}},"南昌市":{"综合":{"西湖区":["洪城大市场","宝源综合大市场","丰源金润广场","江西长运商城","万寿宫商城","五华批发市场","荣昌酒店用品城"],"青山湖区":["洪大国际酒店用品城","江西隆鑫义乌小商品城","京东农副产品批发大市场"],"南昌县":["昌南鸿诚批发大市场","南昌小商品城","南昌设备交易市场"],"新建县":["长堎商贸城","南昌·华南城","聚源批发市场"],"进贤县":["文港文化用品商场"]},"食品":{"青云谱区":["南昌深圳水果批发市场","南昌果品批发交易市场","南昌深圳水果批发市场"],"南昌县":["莲塘蔬菜果品批发市场"],"西湖区":["干货批发市场","富地干鲜副食品批发大市场"],"东湖区":["江西省粮油批发市场"]},"农副产品":{"青云谱区":["深圳农产品中心批发市场"]},"电子电器":{"西湖区":["长运电子市场","金润科技电子广场"]}},"南宁市":{"综合":{"江南区":["广西省南宁新屋村新福鞋料批发市场","南宁大西南商品交易批发市场","南宁工程机械市场","南宁工程机械市场","广西省南宁鲜花市场"],"西乡塘区":["南宁中华路小商品批发市场中心","南宁市海陆丰水产综合批发市场","广西南宁五里亭五金机电市场"],"兴宁区":["广西南宁新和平商","南宁金之岛鞋包批发市场","南宁万里国际汽配城"],"邕宁县":["南宁邕宁县苏圩镇农产品批发市场"],"城北区":["广西省南宁唐山花鸟综合市场"],"青秀区":["广西省南宁园湖花鸟市场"]},"小商品":{"青秀区":["广西办公用品、文具批发专业市场","南宁办公用品批发市场"]},"食品":{"西乡塘区":["广西南宁五里亭水果蔬菜批发市场"],"永新区":["广西南宁银雪粮油批发市场"]},"建材":{"西乡塘区":["南宁装饰城","南宁虎邱装饰材料市场"]},"家居":{"西乡塘区":["广西省南宁春城家居广场","广西南宁华聪灯饰城"]},"服装":{"西乡塘区":["南宁虎邱装饰材料市场"],"兴宁区":["广西南宁市港丰服装批发城","广西省南宁鑫地岛名牌服装写字楼","南宁港丰品牌女装批发城"]}}};//城市数据，由excel2JSON插件生成
//	x.elem=$('.dhli');//数据渲染容器元素*全局唯一
//	x.img={
//		"茶业":'../images/public/clothes.png',
//		"电子产品":'../images/public/clothes.png',
//		"服装":'../images/public/clothes.png',
//		"花鸟":'../images/public/clothes.png',
//		"家具":'../images/public/clothes.png',
//		"建材":'6',
//		"农副产品":'7',
//		"汽配":'8',
//		"食品":'9',
//		"小商品":'10',
//		"鞋帽":'11',
//		"综合":'12'}
//	x.init();//初始化对象；
//	x.show();//对象的表现方法
//	hoverCity();
//})
