package org.springframework.fu.sample.coroutines

import org.springframework.boot.WebApplicationType
import org.springframework.data.r2dbc.repository.config.EnableR2dbcRepositories
import org.springframework.fu.kofu.application

val app = application(WebApplicationType.REACTIVE) {
	enable(dataConfig)
	enable(webConfig)
}

fun main() {
	app.run()
}
