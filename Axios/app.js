

function handleClick(){

  const input = document.getElementById("input").value;
  
  const url = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=${input}&format=json`
  
  axios.get(url)
    .then((response) => {
      console.log(response);
      response = response.data;
      displayResults(response);

    })
  }

function displayResults(myResults){
  const displayResults = myResults[3].map(function(item, index){
    
    const title = myResults[1][index];
    const content = myResults[2][index];
    
    return `
    
    <li>
    <a href=${item}>${title}</a>
    </li>
    <p>${content}</p>
    <br>`;

  });

  document.getElementById("results").innerHTML = displayResults.join("");
};

