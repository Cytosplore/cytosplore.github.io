---
layout: post
title:  "Marker Selection"
date:   2017-03-01
category: startingup
permalink: /documentation/markerselection
---
Every [Analysis][analysis] in Cytosplore allows the selection of the markers to be used for computation. The _Marker Selection Widget_ is embedded inside the _Settings View_ corresponding to the analysis and in the dialog that allows the asinh5 transform after opening one or multiple files.

![Marker Selection Widget][marker_selection]{:width="500px"}<span class="caption">Figure 1: The _Marker Selection Widget_ using a double column layout in the _Settings View_.</span>

Besides manual selection of the markers to use for the analysis by clicking the checkmarks next to the marker names, the widget provides some convenicence function through the buttons on the bottom.
* The _Inverse Markers_ button will inverse the selection, so that markers that were selected before will be deselected and vice versa previously deselected markers will be selected after pressing the button.
* Clicking the _Set Default_ button will save the current marker selection and use it for all analyses and views that are added to the application from this point in time (analyses and views that are already open will not be changed).
It will also save the selection to a file named _CSPLR_DefaultMarkers.txt_ next to the loaded fcs files which will automatically be loaded when files from this folder are opened in another session, making the default selection persistent over multiple runs of the software. The file is a simple textfile which save the on/off settings as 1 and 0.
The CSPLR_DefaultMarkers.txt file for the selection in Figure 1 would simply look like this:
~~~
0 0 0 0 1 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0
~~~
* Text files with the same format can also be loaded via the _Load Selection_ button. If the file contains fewer values than available markers, those markers will be set to off.

[marker_selection]: {{ site.baseurl }}/assets/documentation/marker_selection.png "Screenshot of the marker selection widget."

[analysis]: {{ site.baseurl }}/documentation/analyses
