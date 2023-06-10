import "./style.scss";
import Banner from "../../components/Banner/index.jsx";
import Collapse from "../../components/Collapse";

function About() {

    return (

        <section className="about">

            <Banner />

            <article className="collapse_group">
                <Collapse title="Fiabilité"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id est ultrices, laoreet urna consequat, finibus turpis. Pellentesque cursus congue mi id iaculis. Pellentesque id felis gravida, varius elit luctus, volutpat nisl. Ut ut faucibus dolor, ac euismod urna. Curabitur ornare blandit lorem, at maximus ex commodo sed. " />
                <Collapse title="Respect"
                    text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <Collapse title="Service"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id est ultrices, laoreet urna consequat, finibus turpis. Pellentesque cursus congue mi id iaculis. Pellentesque id felis gravida, varius elit luctus, volutpat nisl. Ut ut faucibus dolor, ac euismod urna. Curabitur ornare blandit lorem, at maximus ex commodo sed." />
                <Collapse title="Sécurité"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id est ultrices, laoreet urna consequat, finibus turpis. Pellentesque cursus congue mi id iaculis. Pellentesque id felis gravida, varius elit luctus, volutpat nisl. Ut ut faucibus dolor, ac euismod urna. Curabitur ornare blandit lorem, at maximus ex commodo sed." />

            </article>

        </section>
    )
}

export default About;