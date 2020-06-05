<?php

$databases = array();
$config_directories = array();
$settings['hash_salt'] = 'sOVs2pm1DKmjpLbSR3n5qKNn9M5_WJNWh5YD7UMFDL1ikUPg4yoTLqwrjyCyFkAxiIu00Amn5w';
$settings['update_free_access'] = FALSE;
$settings['container_yamls'][] = __DIR__ . '/services.yml';
$settings['file_scan_ignore_directories'] = [
  'node_modules',
  'bower_components',
];
if (file_exists(__DIR__ . '/settings.local.php')) {
  include __DIR__ . '/settings.local.php';
}
$databases['default']['default'] = array (
  'database' => 'drupal',
  'username' => 'root',
  'password' => 'root',
  'prefix' => '',
  'host' => 'mysql',
  'port' => '3306',
  'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
  'driver' => 'mysql',
);
$settings['install_profile'] = 'standard';
$config_directories['sync'] = 'sites/default/files/config_NnH3lsHTeN6pUYFi6eJjTkrMLJDszDeZ8U-uosldZ2FTJvW0puktMM_qa78-2RURwfy5hEvGuw/sync';

$_SERVER['HTTPS'] = 'on';
$settings['ssl'] = TRUE;

$settings['trusted_host_patterns'] = [
#  '^ima\.shanghai\.nyu\.edu$',
];

$settings['file_temp_path'] = __DIR__ . '/tmp';
$settings['file_private_path'] = __DIR__ . '/private';
