package org.springframework.fu.sample.coroutines.stockmarket

import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow
import org.springframework.http.MediaType
import org.springframework.web.reactive.function.server.*
import org.springframework.web.reactive.function.server.ServerResponse.ok


class StocketMarketHandler(
    private val repository: StockMarketRepository
) {

    suspend fun create(request: ServerRequest): ServerResponse {
        val stockMarketModel = request.awaitBody<StockMarket>()
        return ok().bodyValueAndAwait(repository.create(stockMarketModel))
    }

    private fun fake(): Flow<String> = flow {
        emit("Deu ruim")
    }

    @Suppress("UNUSED_PARAMETER")
    suspend fun findAll(request: ServerRequest): ServerResponse {
        return ok()
            .contentType(MediaType.APPLICATION_JSON)
            .bodyAndAwait(repository.findAll())
    }
}
