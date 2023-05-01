

fetch('Flashcardapp.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);    
    });

function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.length; i++) {
        // append each person to our page
        var div = document.createElement("div");
        div.innerHTML = "Question: " + data[i].question + '' + "Answer: " + data[i].answer;
        mainContainer.appendChild(div);
    }

  }