export const template = document.createElement('template')

template.innerHTML = `
<div id='helloApplicationContainer'> 

<nickname-form> </nickname-form>

<button id='returnButton' class='hidden'>Go again</button>

</div>

<style>
.hidden {
    display: none;
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
</style>
`
