var elements = document.getElementsByTagName('*');
//var replacedText = 0;
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var donaldText = text.replace(/Donald Trump|Trump/gi, 'Bryan Adams');
            var hillaryText = text.replace(/Hillary|Clinton|Hillary Clinton/gi, 'Blondie');
            if (donaldText != text) {
                element.replaceChild(document.createTextNode(donaldText), node);
            }
            else if (hillaryText != text){
                element.replaceChild(document.createTextNode(hillaryText), node);
            }
        }
    }
}