import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({

	models: {
		transaction: Model,
	},

	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					id: 1,
					title: 'Freela',
					type: 'deposit',
					amount: 4000,
					category: 'Freela',
					createdAt: new Date('2021-11-01 09:30:00'),
				},
				{
					id: 2,
					title: 'Aluguel',
					type: 'withdraw',
					amount: 1000,
					category: 'Casa',
					createdAt: new Date('2021-11-02 11:30:00'),
				}
			],
		})
	},

	routes() {
		this.namespace = 'api';

		this.get('/transactions', () => {
			return this.schema.all('transaction');
		})

		this.post('/transactions', (schema, request) => {
			const data = JSON.parse(request.requestBody);

			return schema.create('transaction', data);
		})
	}
})

ReactDOM.render(

	<App />
	,
	document.getElementById('root')
);

