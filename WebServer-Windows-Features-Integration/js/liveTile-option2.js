function createLiveTile() /* can contain parameters */
{



            //We will create the tile locally in this code 
	    //Creates a Large tile template
	
            var notifications = Windows.UI.Notifications,
            tile = notifications.TileTemplateType.tileSquare310x310ImageAndText01,
            tileContent = notifications.TileUpdateManager.getTemplateContent(tile),
            tileText = tileContent.getElementsByTagName('text'),
            tileImage = tileContent.getElementsByTagName('image');

            //get the text for live tile here [possibly] from a remote service through ajax or XHR


            tileText[0].appendChild(tileContent.createTextNode('Demo Message')); //set the text here
            tileImage[0].setAttribute('src','<URL of image>'); 

            var tileNotification = new notifications.TileNotification(tileContent);
            var currentTime = new Date();
            tileNotification.expirationTime = new Date(currentTime.getTime() + 600 * 1000); //10 minutes
            notifications.TileUpdateManager.createTileUpdaterForApplication().update(tileNotification);

}