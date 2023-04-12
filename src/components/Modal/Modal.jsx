const Modal = ({show, onClose, title, children}) => {
    return (
        <>
            {
                show &&
                <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-black bg-opacity-80" onClick={onClose}>
                    <div className="w-[300px] md:w-[600px] bg-white dark:bg-black rounded-lg shadow-lg max-h-[600px] lg:max-h-fit md:py-4 md:px-8 px-3 py-2" onClick={e => e.stopPropagation()}>
                        <div className="pb-2 md:pb-4">
                            <h3 className="text-2xl font-semibold text-center md:text-4xl dark:text-white font-title">{title.toUpperCase()}</h3>
                        </div>
                        <div className="max-h-[450px] overflow-auto border-y border-primary scrollbar-thin scrollbar-thumb-primary">
                            {children}
                        </div>
                        <div className="flex items-center justify-end gap-2 pt-2 md:pt-4">
                            <button className="px-4 py-2 text-xl text-white transition-all ease-in-out font-text bg-primary rounded-xl hover:bg-error hover:scale-105" onClick={onClose}>Cerrar</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default Modal