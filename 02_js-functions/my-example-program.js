import readline from "readline";

// Problem: I want to know how old my pets would be if they were human.
//หมา: ปีแรก = 15, ปีที่สอง = +9, ปีถัดไป = +5 ต่อปี (2 ปีแรกคิดเป็น 24 หลังจากนั้นบวกปีละ 5)
//แมว: ปีแรก = 15, ปีที่สอง = +9, ปีถัดไป = +4 ต่อปี

//Dog
function dogToHuman(dogAge) {
  if (dogAge <= 1) return 15;
  if (dogAge <= 2) return 19;
  return 24 + (dogAge - 2) * 5; //หมาอายุ2ปี=คนอายุ24ปี / -2อายุหมาปีแรก / หลังจากนั้น หมา1ปี * อายุคน5ปี
}
function catToHuman(catAge) {
  if (catAge <= 1) return 15;
  if (catAge <= 2) return 19;
  return 24 + (catAge - 2) * 4; //แมวอายุ2ปี=คนอายุ24ปี / -2อายุแมวปีแรก / หลังจากนั้น แมว1ปี * อายุคน4ปี
}

// stdin = Standard Input = รับข้อมูลจาก keyboard
// stdout = Standard Output = แสดงผลใน terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your pet's age:", function (ageInput) {
  const age = parseFloat(ageInput);

  rl.question("Enter type (Dog / Cat):", function (typeInput) {
    const type = typeInput.trim().toUpperCase();

    //if statement
    if (type === "DOG") {
      const human = dogToHuman(age); // เอาอายุหมาไปคำนวณ → ได้อายุคน
      console.log(`Dog age ${age} = Human age ${Math.round(human)}`);
    } else if (type === "CAT") {
      const human = catToHuman(age); // เอาอายุแมวไปคำนวณ → ได้อายุคน
      console.log(`Cat age ${age} = Human age ${Math.round(human)}`);
    } else {
      console.log("Invalid type! Please enter DOG or CAT");
    }
    rl.close();
  });
});
