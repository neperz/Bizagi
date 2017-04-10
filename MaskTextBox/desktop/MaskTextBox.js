bizagi.rendering.basicUserField.extend("bizagi.rendering.MaskTextBox",{}, {

    /*************************************************************/
    /* methods to be overriden by the implementations            */
    /*************************************************************/
    getEditableControl: function () {
        return this.getGenericControl();
    },
    getReadonlyControl: function () {
        return this.getGenericControl();
    },
    getGenericControl: function () {

        var self = this;
        var control = self.getControl();
        var properties = self.properties;
        var extendedData = self.extendedData;
        var mascara = properties.Mask || "000.000.000-00";
        var editableInput =  self.properties.editable === undefined ? true : Boolean(self.properties.editable);
        
        var bindedXpathValue =  properties.Label || properties.displayName;
		var value1 = self.properties.value;
	//	if (navigator.onLine){
           /*
            var httpProtocol = (window.location.protocol.indexOf("https") >= 0)? "https:" : "http:";
			var scriptGoogle = document.createElement("script");
			scriptGoogle.type = "text/javascript";
			scriptGoogle.src = httpProtocol + "//cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.10/jquery.mask.min.js";
			document.body.appendChild(scriptGoogle);
		*/
		
		self.mydiv = $("<div width='100%'></div>");
		self.mydiv.addClass("ui-bizagi-render");
		self.mydiv.addClass("ui-corner-all");
		self.mydiv.addClass("ui-widget-content");
		self.mydiv.addClass("ui-bizagi-render-display-normal");
			
		self.mydiv.append("<span class='ui-bizagi-label ui-bizagi-render-align-left'><label style='font-weight: bold;'>" + bindedXpathValue + "</label></span>");
		
	
		
		var addressinput = $("<input id='campo'  type='text' size='60'/>");
        if(!editableInput)
		{
            addressinput = $("<input id='campo'  type='text' size='60' readOnly='readOnly'/>");
		}
		addressinput.addClass("maskstyle");
		addressinput.addClass("ui-bizagi-render-text");

		addressinput.appendTo(self.mydiv);

		$('.maskstyle', self.mydiv).mask(mascara);
	
			
		addressinput.val(value1);
		self.mydiv.addressval = addressinput;
		
        self.mydiv.myinitial = addressinput;						
        self.mydiv.myresult = addressinput;
	//	}
        return self.mydiv;
    },
    
    setEditableValue: function(value) {
		var self = this;
		self.mydiv.myinitial.val(value);
	},

	getEditableValue: function() {
		var self = this;
		return self.mydiv.myresult.val();

	}
	

});