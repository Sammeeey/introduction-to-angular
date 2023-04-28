# Introduction to Angular Codelab

\In this codelab, you'll build a housing app with Angular. The completed app will feature the ability to view home listings based on user search, and view details of a housing location.

You'll build everything with Angular using Angular's powerful tooling and great browser integration.

Here's a preview of the finished application:

![Completed application - one column search results, second column search details](9yB5AM9sBgVwfTR.png)

The step-by-step guide can be found at [https://codelabs.developers.google.com/introduction-to-angular](https://codelabs.developers.google.com/introduction-to-angular)

## potential improvements
- search for different parts of locations (not just city; in searchHousingLocations of housing-list.component.ts) - as [suggested in step 6](https://codelabs.developers.google.com/introduction-to-angular#5)
- [*use services in Angular*](https://codelabs.developers.google.com/introduction-to-angular#4) to share data between components (instead of *Input decorator*) - as suggested in [intro step 5](https://codelabs.developers.google.com/introduction-to-angular#4)
- implement functionality to *undisplay* opened details (e.g. by click on same button, which displays details (which changes it's text & functionality to *undisplay* after click on initial *view*))
- implement cursor change to click intent on hover over clickable elements
- [angular intro suggested improvements/features/refactorings](https://codelabs.developers.google.com/introduction-to-angular#8)
- make search button work when pressing enter (as usually) - not just when clicking on search button or moving there with tab-key
- [deploy angular app](https://angular.io/start/start-deployment) - so that anyone can use it in the browser
  - how complicated & costly [(free?)](https://www.youtube.com/watch?v=cmynmS9Cjm8) is this for angular apps?
  - what do you need for that?
  - can you do it like for a static website (aka. how static is a basic angular app?)?

### details2 (branch)
> - use [chat gpt suggested approach](https://chat.openai.com/c/46d0493c-5319-49e6-b79d-3efd6b94d5b3) to display details directly below location name (maybe even be able to toggle (open/close) on click?!)
