# custom-analytics
Custom events for google analytics

##Installing this script
At the bottom of a page that includes google analytics (currently only supported for `analytics.js`), embed the javascript with
```html
<script src = "path/to/urban-analytics.js"></script>
```
**below** the `analytics.js` embed script.

##Tracking Events

To track custom events, you will be calling the `trackEvents` function inside a `<script>` tag, underneath the link to `urban-analytics.js`. The function takes an [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of [javascript objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects), where each object is a list of settings to send to Google. Here's an example of what the `trackEvents` function call might look like. Below, there are descriptions of each value in the passed object(s).

```html
<script type="text/javascript">
	trackEvents(
		[
			{
				elements: $(".download-button"),
				category: "button",
				action: "click",
				label: "Download button",
				value: 1
			},
			{
				elements: $("#unique-paragraph"),
				category: "article paragraph",
				action: "copy"
			}
		]
	);
</script>
```

###elements
*This is a required field.*
The `elements` key accepts either a single DOM object, or multiple objects in an array. The best way to pass these objects in is through [jQuery selection](http://learn.jquery.com/using-jquery-core/selecting-elements/). Note that urban-analytics.js requires jQuery, and it is included in all Urban sites, so that dependency shouldn't be an issue.


###category
*This is a required field.*
The `category` key is used by Google Analytics to group similar events together. It can be any String value you like. As a best practice, I suggest element types are used as categories (button, video, paragraph, window, text box, etc.)

###action
*This is a required field*
The next tier of classification Google uses is `action`s. The heirarchical structure means, for example:
All `button -> click`, `button -> focus`, or `button -> hover` events would be aggregated under `button` and could be further drilled down to examine the individual actions.
However, `button -> click`, `paragraph -> click`, and `image -> click` cannot be grouped together under the `click` action, they are all aggregated under their corresponding categories.

*IMPORTANT NOTE* The `action` field accepts a String, but it must be the name of a [standard web event](https://developer.mozilla.org/en-US/docs/Web/Events). Examples include `click`, `dblclick`, `mouseenter`, etc. See the [MDN reference](https://developer.mozilla.org/en-US/docs/Web/Events) for a link of all event names.

###label
*This is NOT a required field*
The optional `label` is a third tier of classification that Google uses. So, for example, each type of `button -> click` could have a separate label ("Download button", "Animate button", "Toggle button", etc.)

###value
*This is NOT a required field*
The optional `value` can be used to attach an *integer* value to an event. Google tracks averages of these values, so they could be used for functions such as:
- scroll depth tracking (see below)
- To be continued

##A note on scroll events

To be continued