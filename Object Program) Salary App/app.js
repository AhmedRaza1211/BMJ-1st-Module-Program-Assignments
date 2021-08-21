// let empTotal = +prompt("Enter number of Employers");

// for (let i = 1; i <= empTotal; i++) {
//     let empName = prompt("Employer " + (i) + ": Enter your name");
//     let afsent = parseInt(prompt("How many days you afsent in previous month"));
//     let perDaySalary = 800;
//     let overTimeHourlySalary = 100;
//     // let bonuses = 1000;
//     let fullDate = new Date();
//     let whichMon_CountDays = {
//         // fullDate : new Date(),
//         monthNames : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septembr', 'October', 'November', 'December'],
//         currentMonth : fullDate.getMonth(),
//         currentYear: fullDate.getYear(),
//         monthName: function() {
//             return this.monthNames[this.currentMonth -1];
//         },
//         daysInMonth: function(month, year) {
//             return new Date(year, month, 0).getDate();
//         }
//     };
//     let previousMonthName = whichMon_CountDays.monthName();
//     console.log(previousMonthName);
//     let howManyDaysInMonth = whichMon_CountDays.daysInMonth(whichMon_CountDays.currentMonth, whichMon_CountDays.currentYear);
//     console.log(howManyDaysInMonth);
//     let monthlySalary = {
//         salary : (howManyDaysInMonth - afsent) * perDaySalary,
//     }
//     console.log(monthlySalary.salary);

// }



// // var year = 2021;
// // var month = 6;
// // var date = new Date(year, month, 0);
// // console.log(date);

// // var daysInMonth = function(month, year) {
// //     return new Date(month, year, 0);
// // }

// // console.log(daysInMonth(5, 2021));

// // let dd = new Date();
// // let pas = {
// //     month : dd.getMonth(),
// //     date: dd.getDate()
// // }

// // console.log(pas.month);

let totalEmployers = parseInt(prompt("Enter number of Employers"));
for (let i = 0 ; i < totalEmployers; i++) {
    let employerName = prompt("Employer No. " + (i + 1) + ") Enter your name here");
    let employerHourlySalary = parseInt(prompt("Enter your hourly salary"));
    let employerWorkingHours = parseInt(prompt("Enter your working hours"));
    let employerAfsent = parseInt(prompt("How many afsents you did in previous month"));
    let employerBonus = 2500;
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    
    let employerObject = {
        namee: employerName,
        hourlySalary: employerHourlySalary,
        workingHours: employerWorkingHours,
        afsent: employerAfsent,
        bonus: employerBonus,
        date: currentDate,
        month: currentMonth,
        year: currentYear,
        perDaySalary: function() {
            return this.hourlySalary * this.workingHours;
        },
        whichMonth: function() {
            return new Date(this.year, this.month, 0);
        },
        daysInMonth: function() {
            return new Date(this.year, this.month, 0).getDate();
        },
        presentDays: function() {
            return this.daysInMonth() - this.afsent;
        },
        monthlySalary: function() {
            let bool = true;
            if (this.afsent > 0) {
                let a = this.perDaySalary * this.presentDays;
            } 
        }

        
        

        


    }
    console.log(employerObject.perDaySalary());
    console.log(employerObject.whichMonth());
    console.log(employerObject.daysInMonth());
    console.log(employerObject.presentDays());
    console.log(employerObject.monthlySalary().a);
   
}








