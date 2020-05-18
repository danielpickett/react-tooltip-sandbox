import React, { useState, useRef } from 'react'
import './App.css'
import { Tooltip } from './components/Tooltip/Tooltip'
import { Portal } from './components/Portal/Portal'

function App() {
  const [tooltipActive, setTooltipActive] = useState(false)
  return (
    <div className="App" style={{ overflow: 'auto' }}>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
        praesentium quod minus similique atque totam laboriosam nemo rem
        excepturi consectetur? Laudantium impedit delectus tempore officia
        consequatur maxime animi molestiae odio iste libero, a fugiat
        perferendis minus necessitatibus vero, temporibus nulla quibusdam
        voluptate tempora nostrum recusandae, cum repudiandae dolor error. Iure
        quis blanditiis iste eaque maxime deserunt harum cupiditate ipsum
        laborum quasi, odit eligendi reprehenderit magni debitis sequi sed
        dolorum? Sapiente, hic! Consequuntur ad eos exercitationem distinctio,
        rem laborum aliquam animi aspernatur, ratione incidunt dolor
        reprehenderit fugit expedita. Voluptatum, quibusdam quis quisquam
        aliquid in atque deleniti, hic, ab optio laborum tempora?
      </p>
      <button
        className="App__button"
        onClick={(e) => {
          setTooltipActive(!tooltipActive)
        }}
      >
        Show tooltip
      </button>
      {tooltipActive && (
        <Portal>
          <Tooltip>
            <button
              className="App__button"
              onClick={(e) => {
                setTooltipActive(!tooltipActive)
              }}
            >
              Show tooltip
            </button>
          </Tooltip>
        </Portal>
      )}
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
        praesentium quod minus similique atque totam laboriosam nemo rem
        excepturi consectetur? Laudantium impedit delectus tempore officia
        consequatur maxime animi molestiae odio iste libero, a fugiat
        perferendis minus necessitatibus vero, temporibus nulla quibusdam
        voluptate tempora nostrum recusandae, cum repudiandae dolor error. Iure
        quis blanditiis iste eaque maxime deserunt harum cupiditate ipsum
        laborum quasi, odit eligendi reprehenderit magni debitis sequi sed
        dolorum? Sapiente, hic! Consequuntur ad eos exercitationem distinctio,
        rem laborum aliquam animi aspernatur, ratione incidunt dolor
        reprehenderit fugit expedita. Voluptatum, quibusdam quis quisquam
        aliquid in atque deleniti, hic, ab optio laborum tempora?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
        praesentium quod minus similique atque totam laboriosam nemo rem
        excepturi consectetur? Laudantium impedit delectus tempore officia
        consequatur maxime animi molestiae odio iste libero, a fugiat
        perferendis minus necessitatibus vero, temporibus nulla quibusdam
        voluptate tempora nostrum recusandae, cum repudiandae dolor error. Iure
        quis blanditiis iste eaque maxime deserunt harum cupiditate ipsum
        laborum quasi, odit eligendi reprehenderit magni debitis sequi sed
        dolorum? Sapiente, hic! Consequuntur ad eos exercitationem distinctio,
        rem laborum aliquam animi aspernatur, ratione incidunt dolor
        reprehenderit fugit expedita. Voluptatum, quibusdam quis quisquam
        aliquid in atque deleniti, hic, ab optio laborum tempora?
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
        praesentium quod minus similique atque totam laboriosam nemo rem
        excepturi consectetur? Laudantium impedit delectus tempore officia
        consequatur maxime animi molestiae odio iste libero, a fugiat
        perferendis minus necessitatibus vero, temporibus nulla quibusdam
        voluptate tempora nostrum recusandae, cum repudiandae dolor error. Iure
        quis blanditiis iste eaque maxime deserunt harum cupiditate ipsum
        laborum quasi, odit eligendi reprehenderit magni debitis sequi sed
        dolorum? Sapiente, hic! Consequuntur ad eos exercitationem distinctio,
        rem laborum aliquam animi aspernatur, ratione incidunt dolor
        reprehenderit fugit expedita. Voluptatum, quibusdam quis quisquam
        aliquid in atque deleniti, hic, ab optio laborum tempora?
      </p>
    </div>
  )
}

export default App
