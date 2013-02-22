#!/bin/bash
TIMESTAMP_PATH=/Users/zhangshenjia/timestamp.js/timestamp.js;
function ts()
{
	echo `node $TIMESTAMP_PATH $1`;
}
