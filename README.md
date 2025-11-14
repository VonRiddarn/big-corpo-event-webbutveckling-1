# big-corpo-event-webbutveckling-1

Simple HTML, CSS and JavaScript website made for the course "Webbutveckling 1"

## How to run the project

This project uses javascript module imports and therefore need to be ran from a live server.  
In VSCode right click the `index.html` file and press the "_Open with Live Server_" option.

## Features

📁 Coherent folder structure - with flat hierarchy (no src / public)  
☀️🌙 Light- / darkmode  
📍 Navigation menu  
⌛ Persistant session state for navigation menu and theme  
🤓 Semantic HTML  
⚠️ User-error alert system  
🎨 Coherent and professional design (coming soon)

## Requirements (A)

### General

-   [x] Correct project organization
-   -   [x] **At least** three HTML files, one CSS file and one JS file.
-   [ ] Intentional and coherent design in terms of color and font
-   [x] High code quality
-   [x] Coherently commented code
-   -   [x] Majority of CSS and JavaScript should be subtly commented
-   [ ] Accessive design, eg:
-   -   [ ] Good contrast
-   -   [ ] Alt-texts
-   -   [ ] Clear focus-frames
-   -   [ ] Keyboard navigation
-   -   [x] (Bonus) Light- and darkmode

### HTML / CSS related

-   [ ] Semantic structure
-   [x] Landing page and 2+ sub-pages
-   [ ] Simple media query / queries
-   [ ] Resonsive layout using flex- / gridbox
-   [x] Navigational menu that works on all pages
-   [ ] Internal anchor links (site and tags)

### JavaScript

-   At least one function using the DOM

## Structure your project

### Suggested structure from teacher

```
📁 rtc
	📄 index.html
	📁 pages
		📄 login.html
		📄 about.html
	📁 css
		🎨 index.css
		🎨 style.css
		🎨 colors.css
	📁 images
		🖼️ a.png
		🖼️ b.png
```

### Personal reflections

I did promise to make this project less "overkill" than the last 2, but the suggested folder structure for this particular task seems to be more in line with my previous work.
The challange I will be facing is following a coherent design without going overboard with the abstractions.  
So, given the suggested folder structure I believe it is within reason to strucutre the project somewhat like I did before, thus breaking my promise of simplifying my code, but keeping my promise of delivering what the teacher has asked for.

Using an `index.css` file might seem too "professional", but it aligns with modern conventions and makes the code DRY, thus marking the criterias for

-   Correct project organization
-   High code quality

```
📁 root
	📄 index.html
	📁 pages
		📄 pricing.html
		📄 contact.html
	📁 css
		🎨 index.css
		🎨 style.css
		🎨 button.css
	📁 javascript
		⚙️ index.js
		⚙️ darkmode.js
		⚙️ nav-injector.js
	📁 images
		🖼️ a.png
		🖼️ b.png
```

_Notice how the project structure is flat and does not contain a separate `src` and `public` folder. The `styles` folder is now also named `css`, which is less conventional but more in line with a demonstrative school project._

#### Noteworthy

The project has grown unexpectedly advanced in a very short time.  
When I wanted to implement the navbar, I realized I needed routing if I want to have a "current page" select effect. Thus routing was added.  
Then I wanted to add darkmode, and I realized I need to load some files before page load, and some after page load, so the darkmode was split into 2 files.  
This does all align with the criteria of "High code quality", but it could be viewed as extremely overkill for the project.

I "solved" this by adding clear top-of-file comments as well as a designated DOCS file for easier onboarding / overview.
