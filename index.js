import config from './config'
import * as data from './data'

export default {
	name: "fk-app-org-list",
	version: "1.0.7",
	description: "fk-app-org-list",
	meta: data.getMeta(),
	components: [],
	config: config,
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, "fk-app-org-list")
	}
}