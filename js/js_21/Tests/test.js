describe(" Define function", function(){
  it("pow()", function(){
   expect(pow).toBeDefined()
  });
  it("selectAnswer()", function(){
   expect(selectAnswer).toBeDefined()
  });
  it("outputAnswer()", function(){
   expect(outputAnswer).toBeDefined()
  });
 });

describe(" Define variable", function(){
  it("a", function(){
   expect(a).toBeDefined()
  });
  it("b", function(){
   expect(b).toBeDefined()
  });
  it("rez", function(){
   expect(rez).toBeDefined()
  });
  it("str", function(){
   expect(str).toBeDefined()
  });
 });

describe("Check work pow() ", function(){
  it("10 in 1 = 10", function(){
   expect(pow(10,1)).toBe(10)
  });
  it("10 in -1 = 0.1", function(){
   expect(pow(10,-1)).toBe(0.1)
  });
  it("2 in 10 = 1024", function(){
   expect(pow(2,10)).toBe(1024)
  });
 it("x in 10 = BAD", function(){
   expect(pow("x", 10)).toBe("BAD")
  })
 it("10 in x = BAD", function(){
   expect(pow(10, "x" )).toBe("BAD")
  });
 
 });

describe("Check work selectAnswer() ", function(){
    beforeEach(function() {
    var a=4;
    var b=2;
    });
   afterEach(function() {
      var a;
      var b;
    });
  it("if result=BAD answer 'не верный ввод данных'", function(){
   expect(selectAnswer("ww")).toBe("не верный ввод данных")
  });
  it("if result=16 answer  16", function(){
   expect(selectAnswer(16)).toMatch("16")
  });
 });

describe("Check work outputAnswer() ", function(){
    
  it("alert - true", function(){
   expect(outputAnswer()).toBe(alert())
  });
  it("result - true", function(){
   expect(outputAnswer("result")).toBe(alert("result"))
  });
 })

