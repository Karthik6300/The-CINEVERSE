let sub = document.getElementById("sub");

sub.addEventListener("click", (event) => {
    event.preventDefault()
  let input = document.getElementById("input").value;

//   console.log(input);
  let card = document.createElement("div");
  card.style.border = "2px solid black";
//   card.style.display = "block";
  card.style.height = "100px";
  card.style.width = "20vw";
  document.body.appendChild(card);

  fetch(`https://www.omdbapi.com/?t=${input}&apikey=972e8d9b`)
    .then((res) => res.json()) // Return the JSON response
    .then((res) => {
      console.log(res);
      let post = document.createElement("img");
      post.setAttribute("src", `${res.Poster}`);
      post.style.width = "100%";
      card.append(post);
      let tle = document.createElement("h4");
      tle.innerHTML = res.Title;
      card.append(tle);
    })
    .catch((error) => console.error("Error fetching data:", error));
});