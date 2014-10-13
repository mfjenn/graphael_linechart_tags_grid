window.onload = function () {

    var r = Raphael("holder"),
        txtattr = { font: "12px sans-serif"};
		
	var times = [["1:30pm", "2:30pm"],  ["3:30pm", "5:30am"], ["12:30pm", "2:30pm"], ["9:30am", "2:30pm", "4:30pm"], ["3:30pm", "5:30pm"], ["10:30am", "12:30pm"], [] ]; 
		
    var x = [], y = [], y2 = [], y3 = [];

        for (var i = 0; i < 1e6; i++) {
            x[i] = i * 10;
            y[i] = (y[i - 1] || 0) + (Math.random() * 7) - 3;
            y2[i] = (y2[i - 1] || 150) + (Math.random() * 7) - 3.5;
            y3[i] = (y3[i - 1] || 300) + (Math.random() * 7) - 4;
        }
		
    var lines = r.linechart(75, 130, 500, 150, [0, 1, 2, 3, 4, 5, 6], [0, 2.5, 5, 3.5, 6.5, 2.5], { nostroke: false, axis: "0 0 0 0", symbol: "circle", width: 4}).hoverColumn(function () {
        this.tags = r.set();
		
	
		//tags
		for (var i = 0, ii = this.y.length; i < ii; i++) {
		                        this.tags.push(r.tag(this.x, this.y[i], times[i].join("\n"), 0, 0).insertBefore(this).attr([{ fill: "#fff"}, { fill: this.symbols[i].attr("fill") }]));
		                    }
		                }, function () {
		                    this.tags && this.tags.remove();
        //end tags
    });
	
	
	
	var p = Raphael("white"); 
		p.rect(0, 0, 640, 330).attr({ fill: "#fff", stroke: "none"});
	//circles
	
    lines.symbols.attr({ r: 5, fill : "#000", stroke: "#f37829", "stroke-width": 4});
	lines.attr({stroke: "#f37829"});
	lines.axis.attr({stroke: "black"});
	
};
