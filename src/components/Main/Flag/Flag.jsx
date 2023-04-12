import { Icon } from '@iconify/react';

const Flag = ({country, showFlag}) => {
    return (
        <div className="flex items-center justify-center w-full my-6">
            {
                showFlag ?  <img className="w-full rounded-xl" src={country.flag} alt={country.flagAlt} />
                    :   <Icon className='w-auto my-8 text-8xl' icon="basil:location-question-solid" inline={true} />
            }
        </div>
    )
}
export default Flag