---
id: config
title: '@config'
sidebar_label: '@config'
---

To add or remove jobs, you can run the following command:

```shell
runlet @config
```

:::important

You will need to run the command as root on Linux if Runlet is running as a service.

```shell
sudo runlet @config
```

:::

:::note

The command above will use the environment variable `$EDITOR` to edit the current configuration file. `nano` will be used as the default editor if `$EDITOR` is not defined.

:::

We recommend using the `@config` command. This command will make sure that the changes are propagated to other daemons connected to your account.
