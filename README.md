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

## General TODO
* Go through current site at [scioly.mit.edu](scioly.mit.edu) and make sure all the info there is on the current site.
* Figure out a better thing to put in the lower right corner of the site
* Automatically generate the year in the copyright at the bottom.
* There was a mistake on the template with script tags going outside the body. They should be placed just before the `</body>` tag. If you see one of these, fix it.
* Finish empty pages
    * Tournament Info
        * Tournament Schedule - Find last year's schedule and copy it over onto the site.
        * Awards ceremony will not be in Kresge. Change to a "more info coming soon" message.
        * Health and Safety - Add local pharmacies
    * Logistics
        * Location - Add more details and shrink the map so that it's not so wide. Add [whereis.mit.edu](whereis.mit.edu) to help people locate buildings.
    * Info For Teams
        * Tournament Policies - change second level bullets to something different.
        * Required Forms - add "coming soon" message.
        * Supplies - add the locations for some nearby hardware stores/places to get useful supplies for last-minute builds. Maybe add La Verde's as well.
    * About Us
        * The Team - find out who the past tournament directors were. We might later expand this section to add short bios of each team member.
        * Contact Us - add some basic contact information


## Miles TODO
* Add responsiveness
    * Scale text and images on homepage
    * Restructure events page to dropdowns when site becomes too small
    * Right align the dropdown arrows on the menu
    * Make footer responsive
    * Close menu when user clicks outside menu
    * ~~Change menu to hamburger with media query~~
* Finish Event Pages
    * Create a list of "visible fields" as well as their display names.
* ~~Merge History and The Team pages.~~
* Remove disclaimer from finished pages.
* Add troubleshooting email account somewhere.