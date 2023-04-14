import { useState } from "react"
import Select from 'react-select'
import { clsx } from 'clsx';

const CountrySelection = ({setGuesses, countriesData, guesses, countryToGuess, setGameStatus, gameStatus, currentGuess, setCurrentGuess}) => {
    
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
    }

    return (
        <div className="flex justify-center w-full">
            <Select 
                value={currentGuess}
                autoFocus={true}
                options={options} 
                closeMenuOnSelect={true} 
                unstyled 
                isSearchable={true}
                disabled={gameStatus !== null ? true : false}
                onChange={onChange}
                placeholder="Selecciona un país..."
                classNames={{
                    control: ({isFocused}) => 
                    clsx(
                        'w-[300px] md:w-96 px-2 py-3 border rounded-lg', 
                        isFocused ? 'border-primary' : 'border-black dark:border-white',
                    ),
                    menu: () => 'dark:bg-black bg-white border rounded-lg mt-2 px-2 py-2',
                    option: ({isFocused}) => 
                        clsx(
                            'py-1 px-2 rounded',
                            isFocused && 'bg-primary'
                        )
                }}
            />
        </div>
    )
}
export default CountrySelection