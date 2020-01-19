package org.springframework.fu.sample.coroutines.stockmarket

import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow
import org.springframework.http.MediaType
import org.springframework.web.reactive.function.server.*
import org.springframework.web.reactive.function.server.ServerResponse.badRequest
import org.springframework.web.reactive.function.server.ServerResponse.ok


class StocketMarketHandler(
    private val repository: StockMarketRepository
) {

    suspend fun create(request: ServerRequest): ServerResponse {

        return try {
            val stockMarketModel = request.awaitBody<StockMarket>()
            ok().bodyValueAndAwait(repository.create(stockMarketModel))
        } catch (e: Exception) {
            println(e)
            badRequest().bodyAndAwait(fake())
        }

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
