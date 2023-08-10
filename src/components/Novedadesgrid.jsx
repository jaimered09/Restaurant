import './novedadesgrid.css';



export const Novedadesgrid = () => {
    
    return (
        <>
            <div id='contenedor1' className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="public/card1.jpg" className="card-img-top" alt="card1" width="580" height="450" />
                        <div className="card-body">
                            <h4 className="card-title">Nuevas oportunidades</h4>
                            <p className="card-text">Estamos abriendo nuevas sucursales rápidamente y te necesitamos. Ven a trabajar con nosotros y descubre un mundo de beneficios en el mejor lugar.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Última actualización 2 semanas atrás</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="public/card3.jpg" className="card-img-top" alt="card2" width="580" height="450"  />
                        <div className="card-body">
                            <h4 className="card-title">La alianza de los mejores</h4>
                            <p className="card-text">Descubre el sello de nuestro pollo junto a Pollo Real.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Última actualización 3 meses atrás</small>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="public/card2.jpg" className="card-img-top" alt="card3" width="580" height="450"  />
                        <div className="card-body">
                            <h4 className="card-title">Nuestro local de siempre, mejorado</h4>
                            <p className="card-text">Remodelamos nuestro primer local, ahora con la mejor tecnología y espacios recreativos para saborear y vivir la experiencia Los Pollos Hermano. </p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Última actualización 1 meses atrás</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
