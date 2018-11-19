// Dimensions
var width = d3.select(".mainbar").node().getBoundingClientRect().width
var height = d3.select(".mainbar").node().getBoundingClientRect().height
var radius = (height - 100) / 8;
var xp = 1 * radius;
var yp = 2 * radius;
var titleMarginX=10;
var titleMarginY=0;

// Hexagon drawer
var drawHexagon = d3.svg.line()
                    .x(function(d) { return d.x; })
                    .y(function(d) { return d.y; })
                    .interpolate("cardinal-closed")
                    .tension("0.25");

// Create SVG
var svg = d3.select(".content")
            .append("svg")
            .attr("width", "100%")
            .attr("height", height);
            //.call(redraw);
var g = svg.append("g").attr("class", "hexagon");


window.addEventListener("resize", resize)

// Main function
function getPosts(limit, currentPage) {

  var t0 = performance.now();
  var url = ghost.url.api('posts', {limit: limit, page: currentPage});

  d3.json(url, (data) => {

    console.log("API response:", data);

    _updatePagination(data, limit, currentPage)
    _updateHexagons(data)
    _updateTitles(data)

    var t1 = performance.now();
    console.log("Finished:", (t1 - t0).toFixed(0), "ms")

  });
}

function _genHexagonPoints(index, radius, xp, yp) {
  var hx = (index % 2) * radius,
      hy = index * (Math.sqrt(3) * radius),
      h = Math.sqrt(3)/2,
      hexagonPoints = [
        { "x": radius + xp + hx,   "y": yp + hy},
        { "x": radius/2 + xp + hx,  "y": h*radius + yp + hy},
        { "x": -radius/2 + xp + hx,  "y": h*radius + yp + hy},
        { "x": -radius + xp + hx,  "y": yp + hy},
        { "x": -radius/2 + xp + hx,  "y": -h*radius + yp + hy},
        { "x": radius/2 + xp + hx, "y": -h*radius + yp + hy}
      ];

    return hexagonPoints;
}

function _updatePagination (data, limit, currentPage) {

  // Pagination variables
  var currentPage = data['meta']['pagination'].page;
  var totalPages = data['meta']['pagination'].pages;
  var hide_prev = data['meta']['pagination'].prev == null ? "hidden" : "visible";
  var hide_next = data['meta']['pagination'].next == null ? "hidden" : "visible";
  var nextPage = currentPage + 1;
  var prevPage = currentPage - 1;

  // Add pagination numbers to page
  d3.select("#current-page").text(currentPage);
  d3.select("#total-page").text(totalPages);
  d3.select("#newer-posts")
    .style("visibility", hide_prev)
    .on("click", () => { getPosts(limit, prevPage) });
  d3.select("#older-posts")
    .style("visibility", hide_next)
    .on("click", () => { getPosts(limit, nextPage) });

}

function _updateHexagons(data) {

  var hexagons = g.selectAll("path").data(data['posts'], (d) => d.id);
  hexagons.exit().remove();
  hexagons.enter()
    .append("path")
    .attr("d", (d, i) => drawHexagon(_genHexagonPoints(i, radius, xp, yp)))
    .attr("class", "fill");

}

function _updateTitles(data) {

  var titles = g.selectAll(".hexagon-text").data(data['posts'], (d) => d.id);
  titles.exit().remove();
  titles.enter()
    .append("text")
    .attr("class", "hexagon-text")
    .attr("x", (d, i) => (i % 2) * radius + radius + xp + titleMarginX)
    .attr("y", (d, i) => i * (Math.sqrt(3) * radius) + yp + titleMarginY)
    .text((d) => d.title)
    .on("click", (d) => window.open(d.url, "_self"))
    .append("tspan")
    .attr("class", "hexagon-subtitle")
    .attr("x", (d, i) => (i % 2) * radius + radius + xp + titleMarginX)
    .attr("dy", 25)
    .text((d) => new Date(d.published_at).toDateString());

}

function redraw(svg) {

  // Dimensions
  var container = d3.select(svg.node().parentNode);
  var _width = parseInt(svg.style("width"));
  var _height = parseInt(svg.style("height"));
  var _aspect = _width / _height;

  // Add viewBox and preserveAspectRatio properties,
  // and call resize so that svg resizes on inital page load
  svg.attr("viewBox", "0 0 " + _width + " " + _height)
     .attr("perserveAspectRatio", "xMinYMid")
     .call(resize);

  // to register multiple listeners for same event type,
  // you need to add namespace, i.e., 'click.foo's
  // necessary if you call invoke this function for multiple svgs
  // api docs: https://github.com/mbostock/d3/wiki/Selections#on
  d3.select(window).on("resize." + container.attr("id"), resize);

  function resize() {
    // Resize svg
    var newWidth = parseInt(container.style("width"));
    var newHeight = Math.round(newWidth / _aspect)
    //var newHeight = parseInt(container.style("height"));
    var _radius = (newHeight - 100) / 8;
    //var _xp = 1 * _radius;
    //var _yp = 2 * _radius;
    //var _titleMarginX=10;
    //var _titleMarginY=0;

    console.log("Height:", newHeight, "Width:", newWidth)

    // Resize SVG
    //svg.attr("width", newWidth).attr("height", newHeight);

    // Reize hexagons
    d3.selectAll("path")
      .attr("d", (d, i) => drawHexagon(_genHexagonPoints(i, _radius, xp, yp)))
      .attr("class", "fill");

    // Resize titles
    d3.selectAll(".hexagon-text")
      .attr("x", (d, i) => (i % 2) * _radius + _radius + xp + titleMarginX)
      .attr("y", (d, i) => i * (Math.sqrt(3) * _radius) + yp + titleMarginY)
      .text((d) => d.title)
      .on("click", (d) => window.open(d.url, "_self"))
      .append("tspan")
      .attr("class", "hexagon-subtitle")
      .attr("x", (d, i) => (i % 2) * _radius + _radius + xp + titleMarginX)
      .attr("dy", 25)
      .text((d) => new Date(d.published_at).toDateString());
  }
}

function resize() {
  // Resize svg
  var newHeight = d3.select(".mainbar").node().getBoundingClientRect().height
  //var newHeight = parseInt(container.style("height"));
  var newRadius = (newHeight - 100) / 8;
  var newXP = 1 * newRadius;
  var newYP = 2 * newRadius;
  var titleMarginX = 10;
  var titleMarginY = 0;

  console.log("Height:", newHeight)

  // Resize SVG
  svg.attr("height", newHeight);

  // Reize hexagons
  d3.selectAll("path")
    .attr("d", (d, i) => drawHexagon(_genHexagonPoints(i, newRadius, newXP, newYP)))
    .attr("class", "fill");

  // Resize titles
  d3.selectAll(".hexagon-text")
    .attr("x", (d, i) => (i % 2) * newRadius + newRadius + newXP + titleMarginX)
    .attr("y", (d, i) => i * (Math.sqrt(3) * newRadius) + newYP + titleMarginY)
    .text((d) => d.title)
    .on("click", (d) => window.open(d.url, "_self"))
    .append("tspan")
    .attr("class", "hexagon-subtitle")
    .attr("x", (d, i) => (i % 2) * newRadius + newRadius + newXP + titleMarginX)
    .attr("dy", 25)
    .text((d) => new Date(d.published_at).toDateString());
}