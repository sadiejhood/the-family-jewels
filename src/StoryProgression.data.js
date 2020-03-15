const story = {
    "Introduction": {
        "beginning": ["...the year is 1935, and the setting is Minneapolis, MN. The young heiress of a Russian Juul conglomerate has been kidnapped; the kidnapper is demanding a ransom so large it would shut down the Juul syndicate. You play a young, plucky private investigator with a dark past. You’ve been tasked with not only rescuing the heiress, but identifying the kidnapper and bringing them to justice...", "Where am I?"],
        "Where am I?": ["...it’s been a long week; heck, it’s been a long year. You are sitting in your detective’s office, listening to the rain when you hear a knock at the door. A stranger walks in…", "Next"],
        "Next": ["You can now move locations", "Detective Office"]
    },
    "Detective Office": {
        "beginning": ["A stranger walks in to your office...", "Talk to stranger", "Ignore the stranger"],
        "Talk to stranger": ["'Do you wanna make a million dollars? My daughter, the heiress to the Juul family fortune was kidnapped.", "Accept the quest", "Deny the quest"],
        "Ignore the stranger": ["You lose."],
        "Deny the quest": ["You dont want a million dollars? You lost the game!"],
        "Accept the quest": ["You can now move locations", "Heiress Mansion"]
    },
    "Heiress Mansion": {
        "beginning": ["The Heiress's mansion is large and luxurious. You are standing at the base of the living room; the living room has a fireplace, a large seating area with a longCouch, a large diningTable, a staircase leading upstairs, and the sunroomDoor leading to the back of the house.", "Look at the fireplace", "Look at the long couch", "Look at the dining table", "Look at the staircase", "Look at the sunroom door"],
        "Go back to front": ["The Heiress's mansion is large and luxurious. You are standing at the base of the living room; the living room has a fireplace, a large seating area with a longCouch, a large diningTable, a staircase leading upstairs, and the sunroomDoor leading to the back of the house.", "Look at the fireplace", "Look at the long couch", "Look at the staircase", "Look at the sunroom door"],
        "Look at the fireplace": ["The fireplace has a large mantle clock on the top of it. There are charred remains of wood in the inner hearth...ash lines the firebrick... ", "Look at the clock", "Go back to front"],
        "Look at the clock": ["The clock is not ticking; it is out of power. I am not sure how long...", "Go back to front"],
        "Look at the long couch": ["The couch is large and white...it seems almost uncomfortable to sit on. Around the couch is a large coffee table, and the fireplace...", "Look at the fireplace", "Look at the coffee table", "Go back to front"],
        "Look at the coffee table": ["The coffee table is made almost completely from glass. There are some good housekeeping magazines, as well as a copy of GQ Britain... ", "Go back to front"],
        "Look at the dining table": ["The dining table can seat fourteen people. At the center of the table is a bouquet of flowers...", "Look at the bouquet", "Go back to front"],
        "Look at the bouquet": ["The bouquet is large, however slightly wilted...they just get enough sun from the windows to the side that look into the sunroom door...", "Go back to front", "Look at the sunroom door"],
        "Look at the staircase": ["The staircase is massive, and leads upstairs. I better check out the downstairs main space before I venture upstairs...", "Go back to front"],
        "Look at the sunroom door": ["A door that leads from the main space to the sunroom in the back...strange, there are muddy footprints on the ground from the outside into the sunroom. They end at the sunroom door where I am located... ", "Look at the footprints closer"],
        "Look at the footprints closer": ["These footprints do not look like they would belong to the Heiress. What is even more strange is that they come from outside, and do not end at the mat where the shoes go. My guess is that these not only don't belong to the Heiress, but they belong to someone who does not live here...I need to find out what kind of shoes these are...", "Next"],
        "Next": ["You can now move locations", "Shoe store"]
    },
    "Shoe store": {
        "beginning": ["The shoestore is surprisingly full of shoes for such a small place, there are just walls all the way to the ceiling covered with shoes. You can't see anyone right now, I suppose its time to look around -- should I go left or right?", "Move left", "Move right"],
        "Move left": ["This section of the room seems to mostly full of children's shoes of various colors... I don't really think this area can help us in anyway... Maybe we should go back to the front of the store", "Go back to entrance"],
        "Go back to entrance": ["The shoestore is surprisingly full of shoes for such a small place, there are just walls all the way to the ceiling covered with shoes. You can't see anyone right now, I suppose its time to look around -- should I go left or right?", "Move left", "Move right"],
        "Move right": ["You see a shoe salesperson.", "Approach salesperson"],
        "Approach salesperson": ["'Hey, look at you--what are you, size 10? I got the perfect pair for you...Here try these on for size!' The salesperson quickly walks away from you down the tall shelves of shoes.", "Follow salesperson"],
        "Follow salesperson": ["'Why are you looking at me like that? Do you not want these shoes?'", "Ask about the footprints"],
        "Ask about the footprints": ["Hey keep it down man, this guy is dangerous... Yeah I sold those shoes to a guy named Lenny Kravitz. If I were you I would stop while you're ahead ...you're getting into some dangerous territory.", "Get information about where Kravitz lives"],
        "Get information about where Kravitz lives": ["You can now move locations", "Kravitz House"]
    },
    "Kravitz House": {
        "beginning": ["Just an ordinary looking house with a large front door, a garage, a few trash cans out on the curb, and some pretty flowers near the door. ", "Knock on the front door", "Look at the garage", "Look at the garbage cans", "Look at the pretty flowers"],
        "Knock on the front door": ["No one answered the door... and it looks kinda just like any normal front door to me...", "Look at the garage", "Look at the garbage cans", "Look at the pretty flowers"], 
        "Look at the garage": ["Well the garage door is closed and I don't really want to break into it... so not a lot to be gained from it", "Knock on the front door", "Look at the garbage cans", "Look at the pretty flowers"], 
        "Look at the garbage cans": ["Hmmm, there is a reciept here blowing around... ", "Investigate the receipt"],
        "Investigate the receipt": ["It is for the local bar, perhaps I should check it out", "Next"],
        "Next": ["You can now move locations", "Bar"],
        "Look at the pretty flowers": ["Some nice lilies; I'm kind of surprised they are growing so well this time of year...", "Knock on the front door", "Look at the garage", "Look at the garbage cans"],
    },
    "Bar": {
        "beginning": ["You walk into a dimly lit bar, a radio plays quietly. The only people inside are the bartender and a mysterious man in the corner.", "Order a drink", "Talk to the bartender", "Interrogate the bartender about Lenny", "Investigate the radio"],
        "Investigate the radio": ["The radio is currently playing some smooth jazz. You hangout for a bit listening...it reminds you of your wife...her favorite music was jazz. You take out your wallet and look at her picture wistfully. For a moment, the bar disappears and you are taken to another time.", "Order a drink"],
        "Order a drink": ["You order a whiskey neat with a lemon peel. Maybe not the best thing to do on the clock but the stress is getting to you.", "Ask the bartender about Lenny", "Interrogate the bartender about Lenny", "Look around"],
        "Ask the bartender about Lenny": ["You’re looking for a guy called Kravitz? Yeah, I know him...he’s a regular here...right over there!", "Go over to Lenny"], 
        "Interrogate the bartender about Lenny": ["Hey, shut up, you! Get the hell out of here! You lose."], 
        "Look around": ["The bar is pretty empty... a few people are sitting around and the bartender is just wiping down the bar"],
        "Go over to Lenny": ["Lenny is sitting alone holding a beer and looking like he is thinking through something", "Ask Lenny about the footprints", "Aggressively interrogate Lenny about the footprints"],
        "Ask Lenny about the footprints": ["listen bud..leave me alone", "Look around", "Aggressively interrogate Lenny about the footprints"], 
        "Aggressively interrogate Lenny about the footprints": ["ok, ok! I’ll tell you what I know!! The heiress is in the cave. The FDA payed me off to kidnap her. They are sick are of those darned juuls hurting the teens. I’ll take you to the cave, just don’t hurt me!!", "Next"],
        "Next": ["You can now move locations", "Cave"],
    },
    "Cave": {
        "beginning": ["The cave is dark with a couple of small lanterns around the heiress. Lenny has followed you in and is moving towards the heiress", "Quickly attack Lenny", "Rush to the heiress"],
        "Quickly attack Lenny": ["You take a swing at Lenny and he hits you back, you start to tussle and you realize that if you made the right move he would be dead", "Kill Lenny", "Push him off and try to talk to him"],
        "Kill Lenny": ["As Lenny falls the to ground, the heiress screams 'No! You've killed my one true love. How could you??'", "What...?"],
        "What...?": ["The heiress stabs you out of pure anger... you lose."],
        "Rush to the heiress": ["You run over the heiress and tell her everything is going to be alright. She tells you that you don't need to be afraid of Lenny. He is her lover and the whole kidnapping was just a way for them to be together. You have won the game!"],
        "Push him off and try to talk to him": ["'Why did you kidnap her?' Lenny takes a couple gasping breaths and manages to whisper out 'I love her' before he grabs on to his chest where you punched him", "Rush to the heiress"]
    }

}

export default story;
