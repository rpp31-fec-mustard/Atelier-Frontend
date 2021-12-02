# 🌭 Mustard 🌭

Have you ever wanted to view the ins and outs of a random clothing product without being able to navigate anywhere else in the website? Well, Team Mustard brings you Mustard, a true single page shopping experience.

## Description

Mustard is a project developed by Hack Reactor, a software engineering boot-camp, that pushed the boundaries of our front-end knowledge. Throughout this endeavor, we as a team of four, increased our proficiency with React, CSS, testing, front-end optimization, and other concepts/tools. A third party API hosted by Hack Reactor provides the data we need to display and we use these resources to build the features and content for a robust, familiar, and enjoyable user experience.

## Modules and Related Features

### 1. Product Overview
**Purpose:**

*Feature A:*
* Description
* GIF

### 2. Related Products and Outfit
**Purpose:** Allow user to navigate to and view related products in a digestable format, compare features between each related product and the main product, and add products to the outfit list to be saved even after the session ends.

*Dynamic Product Cards*

Every product has associated related products (determined by Hack Reactor's API) that are dynamically rendered in a scrollable list. Navigation buttons appear on each side of the list based on scroll bar location and presence of additional products on the corresponding side.

![dynamic-product-cards](https://user-images.githubusercontent.com/69382434/144359591-d2397f9a-28fd-48d7-87ad-13261b87fbd1.gif)

*Dynamic Comparison Modal*

This comparison modal pops up when the user hovers over each related product, allowing them to directly compare the features of the main product with the moused-over product.

![comparison-modal](https://user-images.githubusercontent.com/69382434/144359402-df100bd2-52cd-4e9b-a0ca-af962a564c32.gif)

*Save Products with the Outfit List*

The user has the ability to save products from both the related products and the product overview across sessions. This feature utilizes localStorage Web API to persist the list of outfits beyond the current session.

![outfit-list](https://user-images.githubusercontent.com/69382434/144359268-488cc1ae-facc-44e1-b493-233dcc22c026.gif)

### 3. Questions & Answers
**Purpose:**
The Questions & Answers module allows asking and answering of questions for the product selected.

The functionality contained within this module can be divided into several pieces:
* View questions
* Search for a question
* Asking a question
* Answering a question

This component extends the ability to view and search questions, ask questions, answer questions and provide feedback on questions about the current product.


*View Questions*
* At the center of the Questions and Answers module is a list of questions that have been asked about the given product.
* The questions and their corresponding answers within this list are displayed in an expanding and collapsing accordion. By default, two questions are displayed. Up to two answers are displayed for each question. The remaining questions or answers are hidden until the user loads them using the “More Questions” button.
* Questions appear in order of ‘helpfulness’, corresponding to how many users have indicated that the question was helpful.
* The list contains all questions by default, but can be filtered to a subset based on user searches.
* If no questions have been submitted for this product, then the list collapses and the button to submit a new question appears near the top of the module.

![ViewQuestion](https://user-images.githubusercontent.com/69382434/144359821-e0916b3d-e33e-41d6-a51a-a1369f2bcde6.gif)

*Search Question*
* Search terms entered in the search bar filters the question list for matching results.
* After the user types 3 or more characters into the search bar the results will begin to filter to only those containing matching text. The filter continues to update as the user adds or removes characters.
* If the user clears the search term, or removes characters so that less than 3 remain, the list returns to the state where it is not filtered to matching text.
* The search filter works with any other filters or sorts that have been applied, and narrows the results further.

![SearchQuestion](https://user-images.githubusercontent.com/69382434/144359816-51bbec8b-5662-4243-a626-11123e31a7c4.gif)

*Ask Question*
* At the bottom of the Questions & Answers module, the 'Add Questions +' button allows users to create a new question for the product.
* Upon clicking the button a modal window opens, overlaying the product page.
* Upon selecting the 'Submit Question' button the form’s inputs are validated. If there are any invalid entries, the submission is prevented, and a warning message appears.

![AskQuestion](https://user-images.githubusercontent.com/69382434/144359801-4173abab-330a-4278-8417-19ff8e94be18.gif)

*Answer Question*
* Through the link provided on each question within the Questions list, users are allowed to submit an answer for the product.
* Upon clicking the button a modal window opens, overlaying the product page.
* Users can upload up to five photos for each answer.
* Upon selecting the 'Submit Answer' button the form’s inputs are validated. If there are any invalid entries, the submission is prevented, and a warning message appears.

![AnswerQuestion](https://user-images.githubusercontent.com/69382434/144359957-5cd00d32-8e8c-405f-b610-ffdee3d9ecf6.gif)

### 4. Reviews & Ratings
**Purpose:**
The Ratings and Reviews module allows viewing and submission of reviews for the product selected.

The functionality within this module can be divided into several pieces:
* Write new review
* Reviews List
* Sorting
* Rating Breakdown
* Product Breakdown

This component extends the ability to write, read, and browse through reviews for the current product.

*Write Review*
* At the bottom of the Ratings & Reviews module, a button will appear allowing users to create new reviews for the product.
* Upon clicking the button a modal window should open, overlaying the product page.
* The modal window will list several inputs, those indicated as mandatory should have an asterisk next to the title.
* Upon selecting the 'Submit Review' button the form’s inputs are validated.
* If there are any invalid entries, the submission is prevented, and a warning message will appear.


*Reviews List*
* The heart of the Ratings and Reviews module is the list of reviews available for the user to read. This list displays all the reviews that have been submitted for the product being viewed.
* The list displays 2 tiles at a time. If there are more than 2 reviews that have been written for the given product, a button for “More Reviews” will appear below the list. If there are two or less reviews, the button will not appear.
* Clicking the button will add two reviews to the displayed list.
* Once all of the reviews for the product have been loaded, the button should no longer appear
* If no reviews have been submitted for this product, then the list will collapse, and the button to submit a new review will appear near the top of the module.
* Each review will be displayed within single tile on the list.
* Within each tile is a review broken into several different pieces of information along with features to give the user the ability to mark a review as helpful one time, report a review, expand or collapse the review body, and enlarge the review image.
* If the reviewer checks that they would recommend the product, that is displayed in the review tile.
* If the seller responds to a review, the response is displayed in the review tile.

*Sorting*
* Users are able to change how the reviews list is sorted from a dropdown menu consisting of 3 selections:
  - Relevant: Relevance will be determined by a combination of both the date that the review was submitted as well as ‘helpfulness’ feedback received.  This combination should weigh the two characteristics such that recent reviews appear near the top, but do not outweigh reviews that have been found helpful.  Similarly, reviews that have been helpful should appear near the top, but should yield to more recent reviews if they are older.
  - Newest: This is a straightforward sort based on the date the review was
  submitted.  The most recent reviews should appear first.
  - Helpful: This sort order will prioritize reviews that have been found helpful.  The order can be found by subtracting “No” responses from “Yes” responses and sorting such that the highest score appears at the top.
* By default, the reviews list should load with the sort order set to relevant.
* The sort order should persist even when filters are added and removed.

*Rating Breakdown*
* The average overall rating for the current product is displayed as a number and a star scale. The amount of stars filled corresponds to the average rating.
* The percentage of reviews that ‘recommend’ the product will be displayed.
* The breakdown of the ratings received for the product doubles as the filtering options for the reviews list.
* 5 bars will appear; one for each of the star ratings that a customer can give to a product. The bar will be filled to an amount that represents the percentage of total reviews that have that particular star rating. To the right of the bar will be the number amount of reviews with that rating.
* Each rating breakdown, consisting of the label, the bar, and the count, acts as a filter. Clicking on the breakdown for a star count filters the reviews list so that only reviews of that rating display.
* The filters can be toggled on and off with each click.
* Once one or more filters has been applied, a message will appear stating which filters have been applied.  It will also include a link to “Remove all filters”.  Clicking on this link will remove any filters applied and return the list to the default state.

*Product Breakdown*
* When submitting a review, a user has the ability to rate each characteristic for the selected product.
* Each product can have different characterstics to give feedback on.
* Each characteristic associated with the product will be dynamically displayed, along with a rating bar with an icon indicating the average rating for that characteristic.


## Team Members
* **[Michael Lapid](https://github.com/addessosf)**
* **[Julie Yu](https://github.com/xoxohorses)**
* **[Michael Lee](https://github.com/msilee85)**
* **[Joey Dowling](https://github.com/jdowling55)**
