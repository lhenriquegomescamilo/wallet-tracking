export interface StockMarketModel {
  id: number;
  codigo: string;
  quantidade: number;
  preco: number;
  compra: Date;
  historico
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
