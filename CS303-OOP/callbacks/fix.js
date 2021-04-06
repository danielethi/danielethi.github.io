//fix.the code below using 

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
    this.students.forEach(function(student) {
    console.log(this.title + ": " + student);
    });
    }
    };
    group.showList();
    // this code can be rewritten as blow and it will give the listed output
    // let group = {
    //     title: "Our Group",
    //     students: ["John", "Pete", "Alice"],
    //     showList: function() {
    //     this.students.forEach(student=> {
    //     console.log(this.title + ": " + student);
    //     });
    //     }
    //     };
    //     group.showList();
//==========================Expected Outputs=========================//
// Our Group: John
// Our Group: Pete
// Our Group: Alice
        
 
