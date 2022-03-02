#! /bin/sh

echo "Copy file electron build on ./public !!"

# On copy les fichier que l'on va avoir besoin pour build avec electron
cp ./src-electron/electron.js ./public
cp ./src-electron/preload.js ./public

echo "Copy file success !!"
