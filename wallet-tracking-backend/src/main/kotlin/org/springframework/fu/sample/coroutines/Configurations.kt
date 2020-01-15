package org.springframework.fu.sample.coroutines

import kotlinx.coroutines.runBlocking
import org.springframework.boot.context.event.ApplicationReadyEvent
import org.springframework.fu.kofu.configuration
import org.springframework.fu.kofu.r2dbc.PostgresqlR2dbcDsl
import org.springframework.fu.kofu.webflux.webFlux
import org.springframework.fu.sample.coroutines.stockmarket.StockeMarketRepository
import org.springframework.fu.sample.coroutines.stockmarket.StocketMarketHandler
import org.springframework.fu.sample.coroutines.stockmarket.stockeMarketRoutes

val dataConfig = configuration {
	beans {
		bean<StockeMarketRepository>()
	}
	listener<ApplicationReadyEvent> {
		runBlocking {
			ref<StockeMarketRepository>().init()
		}
	}
	PostgresqlR2dbcDsl {
		password = "postgres"
		username = "postgres"
		host = "localhost"
		port = 5432

	}
}

val webConfig = configuration {

beans {
		bean<StocketMarketHandler>()
		bean(::stockeMarketRoutes)
	}
	webFlux {
		port = if (profiles.contains("test")) 8181 else 8080
		codecs {
			string()
			jackson()
		}
	}
}
