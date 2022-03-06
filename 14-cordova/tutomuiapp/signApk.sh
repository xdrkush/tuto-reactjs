#! /bin/bash

# Info:
# 
# use: ./signApk app
#

# Variables
name=$1

# Create your key for signed .apk
keytool -genkey -v -keystore $name.jks -alias $name -keyalg RSA -keysize 2048 -validity 20000

# Create signature for .apk
jarsigner -verbose -sigalg SHA256withRSA -digestalg SHA-256 -keystore $name.jks ./$name-release-unsigned.apk $name

# Create signed .apk
zipalign -v 4 ./$name-release-unsigned.apk $name-release.apk
