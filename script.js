window.promises = [];


let prom1 = new Promise((resolve)=>{
	setTimeout(()=>{
		resolve("resolved in 3s");
	},3000);
});

let prom2 = new Promise((resolve)=>{
	setTimeout(()=>{
		resolve("resolved in 5s");
	},5000);
});

let prom3 = new Promise((resolve)=>{
	setTimeout(()=>{
		resolve("resolved in 1s");
	},1000);
});

let prom4 = new Promise((resolve)=>{
	setTimeout(()=>{
		resolve("resolved in 2s");
	},2000);
});

let prom5 = new Promise((resolve)=>{
	setTimeout(()=>{
		resolve("resolved in 4s");
	},4000);
});

promises=[prom1,prom2,prom3,prom4,prom5];
Promise.any(promises).
	then((result)=>{
		 const outputDiv = document.getElementById("output");
        outputDiv.textContent = result;
	})

// Do not change the code above this
// add your promises to the array `promises`
