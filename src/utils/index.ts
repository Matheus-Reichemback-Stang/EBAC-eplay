// Por estar definindo o paremetro como 0, ele fica com esse valor padrão
// caso a função tenha um parametro undefined
export const priceFormat = (amount = 0) => {
  // Intl - Serve para Internacionalização de dados
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}
