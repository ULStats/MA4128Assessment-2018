![PageRank](http://www.webseoanalytics.com/blog/wp-content/uploads/2010/11/wikipedia-pagerank-nofollow-backlink.jpg)
 # Use of Power Iteration Method in Search Engines
***Sean O'Neill***     ***13155245***
---------------------------------
## Introduction
In mathematics, power iteration (also known as the power method) is an eigenvalue algorithm: given a diagonalizable matrix {\displaystyle A} A, the algorithm will produce a number {\displaystyle \lambda } \lambda , which is the greatest (in absolute value) eigenvalue of {\displaystyle A} A, and a nonzero vector {\displaystyle v} v, the corresponding eigenvector of {\displaystyle \lambda } \lambda , such that {\displaystyle Av=\lambda v} {\displaystyle Av=\lambda v}. The algorithm is also known as the Von Mises iteration.


## Context
There have been various previous attempts to bring data visualization to web browsers. The most notable examples were the Prefuse, Flare, and Protovis toolkits, which can all be considered as direct predecessors of D3.js.
Prefuse was a visualization toolkit created in 2005 that required usage of Java, and visualizations were rendered within browsers with a Java plug-in. Flare was a similar toolkit from 2007 that used ActionScript, and required a Flash plug-in for rendering.

In 2009, based on the experience of developing and utilizing Prefuse and Flare, Jeff Heer, Mike Bostock, and Vadim Ogievetsky of Stanford University's Stanford Visualization Group created Protovis, a JavaScript library to generate SVG graphics from data. The library was known to data visualization practitioners and academics.
In 2011, the development of Protovis was stopped to focus on a new project, D3.js. Informed by experiences with Protovis, Bostock, along with Heer and Ogievetsky, developed D3.js to provide a more expressive framework that, at the same time, focuses on web standards and provides improved performance.

![alt tag](https://i.stack.imgur.com/4yTMs.png)

## Technical principles
Embedded within an HTML webpage, the JavaScript D3.js library uses pre-built JavaScript functions to select elements, create SVG objects, style them, or add transitions, dynamic effects or tooltips to them. These objects can also be widely styled using CSS. Large datasets can be easily bound to SVG objects using simple D3.js functions to generate rich text/graphic charts and diagrams. The data can be in various formats, most commonly JSON, comma-separated values (CSV) or geoJSON, but, if required, JavaScript functions can be written to read other data formats.

### Selections
The central principle of D3.js design is to enable the programmer to first use a CSS-style selector to select a given set of Document Object Model (DOM) nodes, then use operators to manipulate them in a similar manner to jQuery. For example, by using D3.js, one may select all HTML `<p> ... </p>` elements, and then change their text color, e.g. to lavender:
```d3.selectAll("p")                 // select all <p> elements
   .style("color", "lavender")     // set style "color" to value "lavender"
   .attr("class", "squares")       // set attribute "class" to value "squares"
   .attr("x", 50);                 // set attribute "x" (horizontal position) to value 50px
```
The selection can be based on tag (as in the above example), class, identifier, attribute, or place in the hierarchy. Once elements are selected, one can apply operations to them. This includes getting and setting attributes, display texts, and styles (as in the above example). Elements may also be added and removed. This process of modifying, creating and removing HTML elements can be made dependent on data, which is the basic concept of D3.js.

## Transitions
By declaring a transition, values for attributes and styles can be smoothly interpolated over a certain time. The following code will make all HTML `<p> ... </p>` elements on a page gradually change their text color to pink:
```d3.selectAll("p")             // select all <p> elements
   .transition("trans_1")      // transition with name "trans_1"
     .delay(0)                 // transition starting 0ms after trigger
     .duration(500)            // transitioning during 500ms
     .ease("linear")           // transition easing progression is linear...
   .style("color", "pink");    // ... to color:pink
```
## Data-binding
For more advanced uses, loaded data drives the creation of elements. D3.js loads a given dataset, then, for each of its elements, creates an SVG object with associated properties (shape, colors, values) and behaviors (transitions, events).
```
// Data
  var countriesData = [
     { name:"Ireland",  income:53000, life: 78, pop:6378, color: "black"},
     { name:"Norway",   income:73000, life: 87, pop:5084, color: "blue" },
     { name:"Tanzania", income:27000, life: 50, pop:3407, color: "grey" }
  ];
// Create SVG container
  var svg = d3.select("#hook").append("svg")
        .attr("width", 120)
        .attr("height", 120)
        .style("background-color", "#D0D0D0");
// Create SVG elements from data 
    svg.selectAll("circle")                  // create virtual circle template
      .data(countriesData)                   // bind data
    .enter()                                 // for each row in data...
      .append("circle")                      // bind circle & data row such that... 
        .attr("id", function(d) { return d.name })            // set the circle's id according to the country name
        .attr("cx", function(d) { return d.income / 1000  })  // set the circle's horizontal position according to income 
        .attr("cy", function(d) { return d.life })            // set the circle's vertical position according to life expectancy 
        .attr("r",  function(d) { return d.pop / 1000 *2 })   // set the circle's radius according to country's population 
        .attr("fill", function(d) { return d.color });        // set the circle's color according to country's color
```
## Mathematical Applications
* Generation of pseudorandom numbers with normal, log-normal, Bates, and Irwin-Hall distributions.
* Transformations in 2D: translation, rotation, skew, and scaling.
#### References
* https://github.com/d3/d3/wiki/Gallery

