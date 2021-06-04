const getSportArt = (e) => {
  const sportName = e.target.elements.sportName.value;

  e.preventDefault();
  console.log(sportName);
};

export default getSportArt;
