import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  // use ref hook
  const passwordRef = useRef(null)


  const passwordGen = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numAllowed) {
      str += '0123456789'
    }
    if (charAllowed) {
      str += "!#$%&'()*+,-./:;<=>?@[\]^_{|}~'"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  const passwordCopy = useCallback(() => {
    passwordRef.current?.select()

    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGen()
  }, [length, numAllowed, charAllowed, passwordGen])




  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-8 py-8 my-8 text-violet-400 bg-gray-800'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            ref={passwordRef}
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            type="text" />

          <button
            onClick={passwordCopy}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>

        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>

            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}

            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id='numberInput'
              onChange={() => {
                setNumAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>

      </div>

    </>
  )
}

export default App
