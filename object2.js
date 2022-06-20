let company = "AWS"
let fname="Mark"
let emp = {
    id:101,
    lname:"Zackerberg",
    [company]:'Facebook',
   
    function(){
        //console.log(this.fname)
        return '${this.fname} ${this.lname'
    }
}
let emp1 = emp
//console.log(emp1)
//console.log(emp1.id)
//console.log(emp1.fname)
//console.log(emp1.company)
console.log(emp1.fullName(),emp1.id)
