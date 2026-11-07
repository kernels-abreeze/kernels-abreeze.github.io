/* The script shows projects in project page, applying a filter that a user selected */

/* Elements of filter list */
let skill1 = document.getElementById("skill-1-title");
let skill2 = document.getElementById("skill-2-title");
let skill3 = document.getElementById("skill-3-title");
let skilla = document.getElementById("skill-all-title");
let skillo = document.getElementById("skill-other-title");

let projList = document.getElementById("projects-grid");
let cards = projList.querySelectorAll(".project-card");

let allKeys = document.querySelectorAll("#project-filter >li");


/*** *** Helper  functions *** ***/

function showProjects(skillToCheck) {

cards.forEach(( item ) => {

    let localSkills = item.querySelector(skillToCheck);

    if(localSkills != null)
        item.hidden = false;

    });
}

function hideAllProjects() {

    cards.forEach(( item ) => {
        item.hidden = true;
    });

}

function showAllProjects() {

    cards.forEach(( item ) => {
        item.hidden = false;
    });

}

function hideAllKeys() {

    allKeys.forEach( (item) => {

        item.classList.remove('active');
    });
}

/*** *** Event handlers *** ***/


/* Skill 1 filter */
function filterProjectSkill1() {

    hideAllProjects();
    hideAllKeys();

    skill1.classList.add('active');
    showProjects(".skill-1");
}

skill1.addEventListener("click", filterProjectSkill1);


/* Skill 2 filter */
function filterProjectSkill2() {

    hideAllProjects();
    hideAllKeys();

    skill2.classList.add('active');
    showProjects(".skill-2");
}

skill2.addEventListener("click", filterProjectSkill2);

/* Skill 3 filter */
function filterProjectSkill3() {

    hideAllProjects();
    hideAllKeys();

    skill3.classList.add('active');
    showProjects(".skill-3");
}

skill3.addEventListener("click", filterProjectSkill3);


/* Skill Other filter */
function filterProjectSkillOther() {

    hideAllProjects();
    hideAllKeys();

    skillo.classList.add('active');
    showProjects(".skill-other");
}

skillo.addEventListener("click", filterProjectSkillOther);

/* Skill All filter */
function filterProjectSkillAll() {

    hideAllKeys();

    skilla.classList.add('active');
    showAllProjects();
}

skilla.addEventListener("click", filterProjectSkillAll);