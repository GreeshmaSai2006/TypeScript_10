let g: any = 45;
g = "Hi"; // OK
console.log(g);

let data: unknown = 32;
if (typeof data === "number") {
    // Safe to use as a number here
    let result = data + 10;
    console.log(result)
}
function logNotification(message:string):void{
    console.log("ALERT:"+message);

}
logNotification("Setup Completed");