
document.addEventListener('DOMContentLoaded', function() {
   
    let buttonsub = document.getElementById('submit');
    if (buttonsub) {
        buttonsub.addEventListener('click', userForm);
    }
});


function userForm() {
    
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let province = document.getElementById('province').value;
    let membership = document.querySelector('input[name="membership"]:checked').value;

 
    document.getElementById('output').innerHTML = `
        <p><strong>Full Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Province:</strong> ${province}</p>
        <p><strong>Membership Type:</strong> ${membership}</p>
    `;
}





let buttoncalc = document.getElementById('calculate');


buttoncalc.addEventListener('click', myExcelFuns);

function myExcelFuns() {
    
    let numberString = document.getElementById('numbers').value;

    if (numberString.trim() === '') {
        alert('EPlease enter numbers separated by spaces');
    } else {
        
        let numberArray = numberString.trim().split(' ');
        let numericArray = numberArray.map(Number);
        let result;
        if (document.getElementById('AutoSum').checked) {
         
            result = numericArray.reduce((acc, curr) => acc + curr, 0);
        } else if (document.getElementById('Average').checked) {
           
            result = numericArray.reduce((acc, curr) => acc + curr, 0) / numericArray.length;
        } else if (document.getElementById('Max').checked) {
            
            result = Math.max(...numericArray);
        } else if (document.getElementById('Min').checked) {
            
            result = Math.min(...numericArray);
        }

        
        document.getElementById('result').value = result;
    }
}


document.addEventListener('DOMContentLoaded', function() {
    let blueBtn = document.getElementById("blue");
    let redBtn = document.getElementById("red");
    let container = document.getElementById("container"); 

    
    blueBtn.addEventListener("click", function() {
        
        document.body.style.backgroundColor = "#f0f8ff"; 
        document.body.style.color = "#333"; 
        document.querySelector("header").style.backgroundColor = "#0073e6";        
        if (container) {
            container.className = "blue-theme"; 
        }
    });
    
    redBtn.addEventListener("click", function() {
        document.body.style.backgroundColor = "#ff6347"; 
        document.body.style.color = "#fff"; 
        document.querySelector("header").style.backgroundColor = "#cc0000"; 
        if (container) {
            container.className = "red-theme"; 
        }
    });
});

