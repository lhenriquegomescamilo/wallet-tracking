package org.springframework.fu.sample.coroutines.stockmarket

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import org.springframework.data.annotation.Id
import java.util.*

@JsonIgnoreProperties(ignoreUnknown = true)
data class StockMarket(
    var id: Long? = null,
    val codigo: String? = null,
    val quantidade: Long? = null,
    val preco: Long? = null,
    val compra: Date? = null
)


data class HistoryStockarket(
    @Id val codigoAcao: String,
    val dataCotacao: Date,
    val valorAbertura: Long,
    val valorMaxima: Long,
    val valorMinima: Long,
    val valorFechamento: Long

)
