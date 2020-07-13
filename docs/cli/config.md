---
id: config
title: '@config'
sidebar_label: '@config'
---

To add or remove jobs you can run the following command:

```shell
runlet @config
```

:::important

You will need to run the command as root on linux if Runlet is running as a service.

```shell
sudo runlet @config
```

:::

:::note

The command above will use the environment variable `$EDITOR` to edit the current configuration file. `nano` will be used as the default editor if `$EDITOR` is not defined.

:::

It's highly recommended that you use the `@config` command. This command will make sure that the changes will be propagated to other daemons connected to your account.

Once you've finished save and exit.
