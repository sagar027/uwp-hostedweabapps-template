//Use the Windows.Web.Http.HttpClient to download smmaller files and files are needed to downloaded when the app is running in foreground.

(function() {


    if (typeof Windows !== 'undefined' &&
        typeof Windows.UI !== 'undefined' &&
        typeof Windows.ApplicationModel !== 'undefined') {


  function WinAppSaveFileWinHTTP() {
        

        
        var uri = new Windows.Foundation.Uri("<URL of the file being downloaded>");
       
        var fileSavePicker = new Windows.Storage.Pickers.FileSavePicker();
        fileSavePicker.fileTypeChoices.insert("EXT file", [".ext"]); //insert appropriate file format through code. 
        fileSavePicker.defaultFileExtension = ".ext";//extension of the file being saved.
        fileSavePicker.suggestedFileName = "file.ext"; //name of the file to be downloaded. Needs to be replced programmatically.
        fileSavePicker.settingsIdentifier = "fileSavePicker1";
        


        fileSavePicker.pickSaveFileAsync().then(function (fileToSave) {
               
                console.log(fileToSave);
                var httpClient = new Windows.Web.Http.HttpClient();
                
                httpClient.getAsync(uri).then(function (remoteFile) {
               
                    remoteFile.content.readAsInputStreamAsync().then(function (stream) {
                       
                        fileToSave.openAsync(Windows.Storage.FileAccessMode.readWrite).then(function (outputStream) {
                           
                            Windows.Storage.Streams.RandomAccessStream.copyAndCloseAsync(stream, outputStream).then(function (progress, progress2) {
                               
                               // monitor file download progress.
                                console.log(progress);
                                var temp = progress2;
                            });
                        });


                    });
                });

            });

    }
}

})();
