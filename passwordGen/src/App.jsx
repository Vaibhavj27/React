import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const[length, setlength]=useState(8);
  const[numAllow, setnumAllow]=useState(false);
  const[charAllow,setcharAllow]=useState(false);
  const[password, setpassword]=useState("");

  const[copy,setCopy]=useState("Copy");
  //ref hook 
  const passRef=useRef(null)

  const passwordGenerator = useCallback(()=>{
       let pass = "";
       let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
       setCopy("copy")
       if(numAllow){
        str+="0123456789";
        }
        if(charAllow){
          str+="~!@#$%^&*()`"
        }

        for (let i = 1; i <=length; i++) {
          let char=Math.floor(Math.random()*str.length+1) 
          pass+= str.charAt(char);
        }

        setpassword(pass)
  }, [length,numAllow,charAllow,setpassword,setCopy])


const copytoClipboard= useCallback(
  ()=>{
    setCopy("copied")
    passRef.current?.select()
    navigator.clipboard.writeText(password)
  },[password]
)


  useEffect(()=>{
    passwordGenerator();
  },[length,charAllow,numAllow,passwordGenerator,setCopy])




  return (
    <>
    <div className="bg-black text-white h-screen w-full p-0 flex justify-center py-52">
       <div className="bg-gray-700 h-fit p-10 rounded-lg shadow-md">
        <h1 className='text-center p-4'> Password Generator</h1>
        <label >Password:</label>
        <input type="text" 
              value={password}
              className='rounded-sm m-2 px-2 text-black outline-none'
              placeholder='password'
              ref={passRef}
              readOnly />
         <button className='bg-blue-400 px-2 rounded-md hover:bg-blue-200' onClick={copytoClipboard} >{copy}</button>

         <div className='flex gap-x-5'>
          <label>Length:{length}</label>
          <input 
          type="range"
          min={8}
          max={20}
          value={length} 
          className='cursor-pointer'
         
          onChange={(e)=>{setlength(e.target.value)}}/>
          </div>
          <div className='flex gap-x-2'>
          <input 
          type="checkbox" 
          defaultChecked={charAllow}
         
          className='cursor-pointer'
          onChange={()=>{
                 setcharAllow((prev =>!prev))}}/>
          <label >Include Special Characters</label>
          
         </div>
         <div className='flex gap-x-2'>
          <input 
          type="checkbox" 
          defaultChecked={numAllow}
          className='cursor-pointer'
          onChange={()=>{
                 setnumAllow((prev =>!prev))}}/>
          <label >Include Numbers</label>
          
         </div>
       </div>
     </div>
    </>
  )
}

export default App
