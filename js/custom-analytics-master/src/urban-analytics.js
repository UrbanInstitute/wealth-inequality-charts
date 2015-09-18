function trackEvents(inpArray){
	inpArray.map(trackElements);
}

function trackElements(inp){
	var elements = inp.elements;
	if (typeof elements !== 'object' || elements === null){
		throw "Call to trackEvents() must include value for 'elements'. Use jQuery to select elements.";
	}
	else{
		if (inp.action == "scroll"){
			trackScroll(elements,inp);
		}
		else{
			if (elements.constructor === Array){
				elements.map(function(element){
					trackElement(element,inp);
				});
			}
			else {
				trackElement(elements,inp);
			}
		}
	}
}

function trackElement(element,inp){
	var category = inp.category;
	var action = inp.action;
	var label = inp.label;
	var value = inp.value;

	if (typeof category === 'undefined' || typeof action === 'undefined'){
		throw "Call to trackEvents() must include value for 'category' and 'action'.";
	}
	else if (STANDARD_EVENTS.indexOf(action) == -1){
		throw action + " is not a valid name for an event.";
	}
	else{
		if(inp.action == "scroll"){
			trackScroll(element,inp);
		}
		else{
			element.on(inp.action, function(){
				if(typeof label !== 'undefined'){
					if (typeof  value !== 'undefined'){
						console.log("category: ",category,"action: ",action,"label: ",label,"value: ",value);
					}
					else{
						console.log("category: ",category,"action: ",action,"label: ",label);
					}
				}
				else{
					if (typeof value !== 'undefined'){
						console.log("category: ",category,"action: ",action,"value: ",value);
					}
					else{
						console.log("category: ",category,"action: ",action);

					}
				}
			});
		}
	}
}

function trackScroll(element,inp){
}