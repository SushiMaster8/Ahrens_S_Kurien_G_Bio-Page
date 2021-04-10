(() => {

    const sasha = document.querySelector('.sasha'),
          georgey = document.querySelector('.georgey'),
          teamBio = document.querySelector('#team-bios');

    const teamBios = [
      ['Sasha Ahrens', `'Sasha is 18 years old and lives in London Ontario. He attends school at Fanshawe College and is
      enrolled in a 2-year Interactive Media Design program.'`, `Hobbies`, `Playing Hockey, Reading, Drawing, Media Design, Spending time with freinds and family, Listening to Music, and playing Video Games.`,
      `Favourite Hockey Team and Player`, `Toronto Maple Leafs and Alex Ovechkin`, `Favourite Books`, `Harry Potter series, Percy Jackson series, The Walking Dead series, The Shining`,
      `Favourite Music Genres`, `Rap, Pop, Rock & Roll, R&B, Trap`, `Favourite Music Genres`, `Tee Grizzley, Kanye West, Drake, Kendrick Lamar, Travis Scott, Denzel Curry`,
      `Favourite Movies & TV Shows`, `The Social Network, The Dark Knight, SuperBad, Breaking Bad, Stranger Things, The MCU.`],
      ['Georgey Kurien', `Hey, my name is Georgey Kurien. I study at Fanshawe in the Interactive Media Design Course. I am currently in level 2 of the course.`,
        `Hobbies`, `Reading Fiction and Fantasy, Drawing Machines, Watching Documentaries, Teaching Math, Currently learning piano`, `Favourite Sport`, `Swimming`,
        `Favourite Books`, `Tintin, Idiot's Guide to html`, `Favourite Music Genres`, `Pop, Classic, Rock`, `Favourite Artists`, `Ren, Marc Rebillet, White Stripes`,
        `Favourite Movies & TV Shows`, `The Gladiator, The Umbrella Acadamy`]
      ];

    teamBio.textContent = teamBios[event.target.dataset.offset][0];

    teamBio.querySelector(h2).textContent = teamBios[event.target.dataset.offset][1];

    function bios(){

    };

    sasha.addEventListener('click', sashaBio);
    georgey.addEventListener('click', bios);

  }) ();
