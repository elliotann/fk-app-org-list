import { config, start, componentFactory } from 'fk-meta-engine'
import * as mkComponents from 'fk-component'
import myConfig  from './config'

import fk_app_org_list from './apps/mk-app-person-list/index.js'

const apps = {
		
	[fk_app_org_list.name]: fk_app_org_list,
}

apps.config = (options) => {
	Object.keys(options).forEach(key => {
		const reg = new RegExp(`^${key == '*' ? '.*' : key}$`)
		Object.keys(apps).forEach(appName => {
			if (appName != 'config') {
				if (reg.test(appName)) {
					apps[appName].config(options[key])
				}
			}
		})
	})
}

apps.config({ '*': { apps } })

config(myConfig({ apps }))

Object.keys(mkComponents).forEach(key=>{
	componentFactory.registerComponent(key, mkComponents[key])
})
	
start()