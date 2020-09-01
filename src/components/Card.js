import React from "react";

function clickHandler(e) {
  e.preventDefault();
  const active = document.body.querySelector(`.${e.target.classList[0]}.active`)
  console.log(active, `.${e.target.classList[0]}.active`)
  if (active) active.classList.remove('active');
  e.target.classList.add('active')
}

export default (props) => {
  return (
    <a className="card" href="#">
      <div className="card--image-wrapper">
        <img src={props.assetsPath + props.src} alt={props.title} />
      </div>
      <div className="card--info">
        <h3>{props.title}</h3>
        <p>{props.year}</p>
      </div>
      <p>{props.genre}</p>
      <div className="kebab-menu" onClick={clickHandler}>
        <div className="kebab-menu--content">
          <button onClick={clickHandler}></button>
          <ul>
            <li>Edit</li>
            <li>Delete</li>
          </ul>
        </div>
      </div>
    </a>
  );
};
