<?php
/**
* @package BrindisiPlugin
*/
/*
Plugin Name: Brindisi Plugin
Plugin URI: josephbrindisi.wordpress.com
Description: This is the plugin I made using entirely JavaScript.
Version: 1.0.0
Author: Joseph Brindisi
Author URI: josephbrindisi.wordpress.com
License: GPLv2 or later
Text Domain: brindisi-plugin
*/

/*
Copyright (C) 2019 Joseph Brindisi

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along
    with this program; if not, write to the Free Software Foundation, Inc.,
    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
*/

if ( ! defined( 'ABPATH' ) ) {
	die;
}

add_action( 'wp_enqueue_scripts', 'my_custom_script_load' );
function my_custom_script_load(){
	wp_enqueue_script( 'my-custom-script', get_stylesheet_directory_uri() . '/myscripts', array( 'jquery' ) );