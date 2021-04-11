(() => {
  console.log('fired');

  // variables at the top

  const pics = document.querySelector('#navList'),
        banner = document.querySelector('.headShots'),
        role = document.querySelector('h1'),
        name = document.querySelector('h2'),
        memberInfo = document.querySelector('.description');






  // adding house info using arrays -> this is what you would do for FIP as well
  const memberInfo = [

    ['Developer', 'Georgey Kurien', `Hey, my name is Georgey Kurien. I study at Fanshawe in the Interactive Media Design Course. I am currently in level 2 of the course. My hobbies are Reading Fiction and Fantasy, Drawing Machines, Watching documentaries, Teaching math, currently learing piano. My favourite sport is swimming. My favourite books are the Tintin comics and The Tapestry series. My favourite music genres are Pop, Classic, Rock. My favourite music artists are Ren, Marc Rebillet, White Stripes. Finally, my favourite movie and tv show are The gladiator and The umbrella Academy.`], // houseInfo[0][0] -> gets the first index of the subarray (the house name)

    ['Designer', 'Sasha Ahrens', `I am sasha, I am 18 years old and live in London Ontario. I attend Fanshawe College and am currently enrolled in a 2 year Interactive Media Design program. My hobbies include Playing Hockey, Reading, Drawing, Media Design, Spending time with freinds and family, Listening to Music, and playing Video Games. My favourite Hockey Team and Player are Toronto Maple Leafs and Alex Ovechkin. My favourite books are  The Harry Potter series, Percy Jackson series, The Walking Dead series, and The Shining. My favourite genres of music are Rap, Pop, Rock and Roll, R&B, Trap. My favourite musical artists are Tee Grizzley, Kanye West, Drake, Kendrick Lamar, Travis Scott, Denzel Curry. My Favourite Movies & TV Shows are The Social Network, The Dark Knight, SuperBad, Breaking Bad, Stranger Things, and movies from the MCU.`]

    ];

function start(event) {
   setMemberData(memberInfo[event.target.dataset.offset][0], memberInfo[event.target.dataset.offset][1]);
  }

function setMemberData(role, name, desc) {
    role.textContent = role;
    name.textContent = name;
    memberInfo.textContent = desc;
  }

 
  
pics.addEventListener('click', start);



})();
