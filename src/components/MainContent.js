import React from "react";

function MainContent() {

  const [dog, setDog] = React.useState({
    topText: "",
    bottomText: "",
    url: "https://s7d1.scene7.com/is/image/terrain/24781320_018_e?$zoom2$",
    flag: "https://static.thenounproject.com/png/3191538-200.png"
  })

  const [countries, setCountries] = React.useState([]);

  React.useEffect(function () {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => setCountries(data))
  })

  function handleChange(e) {
    const { name, value } = e.target;
    setDog(function () {
      return {
        ...dog,
        [name]: value
      }
    })
  }

  function invokeDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setDog((prevColor) => ({
        ...prevColor,
        url: data.message
      })));
  }

  function invokeCountry() {
    const randomCountry = countries[Math.floor(Math.random() * countries.length)];
    const countryFlag = randomCountry.flags.png;
    setDog(function () {
      return {
        ...dog,
        flag: countryFlag
      }
    })
  }

  return (
    <main className="main-content">
      <div className="form">
        <input
          type="text"
          name="topText"
          placeholder="Type your first name"
          value={dog.topText}
          onChange={handleChange} />

        <input
          type="text"
          name="bottomText"
          placeholder="Type the name of the dog's breed + -ov/ev/-sk"
          value={dog.bottomText}
          onChange={handleChange} />

        <button onClick={invokeDog}>Choose new dog</button>
      </div>
      <div className="img-cont">
        <img onClick={invokeCountry} className="main-img" src={dog.url} />
        <img className="flag-img left" src={dog.flag} />
        <img className="flag-img right" src={dog.flag} />
        <h3 className="top-text content-text">{dog.topText}</h3>
        <h3 className="bottom-text content-text">{dog.bottomText}</h3>
      </div>
    </main>
  )
}

export default MainContent;