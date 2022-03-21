/* eslint-disable max-params-no-constructor/max-params-no-constructor */
import express from 'express';

const app = express();

console.log('Iniciando execução');

app.get('/', (request, response) => {
	return response.json({ message: 'Helasdadlo World' });
});

app.listen(3211);
