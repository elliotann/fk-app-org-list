import config from './config'
import * as data from './data'

export default {
	name: "fk-app-person-list",
	version: "1.0.6",
	description: "fk-app-person-list",
	meta: data.getMeta(),
	components: [],
	config: config,
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, "fk-app-person-list")
	}
}