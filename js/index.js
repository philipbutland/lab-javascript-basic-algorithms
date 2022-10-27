// Iteration 1: Names and Input

let hacker1 = "Driver-Name";
let hacker2 = "Navigator-Name";
console.log("The driver's name is ", hacker1);
console.log("The navigator's name is ", hacker2);

console.log("\n");

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has",
    hacker1.length,
    "characters."
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    "It seems that the navigator has the longest name, it has",
    hacker2.length,
    "characters."
  );
} else {
  console.log(
    "Wow, you both have equally long names,",
    hacker1.length,
    "characters!"
  );
}

console.log("\n");

// Iteration 3: Loops

for (i of hacker1) {
  console.log(i.toUpperCase());
}

console.log("\n");

for (let j = hacker1.length - 1; j >= 0; j--) {
  console.log(hacker1[j]);
}

console.log("\n");

if (hacker1 < hacker2) {
  console.log("- The driver's name goes first.");
} else if (hacker2 < hacker1) {
  console.log("- Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

console.log("\n");

// Bonus 1

Lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula feugiat lacus a aliquet. Sed vitae libero consequat, vehicula nibh in, imperdiet augue. Vestibulum commodo, sem eu elementum dignissim, libero nibh rhoncus leo, vitae dignissim orci libero id sem. Curabitur nec malesuada ante, eget porta purus. Maecenas et blandit ipsum. Aenean congue, nisl eget lacinia suscipit, arcu massa eleifend neque, in feugiat urna neque eget sapien. Sed ex sem, consequat vitae ullamcorper vel, facilisis at ex. Proin blandit ex tellus, vel iaculis nunc accumsan sed. Nulla id leo urna. Donec consequat risus eu quam viverra, id lacinia enim posuere. Sed ipsum turpis, malesuada et cursus in, rhoncus id lectus. Vivamus ut neque eu elit laoreet molestie sit amet vel leo. \nliquam erat volutpat. Phasellus faucibus, risus id malesuada tempor, nibh nibh interdum elit, ut feugiat nulla sapien ut urna. Nullam pellentesque, nisl et suscipit rhoncus, nisl nisl eleifend velit, eu rutrum odio turpis nec est. Aliquam ac egestas leo, mattis rhoncus eros. Nullam id nibh mattis, interdum erat posuere, mollis felis. Morbi arcu sem, pulvinar eu sem et, pellentesque laoreet arcu. Nullam tempus rutrum scelerisque. Fusce a egestas ligula. Cras metus sem, blandit ac risus ut, lacinia condimentum diam. Etiam a nisl sollicitudin, ornare sem malesuada, bibendum justo. Fusce semper, ante a porttitor feugiat, turpis nibh lobortis elit, ac placerat augue mi sed sem. Aliquam erat volutpat. Morbi aliquet purus nec elit fringilla interdum. Curabitur non dignissim erat.\nNulla malesuada nec neque in fringilla. Integer hendrerit luctus arcu quis efficitur. Vivamus orci sem, sollicitudin sagittis augue eget, scelerisque blandit ex. Suspendisse et eros porttitor, volutpat lectus vitae, semper ex. Vivamus nisl velit, mollis sit amet enim vel, porttitor tincidunt metus. Quisque semper, libero id iaculis consectetur, nisl tellus ultrices augue, et convallis quam nisl vel dui. Praesent sit amet felis sit amet massa pulvinar cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus imperdiet metus ac finibus bibendum. Cras condimentum lacinia risus, sit amet laoreet ligula vehicula volutpat. Nam efficitur, ex in ultrices tristique, magna risus laoreet ante, eu eleifend tellus risus in sem. Curabitur ac nunc sollicitudin, pharetra odio at, condimentum nisi. In at tortor nec ex tempor egestas. Nam odio elit, molestie ut leo vitae, luctus condimentum velit. Mauris pharetra diam felis, a iaculis libero imperdiet eget.";

console.log("The string has", Lorem.length, "characters");

n = 0;
for (let k = 0; k <= Lorem.length; k++) {
  if (Lorem[k] == " " && Lorem[k + 1] == "e" && Lorem[k + 2] == "t") {
    n++;
  }
}
console.log("The word 'et' appears", n, "times");

console.log("\n");

// Bonus 2

console(phraseToCheck("kook"));
console(phraseToCheck("kool"));

function phraseToCheck(myPhrase)

let halfway=(langth+1)/2

phraseToCheck=true;
for (let i=0; i<=halfway; i++){
    if (myPhrase[i] += myPhrase[myPhrase.length-1]){
        phraseToCheck=false;
    }
}
