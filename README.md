# ParkingSQUAT

##a React Native parking space reservation system


###Tech. Stack:

* React Native (ES6 syntax)
* Redux -- via NavigationExperimental, [the recommended new nav. model](https://medium.com/@dabit3/react-native-what-navigator-should-i-use-2ff59ec2b2d#.b78a9j7j0)
* react-native-map, the recommended alternative to MapView (requires Cocoa Podfile setup)
* Fetch (remote comms)
* deployed to fabric.io (?)
* San Francisco parking data from [(RideCell's public API)](http://ridecellparking.herokuapp.com/api/v1/parkinglocations)


###Important!

Demo is currently limited to running in the XCode mobile simulator -- or loaded onto a physical IOS device, with features only accessible in the San Francisco map area (parking data currently only available for San Francisco).

A production version of the application would automatically zoom to the user's detected GPS coordinates on the map. To simulate this, you can set 'current location', accessible through XCode's mobile simulator menu (Debug/Location/Custom Location).  The following coordinates will place the user in the default region we use on start up: latitude: 37.801242, longitude: -122.4012767


##Feature Set:

&nbsp;&nbsp;&#10004;&nbsp;
zoom to user's current location (S.F. only) and show nearby parking
<br>&nbsp;&nbsp;&#10004;&nbsp;
continually update available parking when the user scrolls the map view

* display fly-out for parking spot map pins
* navigate to details view when clicking a parking spot map pin
* be able to reserve a parking spot by date and time
* review & edit reservations from a view accessible through a tab bar option
* get notified when reservation ends, with an option to extend.
 

##Building & Running:

(at command line): navigate to the implementation directory and type react-native run-ios

(in Finder): navigate to the 'ios' sub-directory in your source code files, and run the file showing the .xcodeproj extension.


##Implementation Notes:

File structure set up for IOS & Android acc. to recc'd best practices (genericized content in files index.ios.js and index.android.js at project root reference a shared 'main.js' file in the /src directory  ), but using elements that are IOS-specific, due to time constraints.
