---
slug: monitoring-processes-on-raspberry-pi
title: Monitoring processes on Raspberry PI remotely with Runlet and htop
author: Vandré Leal Cândido
author_title: Core Maintainer
author_url: https://github.com/vandreleal
author_image_url: https://avatars0.githubusercontent.com/u/9258892?s=460&u=7e0b51687eb19ea943975cb29428627e255e0fb9&v=4
tags: [Runlet, Tutorial, Raspberry Pi]
---

[htop](https://hisham.hm/htop/) is an interactive text-mode process viewer for Unix systems that is highly configurable and gives the option to view information such as CPU load, memory consumption, hostname, tasks, load averages, and uptime. It can be used alongside Runlet to monitor Raspberry PI processes remotely.

<!--truncate-->

:::note

This example assumes that Runlet is installed and ready to use on all devices.

:::

The first step is to get the Raspberry PI name on the network, which is **_raspberrypi_ginger_**. This name is generated automatically by the API when you log in to your account, and the device joins the network.

![Step 01](/img/blog/2020-04-01-monitoring-processes-on-raspberry-pi/01.png)

We can now create a job called **pi-htop** that runs the command _htop_ only on **_raspberrypi_ginger_**. The command export _TERM=xterm-256color_ ensures that the terminal emulator is set before htop, but it’s not mandatory.

![Step 02](/img/blog/2020-04-01-monitoring-processes-on-raspberry-pi/02.png)

The job **pi-htop** shows up in the list of available jobs when saved, and can be triggered with ease by any online device using either a desktop manager or the CLI command `runlet @run pi-htop`.

![Step 03](/img/blog/2020-04-01-monitoring-processes-on-raspberry-pi/03.png)

The initial output of _htop_ shows a list of system processes including PID, user, percentage of CPU and memory used, time in execution, and command.

![Step 04](/img/blog/2020-04-01-monitoring-processes-on-raspberry-pi/04.png)

The next image shows all the setup options displayed after pressing key F2. These options can customize meters shown at the top, as well as change display options, colors, and active columns. Navigation using arrow keys is done with no hassle as all keyboard strokes are captured. The key F10 can be pressed at any time to indicate that the setup is done and return to the previous screen.

![Step 05](/img/blog/2020-04-01-monitoring-processes-on-raspberry-pi/05.png)

We can also filter processes by keyword pressing F4 on the main screen, which is particularly useful to find and kill undesired processes.

![Step 06](/img/blog/2020-04-01-monitoring-processes-on-raspberry-pi/06.png)
