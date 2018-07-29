var width = document.getElementsByClassName('mainbar')["0"].clientWidth,
    height = document.getElementsByClassName('mainbar')["0"].clientHeight - 20;

var radius = 100,
    xp = 250,
    yp = 150;

var postData = ["post1", "post2", "post3"];

var drawHexagon = d3.svg.line()
                    .x(function(d) { return d.x; })
                    .y(function(d) { return d.y; })
                    .interpolate("cardinal-closed")
                    .tension("0.25");

var svg = d3.select(".mainbar")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

var url = ghost.url.api('posts', {limit: 3});
d3.json(url, (data) => {
  var hexagons = svg.append("g")
                    .attr("class", "hexagon")
                    .selectAll("path")
                    .data(postData);
  hexagons.exit().remove();
  hexagons.enter()
          .append("path")
          .attr("d", (d, i) => drawHexagon(genHexagonPoints(i, radius, xp, yp )))
          .attr("class", "fill")
          .attr("stroke", "white")
          .attr("stroke-width", 3);
});

function genHexagonPoints(index, radius, xp, yp) {
  var hx = (index % 2) * radius,
      hy = index * (Math.sqrt(3) * radius),
      h = Math.sqrt(3)/2;

  var hexagonPoints = [
        { "x": radius + xp + hx,   "y": yp + hy},
        { "x": radius/2 + xp + hx,  "y": h*radius + yp + hy},
        { "x": -radius/2 + xp + hx,  "y": h*radius + yp + hy},
        { "x": -radius + xp + hx,  "y": yp + hy},
        { "x": -radius/2 + xp + hx,  "y": -h*radius + yp + hy},
        { "x": radius/2 + xp + hx, "y": -h*radius + yp + hy}
      ];

    return hexagonPoints;
}