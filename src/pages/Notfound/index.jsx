import "./style.scss";

function Notfound() {

    return (
        <section className="notfound">

            <article className="notfound_message">
                <div className="notfound_text">
                    <h1>404</h1>
                    <h2>Oups! La page que vous demandez n'existe pas.</h2>
                </div>
                <div className="back_to_homepage">
                    <a href="/">Retour à la page d'accueil</a>
                </div>
            </article>
        </section>
    )
}

export default Notfound;