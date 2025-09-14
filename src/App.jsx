import { DatePicker } from 'antd';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/body/mainpage';
// import { useState } from 'react';
function App() {

  // const [name, setName] = useState('')

  // const handleChange = (e) => {
  //   setName(e.target.value)
  // }

  return (
    <main>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </main>
    // <>
    //   <input type="text" name='name' onChange={handleChange} />
    //   {name}
    // </>
  )
}

export default App
