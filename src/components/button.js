import React from 'react'

export default function button() {

    const [myStyle, setmyStyle] = useState({
        color:'black',
        backgroundColor:'white'
        
    })
    const [btntext, setBtnText] = useState("Enable dark Mode")

    const toggleStyle = ()=>{
        if(myStyle.color === 'black'){
            setmyStyle({
                color:'white',
                backgroundColor:'black',
                border: '1px solid white'
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setmyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtnText("Enable dark Mode")       
        }
    }
  return (
    <div>
      <div className="container my-3">
      <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
      </div>
    </div>
  )
}
