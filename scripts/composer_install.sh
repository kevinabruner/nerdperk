#!/bin/bash
source /etc/environment

###installing composer###
rm -R /var/www/*
cp $gitDir/composer.* /var/www/
cd /var/www/
sudo -u $linuxUser -g www-data composer install