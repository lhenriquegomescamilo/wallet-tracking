package org.springframework.fu.sample.coroutines.stockmarket

import org.springframework.data.r2dbc.core.*

class StockeMarketRepository(
    private val client: DatabaseClient
) {
    suspend fun create(stockMarketModel: StockMarketModel) = client.insert()
        .into<StockMarketModel>()
        .table("StockMarket")
        .using(stockMarketModel)
        .await()

    fun findAll() = client.select()
        .from("StockMarket")
        .asType<StockMarketModel>()
        .fetch().flow()

    suspend fun init() {
        createTableStockMarket()
    }

    private suspend fun createTableStockMarket() {
        client.execute("""
                    CREATE TABLE IF NOT EXISTS StockMarket (
                        id serial PRIMARY KEY, 
                        codigoAcao varchar, 
                        quantidade integer, 
                        preco decimal, 
                        dataCompra date
                    );
            """.trimIndent()).await()
    }

}
