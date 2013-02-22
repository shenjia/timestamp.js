timestamp.js
============

As a coder, you dealing with UNIX timestamp everyday. 

Sometime you need the current timestamp, and you have to run a short program like this:

	<?php echo time(); ?>

Sometime you want to figure out the exact time hide after the unreadable numbers ```1361525534```, and you have to run a short program like this:

	<?php echo date( 'Y-m-d G:i:s', 1361525534 ); ?>

With **Timestamp.js**, you can just open a terminal and try this below:

	$ ts
	1361525534
	
	$ ts 1361525866
	2013-2-22 17:37:46

PS: I believe you have a shortcut key to open it, don't you?

------------------------------------------------------------

Install
-------------------

1. Install the magical [NodeJs](http://nodejs.org).
2. Download ```timestamp.js``` to your computer.
3. Include ```loader.sh``` in your ```.bashrc```, **DON'T** forget to edit ```TIMESTAMP_PATH```.

		TIMESTAMPJS_PATH=/Users/zhangshenjia/timestamp.js/timestamp.js;
	
