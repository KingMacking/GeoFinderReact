import { Icon } from "@iconify/react"
import Modal from "../Modal/Modal"

const HowToPlay = ({showHelp, setShowHelp}) => {
    return (
        <Modal title="Como jugar" show={showHelp} onClose={() => setShowHelp(false)}>
            <h3>GeoFinder</h3>
            <p>GeoFinder es un juego geografico en el cual tendras que adivinar el pais que se te asigna al entrar a la pagina.</p>
            <p>Para esto inicialmente deberas seleccionar un pais de la lista, una vez seleccionado, se te daran una cantidad de pistas con las cuales deberas trabajar para adivinar el pais que te toco</p>
            <ul>
                <li className="">
                    <h4 className="flex items-center gap-2"><Icon icon="bx:world" inline={true} />Continente: </h4>
                    <p>Indica si el continente es el mismo, de ser el mismo el icono se volvera de color verde, de lo contrario se tornara rojo.</p>
                </li>
                <li className="">
                    <h4 className="flex items-center gap-2"><Icon icon="mdi:map-marker-distance" inline={true} />Distancia: </h4>
                    <p>Indica en kilometros la distancia hacia el pais que debes adivinar partiendo desde el que seleccionaste.</p>
                </li>
                <li className="">
                    <h4 className="flex items-center gap-2"><Icon icon="ic:round-arrow-circle-right" />Direccion: </h4>
                    <p>Indica la direccion en la que se encuentra el pais a adivinar partiendo desde el seleccionado.</p>
                </li>
                <li className="">
                    <h4 className="flex items-center gap-2"><Icon icon="bx:world" inline={true} />Area: </h4>
                    <p>Indica si el area area del pais a adivinar es menor o mayor a la del seleccionado, si es mayor la flecha apuntara hacia arriba, de lo contrario lo hara hacia abajo.</p>
                </li>
                <li className="">
                    <h4 className="flex items-center gap-2"><Icon icon="bx:world" inline={true} />Población: </h4>
                    <p>Indica si la poblacion del pais a adivinar es mayor o menor que la del seleccionado, si es mayor el icono mostrara una persona con un "+", de caso contrario lo hara pero con un "-"</p>
                </li>
            </ul>
        </Modal>
    )
}
export default HowToPlay