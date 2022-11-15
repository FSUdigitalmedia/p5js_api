let got;
let div;

function setup() {
  noCanvas();
  div = createDiv();
  div.position(50, 50);
  div.style("font-size", "40px");
  background(125);
}

function draw() {
  if (got != undefined) div.html(got.activity);
  if (frameCount % (60*5) == 0) reload();
}

function reload() {
  let url = 'https://www.boredapi.com/api/activity?type=relaxation';
  loadJSON(url, "json", function(response) {
    got = response;
  });
}