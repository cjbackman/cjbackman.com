var width = document.getElementsByClassName('mainbar')["0"].clientWidth,
    height = document.getElementsByClassName('mainbar')["0"].clientHeight - 20,
    radius = (height - 100) / 6,
    xp = 250,
    yp = 150,
    titleMarginX=10,
    titleMarginY=10;

var drawHexagon = d3.svg.line()
                    .x(function(d) { return d.x; })
                    .y(function(d) { return d.y; })
                    .interpolate("cardinal-closed")
                    .tension("0.25");

var svg = d3.select(".content")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("class", "hexagon");

// First call
getPosts(3, 1);

// Get posts
function getPosts(limit, currentPage) {

  var url = ghost.url.api('posts', {limit: limit, page: currentPage});

  d3.json(url, (data) => {

  // Pagination
  var currentPage = data['meta']['pagination'].page,
      totalPages = data['meta']['pagination'].pages,
      totalPosts = data['meta']['pagination'].total,
      hide_prev = data['meta']['pagination'].prev == null ? "hidden" : "visible",
      hide_next = data['meta']['pagination'].next == null ? "hidden" : "visible",
      nextPage = currentPage + 1,
      prevPage = currentPage - 1;

  d3.select("#current-page").text(currentPage);
  d3.select("#total-page").text(totalPages);
  d3.select("#newer-posts").style("visibility", hide_prev).on("click", () => { getPosts(limit, prevPage) });
  d3.select("#older-posts").style("visibility", hide_next).on("click", () => { getPosts(limit, nextPage) });

  // Hexagons
  var hexagons = svg.selectAll("path").data(data['posts'], (d) => d.id);
  hexagons.exit().remove();
  hexagons.enter()
          .append("path")
          .attr("d", (d, i) => drawHexagon(genHexagonPoints(i, radius, xp, yp )))
          .attr("class", "fill");

  // Titles
  var titles = svg.selectAll("text").data(data['posts'], (d) => d.id);
  titles.exit().remove();
  titles.enter()
        .append("text")
        .attr("x", (d, i) => (i % 2) * radius + radius + xp + titleMarginX)
        .attr("y", (d, i) => i * (Math.sqrt(3) * radius) + yp + titleMarginY)
        .text((d) => d.title);
  });
}

function genHexagonPoints(index, radius, xp, yp) {
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