import React, { useState } from 'react'
import './App.css'
import { Tooltip } from './components/Tooltip/Tooltip'

function App() {
  const [tooltipIsActive, setTooltipIsActive] = useState(false)
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
      <Tooltip
        isActive={tooltipIsActive}
        deactivate={() => setTooltipIsActive(false)}
        trigger={
          <button
            className="App__button"
            onClick={(e) => {
              setTooltipIsActive(!tooltipIsActive)
            }}
          >
            Show tooltip
          </button>
        }
        content={'hello'}
      />

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
