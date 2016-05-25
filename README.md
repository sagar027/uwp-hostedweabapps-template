# Windows 10 UWP Hosted Web Apps Template

This project template simplifies development of Windows 10 UWP apps through hosted web apps and Project Westminster tool. 

#Background

To enable web and HTML5/CSS developers to port their application on Windows and leverage the platform's features like Live Tiles, Cortana, Notifications, etc. , a Visual Studio based tool called 'Project Westminster'was introduced. Through this approach, you can create an Universal Windows Platform App (UWP) for Windows 10 devices by using your existing responsive website and publish to the Windows Store.

You can find details of Project Westminster tool at https://blogs.windows.com/buildingapps/2015/07/06/project-westminster-in-a-nutshell/ 

This repository is starter kit for Web developers who are new to Windows Universal Apps Platform and want to levarage their existing website as primary mode of interface with the user, with a goal of integration with native Windows features like Cortana, Live Tiles, Contacts, Calendar, etc. - which is not be possible while running as a website in a browser.




#HostedWebAppGetStarted-vs-template

This is the Visual Studio template which is an integration point for the responsive website and the Windows App. The app will serve the web pages from the website/web server however, in Visual Studio, you will need to define some properties related to app like :

1. Capabilities (can the app access internet, can it access camera, microphone and many more)
2. Visual Assets like Tiles, Badge and Logos
3. Application Content URI Rules - to indicate the level of access to Windows [Runtime] APIs. These are URIs which are allowed to run windows/web code in the app.
4. App packaging info - Mostly required for push notifications and Store association.
5. Inside the project, hosting HTML5/CSS?JS files for offline experiences - when internet connectivity is unavailable. Windowswill fallback to these files [automatically] when the app is launched without internet. The files should be named as msap-error.js/html/css
    
    
#WebServer-Windows-Features-Integration 

This is part of code which integrates with your website and needs to be hosted along with it. This code will only execute when your website is running as a Windows App and not otherwise - hence, no impact on website experience on the browser. 

1. SampleWebPage.html
This page is a sample representing an existing page in your website and how code in this file indicates how the web code can be placed to deliver optimal experiences to the user and integration points for Windows features. Example, the page contains a <meta> tag for Cortana integration. This indicates that the website, when running as an app, downloads and registers your app to be activated through Cortana Voice Commands. The <meta> element should contain the URI of the VCD file - which is a Voice Command Deinition XML file to configure voice integration and phrases for registration of the app with Cortana. More information can be found at https://msdn.microsoft.com/en-us/windows/uwp/input-and-devices/launch-a-foreground-app-with-voice-commands-in-cortana 

2. js/backbutton.js 
When the website is packaged as an app and deployed to a phone or touch-enabled tablet, user might be inclined to hit the hardware back button (on phone) to go back to the previous page. This file contains the code for avoiding the app from exiting/closing when the back button is tapped. The code can be modified to make a contextual back stack navigation. The file needs to be referenced in every page just before DOMContentLoaded is triggered. For simplicity, I place it just before the closure of the <body> element.

3. js/liveTile.js
This JS file contains code to activate Live Tile for your app. This can be referred from any file within the website where setting up the Live Tile infrastructure makes most sense. Example, after user login to get contextual Live Tile data. I have also included a blog URL in the file which describes quickly setting up a backend for sending these live tile notifications to the device.

4. js/VoiceCommandHandler.js
This file contains registration code for handler method, which will be invoked when the app is actiavted through voice commands/Cortana. The code file needs to be placed on the start-up or landing page of the website just before DOMContentLoaded is triggered. 

5. js/FileDownload.js and js/FileDownload2.js
In my experience, some features, like file downloads, may not work in the same way as it works in the browser. Example, when you click an hyperlink or <a> anchor element which references an URI of the file, the browser handles the download process and saves the file. However, when the website runs in context of the app, you might not receive a file download prompt and seems like the app did not respond to the download request. In order to give an intuitive file download experience to user, these files [FileDowload/FileDownload2] leverages Windows IO and Downloader APIs to download the file and prompt the user to save the file at desired location. 

The two code files implement two approaches, namely, Foreground and background downloads.
Foreground Download -  FileDownload2.js - Uses Windows.Web.Http.HttpClient class for downloading files. This approach is generally used when files to be downloaded, are smaller than 50 MB
Background Download - Uses the Windows.Networking.BackgroundTransfer.BackgroundDownloader class to download the file. The operaton can be persisted even after the app closes/suspended. Generally used when files are greater than 50 MB size.

Will add more code as we encounter more scenarios.
    
    
