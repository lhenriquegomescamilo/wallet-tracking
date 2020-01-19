package org.springframework.fu.sample.coroutines.stockmarket

import org.springframework.data.r2dbc.core.*

class StockMarketRepository(
    private val client: DatabaseClient
) {
    suspend fun create(stockMarket: StockMarket) {
        return client.insert()
            .into<StockMarket>()
            .table("StockMarket")
            .using(stockMarket)
            .await()
    }

    fun findAll() = client.select()
        .from("StockMarket")
        .asType<StockMarket>()
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
