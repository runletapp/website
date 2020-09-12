---
slug: creating-backup-system
title: Creating a backup system with Runlet
author: Gustavo Sampaio
author_title: Core Maintainer
author_url: https://github.com/GustavoKatel
author_image_url: https://avatars0.githubusercontent.com/u/1891977?s=400&u=e33fb29ed6517d25974098a828720bd860b5ce5c&v=4
tags: [Runlet, Tutorial, Raspberry Pi]
---

In this post I will go through a quick overview of how to manage and run jobs from the command line using Runlet CLI. If you haven’t installed Runlet yet, I recommend you go to the [releases page](https://github.com/runletapp/runlet/releases/) and check out our latest release that best fits your platform (Windows, Mac or Linux). Once installed you’ll need to sign in to link the newly installed daemon to your account.

<!--truncate-->

```shell
runlet @signin
```

The QR code is useful if you are on a device with no browser. You can then use your mobile phone to authorize the daemon without having to type boring URLs. Once signed in you will be able to add or remove jobs.

### Creating a scheduled job

The first job that we’ll create for our backup system will be responsible to compact and upload a bunch of important files to our backup server. We can create a job from the command line with the following line:

```shell
runlet @config
```

If you’re using Linux you must run as root

```shell
sudo runlet @config
```

This will open your editor defined in `$EDITOR` (Defaults to `nano`) with the correct configuration file. After closing the file will be merged with the current configuration and synced with the other connected daemons in your account.

Let’s define our job as follows:

```shell
backup:
  script: |
    src=/myproject
    hash=$(echo -n $src | md5sum | cut -c-32)
    timestamp=$(date +"%m-%d-%Y-%H-%M")
    dest="/tmp/$hash-$timestamp.tar.gz"
    tar -zcvf $dest $src
    cp $dest /backups
  every: 0 16 * * *
```

Now save and close the file.

This will create a job called `backup` that will run every day at 4pm. It works by compacting `/myproject` and storing the binaries at `/backups`.

:::note

Note that this job will run on every connected daemon at the specified time.

:::

If you want to manually run the job you can call like this:

```shell
runlet @run backup
```

You should expect a file created at `/backups`.

### Automating backup of arbitrary directories

But what if we want to backup arbitrary directories? We can do that using [job arguments](/docs/job/definition). By passing arguments you can change the behavior of a job before executing it. We use Golang’s strong template engine to process every job script.

Change the job to:

```shell
backup:
  script: |
    {{ if gt (len .Args) 1 }}
    src="{{ index .Args 1 }}"
    {{ else }}
    src="/myproject"
    {{ end }}

    hash=$(echo -n $src | md5sum | cut -c-32)
    timestamp=$(date +"%m-%d-%Y-%H-%M")
    dest="/tmp/$hash-$timestamp.tar.gz"
    tar -zcvf $dest $src
    cp $dest /backups
  every: 0 16 * * *
```

As we can see on line 3 we check if there are any arguments passed during the call. If we have, we use it as `src`, otherwise we defaults to `/myproject`. We can then call from the command line like this:

```shell
runlet @run backup /myproject/node_modules
```

We will then backup only the selected directory.
