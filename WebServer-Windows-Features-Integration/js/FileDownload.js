(function() {


    if (typeof Windows !== 'undefined' &&
        typeof Windows.UI !== 'undefined' &&
        typeof Windows.ApplicationModel !== 'undefined') {

      

    function WinAppSaveFileBGDownloader() {
        //This condition is only true when running inside an app
        //The else condition is effective when running inside browsers
        
        //This function uses Background Downloader class to download file. This useful when downloading the file over 50 MB.  
        
        //Downloads continue even after the app is suspended/closed.
        

        if (typeof Windows !== 'undefined' &&
           typeof Windows.UI !== 'undefined' &&
           typeof Windows.ApplicationModel !== 'undefined') {

            var fileSavePicker = new Windows.Storage.Pickers.FileSavePicker();
            
            //example : you can replace words EXTENSION and ext with the word PNG  
            
            fileSavePicker.fileTypeChoices.insert("EXTENSION file", [".ext"]); //insert appropriate file format through code. 
            fileSavePicker.defaultFileExtension = ".ext";//extension of the file being saved.
            fileSavePicker.suggestedFileName = "file.ext"; //name of the file to be downloaded.
            fileSavePicker.settingsIdentifier = "fileSavePicker1";
            var fileUri = new Windows.Foundation.Uri("<URL of the file being downloaded>");


            fileSavePicker.pickSaveFileAsync().then(function (fileToSave) {
                var downloader = new Windows.Networking.BackgroundTransfer.BackgroundDownloader();
                var download = downloader.createDownload(
                    fileUri,
                    fileToSave);

                download.startAsync().then(function (download) {
                    //any post processesing 
                    
                    console.log("Done");


                });

            });
        }



        else {
            //use the normal download functionality already implemented for browsers.
            // someting like <a href="<URL>" /> 
        }

    }
  
}

})();
