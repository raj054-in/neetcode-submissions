class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
            let stack =[]
        const operators= new Set (['+', '-', '*','/'])
        for(const element of tokens){
            if(operators.has(element)){
                const num1=stack.pop()
                
                const num2=stack.pop()
              
                let result
                switch(element){
                    case "+":result=num2 +num1;break;
                    case "-":result=num2-num1;break;
                    case "*":result=num2*num1;break;
                    case "/":result=Math.trunc(num2/num1);break
                }
              
                stack.push(result)
            }
            else{
                stack.push(Number(element))
            }
        }
        return stack.pop()
    }
}
