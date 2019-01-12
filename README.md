A template for deploying the VISEO Bot Builder in Azure App Service

<a href="https://portal.azure.com/?feature.customportal=false#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Finsightfulsystems%2Fviseo-botbuilder-webapp%2Fmaster%2Fwebapp.json?v0.0" target="_blank"><img src="http://azuredeploy.net/deploybutton.png"/></a>

## Roadmap/To Do

* [ ] Use Azure integrated AD authentication
* [ ] Allow setting the `admin` password hash via an App Service setting/environment variable without having to edit `wwwroot/conf/config.js` manually post-deployment
* [ ] Linux App Service/Kubernetes/Docker support (being [worked on separately](https://github.com/insightfulsystems/viseo-botbuilder-docker) for now)
* [x] Add bootstrap flows (simple echo bot and reload flow)
* [x] Add `node-red-contrib-exit´ to terminate `node` and force a quick reload inside App Service whenever `flows.json` is updated
* [x] Add standard Cogntive Services and Azure IoT nodes
* [x] Clean up and update VISEO's initial template
