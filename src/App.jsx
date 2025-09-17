import { DatePicker } from 'antd';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from 'react';
import Body from './Components/body/Body';

function App() {

  // const [name, setName] = useState('')

  // const handleChange = (e) => {
  //   setName(e.target.value)
  // }

  return (
    <main>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path='/' element={<Body />} />
      </Routes>
    </main>
    // <>
    //   <input type="text" name='name' onChange={handleChange} />
    //   {name}
    // </>
  )
}

export default App
