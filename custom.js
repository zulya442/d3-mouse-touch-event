var w = 960,
h = 500

var i = 0;

var svg = d3.select('body').append('svg')
.attr('width', w)
.attr('height', h)

svg.append('rect')
.attr('width', w)
.attr('height', h)
.on('ontouchstart' in document ? 'touchmove' : 'mousemove', particle);

function particle(){
	var m = d3.mouse(this);

	svg.insert('circle', 'rect') //Inserts circle before rectangle
	.attr('cx', m[0])
	.attr('cy', m[1])
	.attr('r', 0)
	.style('stroke', d3.rgb((i = (i + 1 % 255)), 255, 255, .5))
	.style('stroke-opacity', 1)
	.transition()
	.duration(2000)
	.attr('r', 10)
	style('stroke-opacity', 0)
	.remove();

	d3.event.preventDefault();

}