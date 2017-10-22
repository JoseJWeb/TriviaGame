var quiztitle = "Think You Know Facebook? :)";
    
    var quiz = [
        {
            "question"      :   "Q1: How many users does Facebook have?",
            "image"         :   "https://www.seeklogo.net/wp-content/uploads/2014/05/find-us-on-facebook-badge-400x400.png",

            "choices"       :   [
                                    "1.75 billion users",
                                    "1.50 billion users",
                                    "2 billion users",
                                    "2.5 billion users"
                                ],
            "correct"       :   "2 billion users",
            "explanation"   :   "This milestone was reached on June 30, 2017",
        },
        {
            "question"      :   "Q2: What was Facebook's original name?",
            "image"         :   "https://pics.me.me/so-thats-the-meaning-of-facebook-logo-7114447.png",

            "choices"       :   [
                                    "Face Smash",
                                    "Coursemash",
                                    "the Facebook",
                                    "My Face Space"
                                ],
            "correct"       :   "the Facebook",
            "explanation"   :   "The, was dropped from the name after the domain facebook.com was purchased in 2005, for $200,000.",
        },
        {
            "question"      :   "Q3:Who is the most popular person on Facebook as of 2017?",
            "image"         :   "https://static1.squarespace.com/static/53ec5e31e4b0fd0d4cf4d36f/t/564c2a7de4b06a24968cc6f0/1447832191790/?format=750w",

            "choices"       :   [
                                    "Shakira",
                                    "Cristiano Ronaldo",
                                    "Beyonce",
                                    "Selena Gomez"
                                ],
            "correct"       :   "Cristiano Ronaldo",
            "explanation"   :   "Cristiano Ronaldo has 109,243,536 likes on his page.",

            },
            {
            "question"      :   "Q4: The Facebook logo has a blue and white color scheme because...?",
            "image"         :   "https://ak6.picdn.net/shutterstock/videos/4635401/thumb/9.jpg?i10c=img.resize(height:160)",

            "choices"       :   [
                                    "CEO Mark Zuckerberg has a red-green colorblindness.",
                                    "Blue represents friendship.",
                                    "It was inspired by the Blue Man Group",
                                    "The CSS chose it randomly."
                                ],
            "correct"       :   "CEO Mark Zuckerberg has a red-green colorblindness.",
            "explanation"   :   "Mark has a red-green colorblindness, so blue and white were colors he could use and see in the design.",
        },
        {
            "question"      :   "Q5: What is the name of the movie based on Facebook?",
            "image"         :   "http://s2.quickmeme.com/img/61/617cabb520070aa5fbec94bfa09294c1dd7821d3c0ee79f49c5987371600f29a.jpg",

            "choices"       :   [
                                    "The Circle",
                                    "The Net",
                                    "The Timeline",
                                    "The Social Network"
                                ],
            "correct"       :   "The Social Network",
            "explanation"   :   "The film opened on Oct 1, 2010, grossed over 96 million dollars in the USA, and received a 7.7/10 score on imdb.",
        },
        {
            "question"      :   "Q6: What celebrity was on the original Facebook homepage?",
            "image"         :   "https://www.askideas.com/media/48/Are-You-Serious-Funny-Baby-Face-Meme-Image.jpg",

            "choices"       :   [
                                    "Chuck Norris",
                                    "Steve Jobs",
                                    "Al Pacino",
                                    "Gandhi"
                                ],
            "correct"       :   "Al Pacino",
            "explanation"   :   'Al Pacino was on the original homepage of Facebook, and is considered "the Godfather of Facebook".',
        },
        {
            "question"      :   "Q7: Wnat is the average time people spend on Facebook?",
            "image"         :   "https://voolas.com/wp-content/uploads/2016/04/facebook-1-spinsuck.jpg",

            "choices"       :   [
                                    "15 minutes",
                                    "20 minutes",
                                    "1 hour ",
                                    "3000 seconds"
                                ],
            "correct"       :   "20 minutes",
            "explanation"   :   "20 minutes is the daily average of all users on Facebook.",
        },
        {
            "question"      :   "Q8: What is the average number of friends per user?",
            "image"         :   "http://www.pmslweb.com/the-blog/wp-content/uploads/2013/11/46-thousand-five-hundred-facebook-friends-meme.jpg",

            "choices"       :   [
                                    " 150 friends",
                                    " 200 friends",
                                    " 300 friends",
                                    " 500 friends"
                                ],
            "correct"       :   "200 friends",
            "explanation"   :   "200 friends is the average per user account, while only 15% have more than 500+ friends ",
        },
        {
            "question"      :   "Q9: When is the best day and time to post on Facebook?",
            "image"         :   "http://i1.kym-cdn.com/photos/images/newsfeed/000/716/553/b37.png",

            "choices"       :   [
                                    "Friday 1-4pm",
                                    "Monday 8am-12pm",
                                    "Wednesday 1-3pm",
                                     "Friday 7-10pm"
                                    
                                 ],
            "correct"       :   "Wednesday 1-3 pm",
            "explanation"   :   "Wednesday 1-3 is the best time, during the so called after noon slump.",
        },
        {
            "question"      :   "Q10: What article was shared the most in 2016?",
            "image"         :   "http://s.quickmeme.com/img/a8/a8b7fe66b41072aabab4a8b9831fd4ca5cafa937ddf10f4bf79834864cf17531.jpg",


            "choices"       :   [
                                    "New Alzheimer's Treatment Fully Restores Memory Function",
                                    "How Sensitive is Your OCD Radar?",
                                    "Science Says the First Born Child is the Most Intelligent",
                                    "An Open Letter to my Friends who Support Donald Trump"
                                ],
            "correct"       :   "New Alzheimer's Treatment Fully Restores Memory Function with 5 million shares",
            "explanation"   :   "The article was so widely spread and misquoted, but there is still no actual Alzheimer's cure for humans yet.",
        },

    ];


    var currentquestion=0,score=0,submt=true,picked;
    jQuery(document).ready(function(e){function h(i){return e(document.createElement("div")).text(i).html()}function b(k){if(typeof k!=="undefined"&&e.type(k)=="array"){e("#choice-block").empty();for(var j=0;j<k.length;j++){e(document.createElement("li")).addClass("choice choice-box").attr("data-index",j).text(k[j]).appendTo("#choice-block")}}}function d(){submt=true;e("#explanation").empty();e("#question").text(quiz[currentquestion]["question"]);e("#pager").text("Question "+Number(currentquestion+1)+" of "+quiz.length);if(quiz[currentquestion].hasOwnProperty("image")&&quiz[currentquestion]["image"]!=""){if(e("#question-image").length==0){e(document.createElement("img")).addClass("question-image").attr("id","question-image").attr("src",quiz[currentquestion]["image"]).attr("alt",h(quiz[currentquestion]["question"])).insertAfter("#question")}else{e("#question-image").attr("src",quiz[currentquestion]["image"]).attr("alt",h(quiz[currentquestion]["question"]))}}else{e("#question-image").remove()}b(quiz[currentquestion]["choices"]);c()}function f(i){if(quiz[currentquestion]["choices"][i]==quiz[currentquestion]["correct"]){e(".choice").eq(i).css({"background-color":"#50D943"});e("#explanation").html("<strong>Correct!</strong> "+h(quiz[currentquestion]["explanation"]));score++}else{e(".choice").eq(i).css({"background-color":"#D92623"});e("#explanation").html("<strong>Incorrect.</strong> "+h(quiz[currentquestion]["explanation"]))}currentquestion++;e("#submitbutton").html("NEXT QUESTION &raquo;").on("click",function(){if(currentquestion==quiz.length){a()}else{e(this).text("Check Answer").css({color:"#222"}).off("click");d()}})}function c(){e(".choice").on("mouseover",function(){e(this).css({"background-color":"#e1e1e1"})});e(".choice").on("mouseout",function(){e(this).css({"background-color":"#fff"})});e(".choice").on("click",function(){picked=e(this).attr("data-index");e(".choice").removeAttr("style").off("mouseout mouseover");e(this).css({"border-color":"#222","font-weight":700,"background-color":"#c1c1c1"});if(submt){submt=false;e("#submitbutton").css({color:"#000"}).on("click",function(){e(".choice").off("click");e(this).off("click");f(picked)})}})}function a(){e("#explanation").empty();e("#question").empty();e("#choice-block").empty();e("#submitbutton").remove();e("#question").text("You got "+score+" out of "+quiz.length+" correct.");e(document.createElement("h2")).css({"text-align":"center","font-size":"4em"}).text(Math.round(score/quiz.length*100)+"%").insertAfter("#question")}function g(){if(typeof quiztitle!=="undefined"&&e.type(quiztitle)==="string"){e(document.createElement("h1")).text(quiztitle).appendTo("#frame")}else{e(document.createElement("h1")).text("Quiz").appendTo("#frame")}if(typeof quiz!=="undefined"&&e.type(quiz)==="array"){e(document.createElement("p")).addClass("pager").attr("id","pager").text("Question 1 of "+quiz.length).appendTo("#frame");e(document.createElement("h2")).addClass("question").attr("id","question").text(quiz[0]["question"]).appendTo("#frame");if(quiz[0].hasOwnProperty("image")&&quiz[0]["image"]!=""){e(document.createElement("img")).addClass("question-image").attr("id","question-image").attr("src",quiz[0]["image"]).attr("alt",h(quiz[0]["question"])).appendTo("#frame")}e(document.createElement("p")).addClass("explanation").attr("id","explanation").html("&nbsp;").appendTo("#frame");e(document.createElement("ul")).attr("id","choice-block").appendTo("#frame");b(quiz[0]["choices"]);e(document.createElement("div")).addClass("choice-box").attr("id","submitbutton").text("Check Answer").css({"font-weight":700,color:"#222",padding:"30px 0"}).appendTo("#frame");c()}}g()});