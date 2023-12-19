#!/bin/bash
source /etc/environment

###installing composer###
cp $gitDir/composer.* /var/www/
rm -R /var/www/*
cd /var/www/
sudo -u $linuxUser -g www-data composer install