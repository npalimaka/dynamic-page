# dynamic-page
Transforming static HTML page to dynamic with JavaScript.

## Content
Project has a simple structure made of HTML file with CSS and Javascript files linked.

```
css
- styles.css
js
- app.js
index.html
```
## Project goal
The main goal was to manipulate the DOM by adding navigation pragmatically.

Actions that were taken:
- Retrieving elements and changing their attributes `querySelector`, `getElementById`, `getElementsByTagName`, `setAttribute`, `style`
- Creating new elements and adding them `createElement`, `createDocumentFragment`, `appendChild`
- Adding EventListeners on click and scroll `addEventListener`
- Using scroll for navigation `scrollIntoView`
- Applying active state based on viewport `getBoundingClientRect`, `classList`
