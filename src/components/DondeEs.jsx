import dondees from './dondees.css';

export const DondeEs = () => {
    return (
        <>
            <div className="col">
                <div className="card h-100">
                    <div className="card-body">
                        <h4 className="card-titles">SUCURSAL PRINCIPAL</h4>
                        <p className="card-texto">Local WEST COAST:
                            Lunes a Sábado 12:00 a 23:00 horas.
                            Domingo 12:30 a 19:00 horas.
                            Santa Bárbara 1111, California.
                            +56 228327035
                            lospolloshermanos@pollos.com</p>
                    </div>
                    <div className="card-footer button-container">
                    <div className="location-container">
                        <img src="public/assets/images/carousel/card2.jpg" alt="local" />
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.682476594472!2d-106.6889281241112!3d35.01465276630262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87220d0a121604ed%3A0xc185463b0a72dca6!2sLos%20Pollos%20Hermanos!5e0!3m2!1sen!2scl!4v1691615304940!5m2!1sen!2scl"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                       </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3"> 📍 Busca tú local más cercano 📍 </button>
                </div>
            </div>
        </>
    );
};


