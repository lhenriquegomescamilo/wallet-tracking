package org.springframework.fu.sample.coroutines.stocketmarket

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class StockerMarketModel (
    @Id val code: String
)
