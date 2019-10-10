/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const globalPrefix = 'api';
	app.setGlobalPrefix(globalPrefix);
	const port = process.env.port || 3334;
	await app.listen(port, () => {
		// tslint:disable-next-line: no-console
		console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
	});
}

bootstrap();
