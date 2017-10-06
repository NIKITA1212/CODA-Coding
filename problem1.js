var requestURL = 'https://s3-us-west-2.amazonaws.com/digicode-interview/Q1.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var info = request.response;
  var x="",i,j,k;
    
       for ( i in info.recipes) 
      {
     x += " <h2>" + info.recipes[i].name + " <h2>" 
          x += " <h4>" + "Ingredients:" + " </h4>"
     for (j in info.recipes[i].Ingredients)
     {
           x += " <h5>"  + "<a href=" + info.IngredientsDetails[info.recipes[i].Ingredients[j].name] + ">" + info.recipes[i].Ingredients[j].name+ "</a>" + "</h5>" 
        }
                    x += " <h4>" + "Steps:" + " </h4>" 
     for (k in info.recipes[i].steps)
     {
           x += "<h5>" + info.recipes[i].steps[k] + "</h5>"         
     }
          x += "-----------------------------" + "<br>"
      }
  document.getElementById("demo").innerHTML = x; 

}