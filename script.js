
const width = 1300;
const height = 900;
const margin = {left:100, right:150, bottom:150, top:150};

data = d3.csv("table3.csv").then(function(data)
{
    //creates the axis ranges
    const y = d3.scaleLinear().domain([0,100000]).range([height-margin.bottom,margin.top])
    const x = d3.scaleBand().domain(d3.range(data.length)).range([margin.left, width - margin.right]).padding(0.1)
    // x0 = d3.scaleBand()
    // .domain(data.map(d => d["Land Cover Types"]))
    // .rangeRound([margin.left, width - margin.right])
    // .paddingInner(0.1)
    // x1 = d3.scaleBand()
    // .domain(keys)
    // .rangeRound([0, x0.bandwidth()])
    // .padding(0.05)

    console.log(data)
    
    const svg = d3
    .select("#d3-container")
    .append("svg")
    .attr("width", width-margin.left-margin.right)
    .attr("height", height-margin.top-margin.bottom)
    .attr("viewBox", [0, 0, width, height]);

    svg
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("x", function(d) { return x(d["Land Cover Types"]); })
    .attr("y", 0)
    .attr("height", function(d) { return y(d[" Mystic"]);})
    .attr("width", x.bandwidth())

    function yAxis(g) {
        g.attr("transform", `translate(${margin.left}, 0)`)
          .call(d3.axisLeft(y).ticks(null, data.format))
          .attr("font-size", '20px')
      }
      
    function xAxis(g) {
        g.call(d3.axisBottom(x).tickFormat(i => data[i]["Land Cover Types"]))
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .attr("font-size", '20px')
      }
      
    svg.append("g").call(xAxis).selectAll("text")
    .attr("y", 0)
    .attr("x", 9)
    .attr("transform", "rotate(90)")
    .style("text-anchor", "start");

    svg.append("g").call(yAxis);
            
})


