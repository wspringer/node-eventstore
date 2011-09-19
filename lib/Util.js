var root = this;

var Util;

if (typeof exports !== 'undefined') {
    Util = exports;
} else {
    Util = root.EventStore.Util = {};
}

Util.VERSION = '0.0.1';

Util.checkInterface = function(theObject, theInterface) {
    for (var member in theInterface) {
        if ( (typeof theObject[member] != typeof theInterface[member]) ) {
            console.log('object failed to implement interface member ' + member);
            return false;
        }
    }
    //if we get here, it passed the test, so return true
    return true;
};

Util.getObjectType = function(obj) {
    if (obj.constructor && obj.constructor.toString) {
        obType = obj.constructor.toString().match(/function\s+(\w+)/);
		
        if (obType && obType.length == 2) {
		    return obType[1];
        }
    }
		
	return 'undefined';
};