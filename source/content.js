var elements = document.getElementsByTagName('*');
//var replacedText = 0;
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    // walk the DOM
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        
        if (node.nodeType === 3) {
            var text = node.nodeValue;
            text = text.replace(/Donald Trump|Trump|Donald J. Trump/gi, 'Bryan Adams');
            text = text.replace(/Hillary Clinton|Hillary|Clinton/gi, 'Blondie');
            text = text.replace(/election/gi, 'cocaine');
            text = text.replace(/voter/gi, 'crackhead');
            text = text.replace(/voters/gi, 'crackheads');
            text = text.replace(/President-elect/gi, 'Rock artist');
            text = text.replace(/President/gi, 'Rock artist');
            text = text.replace(/Republican/gi,'Canadian');
            text = text.replace(/Democrat/gi,'American');
            text = text.replace(/voting/gi, 'snorting coke');
            text = text.replace(/potus/gi, 'POP');
            text = text.replace(/supporter/gi,'fan')
            node.nodeValue = text;
        }
    }
}
