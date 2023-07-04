import { Icon } from "@iconify/react"
import Modal from "../Modal/Modal"

const HowToPlay = ({showHelp, setShowHelp}) => {
    return (
        <Modal title="Como jugar" show={showHelp} onClose={() => setShowHelp(false)}>
            <section className="px-3 py-2">
                <header className="mb-6">
                    <h3 className="text-lg font-semibold md:text-2xl w-fit font-title">GeoFinder</h3>
                    <p className="my-2 text-sm md:text-base font-text">GeoFinder es un juego geográfico en el cual tendrás que adivinar el país oculto.</p>
                    <p className="my-2 text-sm md:text-base font-text">El objetivo del juego es adivinar el país oculto seleccionando entre una lista de países disponibles. Utiliza las pistas proporcionadas, como continente, distancia, dirección, área y población, para identificar correctamente el país oculto antes de agotar los 6 intentos.</p>
                </header>
                <ul className="mb-6 list-disc list-inside">
                    <h3 className="text-lg font-semibold md:text-2xl w-fit font-title">Instrucciones</h3>
                    <li className="my-2 text-sm md:text-base font-text">
                        En la pantalla inicial, se mostrará una lista de países disponibles para elegir, examina la lista y elige un país que creas que podría ser el país oculto.
                    </li>
                    <li className="my-2 text-sm md:text-base font-text">
                        Después de seleccionar un país, aparecerán varias pistas para ayudarte a adivinar el país oculto, las pistas incluirán información sobre el continente, distancia, dirección, área y población del país oculto.
                    </li>
                    <li className="my-2 text-sm md:text-base font-text">
                        Tienes un total de 6 intentos para adivinar correctamente el país oculto.
                    </li>
                    <li className="my-2 text-sm md:text-base font-text">
                        Utiliza las pistas y la lógica para deducir el país correcto antes de llegar al sexto intento, si agotas los 6 intentos, el juego termina y se revelará el país oculto.
                    </li>
                    <li className="my-2 text-sm md:text-base font-text">
                        Si adivinas correctamente el país oculto antes de los 6 intentos, ¡ganarás el juego!. Se mostrará una pantalla de felicitaciones y podrás optar por jugar nuevamente si lo deseas.
                    </li>
                </ul>
                <ul>
                    <h3 className="text-lg font-semibold md:text-2xl w-fit font-title">Pistas</h3>
                    <li className="my-4">
                        <h4 className="flex items-center gap-2 mb-1 underline md:text-lg underline-offset-2 font-title"><Icon className="text-2xl" icon="bx:world" inline={true} />Continente: </h4>
                        <p className="text-sm md:text-base font-text">Se mostrará un icono de un planeta con un fondo de color.</p>
                        <p className="p-2 my-2 text-sm border-2 rounded-md md:text-base font-text border-success">Verde: El país oculto se encuentra en el mismo continente que el seleccionado.</p>
                        <p className="p-2 my-2 text-sm border-2 rounded-md md:text-base font-text border-error">Rojo: El país oculto no se encuentra en el mismo continente que el seleccionado.</p>
                    </li>
                    <li className="my-4">
                        <h4 className="flex items-center gap-2 mb-1 underline md:text-lg underline-offset-2 font-title"><Icon className="text-2xl" icon="mdi:map-marker-distance" inline={true} />Distancia: </h4>
                        <p className="text-sm md:text-base font-text">Se mostrará la distancia en kilómetros entre el país seleccionado y el oculto.</p>
                    </li>
                    <li className="my-4">
                        <h4 className="flex items-center gap-2 mb-1 underline md:text-lg underline-offset-2"><Icon className="text-2xl" icon="ic:round-arrow-circle-right" />Dirección: </h4>
                        <p className="text-sm md:text-base font-text">Se mostrará un icono que indica la dirección en la que se encuentra el país oculto desde el seleccionado.</p>
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