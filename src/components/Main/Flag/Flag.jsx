import { Icon } from '@iconify/react';

const Flag = ({country, showFlag}) => {
    return (
        <div className="w-full px-6 flex items-center justify-center mb-6">
            {
                showFlag ?  <img className="w-fit rounded-xl" src={country.flag} alt={country.flagAlt} />
                    :   <Icon className='my-8 text-9xl w-full' icon="basil:location-question-solid" inline={true} />
            }
        </div>
    )
}
export default Flag