# Orbit

## Background and Overview
Orbit is a live interactive 3D drawing app that will allow you to 
navigate around within a 3D grid and draw on different planes of the grid.

The long term goal of this project will be to eventually draw within a 3D grid
with different options such as rotating the 3D grid while drawing.

## Functionality and MVP

#### Generate a 3D drawing grid
* create/reset a 3D grid on clicking a button
* reset will also repostion camera at center point
#### Draw with cursor
* allow boxes that the cursor is on while left click is down to change color
of box to black

#### Adjust current plane in x, y and z direction
* allow user to change the plane on which they are drawing
* create dedicated keys for navigating drawing planes
* allow zoom to be adjusted

## Wire Frame
![wire frame image](src/images/second.png)

## File Structure
drawing_with_JS
* assets
    * images
* src
    * three_D_grid.js
* style
    * main.scss
    * grid.scss
* index.html

## Architecture and Technology

* Will be using HTML canvas element for drawing on grid
* will be using javascript for creating the 3D grid and other grid
manipulation logic

## Implementation Timeline
*  Day one & two
    *   General setup
    *   Generate 3D grid ()
    *   implement grid reset button
*  Day three
    *   Implement drawing option ()
*  Day four
    *   Adjust which layer is being drawn on
## Bonus Features
* allow user to draw while the grid is rotating at variable speeds and or
directions