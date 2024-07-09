// let salary = Number(prompt("salary batao!"))

// if (salary) {
//     const screen = document.getElementById("screen");
//     const ShowSalary = document.createElement("h3");
//     ShowSalary.innerText = `your entered salary is ${salary}`;

//     screen.append(ShowSalary)
//     document.getElementById("bonusbtn").style.display ="block";

//     let button = document.getElementById("bonusbtn")
//     button.onclick = () => {
//         salary =salary+5000;
//         ShowSalary.innerText = `your entered salary is ${salary}`;
//     }
//     }

    let securityBox=document.getElementById("dabba")

    securityBox.onmouseover=()=>{
        let pass=prompt("enter the security key to access he password ")
        if(pass='1234')
        {
            alert("you can access the  password now ")
            document.querySelector(".password").computedStyleMap.display="block";

        }
        else{
            alert("abbe chal hutt ")
        }
    }
    
