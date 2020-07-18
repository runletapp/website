---
id: definition
title: 'Definition'
sidebar_label: 'Definition'
---

We use the YAML data-serialization language to configure jobs in Runlet. The job syntax block is relatively simple, and you can define a job in two ways:

**Reduced syntax:**

```shell
myjob: ls -lah
```

**Extended syntax:**

```shell
myjob:
    script: ls -lah
```

### Multi-line job script

You can define jobs with a long multi-line string as follows:

```shell
myjob:
    script: |
        ls -lah
        echo "Job has finished"

myjob2: |
    ls -lah
    echo "Job 2 has finished"
```

### Description (optional)

You can define a description for a job as follows:

```shell
myjob:
    script: "ls -lah"
    description: "This job shows all the content of the current folder"
```

### Change current directory (optional)

```shell
myjob:
    script: ls -lah
    cwd: "/home/user/.config"
```

### Change the job entrypoint (optional)

By default, jobs are executed using `/bin/bash` on Linux and MacOS and `cmd.exe` on Windows. You can change this behavior by using the `entrypoint` key.

```shell
myjob:
    script: |
        import time
        for i in range(3600):
            print(i)
            time.sleep(1)
    entrypoint: [ "python" ]
```

It requires a list of strings denoting the used binary and a list of args. Runlet will wrap the contents of `script` in a file and pass to the `entrypoint` execute.
