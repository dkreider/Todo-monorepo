import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [
		ServeStaticModule.forRoot({
			rootPath: resolve(__dirname, 'assets'),
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}