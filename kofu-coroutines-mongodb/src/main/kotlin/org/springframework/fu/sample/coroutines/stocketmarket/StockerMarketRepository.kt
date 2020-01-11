package org.springframework.fu.sample.coroutines.stocketmarket

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import org.springframework.core.io.ClassPathResource
import org.springframework.data.mongodb.core.*

class StockerMarketRepository(
    private val mongo: ReactiveFluentMongoOperations,
    private val objectMapper: ObjectMapper
) {
    suspend fun create(stockerMarketModel: StockerMarketModel) = mongo
        .insert<StockerMarketModel>()
        .oneAndAwait(stockerMarketModel)

    fun findAll() = mongo.query<StockerMarketModel>().flow()

    suspend fun init() {
        val eventResource = ClassPathResource("data/stockerMarket.json")
        val stokeMarkets: List<StockerMarketModel> = objectMapper.readValue(eventResource.inputStream)
        stokeMarkets.forEach { create(it) }
    }
}
