"use strict";

/**
* File managing the transitions between the various data.
*/


/**
 * Complete a transition between the currently used (shown) data and the new ones (next to show)
 *
 * @param g       The SVG group in which the bubble chart will be drawn.
 * @param data    New data to use.
 * @param x       Scale for the X axis.
 * @param y       Scale for the Y axis.
 * @param r       Scale to use for the circles' radiuses.
 */
function transition(g, data, x, y, r) {
  g.selectAll("circle")
		.data(data)
		.transition().duration(1000)
		.attr("cx", d => x(d.lifeExpectancy))
    .attr("cy", d => y(d.income))
    .attr("r", d => r(d.population));
}
