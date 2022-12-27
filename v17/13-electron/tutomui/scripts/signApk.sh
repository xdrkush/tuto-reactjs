#! /bin/bash

#
# Info
# 
# use: ./sign-apk name
#

# Variables
name=$1

# Create your key for signed .apk
# keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 20000
# keytool -genkey -v -keystore nameapp.keystore -alias nameapp -keyalg RSA -keysize 2048 -validity 20000
# keytool -genkey -v -keystore meteo.keystore -alias meteo -keyalg RSA -keysize 2048 -validity 20000
keytool -genkey -v -keystore $name.keystore -alias $name -keyalg RSA -keysize 2048 -validity 20000

# Create signature for .apk
# jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore <path-to-unsigned-apk-file> alias_name
# jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore nameapp.keystore ./nameapp-unsigned.apk nameapp
# jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore meteo.keystore ./meteo-unsigned.apk meteo
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore $name.keystore ./$name-release-unsigned.pak $name

# Create signed .apk
# zipalign -v 4 <path-to-same-apk-file> HelloWorld.apk
# zipalign -v 4 ./app-release-unsigned.apk NameApp.apk
# zipalign -v 4 ./app-release-unsigned.apk meteo.apk
zipalign -v 4 ./$name-release-unsigned.apk $name-release.apk

