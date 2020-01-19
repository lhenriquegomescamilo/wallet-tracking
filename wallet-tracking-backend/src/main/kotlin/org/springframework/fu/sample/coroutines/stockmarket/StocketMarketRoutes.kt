package org.springframework.fu.sample.coroutines.stockmarket

import org.springframework.http.MediaType
import org.springframework.web.reactive.function.server.coRouter

fun stockeMarketRoutes(stockerMarketHandler: StocketMarketHandler) = coRouter {
    (accept(MediaType.APPLICATION_JSON) and "api").nest {
        POST("/stocketMarket", stockerMarketHandler::create)
        GET("/stockerMarket", stockerMarketHandler::findAll)
    }

}
