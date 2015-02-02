//var name="Vasiliy Rodin";
//var role="Web Developer";

//var formattedName = HTMLheaderName.replace("%data%", name);
//var formattedRole = HTMLheaderRole.replace("%data%", role);

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);
var welcomeMsg = "Welcome to my interactive resume.";

var bio = {
    "name": "Vasiliy Rodin",
    "role": "Web Developer",
    "contactInfo": {
        "email": "rodinvasiliy@gmail.com",
        "mobile": "925-785-9606"
    },
    "picUrl": "images/fry.jpg",
    "welcomeMsg": welcomeMsg
};

var education = {
    "schools": [
        {
            "name": "CSU East Bay",
            "years" : "2010-2014",
            "degree" : "Bachelors of Science in Computer Science"
        }
    ],
    "onlineCourses" :[
        {
            "name" : "Udacity",
            "years" : "2014-2015",
            "degree" : "Nano Degree"
        }
    ]
};

var work = {
    "work" : [
        {
            "name" : "ReServe Interactive",
            "years" : "2013-2015",
            "position" : "Support Technician"
        },
        {
            "name" : "Centric Software",
            "years" : "2015-Present",
            "position" : "Quality Assurance Engineer"
        }
    ]
};

var projects = {
    "projectsCompleted" : [
        {
            "name" : "BootStrap Practice Website",
            "years" : "2014-2015",
            "url" : "www.vasiliyrodin.com"
        },
        {
            "name" : "Solar Calendar",
            "years" : "2014-2015",
            "url" : "www.vasiliyrodin.com/calendar/index.html",
        }
    ]
}

