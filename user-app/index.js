//  https://randomuser.me/api/?results=24

let userData;

const fetchUSer = async () => {
  await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => (userData = data.results));

  console.log(userData);
};

const userDiplay = async () => {
  await fetchUSer();

  const dateParser = (date) => {
    let newdate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return newdate;
  };

  const dayCalc = (date) => {
    let today = new Date();
    let todayTimestamp = Date.parse(today);
    let timeStamp = Date.parse(date);

    return Math.ceil((todayTimestamp - timeStamp) / 8.64e7);
  };

  document.body.innerHTML = userData
    .map(
      (user) =>
        `
      <div class="card">
      <img src="${user.picture.large}" alt)" photo de ${user.picture.large}" >  
      <h3> ${user.name.first} ${user.name.last} </h3>
      <p> ${user.location.city}, ${dateParser(user.dob.date)}</p>
      <em>membre depuis: ${dayCalc(user.registered.date)} </em>
      
      </div>
  `
    )
    .join("");
};

userDiplay();
