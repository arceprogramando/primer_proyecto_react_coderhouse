import "./welcome.css";

const Welcome = () => {
  return (
    <div className="container container-welcome">
      <img src="./wines.jpg" className="imagen-vino" />
      <div className="welcome-absolute">
        <p className="welcome-paragraph">
          Bienvenido a mi pagina web con React
        </p>
        <img src="./imagen.ico"></img>
      </div>
    </div>
  );
};

export default Welcome;
