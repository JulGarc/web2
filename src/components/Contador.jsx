import React from 'react'

export const Contador = ({count, setCount}) => {
    const handleIncrementar =()=>{
        setCount(count+1)
    }
    const handleDecrementar =()=>{
        setCount(count-1)
    }
    const handleReset =()=>{
        setCount(0)
    }
  return (
    <div>
  <span className='block py-2 font-medium text-white'>Contador: {count}</span>
  <div className='space-x-2 my-2'>
    <button className='bg-gray-800 hover:bg-gray-700 text-white font-semibold hover:text-gray-800 py-2 px-4 border border-gray-800 hover:border-transparent rounded' onClick={handleIncrementar}>
      Incrementar
    </button>
    <button className='bg-gray-800 hover:bg-gray-700 text-white font-semibold hover:text-gray-800 py-2 px-4 border border-gray-800 hover:border-transparent rounded' onClick={handleDecrementar}>
      Decrementar
    </button>
    <button className='bg-gray-800 hover:bg-gray-700 text-white font-semibold hover:text-gray-800 py-2 px-4 border border-gray-800 hover:border-transparent rounded' onClick={handleReset}>
      Resetear
    </button>
  </div>
</div>

  )
}
