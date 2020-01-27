package org.springframework.fu.sample.coroutines

import kotlinx.coroutines.runBlocking
import org.springframework.boot.context.event.ApplicationReadyEvent
import org.springframework.fu.kofu.configuration
import org.springframework.fu.kofu.r2dbc.r2dbcPostgresql
import org.springframework.fu.kofu.webflux.cors
import org.springframework.fu.kofu.webflux.webFlux
import org.springframework.fu.sample.coroutines.stockmarket.StockMarketRepository
import org.springframework.fu.sample.coroutines.stockmarket.StocketMarketHandler
import org.springframework.fu.sample.coroutines.stockmarket.stockeMarketRoutes

val dataConfig = configuration {
	beans {
		bean<StockMarketRepository>()
	}
	listener<ApplicationReadyEvent> {
		runBlocking {
			ref<StockMarketRepository>().init()
		}
	}

	r2dbcPostgresql() {
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
		cors {
			"/api/stockMarket/**" {
				allowedMethods = listOf("GET", "PUT", "OPTIONS", "POST", "PATCH")
				allowedOrigins = listOf("*")
			}
		}
	}
}
