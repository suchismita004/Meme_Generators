let meme = document.getElementById("meme");
      let title = document.getElementById("title");
      let getMemeBtn = document.getElementById("get-meme-btn");
      let url = "https://meme-api.herokuapp.com/gimme/";
      let subreddits = ["catmemes", "wholesomemes", "dogmemes", "me_irl"];

      let getMeme = () => {
        let randomSubreddit = subreddits[Math.floor(Math.random() * 3)];
        fetch(url + randomSubreddit)
          .then((resp) => resp.json())
          .then((data) => {
            var memeImg = new Image();
            memeImg.onload = () => {
              meme.src = data.url;
              title.innerHTML = data.title;
            };
            memeImg.src = data.url;
          });
      };
      getMemeBtn.addEventListener("click", getMeme);
      window.addEventListener("load", getMeme);