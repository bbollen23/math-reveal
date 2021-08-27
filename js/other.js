let div = d3.selectAll(".smoothing").select(".bar").call(d3.drag()
  .on("drag",function(event,d){
    let value = event.y < 40 ? -435 : (event.y > 400) ? 71 : event.y-350;
    console.log(event.y)
    d3.select(this).attr("y",value);
}));    





