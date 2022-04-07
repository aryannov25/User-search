let users = [
    {firstName: 'John', lastName: 'Doe', age: 30, salary: 5000},
    {firstName: 'Jane', lastName: 'Doe', age: 25, salary: 4000},
    {firstName: 'Ashish', lastName: 'Shukla', age: 20, salary: 3000},
    {firstName: 'yash', lastName: 'Goel', age: 35, salary: 6000},
    {firstName: 'Arpit', lastName: 'Khare', age: 40, salary: 7000},
    {firstName: 'Sahil', lastName: 'Pocker', age: 45, salary: 8000},
    {firstName: 'Aryan', lastName: 'Chaudhary', age: 19, salary: 10000},
]

function userExist (x){
     let inputName = document.getElementById("name").value.toLowerCase();
     let find = 0;
     
     let firstName = x.firstName.toLowerCase();
     let lastName = x.lastName.toLowerCase();
     let age =x.age;
     let salary = x.salary;
     if(firstName == inputName || lastName == inputName || firstName + ' ' + lastName == inputName)
     {
         find=1;
         document.getElementById('userName').innerHTML = ("Name: " + firstName + " " + lastName);
         document.getElementById('age').innerHTML = ( "Age: " + age);
         document.getElementById('salary').innerHTML = ( "Salary: "+ salary);


         return find;
     }
    }
     




function findUser(){
    let find = users.filter(userExist);
    if (find==0){
        
    
        document.getElementById('userName').innerHTML = (null);
        document.getElementById('age').innerHTML = (null);
        document.getElementById('salary').innerHTML = (null);

        setTimeout(() => {
            document.getElementById('alt');
            
            
        }, 3000);

        
    }
}