// fetch('textFile.txt')
//       .then(response => response.json())


      // oppg 1

    // .then(array => array.forEach(element => {
    //     if (element.name == "Clementine Bauch")
    //     console.log(element.address);
    // }))

    // oppg 2

    //  .then(array => array.forEach(element => {
    //     if (element.name == "Leanne Graham") {
    //     console.log(element.phone);
    //     element.phone = "244 23 335"
    //     console.log(element.phone);
    //  }
    //  }))

        // oppg 3

    // .then(array => array.forEach(element => {
    //     if (element.email == "Sherwood@rosamond.me") {
    //         console.log(element.name);
    //         console.log(element.username);
    //     }
    // }))

        // oppg 4
        // fetch('fotograf.json') 
        // .then(response => response.json())
        // .then(json => console.log(json.length +" Bilder"))

        // oppgave 5
        // for
        // for of
        // for in
        // foreach
        // fetch('fotograf.json')
        // .then(response => response.json())
        // .then(json => {
        //     counter = 0;
        //     sjekkID = 0;
        //     json.forEach(element => {
        //         if (element.albumId != sjekkID) {
        //             sjekkID++;
        //             counter++;
        //         }
        //     });
        //     console.log(counter);
        // } )     


        
        // oppgave 6
    // fetch('fotograf.json')
    // .then(response => response.json())
    // .then(array => {
    //     console.log(array[238].title);
    // });
    
    // fetch('fotograf.json')
    // .then(response => response.json())
    // .then(array => {
    //     let url = array[555].url;
    //     document.body.innerHTML = `<img src=${url}>`
    // });

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(array => {
//         console.log(array[95].title);
//     });



fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) =>
        json.forEach((element) => {
          if (element.userId == 5) {
            element.body = "UserID 5"
            console.log(element.body);
          }
        })
      );