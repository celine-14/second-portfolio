## Table of Contents
* [Introduction](#introduction)
* [Features](#features)
    * [Existing Features](#existing-features)
    * [Features Left to Implement](#features-left-to-implement)
* [Testing](#testing)
    * [Website Functionality Testing](#website-functionality-testing)
    * [UI Testing](#ui-testing)
    * [Compatibility Testing](#compatibility-testing)
    * [Validator Testing](#validator-testing)
    * [Lighthouse Testing](#lighthouse-testing)
* [Deployment](#deployment)
* [Credits](#credits)

# Classical Music Quiz

## Introduction


![Responsive Mockup](https://github.com/celine-14/second-portfolio/blob/main/docs/screenshots/quiz_mockup.png?raw=true)

## Features
### Existing features

- __Heading__
  - The name of the game "Classical Music Quiz" is featured at the top for user to see.
  ![Heading](https://github.com/celine-14/second-portfolio/blob/main/docs/screenshots/quiz_heading.png?raw=true)

- __Game Area__
  - Category Area
    - The user will be able to select the type of question to answer by selecting a category displayed.
    ![Categories](https://github.com/celine-14/second-portfolio/blob/main/docs/screenshots/quiz_category.png?raw=true)
    - After a question has been selected by the user, the category will be removed from the category area. 
    - The user will not be able to select another category until the selected question has been answered.
    ![Removed Category](https://github.com/celine-14/second-portfolio/blob/main/docs/screenshots/quiz_category_after.png?raw=true)

  - Question Area
    - The selected category and question will be displayed in this section and user will be able to read the question before choosing the correct answer.
    - This area will be refreshed after every question has been answered.
    ![Question Before](https://github.com/celine-14/second-portfolio/blob/main/docs/screenshots/quiz_question_before.png?raw=true)
    ![Question After](https://github.com/celine-14/second-portfolio/blob/main/docs/screenshots/quiz_question.png?raw=true)

  - Answer Area
    - Four options will be displayed and user is required to choose an option.
    - The user will submit their answers by clicking on the buttons.
    - A pop up will appear to inform the user if their selected option is correct or incorrect.
    ![Answers](https://github.com/celine-14/second-portfolio/blob/main/docs/screenshots/quiz_answer_options.png?raw=true)

- __Game Results__
  - This section displays the number of correct and incorrect results from the user.
  ![Scores](https://github.com/celine-14/second-portfolio/blob/main/docs/screenshots/quiz_scores.png?raw=true)

- __Game Over__ 
  - A summary of your scores and a refresh button will appear after user has succesfully answered all questions.
  - User can click the refresh button if they wish to play again.
  ![Refresh](https://github.com/celine-14/second-portfolio/blob/main/docs/screenshots/quiz_game_over.png?raw=true)


### Features left to implement 

- __Leaderboard__
  - A leaderboard section for players to compare and compete against each other.

- __Timer__
  - A timer to limit the answering time to make the game more challenging for the user.

## Testing

### Website Functionality Testing

- All buttons are functioning and triggering the correct function

### UI Testing

- Evaluated designs including layout, colours, fonts, font sizes, text formatting and buttons.
- Tested with different screen resolutions and devices using Chrome DevTools.
- Game is played and results are always accurate.
- Tested colour contrast using [Color Contrast Analyzer](https://color.adobe.com/create/color-contrast-analyzer) by Adobe and made sure the colour contrast is high enough and easy to read.

### Compatibility Testing

- Firefox
  - Website functions as normal.
- Chrome
  - Website functions as normal.
- Microsoft Edge
  - Website fucntions as normal.

### Validator Testing

- JavaScript
  - No errors were returned when passing through the official [JSHint JavaScript Validator](https://jshint.com/)
  - The following metrics were returned:
    - There are 11 functions in this file.
    - Function with the largest signature take 1 arguments, while the median is 0.
    - Largest function has 13 statements in it, while the median is 3.
    - The most complex function has a cyclomatic complexity value of 3 while the median is 2.
- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html).
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/).

### Lighthouse Testing

- Desktop Version
  - Desktop version is tested and achieved full mark of 100 for Performance, Accessibility, Best Practices and SEO.  
  ![Desktop Version](https://github.com/celine-14/second-portfolio/blob/main/docs/screenshots/lighthouse_testing_desktop.png?raw=true)

- Mobile Version
  - Mobile version is tested and achieved full mark of 100 for Accessibilty, Best Practices ans SEO. 
  - Performance score is 99.
  ![Mobile Version](https://github.com/celine-14/second-portfolio/blob/main/docs/screenshots/lighthouse_testing_mobile.png?raw=true)


## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - Navigated to the Settings tab in the GitHub repository
  - Clicked on the Pages tab on the left
  - Selected the Main Branch from the source section drop-down menu
  - Refreshed page with a detailed ribbon display indicating the successful deployment

The live link can be found here - https://celine-14.github.io/second-portfolio/

## Credits

- The fonts were imported from [Google Fonts](https://fonts.google.com/).

- Favicon is generated from [Favicon](https://favicon.io/). 