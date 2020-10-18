---
slug: introducing-runlet
title: Introducing Runlet
author: Vandré Leal Cândido
author_title: Core Maintainer
author_url: https://github.com/vandreleal
author_image_url: https://avatars0.githubusercontent.com/u/9258892?s=460&u=7e0b51687eb19ea943975cb29428627e255e0fb9&v=4
tags: [Runlet, Announcement]
---

Runlet is a cloud-based job manager that offers device synchronization and reliable message delivery in a network of connected devices even after connectivity issues. It also provides an easy to use interface to manage jobs, trigger remote executions, and view logs from remotely executed jobs. You can also quickly get a new device started since all configuration files and logs are stored in the cloud and synced after sign in.

<!--truncate-->

The desktop distribution includes both the daemon and a full-featured GUI, whereas the ARM distribution includes only the daemon, and is recommended for resource-constrained devices like the [Raspberry Pi](https://www.raspberrypi.org).

### Devices

You can view all connected and enabled devices including some basic information such as the percentage of CPU and memory used by the device, virtual memory available, and uptime since session establishment.

### Jobs

Creating a new job is quick and easy. Fill out the form and save to get the new job listed and available on all your connected devices. You can assign the job to specific devices by using the option `Run at`.

- `Local` : run the job in the device in which you are connected (default).
- `All` : run the job on all available devices.
- `Any` : run the job once on any available device.
- `Custom` : run the job on all devices included in the comma-separated list. eg. `fingerwind`, `kickerlove`

You also have the option to view, create and edit jobs directly in the job editor. We use the [YAML](https://yaml.org) data-serialization language to configure jobs in Runlet. The list of all supported attributes can be found on the [docs](/docs/job/definition) page. The resulting log and status of each execution is shown in real-time on any connected device. _Wait, is that secure?_ Yes, all logs are encrypted by the host machine before submission and decrypted once received by another connected device.

The activity panel at the right side includes a brief summary of recently executed jobs and can be hidden under settings.

:::note

We only collect basic user information during registration (such as your name, email address, and social media avatar), and we do not share your personal data with any affiliates or service providers.

:::
