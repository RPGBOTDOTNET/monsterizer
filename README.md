# The Monsterizer

The Monsterizer is the world's most robust monster builder for DnD 5e. Based on the official 5e rules
and the System Reference Document (SRD), the Monsterizer provides tools to build monsters and NPCs
and calculates their CR based on the official rules text.

## License and Copyright

Copyright RPGBOT 2025.

The Monsterizer is not licensed for open source use. If you are interested in using the Monsterizer,
in whole or in part, please email RPGBOT@RPGBOT.net.

## Attributions

This work includes material from the System Reference Document 5.2.1 (“SRD 5.2.1”) by Wizards of the
Coast LLC, available at https://www.dndbeyond.com/srd. The SRD 5.2.1 is licensed under the Creative
Commons Attribution 4.0 International License, available at https://creativecommons.org/licenses/by/4.0/
legalcode.

## Running the Monsterizer

You can run the Monsterizer locally. You will need `nvm` installed.

```bash
nvm install 25
nvm use
npm ci
npm start
```

## FAQ

### What should I do if I found a bug?

[Create an issue on Github](https://github.com/RPGBOTDOTNET/monsterizer/issues). If you're not the
sort of person who uses github, [email me](RPGBOT@RPGBOT.net).

### Why doesn't the Monsterizer include all of the published monsters?

Only a subset of the official DnD monster selection is published in the SRD, and only those monsters
are legal for reuse without permission from Wizards of the Coast. While you're free to recreate those
monsters for personal use, I can't include them in the Monsterizer because it would violate copyright.
