import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions').then(response => console.log(response.data));
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Freela</td>
            <td>R$10.000</td>
            <td>Entrada</td>
            <td>20/10/2021</td>
          </tr>
          <tr>
            <td>Freela</td>
            <td>R$10.000</td>
            <td>Entrada</td>
            <td>20/10/2021</td>
          </tr>
          <tr>
            <td>Freela</td>
            <td>R$10.000</td>
            <td>Entrada</td>
            <td>20/10/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}