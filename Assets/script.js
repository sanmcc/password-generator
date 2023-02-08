const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumericalValueElement = document.getElementById('includeNumericalValue')
const includeSpecialCharactersElement = document.getElementById('includeSpecialCharacters')
const form = document.getElementById('passwordGenerateForm')
const passwordDisplay = document.getElementById('passwordDisplay')

const uppercase = ["A","B","C","D","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowercase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numericalValue=["0", "1", "2","3","4","5","6","7","8","9"]
const specialCharacters=["~","!","@","#","$","%","^","&","*","(",")"]

characterAmountRange.addEventListener('input', syncCharacterAmount)
characterAmountNumber.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumericalValue = includeNumericalValueElement.checked
  const includeSpecialCharacters = includeSpecialCharactersElement.checked
  const password = generatePassword(characterAmount, includeUppercase, includeNumericalValue, includeSpecialCharacters)
  passwordDisplay.innerText =  password
  
})
 
function generatePassword(characterAmount, includeUppercase, 
includeNumericalValue, includeSpecialCharacters) {
  let charCodes = lowercase
  if (includeUppercase) 
    charCodes = charCodes.concat(uppercase)
  if (includeSpecialCharacters) 
    charCodes = charCodes.concat(specialCharacters)
  if (includeNumericalValue) 
    charCodes = charCodes.concat(numericalValue)
  
  let passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(characterCode)
  }
  return passwordCharacters.join('')
}


function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountRange.value = value
  characterAmountNumber.value = value
}