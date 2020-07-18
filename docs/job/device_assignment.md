---
id: device_assignment
title: 'Device Assignment'
sidebar_label: 'Device Assignment'
---

By default, the job is executed in the device in which you are connected. To define a different device, use the keys `where` and `whereCustom`.

### Where: all

```shell
myjob:
    script: ls -lah
    where: all
```

It runs `myjob` in all connected devices. If there are three devices connected during the execution time, then three instances of `myjob` will be created and executed in each device.

### Where: any

```shell
myjob:
    script: ls -lah
    where: any
```

It runs `myjob` on the next available connected device. Note that this will create only one instance of the job.

### Where: custom

```shell
myjob:
    script: ls -lah
    where: custom
    whereCustom:
        - earth
        - mars
```

It runs `myjob` on every device included on the `whereCustom` list. Note that this will create one job for each specified device.
