//clouser

function outer() {
   const outerVal = "외부변수야";

   function inner(){
      console.log(outerVal);
   }

   return inner;
}

const innerExecute = outer();
innerExecute();
