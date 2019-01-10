(if not exist \home mkdir \home)
cd \home

(if not exist \home\site mkdir \home\site)
cd \home\site

(if exist \home\site\viseo-bot-framework goto :endofscript)
curl -L https://github.com/rcarmo/node-red-viseo-bot/archive/master.zip --output framework.zip
unzip framework.zip
rm framework.zip
mv node-red-viseo-bot-master viseo-bot-framework
cd \home\site\viseo-bot-framework
npm install

:endofscript
echo "Script complete"
