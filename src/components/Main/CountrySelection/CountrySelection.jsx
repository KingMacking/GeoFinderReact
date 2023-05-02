import { useRef, useState } from "react"
import Select from 'react-select'
import { clsx } from 'clsx';

const CountrySelection = ({setGuesses, countriesData, guesses, countryToGuess, setGameStatus, gameStatus, currentGuess, setCurrentGuess}) => {
    const inputReference = useRef(null)

    const options = countriesData.map(country => country = {
        label: country.name,
        value: JSON.stringify(country)
    })

    const onChange = (e) => {
        setCurrentGuess(e.value.name)

        const value = JSON.parse(e.value)
        
        if ( value.name === countryToGuess.name){
            setGuesses([...guesses, value])
            setGameStatus("win")
            setCurrentGuess(null)
        } else {
            setGuesses([...guesses, value])
            
            if(guesses.length + 1 === 6){
                setGameStatus("lose")
                setCurrentGuess(null)
            }
        }
        inputReference.current.isFocused(true)
    }


    return (
        <div className="flex justify-center w-full ">
            <Select
                value={currentGuess}
                ref={inputReference}
                autoFocus={true}
                options={options} 
                closeMenuOnSelect={true}
                unstyled 
                isSearchable={true}
                isDisabled={gameStatus !== null ? true : false}
                onChange={onChange}
                placeholder={guesses.length > 0 ? "Selecciona un país..." : "Elige el país de inicio"} 
                classNames={{
                    control: ({isFocused, isDisabled}) => 
                    clsx(
                        'w-[300px] md:w-96 px-2 py-3 border rounded-lg hover:cursor-pointer', 
                        isFocused ? 'border-primary' : 'border-black dark:border-white',
                        isDisabled && 'opacity-60',
                    ),
                    menu: () => 'dark:bg-black bg-white border rounded-lg mt-2 px-2 py-2',
                    menuList: () => 'scrollbar-thin scrollbar-thumb-primary scrollbar-thumb-rounded-sm scrollbar-track-greyDark scrollbar-track-rounded-sm',
                    option: ({isFocused}) => 
                        clsx(
                            'py-1 px-2 rounded border',
                            isFocused ? 'border-primary' : 'border-transparent',
                        )
                }}
            />
        </div>
    )
}
export default CountrySelection