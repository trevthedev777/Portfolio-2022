# Trevor Lehmann Portfolio

This is a website created to display the skills I have as a Developer and to showcase my understanding of creating static websites and implementing functionality and interactivity. The websit showcases my best projects to date

The website is created to display two different themes (Dark & Light) as is for use by the users descretion

![Mock Up Dark Mode](https://github.com/trevthedev777/Portfolio-2022/blob/master/assets/images/readme_imgs/mock_up_dark_mode.png?raw=true)

![Mock Up Light Mode](https://github.com/trevthedev777/Portfolio-2022/blob/master/assets/images/readme_imgs/mock_up_light_mode.png?raw=true)

[Trevor Lehmann Portfolio Website](https://trevorlehmann.com/)

## Features

### Sitewide

-   Theme Toogle Button

    -   Located on the top right hand corner of the screen in Large and Small screen sizes, just a click or touch is needed to activate this function

    ![Theme Select Button Dark Mode](https://github.com/trevthedev777/Portfolio-2022/blob/master/assets/images/readme_imgs/theme_toggle_dark_mode.png?raw=true)

    ![Theme Select Button Light Mode](https://github.com/trevthedev777/Portfolio-2022/blob/master/assets/images/readme_imgs/theme_toggle_light_mode.png?raw=true)

-   Navigation Menu

    -   The navigation menu is set on the right hand side of large sceens and on the bottom of the screen on smaller devices
    -   Users can use the navigation menu to view :
        -   My Bio (Home Screen)
        -   Information About Me such as: Work History, Education and Skills
        -   A collection of some of my best projects
        -   My Blogs on my developement journey
        -   Contact form and details

    ![Nav Menu image dark mode](https://github.com/trevthedev777/Portfolio-2022/blob/master/assets/images/readme_imgs/Navigation_dark_mode.png?raw=true)

    ![Nav Menu image light mode](https://github.com/trevthedev777/Portfolio-2022/blob/master/assets/images/readme_imgs/Navigation_light_mode.png?raw=true)

-   Favicon

    -   A site-wide favicon will be implemented with a logo in black text
    -   This will provide an image in the tabs header to allow the user to easily identify the website if they many tabs open.

    ![Favicon](https://github.com/trevthedev777/Portfolio-2022/blob/master/assets/images/readme_imgs/favicon_image.png?raw=true)

-   404 Page
    -   A 404 page will be implemented and will display if a user navigates to a broken link.
    -   The 404 page shares the same layout as landing page and there is a link to the live site

![404](https://github.com/trevthedev777/Portfolio-2022/blob/master/assets/images/readme_imgs/404_image.png?raw=true)

-   Home Page

    -   The Home Page is a brief intoduction to myself with a image of me, it has a hover effect to display the image in colour when your cursor moves on it

    -   There is a button that will redirect you from the website to a google drive folder that will allow you to download my CV in either light or dark mode

![Home Page Dark Mode Image](https://github.com/trevthedev777/Portfolio-2022/blob/master/assets/images/readme_imgs/home_page_dark_theme.png?raw=true)

![Home Page Light Mode Image](https://github.com/trevthedev777/Portfolio-2022/blob/master/assets/images/readme_imgs/home_page_light_theme.png?raw=true)

![Google Drive Folder]()

-   About Section

    -   The about section gives more detail about who I am a developer, what skills and languages I have, some stats on my career and work history

![About Section Dark Mode]()

![About Section Light Mode]()

-   Portfolio Section

    -   The profilio section is set up in 3 per row formation with a screenshot of the home page of every project/application

    -   Hovering on the image will bring a background with corresponding theme colour and displays the name of the project and an icon that leads you to the source code on my github account

    ![Portfolio Dark Mode]()

    ![Portfolio Light Mode]()

-   Contact Section

    -   The contact page will display my personal contact detail information including:

        -   Personal Mobile Number
        -   Personal Email Address
        -   The city I am located in
        -   What languages I can speak
        -   Links to :
            -   Github profile
            -   LinkedIn profile
            -   Codepen profile

    -   There is also a contact form page which has just standard HTML form validation, it requires:

        -   A name
        -   An email address
        -   Subject
        -   A message

    -   The is a captcha requirement when sending a complete form that will require to prove 'You are not a robot' and it sends the message directly to my email address

    ![Contact Page Dark Mode]()

    ![Contact Page Light Mode]()

### Features left to implement

-   Whatsapp link to contact me directly
-   Download CV directly from the website withour being redirected
-   Blog secction to load the article in its own window
-   Like, Dislike a favorite the blogs
-   Connect to a backend database system so users can sign up for latest news and events and implement a weekly newsletter when new blogs are released
-   Request a online appointment

## Technologies

-   HTML
    -   The structure of the Website was developed using HTML as the main language.
-   CSS
    -   The Website was styled using custom CSS in an external file.
-   Sass
    -   The styles were created in the css preprocessor Sass and compiled neatly in the css file.
-   JavaScript
    -   The theme change was implemented using the show hide class function in JavaScript.
    -   The website was created as a single page app that shows add hides section based on evenListeners and functions
-   VS Code.
    -   The website was developed using VS Code
-   GitHub.
    -   Source code is hosted on GitHub.
-   Git
    -   Used to commit and push code during the development of the Website.
-   Font Awesome
    -   Icons obtained from https://fontawesome.com/
-   Favicon.io
    -   Favicon was designed using Adobe Photoshop 2022
    -   favicon file created at https://favicon.io/favicon-converter/

## Testing

### Responsiveness

All pages were tested to ensure responsiveness on screen sizes from 320px and upwards as defined in [WCAG 2.1 Reflow criteria for responsive design](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html) on Chrome, Edge, Firefox and Opera browsers, as well as tested on Samsung S20FE and Samsung Galaxy 8 and iPhone 10 model handheld devices

Steps to test:

1. Open the browser and navigate to [JavaScript Quiz Game Multiple Choice](https://github.com/trevthedev777/javascriptQuizGameMultipleChoice)
2. Open the developer tools (right click and inspect)
3. Set to responsive and decrease width to 320px
4. Set the zoom to 50%
5. Choose each responsive screen device using shortcut Cntrl + shift + m
6. Click and drag the responsive window to the maximum width

Expected:

The game to adapt per size, and stack elements on the smallest screen sizes.

Actual:

The website behaved as expected.

### Accessibility

[Wave Accessibility](https://wave.webaim.org/) tool was used as a guide to making sure colour contrasts were fine and that there were no errors with any HTML attributes

Testing was focused to ensure the following criteria were met:

-   All link tags have the correct path to stylesheets and script
-   Aria labels were used for any links
-   Color contrasts meet a minimum ratio as specified in [WCAG 2.1 Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
-   Heading levels are not missed or skipped to ensure the importance of content is relayed correctly to the end-user
-   All content is contained within landmarks to ensure ease of use for assistive technology, allowing the user to navigate by page regions
-   All not textual content had alternative text or titles so descriptions are read out to screen readers
-   The HTML page lang attribute has been set
-   Aria properties have been implemented correctly
-   WCAG 2.1 Coding best practices being followed

Manual tests were also performed to ensure the website was accessible as possible and some accessibility issues were identified.

Issue #1: Styles not loading into the website.

Fix: Correct paths were given to link the documents together for all styles and JS technologies to work smoothly.

Issue #2: Script not loading into the website.

Fix: Correct paths were given to link the documents together for all styles and JS technologies to work smoothly.

Issue #3: 404.html not loading into the correct page

Fix: renamed the document to the correct name.

Issue #4: Total correct score not calculating at the end of the game

Fix: Added a new js file saving the local session score

Issue #5: Hover effect not working on buttons

Fix: renamed elements to corresponding class names

Issue #6: Progress Bar not incrementing per question

**Navigation Links**

Testing was performed on 404.html, index.html, and end.html to ensure that the game was directed to the home screen

Links on all pages are navigated to the correct pages as expected.

**Game Play**

-   User starts the game and answers the question
-   Question has timeout function to automatically progress the game so the user does not have to select the next question manually
-   Progress bar increases per question
-   Score increments on every correct answer

The timeout function works correctly

**Game Board**

-   Correct Answer displays green background upon selection
-   Incorrect Answer displays red background upon selection and does not show the right answer so user can play again

All displays and transitions displayed correctly

**End of Game**

-   Navigation to start of quiz and home page

**Validator Testing**

-   HTML
    -   No errors were returned when index.html passing through the official [W3C validator](https://validator.w3.org)

![Index HTML Validator Results](https://github.com/trevthedev777/javascriptQuizGameMultipleChoice/blob/main/assets/readme%20images/index.html%20validated.png?raw=true)

-   No errors were returned when game.html passing through the official [W3C validator](https://validator.w3.org)

![Game HTML Validator Results](https://github.com/trevthedev777/javascriptQuizGameMultipleChoice/blob/main/assets/readme%20images/game.html%20validated.png?raw=true)

-   No errors were returned when end.html passing through the official [W3C validator](https://validator.w3.org)

![End HTML Validator Results](https://github.com/trevthedev777/javascriptQuizGameMultipleChoice/blob/main/assets/readme%20images/end.html%20validated.png?raw=true)

-   No errors were returned when 404.html passing through the official [W3C validator](https://validator.w3.org)

![404 HTML Validator Results](https://github.com/trevthedev777/javascriptQuizGameMultipleChoice/blob/main/assets/readme%20images/404.html%20validated.png?raw=true)

-   CSS
    -   No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org)

![CSS Validator Results](https://github.com/trevthedev777/javascriptQuizGameMultipleChoice/blob/main/assets/readme%20images/css%20validated.png?raw=true)

-   JavaScript
    -   No errors were returned when passing through the script.js in validtor [JShint validator](https://jshint.com/)
    -   No errors were returned when passing through the end.js in validtor [JShint validator](https://jshint.com/)

**Lighthouse Report**

Lighthouse report reported a good performance of 96, Accessibility of 100, best practices of 100, and the SEO was 91

![Lighthouse report](https://github.com/trevthedev777/javascriptQuizGameMultipleChoice/blob/main/assets/readme%20images/lighthouse%20report.png?raw=true)

## Deployment

### Version Control

The site was created using Gitpod and pushed to Github to the remote repository ‘Portfolio-Project-2-Poker-Fun’.

The following git commands were used throughout development to push code to the remote repo:

`git add .` - This command was used to add the file(s) to the staging area before they are committed.

`git commit -m “commit message”` - This command was used to commit changes to the local repository queue ready for the final step.

`git push` - This command was used to push all committed code to the remote repository on GitHub.

### Deployment to Github Pages

-   The site was deployed to GitHub pages. The steps to deploy are as follows:
    -   In the GitHub repository, navigate to the Settings tab
    -   From the menu on the left select 'Pages'
    -   From the source section drop-down menu, select the Branch: main
    -   Click 'Save'
    -   A live link will be displayed in a green banner when published successfully.

The live link can be found here - https://github.com/trevthedev777/javascriptQuizGameMultipleChoice

### Clone the Repository Code Locally

Navigate to the GitHub Repository you want to clone to use locally:

-   Click on the code drop-down button
-   Click on HTTPS
-   Copy the repository link to the clipboard
-   Open your IDE of choice (git must be installed for the next steps)
-   Type git clone copied-git-URL into the IDE terminal

The project will now have been cloned on your local machine for use.

## Credits

-   Daisy Mcgirr for being a one of a kind mentor and helping me understand my work
-   Readme inspired by Gareth McGirr - https://github.com/Gareth-McGirr/Portfolio-Project-2-Poker-Fun
-   Dave Horrocks for assisting me with my assignment and working through code with me
-   Phumlani Mbabela for debugging and explanations of the functionality of the game
-   Code snippets of uppercase variables inspired by : [freeCodeCamp](https://www.freecodecamp.org/news/when-to-capitalize-your-javascript-constants-4fabc0a4a4c4/)
-   ProgressBar inspired by [w3schools](https://www.w3schools.com/howto/howto_js_progressbar.asp), simplified code helped by Phulmani Mbabela
-   The Code Institute Tutoring service
-   Idea of quiz inspired by [sitepoint](https://www.sitepoint.com/simple-javascript-quiz/)
-   Tutorials followed [keep_coding](https://www.youtube.com/watch?v=MxrGPP4F8Sc)
