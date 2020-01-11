package org.springframework.fu.sample.coroutines.stocketmarket

import org.springframework.http.MediaType
import org.springframework.web.reactive.function.server.*
import org.springframework.web.reactive.function.server.ServerResponse.ok


class StocketMarketHandler(
    private val repository: StockerMarketRepository
) {

    suspend fun create(request: ServerRequest): ServerResponse  {
        return ok().bodyValueAndAwait(repository.create(request.awaitBody()))
    }

    @Suppress("UNUSED_PARAMETER")
    suspend fun findAll(request: ServerRequest) : ServerResponse {
        return ok()
            .contentType(MediaType.APPLICATION_JSON)
            .bodyAndAwait(repository.findAll())
    }
}
