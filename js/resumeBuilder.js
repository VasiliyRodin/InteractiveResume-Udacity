
var bio = {
    "name": "Vasiliy Rodin",
    "role": "Web Developer",
    "contact": {
        "email": "**********@gmail.com",
        "mobile": "123-456-7890",
        "github": "VasiliyRodin",
        "twitter": "@shutinputin"
    },
    "welcomeMessage": "Welcome to my interactive resume.",
    "skills": [
        "Experience in HTML", "Experience in CSS", "jhdfkjsdhfkhskhfd", "asdaskjdajsd"],
    "picUrl": "images/fry.jpg",
};

var education = {
    "schools": [
        {
            "name": "CSU East Bay",
            "location": "Hayward , CA",
            "degree": "Bachelors Degree",
            "majors": "Computer Science",
            "years": "2010-2014"
        }
    ],
    "onlineCourses": [
        {
            "name": "Udacity",
            "years": "2014-2015",
            "degree": "Nano Degree"
        }
    ]
};
var work = {
    "jobs": [
        {
            "employer": "ReServe Interactive",
            "dates": "2013-2015",
            "position": "Support Technician",
            "description": "Provide technical and network support to customers over the phone or by email.",
            "location" : "2021 W. Las Positas Court Suite 127 Livermore, CA 94551"
        },
        {
            "employer": "Centric Software",
            "dates": "2015-Present",
            "position": "Quality Assurance Engineer",
            "description": "Stress test and migrate databases to new instaltions of the software.",
            "location" : "485 Alberto Way #200, Los Gatos, CA 95032"
        }
    ]
};
var projects = {
    "projectsCompleted": [
        {
            "name": "BootStrap Practice Website",
            "years": "2014-2015",
            "url": "www.vasiliyrodin.com",
            "description": "This is a website that I use to practice front end web development."
        },
        {
            "name": "Solar Calendar",
            "years": "2014-2015",
            "url": "www.vasiliyrodin.com/calendar/index.html",
            "description": "Calculates time of day and it tells you whether you should use electricity during that certain time of day."
        }
    ]
};



var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append()


if (bio.contact !== null) {
    var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedMobile = HTMLemail.replace("%data%", bio.contact.email);
    $("#topContacts").append(formattedMobile);
    var formattedMobile = HTMLtwitter.replace("%data%", bio.contact.twitter);
    $("#topContacts").append(formattedMobile);
    var formattedMobile = HTMLgithub.replace("%data%", bio.contact.github);
    $("#topContacts").append(formattedMobile);

}


if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
}
function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

displayWork();