import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Spinner = ({ color }: { color?: string }) => {
    return (
        <AiOutlineLoading3Quarters
            size={24}
            className='animate-spin'
            color= "#e2711d"
        />
    )
}

export default Spinner