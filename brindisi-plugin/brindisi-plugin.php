<?php
/*
Plugin Name: Brindisi Plugin
Description: This is the plugin I made using entirely JavaScript.
Version: 1.0.0
Author: Joseph Brindisi
Author URI: google.com
License: GPLv2 or later
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

add_action( 'wp_enqueue_scripts', 'my_custom_script_load' );
function my_custom_script_load() {
	wp_enqueue_script( 'my-custom-script', plugins_url() . '/brindisi-plugin/myscripts.js', array( 'jquery' ) );
	wp_enqueue_style( 'style-script', plugins_url() . '/brindisi-plugin/style.css', array() );
}