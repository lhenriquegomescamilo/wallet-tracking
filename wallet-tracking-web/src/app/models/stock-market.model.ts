export interface StockMarketModel {
  id: number;
  codigoAcao: string;
  quantidade: number;
  preco: number;
  dataCompra: Date;
  historicoAcoes
    ?: HistoricoAcaoModel[]
}

export interface HistoricoAcaoModel {
  codigoAcao: string;
  dataCotacao: Date;
  valorAbertura: string;
  valorMaxima: string;
  valorMinima: string;
  valorFechamento: string;
}
