let got;
let div;

function setup() {
  noCanvas();
  div = createDiv();
  div.position(50, 50);
  div.style("font-size", "40px");
  background(125);
  noLoop();
}

function draw() {
  if (got != undefined) div.html(got.activity);
  noLoop();
}

function mouseClicked() {
  let url = 'https://www.boredapi.com/api/activity?type=relaxation';
  loadJSON(url, "json", function(response) {
    got = response;
  });
  loop();
}