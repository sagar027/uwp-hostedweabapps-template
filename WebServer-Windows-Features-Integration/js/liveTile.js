 function enableLiveTile()
 {
     if (typeof Windows !== 'undefined' &&
        typeof Windows.UI !== 'undefined' &&
        typeof Windows.ApplicationModel !== 'undefined') {

        {
            var notification = Windows.UI.Notifications;
            var tileUpdater = notification.TileUpdateManager.createTileUpdaterForApplication();
            var recurrence = notification.PeriodicUpdateRecurrence.halfHour;
            var url = new Windows.Foundation.Uri("<URL to receieve the XML for tile>");
            tileUpdater.startPeriodicUpdate(url, recurrence);

        }
        }        
 }
 
// For live tile templates please refer to https://blogs.msdn.microsoft.com/tiles_and_toasts/2015/06/30/adaptive-tile-templates-schema-and-documentation/
// For a sample web service, please refer to https://blogs.msdn.microsoft.com/wsdevsol/2014/04/30/creating-a-website-for-polling-live-tiles/ 
 
 
  
 
