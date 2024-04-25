const submit = document.getElementById('submit');
submit.addEventListener('click', (event) => {
  apiCard();
  event.preventDefault();
});

const apiCard = () => {
  const movieName = document.getElementById('name').value;
  const apiUrl = "https://www.myapifilms.com/imdb/idIMDB?title=" + movieName + "&token=254c15ce-e74a-4bfa-85ea-25dfd3fa8fa5";
  // test https://www.myapifilms.com/imdb/idIMDB?title=$titanic&token=254c15ce-e74a-4bfa-85ea-25dfd3fa8fa5

  fetch(apiUrl)
    .then((response) => response.json())
    .then(data => {

      const card = document.createElement("div");
      card.classList.add("card");
      const image = document.createElement("img");
      console.log("data", data);
      console.log("movies", data.data.movies[0].urlPoster)
      // console.log("urlPoster index :", data.movies.findIndex("urlPoster"));
      image.src = data.data.movies[0].urlPoster;

      console.log("image.src", image.src);
      const title = document.createElement("h2");
      title.innerText = data.data.movies[0].title;
      const description = document.createElement("p");
      description.innerText = data.data.movies[0].simplePlot;
    
      card.appendChild(image);
      card.appendChild(title);
      card.appendChild(description);
      document.getElementById("cards").appendChild(card);
    
    });
  
  
}