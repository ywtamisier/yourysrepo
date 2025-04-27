function lifeInWeeks(age) {
    
    var daysLeft = (90 - age);
    var daysLeft = daysLeft * 365;
    var weeksLeft = daysLeft * 52;
    var monthsLeft = daysLeft * 12;
    
    console.log("You have " + daysLeft + " days, " + weeksLeft +" weeks, and " + monthsLeft + " months left.")
    
        
        
        
        
    }
    lifeInWeeks(56)