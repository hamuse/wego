"use strict"
var tourizm= tourizm||{}
tourizm =(()=>{
	const WHEN_ERR = '호출하는 tourizm.js 를 찾을 수 없음 '
		let context, js
		let tourizm_Vuejs
		let mainHomejs
		let mainVuejs
		let tourizmDijkstrajs
		
		let init = ()=> {
			alert('tourizm init()')
			context = $.ctx()
			js = $.js()
			tourizm_Vuejs = js + '/tourizm/tourizmVue.js'
			mainHomejs = js + '/cmm/mainHome.js'
			mainVuejs = js + '/vue/mainVue.js'
			tourizmDijkstrajs = js + '/tourizm/tourizmDijkstra.js'
		}
		
		let onCreate = () =>{
			alert('tourizm onCreate')
			init()
			$.when(
					$.getScript(mainVuejs),
					$.getScript(tourizm_Vuejs),
					$.getScript(tourizmDijkstrajs)
					
			).done(()=>{
				alert('tourizm 성공//')
				setContentView()
				gotourizmDijkstra()
				heart()
				gpa()
			}).fail(()=>{
				alert(WHEN_ERR)
			})
		}
		let setContentView =()=>{
			$('#mainbody').html(tourizmVue.tourizm_body())
			$('html').scrollTop(0);
		}
		
		let gotourizmDijkstra = () =>{
			$('#dijkstra_btn').click(()=>{
				alert('클릭')
				tourizmDijkstra.onCreate()
			})
		}
		let heart=()=>{
			$('#heart1').on("click",function(e) {
				var $this = $(this);
			$this.find(">img").attr("src", function(index, attr) {
				if(attr.match('beforeheart')){
					return attr.replace("beforeheart.png","afterheart.png")
				}else {
					return attr.replace("afterheart.png", "beforeheart.png")
				}
			})
			})
		}
		let gpa = ()=>{
			$('#star_grade a').click(function(){
	            $(this).parent().children("a").removeClass("on");  
	            $(this).addClass("on").prevAll("a").addClass("on"); 
	            return false;
	        })
		}
		return {onCreate}
	
})();