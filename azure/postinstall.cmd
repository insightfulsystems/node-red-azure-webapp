(if not exist \home mkdir \home)
cd \home

(if exist \home\viseo-bot-framework goto :endofscript)
curl -L https://github.com/NGRP/node-red-viseo-bot/archive/master.zip --output framework.zip
unzip framework.zip
rm framework.zip
mv node-red-viseo-bot-master viseo-bot-framework
cd \home\viseo-bot-framework
npm install

:endofscript
echo "Script complete"