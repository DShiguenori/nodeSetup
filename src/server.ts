/* eslint-disable max-params-no-constructor/max-params-no-constructor */
import express from 'express';

const app = express();

app.get('/', (request, response) => {
	return response.json({ message: 'Helasdadlo World' });
});

app.listen(3211);
