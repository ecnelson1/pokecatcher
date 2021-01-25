# pokecatcher
HTML Needs
1. Main page
on load
    -Alert welcome and instructions include number of adventures (turns)
On close of alert  
    -Display of three random unique  clickable pokemon images
    -Display remaining adventures
below each image
    -Display captures and encounters of pokemon pictured
on click of single pokemon
    -Display three new random unique pokemon
below each image
    -Display captures and encounters of pokemon pictured
2. RESULTS page
 -Div to display adventure results
 -reset button


Behind the scenes JS
1. Main page
    -Alert
on close alert
    -get three pokemon
    -verify uniqueness by id
    -if not all unique get thee new pokemon
    -if unique render pokemon images, encounter stat, and caught stat to div
    -increment seen attributes for all three pokemon on local storage
on selection of pokemon
    -increment caught attribute in local storage for user selected id.
    -get three different pokemon with unique id's and render them in place of the former choices
    -increment seen attributes of three newly rendered pokemon choices
    -increment adventures (turns) counter
    -repeat above JS until adventures (turns)=10
upon adventures (turns) === 10
    -redirect user to results page
    -inject adventure log into display including img, seen, and caught attributes
2. RESULTS Page
reset adventure button on click
    -resets adventure log in local storage to default empty
    -redirects user back to main page
**stretch**
continue quest button
    resets adventure counter to 10 turns and allows user to add to already seen and caught pokemon in quest to catch em all!
    