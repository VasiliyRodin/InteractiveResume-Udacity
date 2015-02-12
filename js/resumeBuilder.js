var bio = {
    "name": "Vasiliy Rodin",
    "role": "Web Developer",
    "contacts": {
        "email": "**********@gmail.com",
        "mobile": "123-456-7890",
        "github": "VasiliyRodin",
        "twitter": "@shutinputin",
        "location": "Dublin, CA 94568"
    },
    "welcomeMessage": "Welcome to my interactive resume.",
    "skills": [
        "Experience in HTML", "Experience in CSS", "jhdfkjsdhfkhskhfd", "asdaskjdajsd"],
    "picUrl": "images/fry.jpg"
};

var work = {
    "jobs": [
        {
            "employer": "ReServe Interactive",
            "dates": "2013-2015",
            "position": "Support Technician",
            "description": "Provide technical and network support to customers over the phone or by email.",
            "location": "2021 W. Las Positas Court Suite 127 Livermore, CA 94551"
        },
        {
            "employer": "Centric Software",
            "dates": "2015-Present",
            "position": "Quality Assurance Engineer",
            "description": "Stress test and migrate databases to new instaltions of the software.",
            "location": "485 Alberto Way #200, Los Gatos, CA 95032"
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

var education = {
    "schools": [
        {
            "name": "CSU East Bay",
            "location": "Hayward , CA",
            "degree": "Bachelors Degree",
            "major": "Computer Science",
            "dates": "2010-2014",
            "url": "http://www20.csueastbay.edu/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front End Nano Degree",
            "school": "Udacity",
            "date": "2014-2015",
            "url": "https://www.udacity.com/"
        }
    ]
};

bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedPicture = HTMLbioPic.replace("%data%", bio.picUrl);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedPicture);
    $("#header").append(formattedWelcomeMessage);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedemail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedTwitter);



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

}

work.display = function () {

    $("#workExperience").append(HTMLworkStart);
    for (job in work.jobs) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
    }
}

projects.display = function () {

    $("#projects").append(HTMLprojectStart);
    for (project in projects.projectsCompleted) {

        var formattedTittle = HTMLprojectTitle.replace("%data%", projects.projectsCompleted[project].name);
        $(".project-entry:last").append(formattedTittle);

        var formattedTime = HTMLprojectDates.replace("%data%", projects.projectsCompleted[project].years);
        $(".project-entry:last").append(formattedTime);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projectsCompleted[project].description);
        $(".project-entry:last").append(formattedDescription);
    }
}

education.display = function () {

    $("#education").append(HTMLschoolStart);
    for (school in education.schools) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedNameDegree = formattedSchoolName + formattedSchoolDegree;
        $(".education-entry:last").append(formattedNameDegree);


        var formattedSchoolDates = HTMLschoolDegree.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);

        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedSchoolMajor);
    }
    $("#education").append(HTMLonlineClasses);
    for (online in education.onlineCourses) {
        var formattedOnlineTittle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
        var formattedOnlineTitleSchool = formattedOnlineTittle + formattedOnlineSchool;
        $("#education").append(formattedOnlineTitleSchool);
    }
}

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name1[1] = name[1].toUpperCase();
    name0[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

$("#skills").append(internationalizeButton);
$("#mapDiv").append(googleMap);

bio.display();
work.display();
projects.display();
education.display();