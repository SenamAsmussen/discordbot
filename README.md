# Discord Bot Project
## Overview

## Quick start
Install dependencies
```bash
cd src/ && npm install
```
Start the bot with PM2
```bash
cd src/ && pm2 start index.js --name discordbot --watch
```

## My setup
### Hardware
| Component               | Description                                                                                     |
|-------------------------|-------------------------------------------------------------------------------------------------|
| **Raspberry Pi 5 (8 GB)** | The dedicated server hosting the bot.                                                        |

### Software
| Tool/Library       | Purpose                                                                                     |
|--------------------|---------------------------------------------------------------------------------------------|
| **Raspberry Pi OS Lite** | A headless, Debian-based Linux distribution optimized for the Raspberry Pi.           |
| **Node.js**        | JavaScript runtime for executing the bot’s backend logic.                                  |
| **Discord.js**     | Library for interacting with the Discord API.                                              |
| **Tailscale**      | VPN service for secure, private network communication with the Raspberry Pi server.        |
| **PM2**            | Process manager for Node.js applications, ensuring the bot runs continuously and reliably. |

---
