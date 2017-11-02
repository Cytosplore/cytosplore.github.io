---
layout: post
title:  "Installation"
date:   2017-01-02
category: prerun
permalink: /documentation/installation
---
We provide an easy to use installer including all dependencies for Windows. You can download the installer from the [main site][main].
Clicking the download button will save the installer to your disk. Doubleclick the icon to start the installation. It looks like this in your download folder:

![Cytosplore Installer Icon][installer_icon]{:width="90px"}<span class="caption">Figure 1: The Cytosplore Installer Icon after downloading.</span>

The installer will ask for administrator rights on the computer. This is due to the fact that we include the [Microsoft Visual C++ Redistributable Packages][vcredist]{:target="_blank_"}. Cytosplore itself does not need or makes use of these rights. To continue the installation click *Yes*. You will be prompted to enter the administrator password.

![Cytosplore Installer Admin Rights Dialog][installer_admin]{:width="340px"}<span class="caption">Figure 2: The dialog asking for administrator rights on Windows 10. Click *__Yes__*, to continue the installation.</span>

The installer will show the license agreement, that your have to accept. Most importantly it states that the software can be used free of charge in an academic setting and if it is used in the scope of a scientific article the original Cytosplore article needs to be cited:
T. Hollt, N. Pezzotti, V. van Unen, F. Koning, E. Eisemann, B. Lelieveldt, and A. Vilanova. **Cytosplore: Interactive Immune Cell Phenotyping for Large Single-Cell Datasets**. *Computer Graphics Forum*, 35(3): pp. 171-180, 2016.

Click *__I accept the agreement__* and then *__Next >__*.

![Cytosplore Installer License Dialog][installer_license]{:width="376px"}<span class="caption">Figure 3: The dialog asking to accept the Cytosplore license agreement on Windows 10. Click *__I accept the agreement__* and then *__Next >__*, to continue the installation.</span>

Next you can define the location where Cytosplore should be installed or simply click *__Next >__*.

![Cytosplore Installer Location Dialog][installer_location]{:width="376px"}<span class="caption">Figure 4: The dialog to define the target folder to install Cytosplore. Click *__Next >__*, to continue the installation or change the folder as desired.</span>

In the next dialog you can define the name of or decide not to create a t Cytosplore start menu folder. Click *__Next >__* to continue without changes.

![Cytosplore Installer Start Menu Dialog][installer_startmenu]{:width="376px"}<span class="caption">Figure 5: The dialog to define the start menu folder. Click *__Next >__*, to continue the installation or change the folder name.</span>

Now you will be asked if you want to create a desktop shortcut. If yes, just click *__Next >__* to continue.

![Cytosplore Installer Desktop Shortcut Dialog][installer_desktopsc]{:width="376px"}<span class="caption">Figure 6: The dialog to create a desktop shortcut. Click *__Next >__*, to continue the installation with the default setting.</span>

The last dialog befory putting the files in the appropriate locations shows a summary of the previous settings. Click *__Install__* to prepare the Cytsoplore installation.

![Cytosplore Installer Summary Dialog][installer_summary]{:width="376px"}<span class="caption">Figure 7: The summary dialog. Click *__Install__*, to carry out the installation.</span>

After a succesful installation the following dialog will show. You can decide whether to launch Cytosplore now, and click *__Finish__* to complete the process.

![Cytosplore Installer Finished Dialog][installer_finished]{:width="376px"}<span class="caption">Figure 8: The final dialog. Click *__Finish__*, to finalize the installation and start Cytosplore.</span>

Continue at [First Run][first_run].

[main]: https://www.cytosplore.org/#get
[vcredist]: https://www.microsoft.com/en-gb/download/details.aspx?id=40784
[first_run]: {{ site.baseurl }}/documentation/firstrun

[installer_icon]: {{ site.baseurl }}/assets/documentation/install_icon.png "Cytosplore Installer Icon"
[installer_admin]: {{ site.baseurl }}/assets/documentation/installer_admin.png "Cytosplore Installer Admin Rights Dialog"
[installer_license]: {{ site.baseurl }}/assets/documentation/installer_license.png "Cytosplore Installer License Dialog"
[installer_location]: {{ site.baseurl }}/assets/documentation/installer_location.png "Cytosplore Installer Location Dialog"
[installer_startmenu]: {{ site.baseurl }}/assets/documentation/installer_startmenu.png "Cytosplore Installer Startmenu Dialog"
[installer_desktopsc]: {{ site.baseurl }}/assets/documentation/installer_desktopsc.png "Cytosplore Installer Desktop Shortcut Dialog"
[installer_summary]: {{ site.baseurl }}/assets/documentation/installer_summary.png "Cytosplore Installer Summary Dialog"
[installer_finished]: {{ site.baseurl }}/assets/documentation/installer_finished.png "Cytosplore Finished Installation Dialog"
