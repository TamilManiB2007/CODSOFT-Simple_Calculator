const display = document.querySelector(".display");

        const buttons = document.querySelectorAll("button");

        buttons.forEach(button => {
            button.addEventListener("click",() => {
                processInput(button.innerText);
            });
        });

        document.addEventListener("keydown",(e) => {
            const key = e.key;

            if((key >= 0 && key <= 9) || "+-/.%".includes(key)){
                processInput(key);
            }else if (key === "Enter" || key === "="){
                processInput("=");
            }else if(key === "Backspace"){
                processInput("DEL");
            }else if(key === "Escape"){
                processInput("C");
            }
        });


        function processInput(input){
            if(input === "C"){
                display.innerText="";
            }else if(input === "DEL"){
                display.innerText = display.innerText.slice(0,-1);
            }else if(input === "="){
                try{
                    display.innerText = eval(display.innerText);
                }catch{
                    display.innerText = "Error";
                }
            }else{
                display.innerText += input;
            }
        }