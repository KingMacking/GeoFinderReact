import { Icon } from "@iconify/react"
import Modal from "../Modal/Modal"

const HowToPlay = ({showHelp, setShowHelp}) => {
    return (
        <Modal title="Como jugar" show={showHelp} onClose={() => setShowHelp(false)}>
            <section className="px-3 py-2">
                <header className="mb-6">
                    <h3 className="text-lg font-semibold md:text-2xl w-fit font-title">GeoFinder</h3>
                    <p className="my-2 text-sm md:text-base font-text">GeoFinder es un juego geográfico en el cual tendrás que adivinar el país que se te asigna al entrar en la página.</p>
                    <p className="my-2 text-sm md:text-base font-text">Para esto, inicialmente deberás seleccionar un país de la lista. Una vez seleccionado, se te darán una cantidad de pistas con las cuales deberás trabajar para adivinar el país que te tocó.</p>
                </header>
                <ul>
                    <h3 className="text-lg font-semibold md:text-2xl w-fit font-title">Pistas</h3>
                    <li className="my-4">
                        <h4 className="flex items-center gap-2 mb-1 underline md:text-lg underline-offset-2 font-title"><Icon className="text-2xl" icon="bx:world" inline={true} />Continente: </h4>
                        <p className="text-sm md:text-base font-text">Indica si el continente es el mismo. De ser el mismo, el icono se volverá de color verde. De lo contrario, se tornará rojo.</p>
                    </li>
                    <li className="my-4">
                        <h4 className="flex items-center gap-2 mb-1 underline md:text-lg underline-offset-2 font-title"><Icon className="text-2xl" icon="mdi:map-marker-distance" inline={true} />Distancia: </h4>
                        <p className="text-sm md:text-base font-text">Indica en kilómetros la distancia hacia el país que debes adivinar, partiendo desde el que seleccionaste.</p>
                    </li>
                    <li className="my-4">
                        <h4 className="flex items-center gap-2 mb-1 underline md:text-lg underline-offset-2"><Icon className="text-2xl" icon="ic:round-arrow-circle-right" />Dirección: </h4>
                        <p className="text-sm md:text-base font-text">Indica la dirección en la que se encuentra el país a adivinar, partiendo desde el seleccionado.</p>
                    </li>
                    <li className="my-4">
                        <h4 className="flex items-center gap-2 mb-1 underline md:text-lg underline-offset-2 font-title"><Icon className="text-2xl" icon="mdi:surface-area" inline={true} />Area: </h4>
                        <p className="text-sm md:text-base font-text">Indica si el área del país a adivinar es menor o mayor que la del seleccionado. Si es mayor, la flecha apuntará hacia arriba; de lo contrario, lo hará hacia abajo.</p>
                    </li>
                    <li className="my-4">
                        <h4 className="flex items-center gap-2 mb-1 underline md:text-lg underline-offset-2 font-title"><Icon className="text-2xl" icon="material-symbols:person-rounded" />Población: </h4>
                        <p className="text-sm md:text-base font-text">Indica si la población del país a adivinar es mayor o menor que la del seleccionado. Si es mayor, el icono mostrará una persona con un "+"; de lo contrario, lo hará con un "-".</p>
                    </li>
                </ul>
            </section>
        </Modal>
    )
}
export default HowToPlay