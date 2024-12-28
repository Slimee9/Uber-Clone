import React from 'react'

const LocationSearchPanel = (props) => {

  console.log(props)
  // data array 
  const locations = [
    "Shravani Heights , Near Kapoor's cafe, Nashik",
    "Mumbai Naka, Nashik",
    "Main St, Springfield",
    "Elm St, Shelbyville",
    "Oak St, Capital City"
  ]


  return (
    <div className=''>
      {/* Sample Data */}
      {
        locations.map((elem,index)=>{
          return <div key={index} onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
            
          }} className='flex gap-4 border-2 border-gray-50 active:border-black p-3 rounded-xl items-center justify-start'>
          <h2 className='bg-[#eee] h-8 w-12 rounded-full flex items-center justify-center'>
          <i className='ri-map-pin-fill'></i>
          </h2>
        <h4 className='font-medium'>{elem}</h4>
      </div>
        })
      }
      
      
      
    </div>
  )
}

export default LocationSearchPanel