"use strict"

var tourizmDijkstra = tourizmDijkstra || {}
tourizmDijkstra = (()=>{
	const WHEN_ERR = '호출하는 tourizmDijkstrajs 를 찾을 수 없습니다.'
		let context, js
		let tourizm_Vuejs
		let mainHomejs
		let mainVuejs
		let tourizmDijkstraVuejs
		let tourizmjs
		let init = () =>{
			context = $.ctx()
			js = $.js() 
			tourizm_Vuejs = js + '/tourizm/tourizmVue.js'
			mainHomejs = js + '/cmm/mainHome.js'
			mainVuejs = js + '/vue/mainVue.js'
			tourizmDijkstraVuejs = js + '/tourizm/tourizmDijkstraVue.js'
			tourizmjs = js + '/tourizm/tourizm.js'
		}
		
		let onCreate = () =>{
			alert('dijkstra')
			init()
			$.when(
					$.getScript(mainVuejs),
					$.getScript(tourizm_Vuejs)
			).done(()=>{
				setContentView()
				
			}).fail(()=>{
				alert(WHEN_ERR)
			})
		}
		
		let setContentView = () =>{
			$('#mainbody').html(tourizmDijkstraVue.tourizmDijkstraVue_body())
			$('html').scrollTop(0)
			$('#tourizm_btn').click(()=>{
				alert('가보자')
				tourizm.onCreate()
			})
		}
		return {onCreate}
})()