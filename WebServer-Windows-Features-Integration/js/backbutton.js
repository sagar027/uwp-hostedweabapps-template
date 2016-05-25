(function() {


    if (typeof Windows !== 'undefined' &&
        typeof Windows.UI !== 'undefined' &&
        typeof Windows.ApplicationModel !== 'undefined') {

        Windows.UI.Core.SystemNavigationManager.getForCurrentView().appViewBackButtonVisibility = Windows.UI.Core.AppViewBackButtonVisibility.visible;
        Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested", onBackRequested);


function onBackRequested(eventArgs) {

            
            window.history.back();
            eventArgs.handled = true;
        }
    }

    })();

