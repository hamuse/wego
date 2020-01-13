var tourizmDijkstraVue = tourizmDijkstraVue || {}
tourizmDijkstraVue = {
		tourizmDijkstraVue_body : () => {
			return `<div class ="container" style = "height: 1300px; width: 2000px;">
            <div class = "mainimg" style = "text-align: center;"><h2>최단거리 조회하기</h2><br>
            </div>
            <div class = "cl1" style = "margin-top: 2%;
		        width: 50%;
		        height: 80%;
		        float: left;
		        box-sizing: border-box;
		        border: 1px solid black;">
            </div>
            <div class = "cl2" style = "margin-top: 2%;
        width: 50%;
        height : 80%;
        float: right;
        box-sizing: border-box;
        border: 1px solid black;">kakao Map 
            </div>
             <div id = "tourizmgogo" style="
	text-align: center;
	position : center;
	margin-top : 10px;">
      	<button id = "tourizm_btn">관광지로 이동</button>
		</div>
      </div>`
		}
}