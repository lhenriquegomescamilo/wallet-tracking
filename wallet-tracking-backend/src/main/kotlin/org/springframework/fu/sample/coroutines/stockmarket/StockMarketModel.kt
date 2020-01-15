package org.springframework.fu.sample.coroutines.stockmarket

import org.springframework.data.annotation.Id
import java.util.*

data class StockMarketModel(
    val id: Long? = null,
    val codigoAcao: String?,
    val quantidade: Long?,
    val preco: Long?,
    val dataCompra: Date?,
    val historicoAcoes: List<HistoricoAcao> = emptyList()
)


data class HistoricoAcao(
    @Id val codigoAcao: String,
    val dataCotacao: Date,
    val valorAbertura: Long,
    val valorMaxima: Long,
    val valorMinima: Long,
    val valorFechamento: Long

)
