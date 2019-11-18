var dataset = [2,4,6,8,10,40]
var pie= d3.pie();

var w=300
var h=300

var outerRadius= w/2
var innerRadius=0;

var arc= d3.arc()
.innerRadius(innerRadius)
.outerRadius(outerRadius);

var svg = d3.select("div")
.append("svg")
.attr("width", w)
.attr("height", h);

var arcs=svg.selectAll("g.arc")
.data(pie(dataset))
.enter()
.append("g")
.attr("class", "arc")
.attr ("transform", "translate(" + outerRadius +"," +outerRadius + ")");

var color = d3.scaleOrdinal(d3.schemeCategory10)

arcs.append("path")
.attr("fill", function(d,i) {
    return color(i);
})
      .attr("d", arc);

arcs.append("text")
.attr("transform", function(d) {
    return "translate(" +arc.centroid(d) +")";
})
.attr("text-anchor", "middle")
.text(function(d) {
      return d.value;
      }); 

