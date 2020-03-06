import React, {useState} from 'react'
import '../Styles/Projects.scss'


function Projects() {

const [activeTab, setActiveTab] = useState('tab1')

// .classNameName = activeTab

// setActiveTab()


// click on a link
// set classNameName of

    return (

        <section className="tab-wrap">
            {/* <section> */}
            <input type="radio" id="tab1" name="tabGroup1" className="tab" checked />
            <label for="tab1">Short</label>
        
            <input type="radio" id="tab2" name="tabGroup1" className="tab" />
            <label for="tab2">Medium</label>
        
            <input type="radio" id="tab3" name="tabGroup1" className="tab" />
            <label for="tab3">Long</label>
            {/* </section> */}
            {/* <section className="tab-content"> */}
            <div className="tab__content">
              <h3>Tab1</h3>
              <p>Tab1 Content</p>
            </div>
        
            <div className="tab__content">
              <h3>Tab2</h3>
              <p>Tab 2 Content</p>
            </div>
        
            <div className="tab__content">
              <h3>Tab3</h3>
              <p>Tab 3 Content</p>
            </div>
            {/* </section> */}
        
          </section>

        )
}

export default Projects


