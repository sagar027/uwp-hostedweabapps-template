(function () {


    if (typeof Windows !== 'undefined' &&
        typeof Windows.UI !== 'undefined' &&
        typeof Windows.ApplicationModel !== 'undefined') {

// this function attaches the app 'activated' event handler and should be referenced just before DOMContentLoaded
 
        Windows.UI.WebUI.WebUIApplication.addEventListener("activated", activatedEvent);

    }

    function activatedEvent (args) {
       
        console.log("Entered navigation");
        var activation = Windows.ApplicationModel.Activation;
        // Check to see if the app was activated by a voice command
        if (args.kind === activation.ActivationKind.voiceCommand) {
       
            // Get the speech recognition
            var speechRecognitionResult = args.result;
            var textSpoken = speechRecognitionResult.text;
            // Determine the command type {search} defined in vcd
            console.log("Results called");
            switch (textSpoken) {
                
                //Some case examples
                
                //case "Show game stats":
                //case "Status Reports":
                
                case "A":
                    setTimeout(function () {
                        window.location.href = '<your deeplink page>';
                    }, 0);
                    break;

                case "A":
                    setTimeout(function () {
                        window.location.href = '<your deeplink page>';
                    }, 0);
                    break;
                    
                case "A":
                    setTimeout(function () {
                        window.location.href = '<your deeplink page>';
                    }, 0);
                    break;

            }

        }
    }

})();