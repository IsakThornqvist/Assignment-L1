export const template = document.createElement('template')
template.innerHTML = `
<div id='nicknameContainer'>
  <div id='glowForTitle'></div>
  <h1 id='mainTitle'>Assignment-L1</h1>
  <p id='welcomeMessage'>
    Hello! Input your name below!
  </p>
  <form id='nicknameForm'>
    <input id='nicknameInput' placeholder='Input your name'>
    <div id='submitButtonContainer'>
      <button id='submitButton' type='submit'>
        Submit
      </button>
    </div>
    <div id='returnContainer'>
    <button id='returnButton'> Go Again </button>
    </div>
</form>
</div>
<style>

.hidden {
display: none;
}

#nicknameContainer {
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

@keyframes pulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
}

#mainTitle {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 10px 0;
  color: #00ffff;
  text-shadow: 0 0 20px #00ffff;
  letter-spacing: 0.2em;
  animation: titleGlow 3s ease-in-out infinite alternate;
}

@keyframes titleGlow {
  0% { text-shadow: 0 0 20px #00ffff; }
  100% { text-shadow: 0 0 30px #00ffff, 0 0 40px #00ffff; }
}

#welcomeMessage {
  font-size: 1.2rem;
  margin-bottom: 30px;
  text-align: center;
  color:  #00ffff;
  text-shadow: 0 0 10px #745fc7;
  font-weight: 400;
}

#nicknameForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

#nicknameInput {
  padding: 15px 20px;
  border-radius: 12px;
  border: 2px solid white;
  outline: none;
  background: rgba(17, 17, 17, 0.9);
  color: #fff;
  font-size: 1.1rem;
  font-family: 'Orbitron', monospace;
  width: 280px;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

#nicknameInput::placeholder {
  color: white;
  font-family: 'Orbitron', monospace;
}

#nicknameInput:focus {
  border-color:#00ffff;
  box-shadow: 0 0 20px#00ffff;
  background: rgba(17, 17, 34, 0.9);
  transform: translateY(-2px);
}

#submitButton {
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
  display:none;
}

#submitButton::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent,  #00ffff, transparent);
  transition: left 0.6s;
}

#submitButton:hover {
  transform: scale(1.05) translateY(-2px);
  box-shadow: 0 10px 25px  #00ffff;
}

#submitButton:hover::before {
  left: 100%;
}

#submitButton:active {
  transform: scale(0.98);
}

@media (max-width: 480px) {
  #mainTitle {
    font-size: 2rem;
  }
  
  #nicknameInput {
    width: 250px;
    font-size: 1rem;
  }
  
  #glowForTitle {
    width: 200px;
    height: 200px;
  }
}
</style>
`
