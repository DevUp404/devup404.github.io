// Function for request
// @requestURL example: "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
async function getOnlineFile(requestURL) {
  const request = new Request(requestURL);

  const response = await fetch(request);
  const r = await response.text(); // Response as JSON: response.json()

  return r;
}

// Usage
let fileText = 0
getOnlineFile("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json").then(text => s = fileText)
let objectFromRequest = JSON.parse(fileText);

// Object to json
let jsonFromObject = JSON.stringfy(objectFromRequest)
