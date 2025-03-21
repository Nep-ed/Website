const content = {
    intro: `
        <h2>Introduction</h2>
        <p>Embedded systems are specialized computing systems that perform dedicated functions.</p>
        <img src="/images/members/IMG_7689.png" alt="Embedded System Diagram" width="600">         <br /> 
        <iframe width="600" height="350" 
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
            title="YouTube Video Player" 
            frameborder="0" allowfullscreen>
        </iframe>  <br /> 
                <iframe width="600" height="350" 
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
            title="YouTube Video Player" 
            frameborder="0" allowfullscreen>
        </iframe>  <br /> 
                <iframe width="600" height="350" 
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
            title="YouTube Video Player" 
            frameborder="0" allowfullscreen>
        </iframe>  <br /> 
                <iframe width="600" height="350" 
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
            title="YouTube Video Player" 
            frameborder="0" allowfullscreen>
        </iframe>
    `,
    microcontrollers: `
        <h2>Understanding Arduino</h2>
        <p>Microcontrollers are the heart of embedded systems, integrating a CPU, memory, and peripherals.</p>
        <img src="images/microcontroller.jpg" alt="Microcontroller Diagram" width="600">
        <iframe width="600" height="350" 
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID_2" 
            title="YouTube Video Player" 
            frameborder="0" allowfullscreen>
        </iframe>
    `,
    rtos: `
        <h2>Getting Started with Arduino</h2>
        <p>Real-Time Operating Systems (RTOS) help manage tasks efficiently in an embedded environment.</p>
        <img src="images/rtos.jpg" alt="RTOS Diagram" width="600">
        <iframe width="600" height="350" 
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID_3" 
            title="YouTube Video Player" 
            frameborder="0" allowfullscreen>
        </iframe>
    `,
    communication: `
        <h2>Arduino Hardware</h2>
        <p>Protocols like I2C, SPI, and UART enable devices to communicate efficiently.</p>
        <img src="images/communication.jpg" alt="Communication Protocols" width="600">
        <iframe width="600" height="350" 
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID_4" 
            title="YouTube Video Player" 
            frameborder="0" allowfullscreen>
        </iframe>
    `,
    power: `
        <h2>Build your first Arduino Project</h2>
        <p>Efficient power usage is crucial in embedded design to optimize battery life.</p>
        <img src="images/power.jpg" alt="Power Management" width="600">
        <iframe width="600" height="350" 
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID_5" 
            title="YouTube Video Player" 
            frameborder="0" allowfullscreen>
        </iframe>
    `
};

// Function to load content dynamically
function loadContent(topic) {
    document.getElementById("content").innerHTML = content[topic];
}
