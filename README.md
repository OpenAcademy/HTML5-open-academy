# HTML5 Open Academy

This repository contains presentations given in the HTML5 Open Academy project.

## Authoring

Presentations are based on Deck.js and can be written with Jade (preferred) or as HTML.

### Prerequisites

* Node.js - If you wish to write your presentations in Jade
* Ruby, Rubygems, SASS, Compass - If you wish to edit the presentations official theme

### Setup

* Clone the repository to your machine
* Change to repository and run `npm install` to install Jade template engine

## Directory Structure

```
/                    - Root directoy containing compiled presentation HTML files
/assets              - Static assets contained in your presentation go here
/deckjs              - Deck.js dependencies
/templates           - Jade templates
 - /presentations    - Your Jade presentation template goes here
 - layout.jade       - Layout file for all presentations
```

## Writing Your Presentation (Jade)

* Copy `templates/example.jade` to `templates/presentations/your_presentation.jade`
* Change title in title block
* Start adding slides in slides block

To compile your Jade presentation file into HTML run the following:

```
$ npm run-script watch
```

This will run the Jade compiler and watch for changes to any Jade files under `templates/presentations/`

### Compiling SASS

If you want to make changes to any of the SASS themes, you can run the SASS watcher from the command line:

```
$ npm run-script sass
```

This will look for any changes made to SASS files under `deckjs/themes/style/` and automatically compile them to CSS.

## Publishing

To publish your presentation, checkout the `gh-pages` branch, merge from master and push:

```
$ git checkout master
$ git pull
..... write your stuff .....
$ git add path/to/your/presentation
$ git commit -m 'your commit message'
$ git push origin master
$ git checkout gh-pages
$ git merge master
$ git push origin gh-pages
```

Please make sure you add a link to your presentation in `templates/presentations/index.jade`