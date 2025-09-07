export const template = document.createElement('template')

template.innerHTML = `
<div id='helloApplicationContainer'> 

<nickname-form> </nickname-form>

<div id='resultContainer'>
    <div id='glowForTitle'></div>
    <h1 id='resultMessage'></h1>
    <h1 id='nameBackwards'></h1>
    <button id='returnButton' class='hidden'>Input another name</button>
</div>
</div>

<style>
.hidden {
    display: none;
}

#resultContainer {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #000;
  color: #fff;
  font-family: 'Orbitron', monospace;
  overflow: hidden;
}

#returnButton {
  padding: 15px 30px;
  border: none;
  border-radius: 25px;
  background: linear-gradient(45deg, white,#00ffff);
  color: #000;
  font-weight: bold;
  font-size: 1.1rem;
  font-family: 'Orbitron', monospace;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

#returnButton::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent,  #00ffff, transparent);
  transition: left 0.6s;
}

#returnButton:hover {
  transform: scale(1.05) translateY(-2px);
  box-shadow: 0 10px 25px  #00ffff;
}

#nameBackwards {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 10px 0;
  color:rgb(220, 255, 255);
  text-shadow: 0 0 20px #00ffff;
  letter-spacing: 0.2em;
  animation: titleGlow 3s ease-in-out infinite alternate;
}

#resultMessage {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 10px 0;
  color: #00ffff;
  text-shadow: 0 0 20px #00ffff;
  letter-spacing: 0.2em;
  animation: titleGlow 3s ease-in-out infinite alternate;
}

#glowForTitle {
  position: absolute;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(116, 95, 199, 0.3), transparent);
  border-radius: 50%;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: pulse 4s ease-in-out infinite;
  z-index: -1;
}

@keyframes titleGlow {
  0% { text-shadow: 0 0 20px #00ffff; }
  100% { text-shadow: 0 0 30px #00ffff, 0 0 40px #00ffff; }
}

@keyframes pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
}

  #glowForTitle {
    width: 200px;
    height: 200px;
  }
</style>
`
