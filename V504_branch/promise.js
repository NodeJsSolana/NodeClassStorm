
// var promise = new Promise((resolve, rejects) => {
//     resolve(200);
// });


// promise.then(data => {console.log(data)})

function showTicket(t) {
    console.log(t);
    }
    var ShowTicketA = new Promise((resolve,reject)=>{
    setTimeout(()=>{
   
    resolve('ticket');
    },3000);
    });
    var show = async ()=>{
    let popcorn = await Promise.resolve('popcorn');
    let coke = await Promise.resolve('coke');
   
    Promise.all([popcorn,coke]).then(value=>console.log(value));
    return ShowTicketA;
    };
   
    showTicket(1);
    showTicket(2);
    show().then(t=>console.log(t));
    showTicket(4);
    showTicket(5);