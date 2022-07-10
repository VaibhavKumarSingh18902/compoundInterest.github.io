const sub = document.querySelector("#ciinput");
const inputprinciple = document.querySelector("#p");
const inputinterestrate = document.querySelector("#i");
const inputn = document.querySelector("#n");
const inputt = document.querySelector("#t");
document.getElementById('my-select').addEventListener('change', function () {
    if (this.value == 1) 
    {
        sub.addEventListener("submit", function (e) {
            e.preventDefault();
            const valueprinciple = inputprinciple.value;
            const valueinterestrate = inputinterestrate.value / 100;
            const valuen = inputn.value;
            const valuet = inputt.value;
            const finalvalue = (Math.pow((valueinterestrate / valuen) + 1, valuen * valuet)) * valueprinciple;
            console.log(finalvalue);
            document.querySelector("#ans").innerHTML=`The value of your invested money after ${valuet} years will be <b>${finalvalue}</b> and your investment has grown by <b>${((finalvalue-valueprinciple)/valueprinciple)*100}</b> %`;

        });
    }
    else if (this.value == 2) 
    {
        sub.addEventListener("submit", function (e) {
            e.preventDefault();
            const valueprinciple = inputprinciple.value;
            const valueinterestrate = inputinterestrate.value / 100;
            const valuen = inputn.value;
            const valuet = inputt.value;
            const finalvalue = valueprinciple*(1+valueinterestrate*valuet);
            console.log(finalvalue);
            document.querySelector("#ans").innerHTML=`The value of your invested money after ${valuet} years will be <b>${finalvalue}</b> and your investment has grown by <b>${((finalvalue-valueprinciple)/valueprinciple)*100}</b> %`;
            

        });
    }

});
sub.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Please select calculator type");
    

});




