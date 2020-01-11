package org.springframework.fu.sample.coroutines

import de.flapdoodle.embed.mongo.distribution.Version
import kotlinx.coroutines.runBlocking
import org.springframework.boot.context.event.ApplicationReadyEvent
import org.springframework.fu.kofu.configuration
import org.springframework.fu.kofu.mongo.reactiveMongodb
import org.springframework.fu.kofu.webflux.mustache
import org.springframework.fu.kofu.webflux.webFlux
import org.springframework.fu.sample.coroutines.stocketmarket.StockerMarketModel
import org.springframework.fu.sample.coroutines.stocketmarket.StockerMarketRepository
import org.springframework.fu.sample.coroutines.stocketmarket.StocketMarketHandler
import org.springframework.fu.sample.coroutines.stocketmarket.stockeMarketRoutes

val dataConfig = configuration {
	beans {
		bean<UserRepository>()
		bean<StockerMarketRepository>()
	}
	listener<ApplicationReadyEvent> {
		runBlocking {
			ref<UserRepository>().init()
			ref<StockerMarketRepository>().init()
		}
	}
	reactiveMongodb {
		embedded {
			version = Version.Main.PRODUCTION
		}
	}
}

val webConfig = configuration {
	beans {
		bean<UserHandler>()
		bean(::routes)
	}
	beans {
		bean<StocketMarketHandler>()
		bean(::stockeMarketRoutes)
	}
	webFlux {
		port = if (profiles.contains("test")) 8181 else 8080
		mustache()
		codecs {
			string()
			jackson()
		}
	}
}
