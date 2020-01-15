package org.springframework.fu.sample.coroutines.stocketmarket

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.util.*

@Document
data class StockerMarketModel(
    @Id val code: String,
    val quantidade: Long,
    val preco: Long,
//    val moeda: Moeda,
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
