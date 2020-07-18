---
id: scheduling
title: 'Scheduling'
sidebar_label: 'Scheduling'
---

Users can schedule jobs with the `every` key when defining jobs. There are two valid syntaxes: cron-like format and human-readable.

### Scheduling a job with the cron-like format

```shell
myjob:
    script: backup.sh
    every: "0 1 * * *"
```

It runs `myjob` every day at 1 AM.

### Scheduling a job with the human-readable format

```shell
myjob:
    script: backup.sh
    every: 6h
```

It runs `myjob` every 6 hours. The first execution will happen in the following 6 hours. Possible other modifiers are `s` (seconds), `m` (minutes) and `d` (days).
