# NorthStar Panel

A responsive, browser-based prototype for managing a proxy server fleet. It takes visual cues from [NX Panel](https://github.com/OneLegChicken/panel) and its [dashboard guide](https://docs.nx-panel.org/use/dashboard), with original NorthStar branding and illustrative sample data.

## Run locally

The app is static and has no build step or JavaScript package dependencies. From the project directory, run:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Install on an Ubuntu VPS

Run this one command as a user with `sudo` access:

```bash
sudo apt-get update && sudo apt-get install -y curl ca-certificates && curl -fsSL https://raw.githubusercontent.com/OneLegChicken/NorthStar/main/install.sh | sudo bash
```

The installer installs `git` and `nginx`, checks out the latest `main` branch to `/opt/northstar-panel`, and serves it on TCP port `8080`. Open `http://YOUR_VPS_IP:8080`. Allow inbound TCP `8080` in the VPS provider firewall if needed; the installer also adds a UFW rule when UFW is active.

To use another port, run the installer with `NORTHSTAR_PORT` set in the environment passed to `sudo`, for example:

```bash
curl -fsSL https://raw.githubusercontent.com/OneLegChicken/NorthStar/main/install.sh | sudo NORTHSTAR_PORT=8090 bash
```

## Included

- Overview with fleet metrics, server health, traffic charts, and high-usage users
- Sample views for nodes, users, plans, inbounds, tunnels, resellers, templates, routing, traffic, events, backups, and settings
- Responsive navigation, light and dark themes, `Ctrl+K` / `⌘K` search, filters, and CSV export
- Dialogs for adding sample records and downloading a sample JSON backup

All records are illustrative. Changes to records last only for the current page session; the theme preference is saved locally. This repository is a front-end prototype: it does not include a server API, authentication, database, or proxy-node integration, so it is not a production control plane.
