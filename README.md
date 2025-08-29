1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?<br>
**Answer:** The main difference lies in their selection criteria, return types and how they interact with the DOM dynamically.<br>
- **getElementById:** Selects an element based on its unique ID attributes.
- **getElementByClassName:**  Selects all elements that possess a specific class name.
- **querySelector:** Selects the first element that matches a specified CSS selector
- **querySelectorAll:** Selects all elements that match a specified CSS selector.
---
2. How do you create and insert a new element into the DOM?<br>
**Answer:** <br>
const create=document.createElement("div")<br>
const parent=document.getElementById("parent-container")<br>
parent.append(create)
---
3. What is Event Bubbling and how does it work?<br>
**Answer:** Event bubbling is a JavaScript mechanism where an event, like a click, triggers on a specific element and then "bubbles up" through its ancestors (parent, grandparent, etc.) in the DOM tree, rather than stopping at the original target element. This upward propagation allows parent elements to respond to events occurring on their child elements. For example, clicking a nested button will also trigger events on its parent div and the body element, in that order, until the event reaches the document's root.
---
4. What is Event Delegation in JavaScript? Why is it useful?<br>
**Answer:** Event delegation in JavaScript is a technique where a single event listener is attached to a parent element to manage events triggered by its child elements, rather than adding separate event listeners to each child. This approach leverages the concept of event bubbling, where an event triggered on a child element propagates up to its parent elements in the Document Object Model (DOM) tree.<br>
Why it is useful:<br>
- Improved Performance
- Simplified Code
- Handles Dynamic Content
- Enhanced Maintainability
---
5. What is the difference between preventDefault() and stopPropagation() methods?<br>
**Answer:** preventDefault() is used to prevent the default action that belongs to the event, such as preventing a form from submitting. event. stopPropagation() is used to stop the event from bubbling up to parent elements, preventing any parent event handlers from being executed.