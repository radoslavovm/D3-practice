
const width = 900;
const height = 450;
const margin = {left:50, right:50, bottom:50, top:50};

data = d3.csv("table3.csv")
{
    var headers = ["Land Cover Types", "Mystic", "Charles and Neponset", "Weir", "Islands"]
    console.log(data)
    //Write your d3 code here  
};
const svg = d3
    .select("#d3-container")
    .append("svg")
    .attr("width", width-margin.left-margin.right)
    .attr("height", height-margin.top-margin.bottom);
    
svg
.selectAll("rect")
.data(data)
.join("rect")
.attr("x", (d, i) => i*25)
.attr("y", 0)
.attr("height", (d)=> (d.score))
.attr("width", 10);
