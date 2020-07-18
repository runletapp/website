---
id: settings
title: 'Settings'
sidebar_label: 'Settings'
---

:::note

In the configuration file is also possible to define unique settings.

:::

### Default Entrypoint

To define a default entrypoint to all jobs, use the `entrypoint` key.

```shell
settings:
    entrypoint: [ "node" ]

myjob: |
  console.log("Hello world")
```

The `entrypoint` key will ensure that all jobs will use by default that value. Users can override it by redefining the entrypoint inside the job block.

```shell
settings:
    entrypoint: [ "node" ]

myjob:
    script: |
        print("Hello world")
    entrypoint: [ "python" ]
```

### Daemon Management

Users can control the state of daemons in the settings as well. Suppose we have a daemon named `koalatime` linked to our account. We can then control whether that daemon is enabled or not with:

```shell
settings:
    daemons:
        koalatime:
            enabled: false

myjob: ls -lah
```

The last code block will disable the daemon `koalatime` and blocks it from receiving jobs. You can see the status of daemons in the GUI.
