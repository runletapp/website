---
id: arguments
title: 'Arguments'
sidebar_label: 'Arguments'
---

Users can pass arguments to jobs. The job script is rendered in a template engine before executing it. Arguments can then be accessed as follows:

```shell
myjob: |
  echo "Sleeping for {{ index .Args 1 }}s"
  sleep {{ index .Args 1 }}
  echo "Done"
```

Calling the job with:

```shell
$ runlet @run myjob 5
```

Will produce the following output:

```shell
Sleeping for 5s
Done
```

`.Args` is a string array containing the job name in index 0, and all extra arguments passed during the command line call. As of today, there's no way to pass job arguments via the user interface yet.
