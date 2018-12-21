
var w = window;
var d = document;
function detectmob() {
    var width = w.innerWidth
        || d.documentElement.clientWidth
        || d.body.clientWidth;

    var height = w.innerHeight
        || d.documentElement.clientHeight
        || d.body.clientHeight;

    if (width <= 500) {
        console.log(width)
        return false;
    } else {
        console.log(width)
        return true;
    }
}

function addDetails() {
    var mob = detectmob();
    if (mob) {
        d.getElementById('middleDetails').innerHTML = 'I am a front-end website and application developer in Florida. I actively work \
        on projects using React, Angular and Electron. I have a portfolio in development, hosted on my\
        <a class = "aboutLink" href = "https://www.github.com/advaitambeskar/"><span class = "enbolden">Github</span></a>.\
        Additionally, I am also working on an android/iOS application. (more on that soon-ish, check my github/\
        <a class = "aboutLink" href = "http://blog.advaitambeskar.com" target = "_blank"><span class = "enbolden">\
            blog</span></a> for details).\
        Currently, I am a full-time student pursuing a graduate degree in computer science \
        from the University of Florida. (INSERT <span class="gatorswag">GATOR CHOMP!</span>)<br />\
        Additionally, I dabble in the Model United Nations and in Virtual Reality at the Labs@UF.\
        <br />In my free time, I am usually tinkering with electronics, building castles and cities out of lego sets,\
        and reading an unhealthy amount of philosophy. I like to indulge in true crime podcasts, Criminal Minds and Frasier. Sometimes I stream my coding sessions on twitch!\
        <br />';
    }
    else{
        d.getElementById('middleDetails').innerHTML = 'I am a front-end website and application developer in Florida. I actively work \
        on projects using React, Angular and Electron. I have a portfolio in development, hosted on my\
        <a class = "aboutLink" href = "https://www.github.com/advaitambeskar/"><span class = "enbolden">Github</span></a>.\
        Additionally, I am also working on an android/iOS application. (more on that soon-ish, check my github/\
        <a class = "aboutLink" href = "http://blog.advaitambeskar.com" target = "_blank"><span class = "enbolden">\
            blog</span></a> for details).\
        Currently, I am a full-time student pursuing a graduate degree in computer science \
        from the University of Florida. </p><p class = "middleContent"\
        style = "text-align:center;"><br />(INSERT <span class="gatorswag">GATOR CHOMP!</span>)<br /></p>';
    }
}
addDetails();