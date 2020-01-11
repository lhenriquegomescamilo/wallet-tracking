package org.springframework.fu.sample.coroutines.stocketmarket

import org.springframework.web.reactive.function.server.coRouter

fun stockeMarketRoutes(stockerMarketHandler: StocketMarketHandler) = coRouter {
    POST("/api/stocketMarket", stockerMarketHandler::create)
    GET("/api/stockerMarket", stockerMarketHandler::findAll)
}
