// // let firstName = "Kaumil";
// // console.log(firstName);


// // //let firstName = "patni";
// // // we can not declare let variable two times 


// // // only we can change the value of let variable

// // firstName  = "patni";
// // console.log(firstName);

// var firstName = document.querySelector("#fname");
// // console.log(firstName);
// var id = document.querySelector(".id");
// function myfun(fname)
// {
//     let exp = firstName.value;
//      id.innerText= exp;
// };




let global_varibal = "Factorial of ";
function fun()
{
    let local_varibal = 5;
    function fact(num)
    {
        if(num==0)
        {
            return 1;
        }
        return num * fact(num-1);
    }
    console.log(global_varibal + fact(local_varibal));
}

fun();