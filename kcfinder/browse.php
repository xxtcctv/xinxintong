<?php
/** This file is part of KCFinder project
 *
 *      @desc Browser calling script
 *   @package KCFinder
 *   @version 2.51
 *    @author Pavel Tzonkov <pavelc@users.sourceforge.net>
 * @copyright 2010, 2011 KCFinder Project
 *   @license http://www.opensource.org/licenses/gpl-2.0.php GPLv2
 *   @license http://www.opensource.org/licenses/lgpl-2.1.php LGPLv2
 *      @link http://kcfinder.sunhater.com
 */

if (file_exists('cus/config.php'))
    include_once 'cus/config.php';

require "core/autoload.php";

if (defined('KCFINDER_STORE_AT') && KCFINDER_STORE_AT === 'local') {
    $browser = new browser();
} else {
    $browser = new browser_alioss();
}
$browser->action();
