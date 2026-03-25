//Standard Function
//function greet() {} //อันนี้สมบูรณ์ละ แค่เป็นฟังก์ชั่นที่ไม่ได้ประกาศโลจิกอะไรเลย

// () หลังฟังก์ชั่นคือรับพารามิเตอร์ได้ ใส่ตัวแปลรับและคืนค่าได้
function greet(name, role2) {
  // write function logic here จะเขียนlogic กี่ชั้นก็ได้
  //----const message = "Hello World!";----
  const role = "Coder";
  // set return value of this function

  return `Hello, my name is ${name}. I work as ${role} but at night I am a ${role2}.`; //สุดท้ายแล้ว ต้องการให้ฟังก์ชั่นนี้ return ค่าอะไรออกมา
}

// 'function' keyword
// function name
// bracket () syntax
// bracker {} syntax
// 'return' keyword

greet(); //calling this function returns "Hello world!"

console.log(greet("Lin", "Watch Netflix")); //นอกเหนือจากที่ประมวลผลฟังก์ชั่นไป ปริ้นออกมาให้ดูด้วย

//----------------------------
//ไม่มีชื่อฟังก์ชั่น มักใช้ข้างในฟังก์ชั่นที่มีชื่อ คือทำอยู่ในฟังก์ชั่นแล้วจบไม่ได้เอาออกไปใช้ที่อื่น
//function() {}
