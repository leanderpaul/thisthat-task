/**
 * Importing npm packages
 */
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

/**
 * Importing user defined packages
 */

/**
 * Defining types
 */
import { AppModule } from './app.module';

/**
 * Declaring the constants
 */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
      transform: true,
    }),
  );

  const configService = app.get(ConfigService);
  const isDev = configService.get('NODE_ENV', 'development') === 'development';
  if (isDev) {
    const config = new DocumentBuilder().setTitle('Marvel API').build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
  }

  const port = configService.get('PORT', 8080);
  const host = configService.get('HOST', '0.0.0.0');
  await app.listen(port, host);
}

bootstrap();
