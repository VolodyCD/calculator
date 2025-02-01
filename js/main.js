const resultElement = document.getElementById('result')
console.log(resultElement.textContent)
const input1 =document.getElementById('input1')
const input2 =document.getElementById('input2')
const submitBtn =document.getElementById('submit')
const plusBtn = document.getElementById('sum')
const minusBtn = document.getElementById('min')

let action = '+'


plusBtn.onclick = function(){
   action = '+'
}
minusBtn.onclick = function(){
   action = '-'
}

function printResult(result){
   if(result<0){
      resultElement.style.color = 'red'
   }else{
      resultElement.style.color = 'green'
   }
   resultElement.textContent = result
}

submitBtn.onclick = function(){

   if(action == '+'){
      const sum = Number(input1.value) + Number(input2.value)
      printResult(sum)
   }else{
      const sum = Number(input1.value) - Number(input2.value)
      printResult(sum)
   }
   
}


