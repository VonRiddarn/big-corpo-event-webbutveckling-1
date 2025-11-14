# Code documentation

Since this project is on the semi-large side, this documentation is includede for a quick TLDR overview of the inner workings.
Each document of importance also contains a top-of-file comment to explain its purpose.

## Persistent data

All persistent data is saved in the session storage to ensure that no dead data will be contained on the users machine after visiting.

## Page flow

1.  Request page with URL (`/index.html`, `/pages/contact.html`, etc)
2.  Run `alert.js`  
    If the user is not running the page on a live server, display a warning.
3.  Run `darkmode-load.js`  
    If darkmode is detected in session storage, apply darkmode class to document root.
4.  Load DOM content
5.  Run `main.js`  
    5. 1. Import and run `navbar-injector.js`  
     Builds the navbar component using the semantic `nav` element and injects it into `body`

## alert.js

Checks if the URL does _not_ begin with `http` or `https` in which case a warning is displayed to the user.  
The reason for this is because we get a Cross-origin error when trying to use ES modules from files.

## darkmode-load.js

Quick check to see if the sesion storage has applied "darkmode" to true. If so, the class _darkmode_ is applied to the _document root_.

## darkmode.js

Contains things related to the _runtime_ darkmode, such as _state toggle_, _re-rendering_ and the _darkmode button component_.

## main.js

The entry point for all runtime scripts.  
If something is intended to run, it is imported (iun order) into main using ES modules.  
This ensures that we do not bloat the `head` with thousands of individual `script` imports.

## navbar-injector.js

Creates a navbar component and injects it into the body automatically.

### Flow

It's not rocket-science or anything, but all the DOM calls can make it hard to follow what is happening, so here is a TLDR:

1. Create `nav` element and store reference as `navbar`.
2. Append `ul` as a child element for `navbar` element and store reference as `ul`.
3. For each item in the array sent through `addRoutes`  
   3. 1. Append an `li` element to the parent sent through `addRoutes` (should always be `ul`) - and store a reference to it as `li`  
   3. 2. Append a `p` element to the `li` and store a reference to it as `p`  
   3. 3. Set `p`'s innerHTML to be equal to its name in the array  
   3. 4. Add the class `route` to `li`  
   3. 5. If the page route matches the current array item, add `route--selected` to `li`

## routing.js

_I'm proud of this one. Kinda hacky and quite simple, but does its job!_

-   Tokenizes the URL and stores it inside `urlTokens` which can be imported and used from anywhere.
-   Parses last element of the tokenized url and adds it as plain text to `currentRoute` which can be imported and used from anywhere.
-   Creates a shorthand comparer called `isRoute` that makes a case-insensitive check for the route. This can also be imported and used from anywhere.
