# Courses app

## Demo links:
- [Netlify DEMO LINK](https://coruscating-conkies-890f1a.netlify.app/)

## CORS issue with public API:
As the Courses app uses public API, you might face CORS issues. If you want to check the preview, please, install an extension that solves this issue and turn it on: 
1) [allow-cors-access-control extension](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)
2) ![image](https://github.com/BudnikOleksii/courses-app/assets/63243136/eafc0ab6-bc21-4d82-b2fa-24553fac5449)

### Technologies used:
- React with Typescript
- Redux Toolkit, Redux-Saga
- UI Library: MaterialUI
- Axios
- Jest, RTL

### Project description
A  web application for e-learning purposes. The application has two main pages, the courses page, and the course page.

The courses page displays a list of available courses, and when the user hovers over a course title, a popover with a video preview is shown. If the user wants to know more details about a specific course, they can click on a link labeled "details," which will redirect them to the course page.

On the course page, all the lessons for the current course are displayed. The lessons can be videos, articles, or quizzes, and some of them are locked. The course page has a video player that allows the user to watch the video lessons and change the video speed by pressing the keyboard.
If the lesson is an article or a quiz, the application will open it in a new tab. The video progress is saved locally, and the user can return to the previous video without losing their progress.

### Instructions how to run application locally:
1. Clone the repository to your local machine, open terminal and clone repo with command bellow:
```bash 
git clone https://github.com/BudnikOleksii/courses-app.git
```
2. Open project in terminal:
```bash 
cd courses-app
```
3. Set up dependencies:
```bash 
npm install
```
4. Run project by command:
```bash 
npm start
```
5. Open application in your browser `http://localhost:3000/`

### Tests coverage:

File                       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
---------------------------|---------|----------|---------|---------|-------------------
All files                  |   85.88 |    75.28 |   85.18 |   85.83 |                   
 src                       |     100 |      100 |     100 |     100 |                   
  App.tsx                  |     100 |      100 |     100 |     100 |                   
  constants.ts             |     100 |      100 |     100 |     100 |                   
 src/api                   |     100 |      100 |     100 |     100 |                   
  courses-service.ts       |     100 |      100 |     100 |     100 |                   
 src/app                   |     100 |      100 |     100 |     100 |                  
  hooks.ts                 |     100 |      100 |     100 |     100 |                  
 src/app/sagas             |     100 |      100 |     100 |     100 |                  
  courses.ts               |     100 |      100 |     100 |     100 |                  
 src/components/atoms      |     100 |      100 |     100 |     100 |                  
  CardItem.tsx             |     100 |      100 |     100 |     100 |                  
  ContentContainer.tsx     |     100 |      100 |     100 |     100 |                  
  GridContainer.tsx        |     100 |      100 |     100 |     100 |                  
  SkillItem.tsx            |     100 |      100 |     100 |     100 |                  
 src/components/layouts    |     100 |      100 |     100 |     100 |                  
  Layout.tsx               |     100 |      100 |     100 |     100 |                  
 src/components/molecules  |     100 |      100 |     100 |     100 |                  
  Heading.tsx              |     100 |      100 |     100 |     100 |                  
  HeadingWithPopover.tsx   |     100 |      100 |     100 |     100 |                  
  NotificationsAlert.tsx   |     100 |      100 |     100 |     100 |                  
  SkillsBlock.tsx          |     100 |      100 |     100 |     100 |                  
 src/components/organisms  |   66.66 |     61.4 |   66.66 |   66.66 |                  
  BurgerMenu.tsx           |   83.33 |      100 |      50 |   83.33 | 22               
  CourseCard.tsx           |   85.71 |    85.71 |      50 |   85.71 | 46               
  CourseContent.tsx        |   83.33 |       50 |   66.66 |   83.33 | 16               
  CoursesList.tsx          |     100 |      100 |     100 |     100 |                  
  LessonCard.tsx           |     100 |      100 |     100 |     100 |                  
  LessonInfo.tsx           |   88.23 |    58.33 |      75 |   93.33 | 41               
  NavMenu.tsx              |     100 |      100 |     100 |     100 |                  
  NotificationBlock.tsx    |     100 |      100 |     100 |     100 |                  
  VideoBlock.tsx           |   31.25 |    27.77 |   33.33 |   31.25 | 22-38,43,48-62   
  VideoPreview.tsx         |   54.54 |    66.66 |   66.66 |   54.54 | 17-23            
 src/components/templates  |     100 |      100 |     100 |     100 |                  
  ErrorPage.tsx            |     100 |      100 |     100 |     100 |                  
 src/features/actions-info |     100 |      100 |     100 |     100 |                  
  actions-info-selector.ts |     100 |      100 |     100 |     100 |                  
  actions-info-slice.ts    |     100 |      100 |     100 |     100 |                  
 src/features/courses      |     100 |      100 |     100 |     100 |                  
  courses-selectors.ts     |     100 |      100 |     100 |     100 |                  
  courses-slice.ts         |     100 |      100 |     100 |     100 |                  
 src/mock-data             |     100 |      100 |     100 |     100 |                  
  courses.ts               |     100 |      100 |     100 |     100 |                  
  state.ts                 |     100 |      100 |     100 |     100 |                  
 src/pages                 |      90 |      100 |    62.5 |      90 |                  
  Course.tsx               |     100 |      100 |     100 |     100 |                  
  Courses.tsx              |   88.23 |      100 |      50 |   88.23 | 30,55            
  NotFound.tsx             |      75 |      100 |      50 |      75 | 14               
 src/utils                 |     100 |      100 |     100 |     100 |                  
  date-helpers.ts          |     100 |      100 |     100 |     100 |                  
  hls-helpers.ts           |     100 |      100 |     100 |     100 |                  
  localstorage-helpers.ts  |     100 |      100 |     100 |     100 |                  
  test-utils.tsx           |     100 |      100 |     100 |     100 |                  
---------------------------|---------|----------|---------|---------|-------------------
<pre>
Test Suites: 31 passed, 31 total
Tests:       90 passed, 90 total
Snapshots:   0 total
Time:        8.056 s
Ran all test suites.
</pre>
