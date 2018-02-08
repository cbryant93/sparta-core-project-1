# sparta-core-project-1

# Vegan Duck Hunt

## Software
A JavaScript / Jquery game built using HTML with added bootstrap, and CSS.

## Task Requirements
1. Build a browser based game.
2. Get project idea approved by trainers.
3. Include an instruction section explaining how to play the game.
4. A display message when the user has won, or display user score after the game has finished.

## Approach
### Game Idea
I wanted to create a game which had I knew could be realistically completed in the set amount time given based on my coding skills.

I decided to make a point in click game, due to learning all the core concepts behind this in the prior 2 weeks of learning.

My final Game idea was a spin-off of the famous retro game: 'Duck Hunt'. The spin-off detail was a modern twist where the user would have the option to still gain points from not killing the ducks, to keep everyone happy.

## Planning

### Wireframes
To get a clear idea of what I wanted my game to look like I decided to put pen to paper.

![Wireframe](./MD-Images/20180208_134908.jpg)

Drawing the wireframes helped me visualise the functions on the screen to see what functions would need to be appended where on the page.

### User Stories
Using my wireframes I went through the the different user journeys one may take when playing the game. I wrote down on paper what features would be needed to make a user friendly game.

## Sprints
For this project we were to use the agile methodology as a basis to our work style. To help follow work progress we used trello.

![Wireframe](./MD-Images/Screen Shot 2018-02-08 at 14.42.34.png)

### Sprint 1
In sprint one we were to have a minimal viable product complete. This was a complete working game at its most basic design. All the key functions had to be working. In the picture above you can see what how I differentiated this.

#### Issues in sprint 1
The main problem I had was spawning the targets. At first I didn't know how I was going to tackle this function. One idea I had was making an array of ducks and creating a loop where they all appear one by one. I realised this would be many lines of code of divs in the HTML containing ducks. I then realised I could create a div in Jquery, and somehow keep creating the div with a set interval, to appear on the page.

```javascript
function createDuck() {
  var duck = $('<div class="target duck" id="' + duckId + '"></div>');
```

The next issues I had after this was making the targets move across the screen. I first researched CSS animation techniques, however this was hard to control in the JavaScript. I ended up using the Jquery function to edit CSS. However the divs did not animate the screen very well, so I discovered a function called animate.

```JavaScript
var moveDuck = setInterval(function() {
  duck.animate({
    left: '100vw' //Duck moves from the left
  }, 5000); //Speed ducks fly
```
