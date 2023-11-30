import React from "react";

function MainContent() {

  const [color, setColor] = React.useState({
    topText: "",
    bottomText: "",
    url: "https://s7d1.scene7.com/is/image/terrain/24781320_018_e?$zoom2$"
  })

  function handleChange(e) {
    const { name, value } = e.target;
    setColor(function () {
      return {
        ...color,
        [name]: value
      }
    })
  }

  function invokeColor() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setColor((prevColor) => ({
        ...prevColor,
        url: data.message
      })));
  }

  return (
    <main className="main-content">
      <div className="form">
        <input
          type="text"
          name="topText"
          placeholder="Type your first name"
          value={color.topText}
          onChange={handleChange} />

        <input
          type="text"
          name="bottomText"
          placeholder="Type the name of the dog's breed + -ov/ev/-sk"
          value={color.bottomText}
          onChange={handleChange} />

        <button onClick={invokeColor}>Choose new color</button>
      </div>
      <div className="img-cont">
        <img src={color.url} />
        <h3 className="top-text content-text">{color.topText}</h3>
        <h3 className="bottom-text content-text">{color.bottomText}</h3>
      </div>
    </main>
  )
}

export default MainContent;