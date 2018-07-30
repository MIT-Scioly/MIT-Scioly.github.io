# MIT Science Olympiad Website
A basic informational site for competitors and coaches to get important information and official updates about the tournament.
## Basic Codebase Rules
* The HTML template is located at `template.html`. Copy this file and use it as the starting point for the rest of the pages. Most of the styling should already be in place, but if you need custom css code, see the next section for more details.

* Let people in the Slack know what page you're working on, so we can avoid duplicating pages.

* Always pull before modifying the code to try and avoid merge conflicts.

* Always push code after you finish modifying anything. Avoid having code checked out and modified for too long on your personal machine to avoid merge conflicts.

* If you have any questions about Git or want help using it, let me know (preferably sooner rather than later). It's almost impossible for you to permanently break anything, but it would also be good to avoid messing stuff up since it could get complicated with multiple people.

## File Structure and Naming Conventions
* The root file contains all the html files. `index.html` is the home page.
* The styles folder contains all the CSS files. `global.css` contains global stylings that will affect the look of all pages across the site. For styles specific to the pages, use a different CSS file with the same name as the html file it is styling. For example, `index.css` provides styling for `index.html`. I may also add a few CSS files for the header and footer later.
* Put all Javascript files inside scripts. The headers and footers on each page will be added via Javascript to avoid repeating the code.
* Images contains all the images we will use on the site.

## Code Conventions
* Use spaces instead of tabs. You should be able to set your text editor to do this (ask me if you're not sure).
* For html files, use two spaces per tab (keeps the indentation from growing too wide).
* For css and js, use four spaces per tab