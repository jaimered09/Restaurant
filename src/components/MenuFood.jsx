import './menuFood.css';
import { NavLink } from 'react-router-dom'


const MenuFood = () => {
  return (
    <>
      <div id="contenedores">
        <h2> 🍗 El sabroso menú de los hnos 🍗 </h2>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-10">
        <div className="col">
          <div className="cards">
            <img src="public/assets/images/food/combo1 copy.jpg" className="card-img-top" alt="..." width="200" height="350" />
            <div className="card-body">
              <h5 className="card-title">Pollo Frito</h5>
              <p className="card-text">El más sabroso pollo frito, en su inconfundible textura crispy, la razón por la que somos famosos</p>
              <button type="submit" className="btn btn-primary mt-9">Ver más</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="cards">
            <img src="public/assets/images/food/combo3SI.jpg" className="card-img-top" alt="..." width="200" height="350" />
            <div className="card-body">
              <h5 className="card-title">COMBO de los Hermanos</h5>
              <p className="card-text">Los que saben eligen el combo, lo mejor en un solo pedido, a tu medida, elige los especiales</p>
              <button type="submit" className="btn btn-primary mt-3">Ver más</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="cards">
            <img src="public/assets/images/food/nuggets-de-pollo copy.jpg" className="card-img-top" alt="..." width="200" height="350" />
            <div className="card-body">
              <h5 className="card-title">Nuggets</h5>
              <p className="card-text">Sabrosos nuggets de pollo, ponles la salsas que más te guste y a disfrutar</p>
              <button type="submit" className="btn btn-primary mt-3">Ver más</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="cards">
            <img src="public/assets/images/food/burger copy.jpg" className="card-img-top" alt="..." width="200" height="350" />
            <div className="card-body">
              <h5 className="card-title">Hamburguesa</h5>
              <p className="card-text">Una mezcla perfecta, el mejor pollo con los mejores ingredientes en una magestuosa hamburguesa</p>
              <button type="submit" className="btn btn-primary mt-3">Ver más</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="cards">
            <img src="public/assets/images/food/salsas copy.jpg" className="card-img-top" alt="..." width="200" height="350" />
            <div className="card-body">
              <h5 className="card-title">Las salsas de los hermanos</h5>
              <p className="card-text">Nada mejor que untar lo que quieras en las mejores salsas para disfrutar</p>
              <button type="submit" className="btn btn-primary mt-3">Ver más</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="cards">
            <img src="public/assets/images/food/bebidas copy.jpg" className="card-img-top" alt="..." width="200" height="350" />
            <div className="card-body">
              <h5 className="card-title">Bebestibles</h5>
              <p className="card-text">Refrescate con la amplia variedad de bebidas disponibles, tambien puedes probar nuestras cervezas artesanales</p>
              <button type="submit" className="btn btn-primary mt-3">Ver más</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default MenuFood;




{/* <NavLink className="" to="/"><img src="public/assets/images/logo-footer.png" alt="logo" className="img-fluid" /></NavLink> */ }