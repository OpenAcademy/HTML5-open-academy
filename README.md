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
/ - Root directoy containing compiled presentation HTML files
/assets - any static assets contained in your presentation
/deckjs - the Deck.js dependencies
/templates - Jade templates
 -- /presentations - Your Jade presentation template goes here
 layout.jade - Layout file for all presentations
```